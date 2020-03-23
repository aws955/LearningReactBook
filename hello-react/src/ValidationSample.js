/*
리액트에서 id 대신에 ref를 사용하는 이유

리액트 컴포넌트 안에서도 id를 사용할 수 있다. 
하지만 JSX안에서 DOM에 id를 달면 해당 DOM을 랜더링할 때 그대로 전달한다.
HTML 문서 내에서는 id값은 유일해야 하는데, 만약 컴포넌트의 DOM에 id를 전달했다면 그 DOM은 화면에서 한번만 사용가능하도록 되는것이다.
그렇기 때문에 특수한 경우가 아니라면 권장되지 않는다.

ref의 경우 id와는 다르게 컴포넌트 내에서만 유효하기 때문에 렌더링이 되더라도 문제가 없다.
*/

import React, {Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus()
    }

    render() {
        return (
            <div>
                <input
                    ref = {(ref) => this.input=ref}
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;