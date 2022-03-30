import React, {Component} from "react";
import MainChild from '../routes/MainChild';
import axios from 'axios';

//클래스형 컴포넌트
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
        //front(화면)-back(서버)간 데이터 전달
        //[step1] axios로 서버의 url을 호출 - 서버와의 통신 관련 proxy 설정은 setupProxy.js에 존재함
        axios
            .get('api/main')
            .then(res => { //[step5] 데이터 리턴 - 통신 성공, res에 서버에서의 리턴값 담겨있음
                console.log(res); //디버깅 등으로 res의 데이터 구조 파악
                this.setState({ // 데이터 세팅, 클래스형 컴포넌트에서는 setState 를 사용
                    axiosData : res.data.data
                });
            })
            .catch({ //[step5] 데이터 리턴 - 통신 실패
                //에러
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