import Lysswiper from './component/yeonsoolee/Lysswiper';
import Lyslinebanner from './component/yeonsoolee/Lyslinebanner';
import Item from './component/gyuwan/Item'
import Instagram from './component/gyuwan/Instagram';
import AppSectionCsr from "./component/sanho/AppSectionCsr";
import Lysfooter from './component/yeonsoolee/Lysfooter';
import datainfo from './data/data.json'
import Brand from './component/dongmin/Brand';
import Form from './component/dongmin/Form';
function App() {
  return (
    <>
      <Lysswiper />
      <Lyslinebanner />
      <Brand data={datainfo}></Brand>
      <Item />
      <Instagram />
      <AppSectionCsr />
      <Form />
      <Lysfooter />
    </>
  );
}

export default App;