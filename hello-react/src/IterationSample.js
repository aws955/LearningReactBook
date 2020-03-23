import React, {Component, Fragment} from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleRemove = (index) => {
        // 방법 1 & 방법 3
        const {names} = this.state;

        this.setState({
            // 방법 1
            // names: [
            //     ...names.slice(0, index),
            //     ...names.slice(index+1, names.length)
            // ]

            // 방법 2
            // names: this.state.names.slice(0,index).concat(this.state.names.slice(index+1, this.state.names.length))

            // 방법 3
            names: names.filter((item,i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key={index}
                                  onDoubleClick={()=> this.handleRemove(index)}>{name}</li>)
        );
        return (
            <Fragment>
                <input 
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </Fragment>
        );
    }
}

export default IterationSample;