import Header from './component/joonsung/Header';
import Lysswiper from './component/yeonsoolee/Lysswiper';
import Lyslinebanner from './component/yeonsoolee/Lyslinebanner';
import Brand from './component/dongmin/Brand';
import Item from './component/gyuwan/Item'
import Instagram from './component/gyuwan/Instagram';
import AppSectionCsr from "./component/sanho/AppSectionCsr";
import Lysfooter from './component/yeonsoolee/Lysfooter';
import Form from './component/dongmin/Form';
import datainfo from "./data/data.json"
function App() {
  return (
    <>
      <Header dataAd={datainfo.top_banner[0]} dataGnb={datainfo.gnb}></Header>
      <Lysswiper />
      <Lyslinebanner />
      <Brand></Brand>
      <Item />
      <Instagram />
      <AppSectionCsr />
      <Form />
      <Lysfooter />
    </>
  );
}

export default App;