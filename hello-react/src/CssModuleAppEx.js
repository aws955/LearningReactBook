import React, {Component} from 'react';
import styles from './App.module.css';
import ClassNames from 'classnames/bind';

const cx = ClassNames.bind(styles)

console.log(styles);
/*
    yarn add node-sass sass-loader: Sass 사용
    yarn add classnames : .join(' ') 없이 여러 클래스 네임 선언 가능
    yarn add include-media open-color : include-media 는 반응형 디자인을 도와주며,
    open-color 는 여러가지 색상이 들어있어 색상을 쉽게 고를 수 있다.
    yarn add styled-components : 가장 많이 쓰이는 라이브러리

    그 외에도 Create-react-app 이 v2로 릴리즈 되면서 많은 변화가 있었다.
    이전에는 eject을 통해 세부 설정을 맞춰야했다면 많은 부분들이 
    모듈을 설치하거나 간단한 규칙을 추가하는 식으로 바뀌었으므로 호환이 안된다면 검색이 필요하다.

    classnames 가 편리한 점은 .join 함수만 없게 해주는 것이 아니다.
    객체형식으로 스타일을 지정한다면 손쉽게 조건부 스타일 설정이 가능해지기 때문에 가독성도 증가한다.
*/
class App extends Component {
    // render(){
    //     return (
    //         // <div className={[styles.box, styles.blue].join(' ')}>

    //         // </div>

    //         <div className={classNames(styles.box, styles.blue)}>

    //         </div>
    //     )
    // }

    render() {
        const isBlue = true;
        
        return (
            <div
                className={cx('box', {blue: isBlue})}>

            </div>

        )
    }
}

export default App;