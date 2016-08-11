/**
 * Created by qoder on 16-8-12.
 */
import React,{Component} from 'react';
import {Table,Pagination} from 'react-bootstrap';

class  SearchResultTable extends Component{
  render(){
    return(
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
          </tbody>
        </Table>
        <div className="pager">
          <Pagination
            prev
            next
            first
            last
            boundaryLinks
            items={Math.ceil(50/15)}
            maxButtons={5}
            activePage={1}
            onSelect={this.handleSelect}/>
        </div>
      </div>
    )
  }
}

export  default  SearchResultTable;
