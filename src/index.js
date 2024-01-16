import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import datainfo from "./data/data.json"
import Header from './component/joonsung/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <Header dataAd={datainfo.top_banner[0]} dataGnb={datainfo.gnb}></Header>
</>
);