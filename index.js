

const visit = require('unist-util-visit');
const fetch = require('node-fetch');

const getBloquequote = async (url) => {
  const apiUrl = `https://publish.twitter.com/oembed?url=${url}`;

  const response = await fetch(apiUrl);
  return await response.json();
};

module.exports = async ({ markdownAST }, pluginOptions) => {
  const debug = pluginOptions.debug ? console.log : () => {}

  const nodes = [];
  visit(markdownAST, 'text', (node) => {
    const { value } = node;
    const tweetLink = value.match(/https:\/\/twitter\.com\/([A-Za-z0-9-_]*\/status\/[A-Za-z0-9-_?=]*)/gi);
    if (tweetLink) {
      debug(`\nfound tweetLink`, node)
      nodes.push([node, tweetLink]);
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
    } catch (er) {
      debug(`\nfailed to get blockquote for ${tweetLink}\n`, er)
    }
  }

  return markdownAST;
};
