import React from 'react';
import ReactDOM from 'react-dom/client'
import conf from './conf/conf';


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <h1>{conf.appwriteUrl}</h1>
)