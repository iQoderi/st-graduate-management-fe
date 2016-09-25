/**
 * Created by qoder on 16-8-14.
 */
import React, {Component} from 'react';
import MoreInfoForm from './moreInfoForm';
import {Link} from 'react-router';
import './index.css';

class MoreInfo extends Component {
  componentDidMount() {
    this.props.action.getGraduate();
  }

  render() {
    const {action, graduate}=this.props;
    return (
      <div className="more-info-wrapper">
        <Link to='/home/personal'>退出</Link>
        <h3>毕业生信息完善</h3>
        <div className="graduate-form-wrapper">
          <MoreInfoForm
            action={action}
            graduate={graduate}
          />
        </div>
      </div>
    )
  }
}

export  default  MoreInfo;
