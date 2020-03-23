import React, {Component} from 'react';
import styles from './App.scss';
import ClassNames from 'classnames/bind';

const cx = ClassNames.bind(styles)

class App extends Component {
    render() {
        const isBlue = true;
        
        return (
            <div
                className={cx('box', {blue: isBlue})}>
                
                <div className={cx('box-inside')}/>

            </div>

        )
    }
}

export default App;