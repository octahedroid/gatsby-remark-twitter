/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP basic conversion > should convert twitter link 1`] = `
{ type: 'root',
  children:
   [ { type: 'html',
       children: null,
       value:
        '<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">' } ] }
`

exports[`test/basic.js TAP dont convert if nested > should not convert twitter inline link 1`] = `
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'text', value: 'Really, I mean it, like I said in ' },
          { type: 'link',
            title: null,
            url: 'https://twitter.com/izs/status/503226223527337985',
            children:
             [ { type: 'text',
                 value: 'https://twitter.com/izs/status/503226223527337985' } ] },
          { type: 'text', value: '.' } ] } ] }
`

exports[`test/basic.js TAP failed conversion > should handle failure nicely 1`] = `
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'link',
            title: null,
            url: 'https://twitter.com/izs/status/13425',
            children:
             [ { type: 'text', value: 'https://twitter.com/izs/status/13425' } ] } ] } ] }
`

exports[`test/basic.js TAP failed conversion > should get expected logs 1`] = `
[ [ '\\nfound tweetLink', 'https://twitter.com/izs/status/13425' ],
  [ '\\nembeding tweet: https://twitter.com/izs/status/13425\\n' ],
  [ '\\nfailed to get blockquote for https://twitter.com/izs/status/13425\\n',
    'ERROR MESSAGE: invalid json response body at https://publish.twitter.com/oembed?url=https://twitter.com/izs/status/13425&hide_thread=1&align=&hide_media=0&theme=&link_color=&widget_type=&omit_script=true&dnt=true&limit=20&chrome=nofooter reason: Unexpected token < in JSON at position 0' ] ]
`

exports[`test/basic.js TAP plugin options, and a moment > an optioned up moment 1`] = `
{ type: 'root',
  children:
   [ { type: 'html',
       children: null,
       value:
        '<a class="twitter-moment" href="https://twitter.com/i/moments/944326645493612545?ref_src=twsrc%5Etfw">The True Meaning of Christmas</a>\\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\\n' } ] }
`

exports[`test/basic.js TAP twitter link with two _ chars in username > should convert twitter link 1`] = `
{ type: 'root',
  children:
   [ { type: 'html',
       children: null,
       value:
        '<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">' } ] }
`

exports[`test/basic.js TAP twitter link with other random emphasized stuff > should not convert twitter link 1`] = `
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'link',
            url:
             'https://twitter.com/Ana_M_Medina/status/1045730232743813121',
            children:
             [ { type: 'text', value: 'this makes me feel ' },
               { type: 'emphasis',
                 children:
                  [ { type: 'text', value: 'happy ' },
                    { type: 'strong', children: [ { type: 'text', value: 'and' } ] },
                    { type: 'text', value: ' sad' } ] },
               { type: 'text', value: '.' } ] } ] } ] }
`
