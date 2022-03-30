import React, {Component} from "react";
import MainChild from '../routes/MainChild';
import axios from 'axios';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data1 : [2,2,3],
            visibleChild : false,
            axiosData : '',
        }
    }

    mainClick = () => {
        alert('MainClick');
    }

    setData = () => {
        this.setState({
            data1 : [3,3,4]
        });
        alert(this.state.data1);
    }

    alertClick = () => {
        alert(this.state.data1);
    }

    setChildVisble = () => {
        if(this.state.visibleChild == false) {
            this.setState({
                visibleChild : true
            });
        }
        else if(this.state.visibleChild == true) {
            this.setState({
                visibleChild : false
            });
        }
    }

    axiosClick = () => {
        axios.get('api/main').then(res => {
            console.log(res);
            this.setState({
                axiosData : res.data
            });
        })
    }

    render() {
        return (
            <>
                <div>{this.state.data1} : Main컴포넌트 소유값 data1</div>
                <button onClick={this.mainClick}>Main컴포넌트 클릭</button>
                <button onClick={this.setData}>Main data1값변경</button>
                <button onClick={this.alertClick}>Main data1값확인</button>
                <button onClick={this.axiosClick}>Server axios 호출</button>
                <>{this.state.visibleChild == false && <button onClick={this.setChildVisble}>child 컴포넌트 출현</button>}</>

                <div>{this.state.axiosData} : axiosData노출</div>

            {this.state.visibleChild &&
                <>
                    <MainChild
                        mainClick={this.mainClick}
                        alertClick={this.alertClick}
                        childData1={this.state.data1}
                        visibleChild={this.state.visibleChild}
                        setChildVisble={this.setChildVisble}
                    ></MainChild>

                </>
            }
            </>
        )
    }

}

export default Main;