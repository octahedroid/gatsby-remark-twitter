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

If you want to get debug output, turn on the `debug` option in the
plugin options.

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "@weknow/gatsby-remark-twitter",
          options: {
            debug: true
          }
        }
      ]
    }
  }
];
```

These other options are also available, to control how the widget is
rendered:

- **hideThread** Default `true`.  Set to `false` to also show the
  tweet that a tweet is in reply to.  (This is enabled by default
  because typically you'd just embed both tweets, and it gets really
  noisy when embedding entire twitter threads in a post.)
- **hideMedia** Default `false`.  Set to `true` to hide media that is
  included in a tweet.  For example, if a tweet has a photo or a video
  embedded, this means that the user has to click through to view it.
- **align** Set to `'left'`, `'right'` or `'center'` to make the
  embedded tweet float left, right, or be center-aligned.  (The
  default is left-aligned, but not floated.)
- **theme** Set to `'dark'` to use the dark theme.
- **linkColor** Set to a valid RGB value to specify link colors.
- **widgetType** Set to `'video'` to return a Twitter Video embed for
  the given Tweet.


## Usage

```markdown
# Blog post title

This is an example of embedding a single tweet card.
Add any markdown as you normally do, and then insert a valid
Tweet link anywhere to automatically transform it into an
embed card.

https://twitter.com/gatsbyjs/status/1055939617646465024

You can embed several tweets

https://twitter.com/wesbos/status/1068597847237541888

https://twitter.com/dan_abramov/status/1068884262273933312

```

> __NOTE:__ Make sure to copy the Tweet link instead of the embed code.

## How this looks like
<p align="center"><img src="https://i.imgur.com/evEv2LJ.jpg" alt="screenshot for share > copy tweet link" /></p>

[View a live demo here](https://jmolivas.weknowinc.com/badcamp-2018-wrapup)

## License

MIT
