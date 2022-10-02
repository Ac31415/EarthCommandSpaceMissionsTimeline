import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom';
import FigmaEmbed from 'react-figma-embed';

const root = ReactDOM.createRoot(document.getElementById('root'));

class StoryBook extends Component {
  render() {
    return (
      // <iframe
      //   title="StoryBook"
      //   width="100%"
      //   height="650"
      //   webkitallowfullscreen
      //   mozallowfullscreen
      //   allowfullscreen
      //   frameborder="0"
      // >
      // <FigmaEmbed url="https://www.figma.com/proto/Q0ii0xxdpUg8zetaSif5jO/NASA?node-id=80%3A167&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A24" />
      // </iframe>
      <FigmaEmbed url="https://www.figma.com/proto/Q0ii0xxdpUg8zetaSif5jO/NASA?node-id=80%3A167&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A24"
        title="StoryBook"
        width="100%"
        height="650"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        frameborder="0" />
    );
  }
}

root.render(
  <React.StrictMode>
    <App />
    <StoryBook />
  </React.StrictMode>, document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
