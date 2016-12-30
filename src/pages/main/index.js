import style from './main.css';
import React from 'react';
import {observer,inject} from 'mobx-react';

@inject("MainStore") @observer
class Main extends React.Component{
    changeTitle(e){
        this.props.MainStore.field = e.target.value;
    }
    render(){
        const {field} = this.props.MainStore;
        console.log(this.props,style.main)
        return (
            <div className="main">
                <h1>Main</h1>
                <div>
                    <input type="text" value={field} onChange={this.changeTitle.bind(this)} placeholder="修改store的field值" />
                    <p>field:{field}</p>
                    {
                        <img src={require("../../assests/images/img.jpg")} />
                    }
                </div>
            </div>
        )
    }
}

export default Main;