# gatsby-remark-twitter

Embed Tweet cards in your markdown!

### [View a live demo here](https://jmolivas.weknowinc.com/)

## Install

1. Install plugin to your site:

```bash
yarn add gatsby-remark-twitter
```

2. Add `gatsby-remark-twitter` to your `gatsby-transformer-remark` plugins in `gatsby-config.js`:

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: ["gatsby-remark-twitter"]
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

> __NOTE:__ Make sure to copy the link instead of embed code or Spotify URI.

<p align="center"><img src="https://i.imgur.com/evEv2LJ.jpg" alt="screenshot for share > copy artist link" /></p>

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