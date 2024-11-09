// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Todo />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import { Todo } from "./App"; // App.jsからTodoをインポート

ReactDOM.render(<Todo />, document.getElementById("root"));

