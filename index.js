

const visit = require('unist-util-visit');
const fetch = require('node-fetch');

const getBloquequote = async (url) => {
  try {
    const apiUrl = `https://publish.twitter.com/oembed?url=${url}`;

    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

module.exports = async ({ markdownAST }) => {
  visit(markdownAST, 'text', async (node) => {
    const { value } = node;
    const tweetLink = value.match(/https:\/\/twitter\.com\/([A-Za-z0-9-_]*\/status\/[A-Za-z0-9-_?=]*)/gi);
    if (tweetLink) {
      console.log(`\n embeding tweet: ${tweetLink} \n`);
      const embedData = await getBloquequote(tweetLink);
      node.type = 'html';
      node.value = embedData.html;
    }
  });

  return markdownAST;
};
