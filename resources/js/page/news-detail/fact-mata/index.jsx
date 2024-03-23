// Third API

import React, { Component } from 'react';
import factMata from '../../../../../public/images/Content Score.png';
import { getFactMata } from '../../../share/service/api/get-api-data/get-fact-mata';

let data = 'Connect Server,Please Wait!';
let Hyperpartisanship = 'NODATA';
let controversy = 'NODATA';
let fake_news = 'NODATA';
let summarizeText = 'Connect Server,Please Wait!';
let intervalId;

// Toggle open and close operation
function toggleControl() {
    let toggle = document.getElementById('toggle-fact-mata');
    let mobile_toggle = document.getElementById('mobile-toggle-fact-mata');
    if (toggle.classList.item(3) === 'dropdown-toggle-style-open') {
        toggle.classList.add('dropdown-toggle-style');
        toggle.classList.remove('dropdown-toggle-style-open');
    } else {
        toggle.classList.remove('dropdown-toggle-style');
        toggle.classList.add('dropdown-toggle-style-open');
    }

    if (mobile_toggle.classList.item(3) === 'dropdown-toggle-style-open') {
        mobile_toggle.classList.add('dropdown-toggle-style');
        mobile_toggle.classList.remove('dropdown-toggle-style-open');
    } else {
        mobile_toggle.classList.remove('dropdown-toggle-style');
        mobile_toggle.classList.add('dropdown-toggle-style-open');
    }
}

class FactMata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.allData.url,
        };
        this.getData();
    }

    // Reload every two seconds (things to be done when the component is loaded)
    componentDidMount() {
        let num = 0;
        // If the API data is not fetched after five updates, stop updating
        intervalId = window.setInterval(() => {
            if (data === 'Connect Server,Please Wait!') {
                if (num === 5) {
                    window.clearInterval(intervalId);
                } else {
                    this.forceUpdate();
                    num++;
                }
            } else {
                this.forceUpdate();
                window.clearInterval(intervalId);
            }
        }, 2000);
    }

    // Things to be done when the component is unmounted
    componentWillUnmount() {
        window.clearInterval(intervalId);
        data = 'Connect Server,Please Wait!';
        Hyperpartisanship = 'NODATA';
        controversy = 'NODATA';
        fake_news = 'NODATA';
        summarizeText = 'Connect Server,Please Wait!';
    }

    render() {
        return (
            <div
                className="contentBorder"
                data-bs-toggle="collapse"
                data-bs-target="#factMataCollapse"
                aria-expanded="false"
                aria-controls="factMataCollapse"
                onClick={toggleControl}
            >
                {/* Desktop version */}
                <div className="d-none d-sm-flex">
                    <div className="my-auto">
                        <img src={factMata} style={{ height: '100px' }} alt="" />
                    </div>
                    <div
                        className="justify-content-center text-center container-fluid my-auto d-none d-sm-flex h3"
                        dangerouslySetInnerHTML={this.FakenessSummarize(controversy, fake_news, Hyperpartisanship)}
                    ></div>
                    <div className="ms-auto dropdown-toggle m-3 dropdown-toggle-style" id="toggle-fact-mata" />
                </div>
                {/* Mobile version */}
                <div className="d-flex d-sm-none">
                    <div className="my-auto">
                        <img src={factMata} style={{ height: '40px' }} alt="" />
                    </div>
                    <div
                        className="justify-content-center text-center container-fluid my-auto d-flex d-sm-none h3"
                        dangerouslySetInnerHTML={this.FakenessSummarize(controversy, fake_news, Hyperpartisanship)}
                    ></div>
                    <div className="ms-auto dropdown-toggle m-3 dropdown-toggle-style" id="mobile-toggle-fact-mata" />
                </div>
                <section>
                    <div className="collapse ms-4 h5" id="factMataCollapse">
                        <div className="row" dangerouslySetInnerHTML={this.returnView(data)} />
                    </div>
                </section>
            </div>
        );
    }

    getData() {
        let num = 0;
        getFactMata(this.props)
            .then((response) => {
                response.json().then((r) => {
                    if (r.ApiData == null) {
                        console.log('ERROR : Fact-Mata Server Error. ' + r.message);
                        data = 'NO DATA';
                        fake_news = 'error';
                        controversy = 'error';
                        Hyperpartisanship = 'error';
                    } else {
                        data = '';
                        if (r.ApiData.results != null) {
                            while (num < r.ApiData.results.length) {
                                this.fackeness(r.ApiData.results[num].prediction.label, r.ApiData.results[num].prediction.score);
                                data +=
                                    '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
                                    r.ApiData.results[num].prediction.label +
                                    ' : ' +
                                    r.ApiData.results[num].prediction.score +
                                    '</div>';
                                num++;
                            }
                        }
                    }
                });
            })
            .catch((error) => {
                console.error(error);
                console.error(error.message);
                // summarizeText = '<div class="justify-content-center text-center container-fluid my-auto  h3 text-danger">' + error + '</div>'
                summarizeText = 'NO DATA';
            });
    }

    // Collect data, the score algorithm will start later
    fackeness(label, score) {
        if (label === 'hyperpartisanship') {
            Hyperpartisanship = score;
        }
        if (label === 'controversy') {
            controversy = score;
        }
        if (label === 'fakenews') {
            fake_news = score;
        }
    }

    // Calculate the overall score
    FakenessSummarize(controversy, fake_news, Hyperpartisanship) {
        if (controversy === 'NODATA' || fake_news === 'NODATA' || Hyperpartisanship === 'NODATA') {
            summarizeText = 'Connect Server,Please Wait!';
        } else {
            // The string must be converted to float, and after summing, it needs to be averaged
            let scoreSum = (parseFloat(controversy) + parseFloat(fake_news) + parseFloat(Hyperpartisanship)) / 3;
            localStorage.setItem('fakeness', (1 - scoreSum) * 10); // Write to cookie 0822
            if (scoreSum >= 0.65) {
                summarizeText = '<div class="justify-content-center text-center container-fluid my-auto  h3 text-danger">Harmful</div>';
            } else if (scoreSum >= 0.3) {
                // 0821 Change
                summarizeText = '<div class="justify-content-center text-center container-fluid my-auto  h3 text-warning">Questionable</div>';
            } else if (scoreSum < 0.3) {
                summarizeText = '<div class="justify-content-center text-center container-fluid my-auto  h3 text-success">Safe</div>';
            } else {
                summarizeText = 'NO DATA';
                console.log('ERROR : Fact-Mata Score calculation error.');
            }
        }
        return { __html: summarizeText };
    }

    returnView(str) {
        // __html allows dangerouslySetInnerHTML to convert non-string to HTML
        return { __html: str };
    }
}

export default FactMata;
