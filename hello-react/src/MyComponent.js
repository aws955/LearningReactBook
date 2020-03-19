import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // 기본 생성자가 아니라 커스터마이징 하고 싶다면 부모 생성자(Component)를 먼저 초기화
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    // state만 초기화 할때에는 굳이 생성자를 사용하지 않고 아래와 같이도 가능합니다.
    state = {
        number: 0
    }

    static defaultProps = {
        name: '기본 이름'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired // 필수적으로 필요하며 타입은 숫자이다
    }
    render() {
        return(
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                {/* 화살표 함수에 대한 것은 test001.html 참조 */}
                {/* 항상 state는 setState 함수를 이용한다 / 강제로 하는 방법도 있지만 이는 비효율적이다. */}
                <button onClick={
                    () => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }
                }>더하기</button>
            </div>
        );
    }
}

// 전통적인 방법
// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

// 클래스 내부에서도 설정이 가능하다
// MyComponent.propTypes = {
//     name: PropTypes.string // name의 타입을 문자열로 설정합니다.
// }

/*
propTypes 종류

array : 배열
bool : 참, 거짓
func : 함수
number : 숫자
object: 객체
string : 문자열
symbol : ES6 문법의 심벌 개체
node : 렌더링할 수 있는 모든것 (숫자, 문자열, element 또는 이들로 구성된 배열)
element : 리액트 요소
instanceOf(MyClass) : 특정 클래스의 인스턴스
oneOf(['Male', 'Female']) : 주어진 배열 요소 중 값 하나
oneOfType([React.PropTypes.string, React.PropTypes.number]) : 주어진 배열 안의 종류 중 하나
arrayOf(React.PropTypes.number) : 주어진 종류로 구성된 배열
objectOf(React.PropTypes.number) : 주어진 종류의 값을 가진 객체
shape({name: React.PropTypes.string, age: React.PropTypes.number}) : 주어진 스키마를 가진 객체
any: 아무 종류
*/

/*
리액트에서 이벤트 사용 시 주의 사항

1. HTML과 다르게 이벤트 이름은 camelCase로 작성됩니다. 예를 들면 onclick은 onClick, onkeyup은 onKeyUp으로 표기해야 합니다.
2. 이벤트에 실행할 자바스크립트 코드를 넣는 것이 아니라 함수 형태로 전달해야 합니다. 바로 이벤트를 삽입할 수도 있고 외부에서 함수를 선언하여 삽입해도 됩니다.
그러나 형태는 함수여야합니다.
3. DOM요소에만 이벤트를 설정할 수 있습니다. 즉, 만들어진 컴포넌트 자체에는 이벤트를 추가하지 못한다는 이야기 뜻입니다.
*/

// 리액트 이벤트 관련 참조 : https://facebook.github.io/react/docs/events.html

export default MyComponent;