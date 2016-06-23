/**
 *
 * Created by qoder on 16/6/6.
 */
import React from 'react';
import {Table} from 'react-bootstrap';
import Tr from './tableItem';

require('./index.css');
const Listtable = React.createClass({
  render: function () {
    const {page, action}=this.props;
    const pages = page.map((each, index)=> {
      each.index = index + 1;
      return (
        <Tr data={each} key={each.id} id={each.id} action={action}/>
      )
    });

    return (
      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>工号</th>
          <th>姓名</th>
          <th>学院</th>
          <th>职位</th>
          <th>邮箱</th>
          <th>联系电话</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {pages}
        </tbody>
      </Table>
    )
  }
});

export  default Listtable;
