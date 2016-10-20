/**
 * Created by qoder on 16-8-12.
 */
import React, {Component} from 'react';
import {Table, Pagination} from 'react-bootstrap';

class SearchResultTable extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.deleteGraduate = this.deleteGraduate.bind(this);
  }

  handleSelect(eventKey) {
    this.props.action.searchStu(eventKey, 15, this.props.graduateList.body);
  }

  deleteGraduate(id) {
    this.props.action.deleteGraduate(id);
  }

  render() {
    const {graduateList, myMsg}=this.props;
    const pages = graduateList.pages.map((graduate, index)=> {
      graduate.index = index + 1;
      return (
        <tr>
          <td>{graduate.index}</td>
          <td style={{display: myMsg.role === '管理员' ? 'table-cell' : 'none'}}>{graduate.name}</td>
          <td>{graduate.academy}</td>
          <td>{graduate.major}</td>
          <td>{graduate.class}</td>
          <td>{graduate.stuId}</td>
          <td>{graduate.role}</td>
          <td>{graduate.qq}</td>
          <td>{graduate.company}</td>
          <td>{graduate.job}</td>
          <td>{graduate.skill}</td>
          <td>{graduate.suggestion}</td>
          <td>{graduate.recruit}</td>
          <td>
            <a
              onClick={()=> {
                this.deleteGraduate(graduate.id)
              }}
              href="javaScript:;" className="text-danger">
              删除
            </a>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <Table responsive>
          <thead>
          <tr>
            <th>#</th>
            <th style={{display: myMsg.role === '管理员' ? 'table-cell' : 'none'}}>姓名</th>
            <th>学院</th>
            <th>专业</th>
            <th>班级</th>
            <th>学号</th>
            <th>毕业走向</th>
            <th>QQ或微信</th>
            <th>就业公司</th>
            <th>就业岗位</th>
            <th>职能</th>
            <th>就业建议</th>
            <th>公司招聘</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          {pages}
          </tbody>
        </Table>
        <div className="pager">
          <Pagination
            prev
            next
            first
            last
            boundaryLinks
            items={Math.ceil(graduateList.count / 15)}
            maxButtons={5}
            activePage={graduateList.cur}
            onSelect={this.handleSelect}/>
        </div>
      </div>
    )
  }
}


export  default  SearchResultTable;
