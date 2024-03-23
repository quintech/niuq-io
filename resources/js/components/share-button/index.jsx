import {Component} from "react";
import Button from "react-bootstrap/Button";
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton} from "react-share";
import {CopyOutlined} from "@ant-design/icons";
import {giveUserNiuq} from "../../share/service/api/transaction";
import {checkLogin, getUserData} from "../login/check-login/check-login";
import {toast } from 'react-toastify';

//複製網址
function handleClickCopy(id) {
    let copyText = document.getElementById("copy_" + id);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}

//點選分享選單的按鈕
function shareMenuBtn(shareNewsURL){
    console.log(shareNewsURL)
    let userData = getUserData('userData')

    //檢測是否有登入
    if (checkLogin('userData')){
        giveUserNiuq(userData,shareNewsURL).then(response => {
            console.log(response);
            toast.info(response.transfer_tx_id,{
                autoClose: false,
                draggable: false,
                closeOnClick: false
            })
        });
    }else {
        //沒有登入
    }
}

function computeScoreAverage(reliability,factualReporting,fakeness){
    let computeScoreNumber = 3;

    if(reliability == 0){
        computeScoreNumber -= 1;
    }else{
        reliability /= 6.4;
    }

    if(factualReporting == 0){
        computeScoreNumber -= 1;
    }

    if(fakeness == 0){
        computeScoreNumber -=1;
    }else{
        fakeness = parseFloat((1-fakeness) * 10);//float
    }
    //console.log(fakeness);
    let score = 
        ( parseFloat(reliability)+ parseFloat(factualReporting)+ parseFloat(fakeness)) / parseFloat(computeScoreNumber) ;
    //console.log(score);
    
    if(score >=6.55){
        return console.log("SAFE");

    }else if(score >= 3.1){
        return console.log("warring");
    }else if(score < 3.1){
        return console.log("danger");
    }else{
        return console.log("nodata");
    }

}


class ShareToWebButton extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.style === "dark"){
            return (
                <section className="dropup">
                    <Button className="float-end cardHeaderDarkBtn"
                            data-bs-toggle="dropdown" aria-expanded="false"
                    >
                        SHARE
                    </Button>
                    <ul className="dropdown-menu dropdown-menu-dark shareMenu">
                        <li>
                            <div className="dropdown-item h5 disabled">Share</div>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        {/*同一行顯示*/}
                        <div className="d-inline-block w-auto">
                            <FacebookShareButton
                                url={'https://www.niuq.io/NewsDetail?newsID='+this.props.card.uuid}
                                className="Demo__some-network__share-button mx-3"
                                onShareWindowClose={()=>shareMenuBtn(this.props.card.url)}
                            >
                                <FacebookIcon size={32} round /> 
                            </FacebookShareButton>
                            <TwitterShareButton
                                style={{marginRight: '5px'}}
                                title={this.props.card.title}
                                url={this.props.card.url}
                                onShareWindowClose={()=>shareMenuBtn(this.props.card.url)}
                                className="me-3"
                                // hashtags={["hashtag1", "hashtag2"]}
                            >
                                <TwitterIcon size={32} round/>
                            </TwitterShareButton>
                            <Button className="mb-2 me-3 copyUrlBtn" onClick={() => handleClickCopy(this.props.card.url)}>
                                <CopyOutlined/>Copy
                            </Button>
                            <input className="urlInput" type="text" id={"copy_" + this.props.card.url} defaultValue={'https://www.niuq.io/NewsDetail?newsID='+this.props.card.uuid}/>
                        </div>
                    </ul>
                </section>
            );
        }else{
            return (
                <section className="dropup">
                    <Button className="float-end cardHeaderBtn"
                            data-bs-toggle="dropdown" aria-expanded="false"
                    >
                        Share
                    </Button>
                    <ul className="dropdown-menu dropdown-menu-dark shareMenu">
                        <li>
                            <div className="dropdown-item h5 disabled">Share</div>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        {/*同一行顯示*/}
                        <div className="d-inline-block w-auto">
                            <FacebookShareButton
                                style={{marginRight: '5px'}}
                                url={'https://www.niuq.io/NewsDetail?newsID='+this.props.card.uuid}
                                // quote={card[1]}
                                // hashtag={"#hashtag"}
                                // description={"aiueo"}
                                className="Demo__some-network__share-button mx-3"
                                onShareWindowClose={()=>shareMenuBtn(this.props.card.url)}
                            >
                                <FacebookIcon size={32} round/>
                            </FacebookShareButton>

                            <TwitterShareButton
                                style={{marginRight: '5px'}}
                                title={this.props.card.title}
                                url={this.props.card.url}
                                onShareWindowClose={()=>shareMenuBtn(this.props.card.url)}
                                className="me-3"
                                // hashtags={["hashtag1", "hashtag2"]}
                            >
                                <TwitterIcon size={32} round/>
                            </TwitterShareButton>
                            <Button className="mb-2 me-3 copyUrlBtn" onClick={() => handleClickCopy(this.props.card.url)}>
                                <CopyOutlined/>Copy
                            </Button>
                            <input className="urlInput" type="text" id={"copy_" + this.props.card.url} defaultValue={'https://www.niuq.io/NewsDetail?newsID='+this.props.card.uuid}/>
                        </div>
                    </ul>
                </section>
            );
        }
    }
}

export default ShareToWebButton;
