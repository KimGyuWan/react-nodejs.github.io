import React from 'react';
import ReactDOM from 'react-dom/client';
import datainfo from './data/data.json'
import Brand from './component/dongmin/Brand';
import Form from './component/dongmin/Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Brand data={datainfo}></Brand>
    <Form />
  </>

);


