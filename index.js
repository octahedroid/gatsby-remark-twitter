

const visit = require('unist-util-visit');
const fetch = require('node-fetch');

const getBloquequote = async (url) => {
  const apiUrl = `https://publish.twitter.com/oembed?url=${url}`;

  const response = await fetch(apiUrl);
  return await response.json();
};

const twitterRegexp = /https:\/\/twitter\.com\/([A-Za-z0-9-_]*\/status\/[A-Za-z0-9-_?=]*)/gi;

// only do the embedding for a single twitter url on its own paragraph.
const isTwitterLink = node => {
  return node.children.length === 1 &&
    node.children[0].type === 'link' &&
    node.children[0].url.match(twitterRegexp) &&
    node.children[0].children.length === 1 &&
    node.children[0].children[0].type === 'text' &&
    node.children[0].children[0].value === node.children[0].url;
}

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
      const embedData = await getBloquequote(tweetLink);
      node.type = 'html';
      node.value = embedData.html;
      node.children = null;
    } catch (er) {
      debug(`\nfailed to get blockquote for ${tweetLink}\n`, er)
    }
  }

  return markdownAST;
};
