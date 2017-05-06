import React from 'react'
import {mount} from 'react-mounter'
import {MainLayout} from './layouts/MainLayout'
import App from './App'
import '../lib/startup/accounts-config.js';


FlowRouter.route('/', {
  action () {
    mount(MainLayout, {
      content: (<App />)
      }

    )
  }
})
