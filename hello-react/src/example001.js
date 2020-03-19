import React, {Component, Fragment} from 'react';
import './App.css';

// Fragment 를 사용하면 쓸 데 없는 div가 남발되는 것을 막을 수 있다.
// 삼항 연산자 사용법
class App extends Component{
  render() {
    const text = "당신은 어썸한가요?";
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebketTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };
    return(
      <Fragment>
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        { condition ? '참' : '거짓' }
        { condition ? '보여주세요' : null }
        { condition && '보여주세요'}
        <div style={style}></div>
        <div className="my-div">
          <span>리액트는 class가 아닌 className!</span>
        </div>
        <form>
          First name:<br/>
          <input type="text" name="firstname" placeholder="태그는 꼭 닫을 것!"/><br/>
          Last name:<br/>
          <input type="text" name="lastname" placeholder="태그는 꼭 닫을 것!"/>
        </form>
        <hr/>
        // 주석을 이렇게 달면 안됩니다 <br/>
        /* 이것도 안됩니다 */ <br/>
        태그 안에서 주석을 달거나 중괄호로 감싸야합니다 <br/>
      </Fragment>
    );
  }
}

export default App;
