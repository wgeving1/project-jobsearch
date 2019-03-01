import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { selector as users } from '../../../../state/entities/users/reducers'
import App from './src/ui/index'
import { AssertionError } from 'assert';

const app = Express()
const port = 3000

app.use('/static', Express.static('static'))

app.use(handleRender)

function handleRender(req, res) {

}

function renderFullPage(html, preLoadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Tech Jobber Project</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__=${JSON.stringify(preLoadedState). replace(
            /</g, 
            '\\u003c'
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
        `
}

app.listen(port)