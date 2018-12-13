# gatsby-remark-twitter

Embed Tweet cards in Gatsby markdown.

## Install

```bash
npm install --save @weknow/gatsby-remark-twitter
```

## How to use

```js

// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: ["@weknow/gatsby-remark-twitter"]
    }
  }
];
```

3. Restart gastby.

## Usage

```markdown
## My blog post

This is an example of embedding a single tweet card.
Just type your markdown as you normally do, and then insert a valid
tweet link anywhere to automatically transform it into an embed!

https://twitter.com/gatsbyjs/status/1055939617646465024

You can also embed several tweets

https://twitter.com/wesbos/status/1070699265272496128

```

> __NOTE:__ Make sure to copy the link instead of embed code.

<p align="center"><img src="https://i.imgur.com/evEv2LJ.jpg" alt="screenshot for share > copy tweet link" /></p>

## Configuration

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        "gatsby-remark-twitter",
      ]
    }
  }
];
```

## License

MIT