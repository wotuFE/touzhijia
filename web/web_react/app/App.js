import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './Routes';
import antd from 'antd';



//入口文件
ReactDOM.render((
        <Routes />
     ),
     document.getElementById('app')
);
