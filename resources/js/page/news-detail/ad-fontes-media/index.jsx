import React, { Component } from 'react';
import adfontesmedia from '../../../../../public/images/Ad_Fontes_Media_logo.png';
import { getAdFontesMedia } from "../../../share/service/api/get-api-data/get-ad-fontes-media";

let summarizeText = 'Connect Server,Please Wait!';
let bias = "Connect Server,Please Wait!";
let bias_label = "Connect Server,Please Wait!";
let reliability = "Connect Server,Please Wait!";
let reliability_label = "Connect Server,Please Wait!";
let media_type = "Connect Server,Please Wait!";
let intervalId;

// Toggle open/close operation
function toggleControl() {
    let toggle = document.getElementById('toggle');
    let mobile_toggle = document.getElementById('mobile_toggle');

    if (toggle.classList.item(3) === "dropdown-toggle-style-open") {
        toggle.classList.add("dropdown-toggle-style");
        toggle.classList.remove("dropdown-toggle-style-open");
    } else {
        toggle.classList.remove("dropdown-toggle-style");
        toggle.classList.add("dropdown-toggle-style-open");
    }

    if (mobile_toggle.classList.item(3) === "dropdown-toggle-style-open") {
        mobile_toggle.classList.add("dropdown-toggle-style");
        mobile_toggle.classList.remove("dropdown-toggle-style-open");
    } else {
        mobile_toggle.classList.remove("dropdown-toggle-style");
        mobile_toggle.classList.add("dropdown-toggle-style-open");
    }
}

// Filter string
function replaceSummarize(str, reliability) {
    let indexOfNum = str.indexOf(";", 0);
    if (indexOfNum === -1) {
        if (str.indexOf("/", 0) !== -1) {
            let indexOfNum = str.indexOf("/", 0);
            str = str.slice(0, indexOfNum);
            return { __html: '<div class="h3 text-amber">' + str + '</div>' };
        }
        return { __html: "NO DATA" };
    }

    if (reliability >= 40) {
        str = str.slice(0, indexOfNum);
        return { __html: '<div class="h3 text-safe">' + str + '</div>' };
    } else if (reliability >= 16) {
        str = str.slice(0, indexOfNum);
        return { __html: '<div class="h3 text-amber">' + str + '</div>' };
    } else if (reliability < 16) {
        str = str.slice(0, indexOfNum);
        return { __html: '<div class="h3 text-danger">' + str + '</div>' };
    } else {
        str = 'NO DATA'
        return { __html: str };
    }
}

class AdFontesMedia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: props.allData.url,
        };
        this.getData();

        summarizeText = '';
        bias = "Connect Server,Please Wait!";
        bias_label = "Connect Server,Please Wait!";
        reliability = "Connect Server,Please Wait!";
        reliability_label = "Connect Server,Please Wait!";
        media_type = "Connect Server,Please Wait!";
    }

    componentDidMount() {
        intervalId = window.setInterval((() => {
            this.forceUpdate();
            window.clearInterval(intervalId);
        }), 2000);
    }

    componentWillUnmount() {
        window.clearInterval(intervalId);
        summarizeText = 'Connect Server,Please Wait!';
        bias = "Connect Server,Please Wait!";
        bias_label = "Connect Server,Please Wait!";
        reliability = "Connect Server,Please Wait!";
        reliability_label = "Connect Server,Please Wait!";
        media_type = "Connect Server,Please Wait!";
    }

    render() {
        return (
            <div className="contentBorder" data-bs-toggle="collapse" data-bs-target="#adfontesmediaCollapse"
                aria-expanded="false" aria-controls="adfontesmediaCollapse" onClick={toggleControl}>
                <div className="d-none d-sm-flex">
                    <div className="my-auto">
                        <img src={adfontesmedia} style={{ height: '100px' }} alt="" />
                    </div>
                    <div className="justify-content-center text-center container-fluid my-auto d-none d-sm-flex h3" dangerouslySetInnerHTML={replaceSummarize(summarizeText, reliability)}></div>
                    <div className="ms-auto dropdown-toggle m-3 dropdown-toggle-style" id="toggle" />
                </div>
                <div className="d-flex d-sm-none">
                    <div className="my-auto">
                        <img src={adfontesmedia} style={{ height: '45px' }} alt="" />
                    </div>
                    <div className="justify-content-center text-center container-fluid my-auto d-flex d-sm-none h3" dangerouslySetInnerHTML={replaceSummarize(summarizeText, reliability)}></div>
                    <div className="ms-auto dropdown-toggle m-3 dropdown-toggle-style" id="mobile_toggle" />
                </div>
                <section className="collapse row" id="adfontesmediaCollapse">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-1 text-bold">Bias : {bias}</div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-1 text-bold">BiasLabel : {bias_label}</div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-1 text-bold">Reliability : {reliability}</div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-1 text-bold">ReliabilityLabel : {reliability_label}</div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-1 text-bold">MediaType : {media_type}</div>
                </section>
            </div>
        );
    }

    getData() {
        getAdFontesMedia(this.props).then(response => {
            response.json().then(r => {
                if (r.ApiData == null) {
                    bias = 'NO DATA';
                    bias_label = 'NO DATA';
                    reliability = 'NO DATA';
                    reliability_label = 'NO DATA';
                    media_type = 'NO DATA';
                    console.error('Server Error , ' + r.message);
                } else {
                    summarizeText = r.ApiData.get_ad_fontes_media.reliability_label;
                    bias = r.ApiData.get_ad_fontes_media.bias;
                    bias_label = r.ApiData.get_ad_fontes_media.bias_label;
                    reliability = r.ApiData.get_ad_fontes_media.reliability;
                    reliability_label = r.ApiData.get_ad_fontes_media.reliability_label;
                    media_type = r.ApiData.get_ad_fontes_media.media_type;
                    localStorage.setItem(reliability, reliability);
                }
            })
        }).catch(error => {
            console.error(error);
            summarizeText = 'Server Error : ' + error;
            reliability_label = 'Server Error : ' + error.message;
        })
    }
}

export default AdFontesMedia;
