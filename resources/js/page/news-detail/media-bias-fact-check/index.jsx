import React, { Component } from "react";
import { getMediaBiasFackCheck } from "../../../share/service/api/get-api-data/get-media-bias-fact-check";
import media_Bias_fact_check from "../../../../../public/images/MediaBias-FactCheck.png";

let data = 'Connect Server,Please Wait!';
let summarizeText = 'Connecting to Server, Please Wait!';
let intervalId;

// Toggle open/close operation
function toggleControl() {
    let toggle = document.getElementById('toggle-media-bias');
    let mobile_toggle = document.getElementById('mobile-toggle-media-bias');
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

// Replace string for the second API
function replace(str) {
    if (str === "" || str == null) {
        return;
    }
    return { __html: str };
}

// Replace summarize for the second API
function replaceSummarize(str) {
    if (str === "VERY HIGH") {
        localStorage.setItem('factualReporting', 9.6);
        return { __html: '<div class="h3 text-safe">VERY HIGH</div>' };
    }
    if (str === "HIGH") {
        localStorage.setItem('factualReporting', 8);
        return { __html: '<div class="h3 text-safe">HIGH</div>' };
    }
    if (str === "MOSTLY FACTUAL") {
        localStorage.setItem('factualReporting', 6.4);
        return { __html: '<div class="h3 text-amber">MOSTLY FACTUAL</div>' };
    }
    if (str === "MIXED") {
        localStorage.setItem('factualReporting', 4.8);
        return { __html: '<div class="h3 text-amber">MIXED</div>' };
    }
    if (str === "LOW") {
        localStorage.setItem('factualReporting', 32);
        return { __html: '<div class="h3 text-danger">LOW</div>' };
    }
    if (str === "VERY LOW") {
        localStorage.setItem('factualReporting', 1.6);
        return { __html: '<div class="h3 text-danger">VERY LOW</div>' };
    }
    return { __html: str };
}

class MediaBiasFactCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.allData.url,
        };
        this.getData();
    }

    componentDidMount() {
        intervalId = window.setInterval(() => {
            this.forceUpdate();
            window.clearInterval(intervalId);
        }, 2000);
        this.setState = () => false;
    }

    componentWillUnmount() {
        window.clearInterval(intervalId);
        data = 'Connecting to Server, Please Wait!';
        summarizeText = 'Connecting to Server, Please Wait!';
    }

    render() {
        return (
            <div className="contentBorder" aria-expanded="false" aria-controls="mediaBasicFactCheckCollapse">
                {/* Desktop version */}
                <div className="d-none d-sm-flex">
                    <div className="my-auto">
                        <img src={media_Bias_fact_check} style={{ height: '90px' }} alt="" />
                    </div>
                    <div className="justify-content-center text-center container-fluid my-auto d-none d-sm-flex h3" dangerouslySetInnerHTML={replaceSummarize(summarizeText)}></div>
                    <div className="ms-auto dropdown-toggle m-3 dropdown-toggle-style" id="toggle-media-bias" onClick={toggleControl} data-bs-toggle="collapse" data-bs-target="#mediaBasicFactCheckCollapse" />
                </div>
                {/* Mobile version */}
                <div className="d-flex d-sm-none">
                    <div className="my-auto">
                        <img src={media_Bias_fact_check} style={{ height: '20px' }} alt="" />
                    </div>
                    <div className="justify-content-center text-center container-fluid my-auto d-flex d-sm-none h3" dangerouslySetInnerHTML={replaceSummarize(summarizeText)}></div>
                    <div className="ms-auto dropdown-toggle m-3 dropdown-toggle-style" id="mobile-toggle-media-bias" />
                </div>
                <section className="mt-2">
                    <div className="collapse ms-4 h5 mt-2" id="mediaBasicFactCheckCollapse">
                        <div className="h5 text-decoration-underline">
                            Detailed Report
                        </div>
                        <br />
                        <a className="text-dark"
                            href={data} target="_blank"
                        >
                            {data}
                        </a>
                        {/* <p style={{whiteSpace:"pre-line"}} dangerouslySetInnerHTML={replace(data)}/> */}
                    </div>
                </section>
            </div>
        );
    }

    getData() {
        getMediaBiasFackCheck(this.props).then(response => {
            response.json().then(r => {
                if (r.ApiData == null || r.u == 0) {
                    data = 'NO DATA';
                    console.log(r.message);
                } else {
                    data = r.u;
                    summarizeText = r.abstract;
                }
            })
        }).catch(error => {
            console.error(error);
        })
    }
}

export default MediaBiasFactCheck;
