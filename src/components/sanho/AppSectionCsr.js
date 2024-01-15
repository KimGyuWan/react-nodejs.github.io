import React from "react";
import datajson from "../../data/data.json";
import "../../scss/sanho.scss";

function AppSectionCsr() {
  const shuffledTaglist = datajson.sectioncsr.content.sort(
    () => Math.random() - 0.5
  );

  console.log(shuffledTaglist);

  return (
    <section id="csr">
      <div className="container">
        <h2 className="">{datajson.sectioncsr.h2}</h2>
        <div className="box1">
          <ul className="article-list d-flex justify-content-between">
            {shuffledTaglist.map(
              (el, idx) =>
                idx < 3 && (
                  <li className="show" key={idx}>
                    <a href={el.href}>
                      <div className="img-box">
                        <img src={el.src} alt="펫푸드"></img>
                      </div>
                    </a>
                    <h3>
                      <a href={el.href}>{el.h3}</a>
                    </h3>
                    <div className="csr-tag d-flex">
                      {el.csrtag.map((eel, iidx) => {
                        return (
                          <a href={el.href} key={iidx}>
                            {eel.nm}
                          </a>
                        );
                      })}
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AppSectionCsr;
