const t = require('tap')
const twitter = require('../')

const bqStr = `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sorry, everyone. I&#39;m giving up pro bono argument services.`

const cleanTweet = (ast) => {
  if (ast.children[0].value.indexOf(bqStr) === 0) {
    ast.children[0].value = bqStr
  }
  return ast
}

t.test('basic conversion', async t => {
  const markdownAST = {
    type: 'root',
    children: [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "link",
            "title": null,
            "url": "https://twitter.com/izs/status/503226223527337985",
            "children": [
              {
                "type": "text",
                "value": "https://twitter.com/izs/status/503226223527337985"
              }
            ],
          }
        ]
      }
    ]
  }

  await twitter({ markdownAST }, {})
  t.matchSnapshot(cleanTweet(markdownAST), 'should convert twitter link')
})

t.test('dont convert if nested', async t => {
  const markdownAST = {
    "type": "root",
    "children": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "value": "Really, I mean it, like I said in ",
          },
          {
            "type": "link",
            "title": null,
            "url": "https://twitter.com/izs/status/503226223527337985",
            "children": [
              {
                "type": "text",
                "value": "https://twitter.com/izs/status/503226223527337985",
              }
            ],
          },
          {
            "type": "text",
            "value": ".",
          }
        ],
      }
    ],
  }

  await twitter({ markdownAST }, {})
  t.matchSnapshot(markdownAST, 'should not convert twitter inline link')
})

t.test('failed conversion', async t => {
  // also, test that debug output happens
  const logs = []
  const consoleLog = console.log
  console.log = function () { logs.push(Array.from(arguments)) }
  t.tearDown(() => console.log = consoleLog);

  // clean out line numbers and stack trace junk
  const clean = (logs) => {
    logs.forEach(log => {
      log.forEach((item, i) => {
        if (item instanceof Error) {
          log[i] = 'ERROR MESSAGE: ' + item.message
        }
      })
    })
    return logs
  }

  const markdownAST = {
    type: 'root',
    children: [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "link",
            "title": null,
            "url": "https://twitter.com/izs/status/13425",
            "children": [
              {
                "type": "text",
                "value": "https://twitter.com/izs/status/13425"
              }
            ],
          }
        ]
      }
    ]
  }

  await twitter({ markdownAST }, { debug: true })
  t.matchSnapshot(markdownAST, 'should handle failure nicely')
  t.matchSnapshot(clean(logs), 'should get expected logs')
})
