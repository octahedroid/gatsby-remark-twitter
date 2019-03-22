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
        '<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Sorry, everyone. I&#39;m giving up pro bono argument services.' } ] }
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
        '<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">History of <a href="https://twitter.com/hashtag/ChaosEngineering?src=hash&amp;ref_src=twsrc%5Etfw">#ChaosEngineering</a> shared by <a href="https://twitter.com/adrianco?ref_src=twsrc%5Etfw">@adrianco</a> at <a href="https://twitter.com/hashtag/ChaosConf?src=hash&amp;ref_src=twsrc%5Etfw">#ChaosConf</a>:  <br>💥2004 - <a href="https://twitter.com/jesserobbins?ref_src=twsrc%5Etfw">@jesserobbins</a> <br>💥2012 - <a href="https://twitter.com/NetflixOSS?ref_src=twsrc%5Etfw">@NetflixOSS</a> Simian Army <br>💥2016 - <a href="https://twitter.com/GremlinInc?ref_src=twsrc%5Etfw">@GremlinInc</a> founded <br>💥2017 - Chaos Engineering book by <a href="https://twitter.com/nora_js?ref_src=twsrc%5Etfw">@nora_js</a> and <a href="https://twitter.com/caseyrosenthal?ref_src=twsrc%5Etfw">@caseyrosenthal</a> / open source <a href="https://twitter.com/chaostoolkit?ref_src=twsrc%5Etfw">@chaostoolkit</a> project <br>💥2018 - <a href="https://twitter.com/ChaosConf?ref_src=twsrc%5Etfw">@ChaosConf</a> <a href="https://t.co/wm1vc2sMe7">pic.twitter.com/wm1vc2sMe7</a></p>&mdash; Ana Medina 👩🏽‍💻 (@Ana_M_Medina) <a href="https://twitter.com/Ana_M_Medina/status/1045730232743813121?ref_src=twsrc%5Etfw">September 28, 2018</a></blockquote>\\n' } ] }
`
