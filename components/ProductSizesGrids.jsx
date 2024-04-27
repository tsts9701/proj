import React, { useState } from "react";

function ProductSizesGrids(props) {
    let setOpenedSizesGrids = props.setOpenedSizesGrids;
    let openedSizesGrids = props.openedSizesGrids;
    let productName = props.productName;
    let sizesGrids = props.sizesGrids;

    return (
        <div className={openedSizesGrids ? "" : "d-none"}>
            <div className="pure-modal-backdrop">
                <div className="pure-modal 0.32067087382755766 cLdrOa no-padding">
                    <div className="panel panel-default ">
                        <div className="panel-heading"></div>
                        <div className="panel-body scrollable">
                            <div className="rUpckO">
                            <h3 className="y3mg6W">{productName}</h3>
                            <div>
                                <table className="XnQqgg">
                                    <thead>
                                        <tr>
                                        <th width="22%">Довжина стопи, см</th>
                                        <th width="14%"><span>US</span></th>
                                        <th width="14%">EUR</th>
                                        <th width="50%">Опис</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sizesGrids?.intersections ?
                                                Object.keys(sizesGrids.intersections).map((it, ind) => {
                                                    let euroIntersection = sizesGrids.intersectionsEuro[it];
                                                    let usIntersection = sizesGrids.intersections[it];
                                                    let sizeDescription = `Европейский размер: ${euroIntersection}, US: ${usIntersection}`;

                                                    return (
                                                        <tr key={ind}>
                                                            <td>{it}</td>
                                                            <td>{usIntersection}</td>
                                                            <td>{euroIntersection}</td>
                                                            <td>{sizeDescription}</td>
                                                        </tr>
                                                    )
                                                })
                                            : <td></td>
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="f6Wug6">
                                <div className="vklXop"><img alt="Фото измерения стопы" title="Фото измерения стопы" className="kvmZAa " width="335" height="260" src="/footsiz.webp" /></div>
                                <div className="dE9iYk">
                                    <ol className="vgDuOB">
                                        <li>
                                        <h4>Длина стопы</h4>
                                        <p>
                                            Поставьте ногу на лист бумаги, чтобы пятка прикасалась к стене. Отметьте место, где заканчивается самый длинный палец, и измерьте расстояние от этой отметки до стены. Проделайте то же с другой ногой и сравните измерения с нашей таблицей размеров, чтобы найти нужный размер.
                                        </p>
                                        </li>
                                    </ol>
                                    <div className="GBjvNz"><span><b className="BiE6lD">Досі маєш сумніви у вимірах?</b> <span className="BiE6lD">Дізнайся, <a className="" href="/ua/static/yak-obrati-pravilniy-rozmir/">як правильно обрати розмір</a></span></span></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="close" onClick={() => setOpenedSizesGrids((openedSizesGrids ? false : true))}>
                            <svg viewBox="-180.598 -180.697 425.197 425.197" xmlSpace="preserve" width="10px" height="10px" className="w02XiG">
                            <path d="m81.793 31.902 139.404-139.404a35.114 35.114 0 0 0 10.304-24.891c0-19.445-15.76-35.206-35.206-35.206-9.717 0-18.518 3.943-24.891 10.315L32-17.891l-139.404-139.392c-6.372-6.372-15.174-10.315-24.891-10.315-19.445 0-35.206 15.761-35.206 35.206 0 9.717 3.943 18.518 10.315 24.891L-17.793 31.902l-139.392 139.404c-6.372 6.372-10.315 15.174-10.315 24.891 0 19.445 15.761 35.206 35.206 35.206 9.717 0 18.518-3.943 24.891-10.315L32 81.694l139.404 139.404c6.372 6.361 15.174 10.304 24.891 10.304 19.445 0 35.206-15.76 35.206-35.206 0-9.717-3.943-18.518-10.315-24.891L81.793 31.902z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSizesGrids;