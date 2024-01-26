import React from "react";
import datajson from "../../data/data.json";
import "./sanho.scss";

function AppSectionCsr() {
  const tagList = datajson.sectioncsr.content.slice(); // 원본 배열 복사
  const shuffledTaglist = shuffleArray(tagList);

  console.log("ㄱㅁㅅ", shuffledTaglist);

  return (
    <section id="csr">
      <div className="container">
        <h2 className="">{datajson.sectioncsr.h2}</h2>
        <div className="box1">
          <ul className="article-list d-lg-flex justify-content-between align-items-stretch">
            {shuffledTaglist.slice(0, 3).map((el, idx) => (
              <li className="show col-md-4 d-flex flex-column " key={idx}>
                <a href={el.href}>
                  <div className="img-box">
                    <img src={el.src} alt="펫푸드"></img>
                  </div>
                </a>

                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                  <h3>
                    <a href={el.href}>{el.h3}</a>
                  </h3>

                  <div className="csr-tag">
                    <ul className="">
                      {el.csrtag.map((eel, iidx) => (
                        <li className="d-block mb-0" key={iidx}>
                          <a href={el.href}>{eel.nm}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// 피셔-예이츠 셔플 알고리즘을 사용하여 배열을 섞는 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default AppSectionCsr;
