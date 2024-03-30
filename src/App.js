import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import components
import MyComponent from './components/MyComponent'

function HelloWorld(name, years) {
  var presentation = <div>
                        <h2>Hello, I am {name}</h2>
                        <h3>I have more {years} years as a developer</h3>
                        <h4>On this occasion I want to present a simple example of SPA in React with a component</h4>
                        <h5>There you are:</h5>
                      </div>
  return presentation;
}

function App() {
  var name ="Wilfredo José Alvarez";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, welcome to my github repository!
        </p>
        {HelloWorld(name, 14)}
        <section className ="components">
          <MyComponent />
        </section>
      </header>      
    </div>
  );
}

export default App;
