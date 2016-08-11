/**
 * Created by qoder on 16/8/11.
 */
import React, {Component} from 'react';
import AddGraduateForm from './addGraduateForm';
import './index.css';

class AddGraduate extends Component {
  render() {
    return (
      <div className="AddAdmin-wrapper">
        <AddGraduateForm/>
      </div>
    )
  }
}

export  default  AddGraduate;
