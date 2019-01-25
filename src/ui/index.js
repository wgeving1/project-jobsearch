import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { AppContainer, LeftSide, RightSide } from './styles.js'
import Header from '../components/header'
import Footer from '../components/footer'

// Secure Pages
import Landing from './secure/landing'
import Profile from './secure/profile'
import SignOut from './sign-out'

// 404 Page
import BadRequest from './unsecure/bad-request/'

// Unsecure Pages
import ContactUs from './unsecure/contact-us/'
import FAQs from './unsecure/faqs/'
import Home from './unsecure/home/'
import Login from './unsecure/login/'

