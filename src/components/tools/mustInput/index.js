/**
 * Created by qoder on 16/8/11.
 */
import React, {Component} from 'react';
import './index.css';

class MustInput extends Component {
  render() {
    return (
      <span className="text-danger" style={{fontSize:'17px',fontWeigth:600}}>*</span>
    )
  }
}


export  default  MustInput;
