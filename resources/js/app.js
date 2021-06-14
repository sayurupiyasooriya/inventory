/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
require('admin-lte/plugins/jquery/jquery')
require('admin-lte/plugins/bootstrap/js/bootstrap.bundle')
require('admin-lte/dist/js/adminlte')

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import Land from './components/Land';

if (document.getElementById('land')) {
    ReactDOM.render(<Land />, document.getElementById('land'));
}