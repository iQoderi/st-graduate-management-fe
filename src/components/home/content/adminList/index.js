/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import ListTable from './ListTable'
import {Pagination} from 'react-bootstrap';
import getToken from '../../../../library/getToken';
import API from '../../../../api/requsetConfig';
import 'whatwg-fetch';
require('./index.css');


const AdminList = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },
  handleSelect(eventKey) {
    console.log(eventKey);
    this.setState({
      activePage: eventKey
    });
  },
  readPage:function (start,per) {
    const token=getToken();
    fetch(`${API.admin}?start=${start}&pageSize=${per}`,{
      headers:{
        Token:token
      }
    })
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        console.log(json);
        changePageSucc(json.data.pages,start,json.data.count)
      })
  },
  componentDidMount:function () {
    const {changePageSucc}=this.props.action;
    const start=1;
    const per=15;
    this.readPage(start,per);
  },
  render: function () {
    const {count,curPage,page}=this.props.pages;
    return (
      <div className="adminList-wrapper">
        <ListTable page={page}/>
        <div className="pager">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={Math.ceil(count/15)}
            maxButtons={5}
            activePage={curPage}
            onSelect={this.handleSelect}/>
        </div>
      </div>
    )
  }
});


export  default AdminList;
