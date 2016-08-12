/**
 * Created by qoder on 16-8-12.
 */
import React, {Component} from 'react';
import {Table, Pagination} from 'react-bootstrap';

class SearchResultTable extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.props.action.searchStu(eventKey, 15, this.props.graduateList.body);
  }


  render() {
    const {graduateList}=this.props;
    const pages = graduateList.pages.map((graduate, index)=> {
      graduate.index = index + 1;
      return (
        <tr>
          <td>{graduate.index}</td>
          <td>{graduate.name}</td>
          <td>{graduate.academy}</td>
          <td>{graduate.major}</td>
          <td>{graduate.class}</td>
          <td>{graduate.stuId}</td>
          <td>{graduate.phone}</td>
          <td>{graduate.company}</td>
          <td>{graduate.job}</td>
          <td>{graduate.skill}</td>
          <td>{graduate.suggestion}</td>
          <td>{graduate.recruit}</td>
        </tr>
      )
    });
    return (
      <div>
        <Table responsive>
          <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>学院</th>
            <th>专业</th>
            <th>班级</th>
            <th>学号</th>
            <th>手机</th>
            <th>就业公司</th>
            <th>就业岗位</th>
            <th>职能</th>
            <th>就业建议</th>
            <th>公司招聘</th>
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