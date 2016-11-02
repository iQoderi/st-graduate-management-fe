import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import './index.css';

class QueryStuForm extends Component {
    render() {
        return (
          <Form inline className="search-stu-form">
            <FormGroup controlId="formInlineName">
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
            <FormGroup controlId="QSIsBlock">
              &nbsp;&nbsp;&nbsp;
              <ControlLabel>账户是否被冻结:</ControlLabel>
              {' '}
              <select className="form-control" id="QAcdemy">
                <option>全部</option>
                <option>正常</option>
                <option>冻结</option>
              </select>
            </FormGroup>
            {' '}
            <Button type="button"
                    id="searchBtn"
                    bsStyle="primary" className="normal-btn">
              搜索
            </Button>
          </Form>
        )
    }
}

export default QueryStuForm;
