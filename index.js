

const visit = require('unist-util-visit');
const fetch = require('node-fetch');

const getBloquequote = async (url, opt) => {
  const apiUrl = `https://publish.twitter.com/oembed?url=${
    url
  }&hide_thread=${
    opt.hideThread !== false ? '1' : '0'
  }&align=${
    opt.align || ''
  }&hide_media=${
    opt.hideMedia ? '1' : '0'
  }&theme=${
    opt.theme || ''
  }&link_color=${
    opt.linkColor || ''
  }&widget_type=${
    opt.widgetType || ''
  }&omit_script=true&dnt=true&limit=20&chrome=nofooter`

  const response = await fetch(apiUrl);
  return await response.json();
};

const momentRegexp = /https:\/\/twitter.com\/i\/moments\/[0-9]+/i;
const tweetRegexp = /https:\/\/twitter\.com\/[A-Za-z0-9-_]*\/status\/[0-9]+/i;

// only do the embedding for a single twitter url on its own paragraph.
const isTwitterLink = node => {
  return node.children.length === 1 &&
    node.children[0].type === 'link' &&
    (tweetRegexp.test(node.children[0].url) ||
     momentRegexp.test(node.children[0].url)) &&
    node.children[0].children.length >= 1 &&
    flattenEms(node.children[0].children) === node.children[0].url;
}

// this only has to handle cases where there's a username like x_y_z, so that
// it will match the url in the link.
// It produces garbage results for stuff like `_happy *and* sad_`, because
// that could never exist in a URL anyway, so it is clearly not a match.
const flattenEms = children =>
  children.reduce((flat, c) =>
    (c.type === 'text') ? flat + c.value
    : (c.type === 'emphasis' && c.children && c.children.length === 1)
      ? flat + `_${c.children[0].value}_`
    : flat, '')

module.exports = async ({ markdownAST }, pluginOptions) => {
  const debug = pluginOptions.debug ? console.log : () => {}

  const nodes = [];
  visit(markdownAST, 'paragraph', (node) => {
    if (isTwitterLink(node)) {
      debug(`\nfound tweetLink`, node.children[0].url)
      nodes.push([node, node.children[0].url])
    }
  })

  for (let i = 0; i < nodes.length; i++) {
    const nt = nodes[i];
    const node = nt[0];
    const tweetLink = nt[1];
    debug(`\nembeding tweet: ${tweetLink}\n`);
    try {
      const embedData = await getBloquequote(tweetLink, pluginOptions);
      node.type = 'html';
      node.value = embedData.html;
      node.children = null;
    } catch (er) {
      debug(`\nfailed to get blockquote for ${tweetLink}\n`, er)
    }
  }

  return markdownAST;
};
