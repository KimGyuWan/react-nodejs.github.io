import React from 'react'
import { Link } from 'react-router-dom'

//data
import data from '../../data/data.json'

//scss
import './slidebanner.scss'

function Lyslinebanner() {
    return (
        <section id='line_banner'>
            <div className='container position-relative d-flex align-items-center justify-content-between'>
                <h2>{data.linebanner.h2}</h2>
                <div className='member d-flex align-items-center'>
                    <button className='position-relative'>
                        <i className='bi bi-plus position-absolute'>
                            <span className='ir-hidden'>클릭해서 자세히보기</span>
                        </i>
                    </button>
                    <ul className="d-flex justify-content-center">
                        {
                            data.linebanner.i.map((el, idx) => {
                                return <li key={idx}><i className={el.cls}><span className='ir-hidden'>{el.span}</span></i></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Lyslinebanner