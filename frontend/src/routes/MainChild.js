import React, {Component} from "react";

class MainChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
            childData1 : [1,2,3]
        }
    }

    mainChildClick = () => {
        alert('MainChildClick');
    }

    alertClick = () => {
        alert(this.props.childData1);
    }

    render() {
        return (
            <>
                <div>{this.state.childData1} : MainChild컴포넌트 소유값 childData1</div>
                <div>{this.props.childData1} : MainChild컴포넌트가 상속받은 Main컴포넌트 소유값 data1</div>

                <button onClick={this.mainChildClick}>MainChild컴포넌트 클릭</button>
                <button onClick={this.props.mainClick}>MainChild컴포넌트가 상속받은 Main 클릭</button>

                <button onClick={this.alertClick}>Main data1값확인</button>
                <button onClick={this.props.alertClick}>Main data1값확인</button>

                <>{this.props.visibleChild == true && <button onClick={this.props.setChildVisble}>child 컴포넌트 닫기</button>}</>
            </>
        )
    }

}

export default MainChild;