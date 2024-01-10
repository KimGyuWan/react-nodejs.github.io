import React from 'react'

function Productimg(props) {
  return (
    <>
      <li className='col-6'>
        <div>
          <img src={props.dataList.item_listgroup_src} alt={props.dataList.item_listgroup_alt} />
        </div>
      </li>
    </>
  )
}

export default Productimg