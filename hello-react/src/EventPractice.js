import React, {Component} from 'react';

class EventPratice extends Component {
    state = {
        message: '',
        username: ''
    }
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick(e) {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    handleChange2(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick2 = () => {
        alert(this.state.username);
        this.setState({
            username: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            // console.log(e);
                            // console.log(e.target.value);
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button
                    onClick = {
                        () => {
                            alert(this.state.message);
                            this.setState({
                                message: ''
                            });
                        }
                    }
                >확인</button>

                <hr/>

                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick = {this.handleClick}
                >확인</button>

                <hr/>

                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange2}
                />
                <button
                    onClick={this.handleClick2}
                >확인</button>
            </div>
        );
    }
}

export default EventPratice;