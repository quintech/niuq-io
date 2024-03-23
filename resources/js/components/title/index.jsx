import {Component} from "react";
import Title from "antd/lib/typography/Title";


class TitleText extends Component{
    render() {
        return(
            <Title className="titleStyle" level={1}>
                {this.props.text}
            </Title>
        );
    }
}

export default TitleText;
