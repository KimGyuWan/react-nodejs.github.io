import React from "react";
import datajson from "../../data/data.json";
import "./sanho.scss";

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
          <ul className="article-list d-lg-flex justify-content-between align-items-stretch">
            {shuffledTaglist.map(
              (el, idx) =>
                idx < 3 && (
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
                          {el.csrtag.map((eel, iidx) => {
                            return (
                              <li className="d-block mb-0">
                                <a href={el.href} key={iidx}>
                                  {eel.nm}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
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
