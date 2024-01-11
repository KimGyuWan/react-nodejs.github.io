
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        department: "",
        ageGroup: "",
        type: "",
        email: "",
        specialNote: "",
        agree: "",
    })

    const { name, address, department, ageGroup, type, email, specialNote, agree } = formData;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setFormData({
            ...formData,
            [id]: value,
        });
    }



    return (
        <>
            <section id="form" className="sec">
                <div id="sectionForm" className="container" />
                <form action="" className="d-flex flex-wrap justify-content-between w-100" />

                <div className="col-6 d-flex justify-content-center">
                    <div id="formhd" className="w-100 p-0 m-0 position-rel">
                        <h2>맞춤영양 무료 체험 프로그램</h2>
                        <p>잘먹을까? 잘맞을까? 고민이시라면? <br></br>무료 체험 사료로 시작해보세요!</p>
                    </div>
                </div>
                <div id="formBox"
                    className="form_interest col-6 m-0 p-0 d-flex justify-content-center align-items-lg-center mt-5" />
                <fieldset className="box">
                    <div className="list_wrap d-flex flex-wrap" />
                    <div className="col-6" >

                        <ul>
                            <li className="item my-2">
                                <div className="input_box1">
                                    <label htmlFor="emailForm" className="p-0"></label>
                                    <input type="text" name="name" id="name" value={name} onChange={onChange} placeholder="이름" />

                                </div>
                            </li>
                            <li className="item my-2">
                                <div className="input_box1">
                                    <label htmlFor="name" className="p-0"></label>
                                    <input type="text" name="address" id="name" address="" placeholder="주소" />
                                </div>
                            </li>
                            <li className="item my-2">
                                <div className="input_box d-flex align-items-center"> 종류:
                                    <label htmlFor="department">강아지:</label>
                                    <input type="radio" name="department" id="department" defaultValue="" defaultChecked />
                                    <label htmlFor="chk2">고양이:</label>
                                    <input type="radio" name="department" id="chk2" defaultValue="" />
                                </div>
                            </li>
                            <li className="item my-2">
                                <div className="input_box d-flex align-items-center ">연령:
                                    <label htmlFor="chk3">이유기:</label>
                                    <input type="radio" name="departmen" id="chk3" defaultValue="" defaultChecked />
                                    <label htmlFor="chk4">성장기:</label>
                                    <input type="radio" name="departmen" id="chk4" defaultValue="" />
                                    <label htmlFor="chk5">성년기:</label>
                                    <input type="radio" name="departmen" id="chk5" defaultValue="" />
                                </div>
                            </li>
                            <li className="item my-2">
                                <div className="input_box d-flex align-items-center "> 유형:
                                    <label htmlFor="chk6">건식:</label>
                                    <input type="radio" name="departme" id="chk6" defaultValue="" defaultChecked />
                                    <label htmlFor="chk7">냉동:</label>
                                    <input type="radio" name="departme" id="chk7" defaultValue="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li className="item my-2">
                                <div className="input_box1">
                                    <label htmlFor="company" className="p-0"></label>
                                    <input type="text" name="tel" id="tel" defaultValue="" placeholder="연락처" />
                                </div>
                            </li>
                            <li className="item my-2">
                                <div className="input_box1">
                                    <label htmlFor="tel" className="p-0"></label>
                                    <input type="text" name="email" id="email" defaultValue="" className="input_tel" placeholder="이메일" />
                                </div>
                            </li>
                        </ul>
                        <textarea name="" className="text position-rel my-3 col" id="" cols="36" rows="5"
                            placeholder="반려동물의 특이사항을 적어주세요."></textarea>
                    </div>
                    <div className="check_box ">
                        <div className="item d-flex my-3">
                            <div className="d-flex">
                                <input type="checkbox" className="d-flex align-items-center" name="agree" defaultValue="Y" id="c1" />
                                <label htmlFor="c1"><span>마케팅 목적으로 개인정보 수집 및 이용하는 것에 동의합니다.
                                    <a href="/kr/guide/privacy" target="_blank" className="btn_privacy">개인정보처리방침 보기</a></span></label>
                            </div>
                            <button type="submit" className="btn ml-3">전송</button>
                        </div>
                    </div>
                </fieldset>
            </section >
            <p>이름:{name}</p>

        </>
    );
};

export default Form;