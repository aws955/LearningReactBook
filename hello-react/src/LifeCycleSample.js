import React, {Component} from 'react';

/*
    이처럼 클래스형 컴포넌트에는 state와 라이프사이클이 내장되어 있다.
    그렇기 때문에 함수형 컴포넌트보다 살짝 느리다.

    즉, state와 라이프 사이클이 필요한 컴포넌트에 대해서만 클래스형으로 선언하고
    나머지 부분은 함수형을 선언하여 최적화를 해주는 것이 바람직하다.
*/

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null; 

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color != this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot){
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color: this.props.color
        };

        return(
            <div>
                <h1 style={style} ref={ref=> this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;