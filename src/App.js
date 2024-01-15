import Item from './component/gyuwan/Item'
import Instagram from './component/gyuwan/Instagram';

import Lyslinebanner from './component/yeonsoolee/Lyslinebanner';
import Lysfooter from './component/yeonsoolee/Lysfooter';
import Lysswiper from './component/yeonsoolee/Lysswiper';

function App() {
  return (
    <>
      <Lysswiper />
      <Lyslinebanner />
      <Lysfooter />
      <Item />
      <Instagram />
    </>
  );
}

export default App;