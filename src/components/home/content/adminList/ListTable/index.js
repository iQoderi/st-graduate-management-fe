/**
 *
 * Created by qoder on 16/6/6.
 */
import React from 'react';
import ReactBootstrap,{Table} from 'react-bootstrap';

const Listtable=React.createClass({
  render:function () {
    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>学院</th>
          <th>职位</th>
          <th>电话</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </Table>
    )
  }
});


export  default Listtable;
