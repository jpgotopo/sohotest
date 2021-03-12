/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');
import React, { Component } from 'react';
import Header from './components/Header.js';
import Example from './components/Example.js';
import './app';

import ReactDOM from 'react-dom';
class App extends Component{
    render(){
        return (
            <div className="App">
                <Header />
                <Example />
            
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
export default App;