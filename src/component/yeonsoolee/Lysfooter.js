import React from 'react'
import { Link } from 'react-router-dom'

//data
import data from '../../data/data.json'

//scss
import './footer.scss'


function Lysfooter() {
    return (
        <footer id="ft">
            <div className="container d-flex justify-content-between align-items-center">
                <h2>
                    <Link to="/">
                        <img src="./img/yeonsoo/petfoodlogo.png" alt="footer로고"></img>
                    </Link>
                </h2>
                <div className="info d-flex justify-content-between">
                    {
                        data.footer.box.map((el, idx) => {
                            return (
                                <div>
                                    <h4>{el.h4}</h4>
                                    <p>{el.p}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex-box position-relative">
                    <div className="family position-absolute">
                        <button>Familysite</button>
                        <ul className="position-absolute">
                            {
                                data.footer.family.map((el, idx) => {
                                    return (
                                        <li key={el}><Link to={el.href}>{el.nm}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="website">
                        <ul className="row ">
                            <li className="col-6"><Link to="">우리의 이야기</Link></li>
                            <li className="col-6"><Link to="">이용약관</Link></li>
                            <li className="col-6"><Link to="">개인정보처리방침</Link></li>
                            <li className="col-6"><Link to="">사업자정보확인</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-end align-items-center">
                <ul className="icon d-flex justify-content-end align-items-center">
                    {
                        data.footer.tabicon.map((el, idx) => {
                            return (
                                <li className='position-relative' key={idx}><Link to={el.href}><span className="ir-hidden">{el.span}</span></Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Lysfooter
