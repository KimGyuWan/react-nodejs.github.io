import Header from './component/joonsung/Header';
import Lysswiper from './component/yeonsoolee/Lysswiper';
import Lyslinebanner from './component/yeonsoolee/Lyslinebanner';
import Brand from './component/dongmin/Brand';
import Item from './component/gyuwan/Item';
import Instagram from './component/gyuwan/Instagram';
import AppSectionCsr from "./component/sanho/AppSectionCsr";
import Lysfooter from './component/yeonsoolee/Lysfooter';
import Form from './component/dongmin/Form';
import datainfo from "./data/data.json";
import { Margin145 } from './component/stylecomponent/Commonui';

function App() {
  return (
    <>
      <Header dataAd={datainfo.top_banner[0]} dataGnb={datainfo.gnb}></Header>
      <Margin145>
        <Lysswiper />
        <Lyslinebanner />
        <Brand></Brand>
        <Item />
        <Instagram />
        <AppSectionCsr />
        <Form />
        <Lysfooter />
      </Margin145>
    </>
  );
}

export default App;