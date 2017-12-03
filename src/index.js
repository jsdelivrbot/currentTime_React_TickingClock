import React from 'react';  //to communicate with the component
import ReactDOM from 'react-dom'; //to communicate with the DOM
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
// ===================================================================

// Create a new component this component should produce some HTML
// this create a class of the App but in order to render it on the DOM , you need to instantiate an insatance of the class App
// const App = () => {
//   // return <h4>Current Time:</h4>
//   return displayTime();
// }

const displayTime = ()=>{
  let today = new Date();
  today = today.toLocaleTimeString('en-US');
  document.getElementById('show').innerHTML=today;
  let t = setTimeout(displayTime,500);
}

// const txt = React.createElement('h4',null, "Current Time: ");
// 
// const txt = ()=>{
//   return <h4>Current Time: </h4>
// }

const app = React.createElement('function',null, displayTime());


// take this component's generated HTML, find a target to put it on the page (in the DOM) (target=container) , you will insert the App in the container on the DOM
ReactDOM.render(<txt />, document.querySelector('.container'));

ReactDOM.render(app, document.querySelector('.container'));
