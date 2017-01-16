import React, { PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import style from './main.css';

@inject('MainStore') @observer
class Main extends React.Component {
  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(e) {
    this.props.MainStore.field = e.target.value;
  }
  render() {
    const { field } = this.props.MainStore;
    return (
      <div className={style.main}>
        <h1>Main</h1>
        <div>
          <input type="text" value={field} onChange={this.changeTitle} placeholder="修改store的field值" />
          <p>field:{field}</p>
          {
            <img alt="" src={require('../../assests/images/img.jpg')} />
                    }
        </div>
      </div>
    );
  }
}
Main.propTypes = {
  MainStore: PropTypes.shape,
};
Main.defaultProps = {
  MainStore: {},
};

export default Main;
