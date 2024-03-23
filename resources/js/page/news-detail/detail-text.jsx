import React, { Component, useEffect, useState } from 'react';

import AdFontesMedia from './ad-fontes-media';
import FactMata from './fact-mata';
import GetNew from '../../components/news-search/get-new';
import MediaBiasFactCheck from "./media-bias-fact-check";
import { Message } from '../../share/environment/message';
import ShareButton from '../../components/share-button';
import { errorMessage } from '../../components/error-message';
import { newsList } from '../../share/environment/variable/inxdex';
import { useSelector } from 'react-redux';

let intervalId;
let reliability;

function computeScoreAverage(allDate) {

//     getAdFontesMedia(allDate = allDate).then(response => {
//         response.json().then(r => {
//             console.log(r);
//         })
//     }).catch(error => {
//         console.error(error);
//         console.error(error.message);
//         // summarizeText = '<div class="justify-content-center text-center container-fluid my-auto  h3 text-danger">' + error + '</div>'
//         summarizeText = 'NO DATA'
//     })
}


// Display the screen
const NewDetailText = () => {

    // Get all news
    const count = useSelector(state => state);
}

export function DetailText(props) {

    const [uuid, changeUuid] = useState("");
    useEffect(() => {
    });

    const state = useSelector((state) => state);

    // First check if it is empty
    try {
        if (state?.itemReducer?.newDetail[0] !== undefined) {
            { computeScoreAverage(state?.itemReducer?.newDetail[0]) }
            if (state?.itemReducer?.newDetail[0]?.length !== 0) {
                return (
                    <section>
                        <div className="text-center">
                            <img src={state?.itemReducer?.newDetail[0]?.image} />
                        </div>
                        <div className="h1 my-5 d-flex justify-content-center flex-column">
                            <div className="newsDetailTitle">{state?.itemReducer?.newDetail[0]?.title}</div>
                            <div className="newsDetailSubTitle">
                                {state?.itemReducer?.newDetail[0]?.description}<br />
                            </div>
                            <section className="newsDetailSubTitle d-flex justify-content-between">
                                <div>
                                    addDate: {state?.itemReducer?.newDetail[0]?.addDate}<br />
                                </div>
                                <div>
                                    author: {state?.itemReducer?.newDetail[0]?.author}<br />
                                </div>
                                <div>
                                    from: {state?.itemReducer?.newDetail[0]?.from}<br />
                                </div>
                            </section>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                Original URL:
                                <a className="text-dark"
                                    href={state?.itemReducer?.newDetail[0]?.url}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {state?.itemReducer?.newDetail[0]?.url}
                                </a>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end">
                                <ShareButton card={state?.itemReducer?.newDetail[0]} style={'dark'} />
                            </div>
                        </div>
                        <hr />
                        <div className="leftTitle mb-5">
                            FACT CHECK RESULT:
                        </div>
                        {/*<div style={{display: 'flex', alignItems: 'center'}}>*/}
                        {/*    <div className="leftTitle me-3">SCORE: 3.28</div>*/}
                        {/*    <div style={{display: 'flex'}}>*/}
                        {/*        <div className="fractionCircle">●</div>*/}
                        {/*        <div className="fractionCircle">●</div>*/}
                        {/*        <div className="fractionCircle">●</div>*/}
                        {/*        <div className="fractionCircleNotStandard">●</div>*/}
                        {/*        <div className="fractionCircleNotStandard">●</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*First API*/}
                        <AdFontesMedia allData={state?.itemReducer?.newDetail[0]} />
                        {/* {console.log(localStorage.getItem('reliability'))} */}
                        {/*Second API*/}
                        <MediaBiasFactCheck allData={state?.itemReducer?.newDetail[0]} />
                        {/*Third API*/}
                        <FactMata allData={state?.itemReducer?.newDetail[0]} />
                    </section>
                );
            } else {
                return (
                    errorMessage(Message.errorMessage)
                );
            }
        } else {
            return (
                errorMessage(Message.errorMessage)
            );
        }
    } catch (e) {
        Message.errorMessage = 'ErrorMessage ' + e.message;
        return (
            errorMessage(Message.errorMessage)
        );
    }
}

export default DetailText;
