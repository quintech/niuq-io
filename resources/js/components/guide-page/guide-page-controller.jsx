import Title from "antd/lib/typography/Title";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function GuidePageController(props) {

    let navigate = useNavigate();
  
    useEffect(() => {
        navigate(props.url)
    },[]);
    //畫面呈現
        return (
            <div>
                <Title className="titleStyle" level={1}>
                    {props.text}
                </Title>
            </div>
        );
}
