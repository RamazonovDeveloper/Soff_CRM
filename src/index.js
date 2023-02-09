import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const posts = [
//   {
//     id:1,
//     title:"Next.js is a future of the React",
//     time:"2h ago",
//     status:"Draft"
//   },
//   {
//     id:2,
//     title:"Why do you need Lint?",
//     time:"4h ago",
//     status:"Draft"
//   },
//   {
//     id:3,
//     title:"React.js vs Vue.js, what's better for your project?",
//     time:"yesterday",
//     status:"Published"
//   },
//   {
//     id:4,
//     title:"Pixel-perfect development at Zoftify. Essential steps to take.",
//     time:"1 week ago",
//     status:"Published"
//   }
// ]

// localStorage.setItem("Posts", JSON.stringify(posts))
