/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import ListTable from './ListTable'
import {Pagination} from 'react-bootstrap';
require('./index.css');


const AdminList = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },
  render: function () {
    return (
      <div className="adminList-wrapper">
        <ListTable/>
        <div className="pager">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={20}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect}/>
        </div>
      </div>
    )
  }
});


export  default AdminList;
