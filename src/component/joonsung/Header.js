
import React from 'react';
function Header(props) {
 

  return (
   
    <div>
   
    <header id="hd" className="border-bottom fixed-top bg-white">
    <div id="topbanner" className="bgactiveColor text-center p-1">
        <a href="" className="text-white">하림펫푸드 제품 첫 구매 시 간식 100원 이벤트</a>
    </div>
    <div className="container rel d-flex justify-content-between align-items-center">
      <h1 className="mb-0 w-0">
        <a href="" className="d-block"><img src="./img/joonsung/harim.png" alt="로고사진" className="d-block"/></a>
      </h1>

      <ul id="gnb" className="d-flex mb-0">
  
      {
      props.dataGnb.map((el, idx) =>{
      return (
        <li className='p-3' key={`li${idx}`}><a href={el.gnb_href}  className={el.gnb_cls}>{el.gnb_nm}</a></li>
      )
      })
      }
      </ul>

      <div id="family" className={`position-relative w-0 `}>
        <button className="position-relative bg-transparent border-0">{familyInfo.button[number]}</button>


        <ul className={`mb-0`}>
          {
          familyInfo.subList.map((el, idx)=>{
         return   <li key={`li${idx}`}><a href={el.href} className={el.activeClass}>{el.text}</a></li>
            })
          }
         
         
        </ul>

      </div>
      
    </div>
          
  </header>
  <div id="popup" className="position-fixed bgactiveColor">
      <a href="#hd">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>

  <div  style={{height:"200vh"}}></div>
  
  <div id="slide-banner" style={{height:"200vh"}}></div>
  
  <div id="section-brand" style={{height:"200vh"}}></div>

  <div id="section-item" style={{height:"200vh"}}></div>

  <div id="section-instagram" style={{height:"200vh"}}></div>

  <div id="form" style={{height:"200vh"}}></div>

</div>
  )
}

export default Header
