import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import _$ from '../../../../../library/getElement';
import './index.css';

class QueryStuForm extends Component {
      constructor(props) {
        super(props);
        this.handleSearch=this.handleSearch.bind(this);
      }

      handleSearch(){
        const {getStudents}=this.props.action;
        const payload={};
        payload.academy=_$("QSAcademy").value;
        payload.major=_$("QSMajor").value;
        payload.class=_$("QSClass").value;
        payload.isBlock=_$("QSIsBlock").value;
        getStudents(1,15,payload);
      };

      render() {
        return (
          <Form inline className="search-stu-form">
            <FormGroup>
              <ControlLabel>学院:</ControlLabel>
              {' '}
              <select className="form-control" id="QSAcademy">
                <option>全部</option>
                <option>经济学院</option>
                <option>管理学院</option>
                <option>计算机与通信工程学院</option>
                <option>控制工程学院</option>
                <option>语言学院</option>
                <option>数学与统计学院</option>
                <option>资源与材料学院</option>
              </select>
            </FormGroup>
            {' '}
            <FormGroup controlId="QSMajor">
              &nbsp;&nbsp;&nbsp;
              <ControlLabel>专业:</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="请输入专业名称" />
            </FormGroup>
            <FormGroup controlId="QSClass">
              &nbsp;&nbsp;&nbsp;
              <ControlLabel>班级:</ControlLabel>
              {' '}
              <FormControl type="text" placeholder="请输入班级名称" />
            </FormGroup>
            <FormGroup>
              &nbsp;&nbsp;&nbsp;
              <ControlLabel>账户是否被冻结:</ControlLabel>
              {' '}
              <select className="form-control" id="QSIsBlock">
                <option>全部</option>
                <option>正常</option>
                <option>冻结</option>
              </select>
            </FormGroup>
            {' '}
            <Button type="button"
                    id="searchBtn"
                    onClick={this.handleSearch}
                    bsStyle="primary" className="normal-btn">
              搜索
            </Button>
          </Form>
        )
    }
}

export default QueryStuForm;
