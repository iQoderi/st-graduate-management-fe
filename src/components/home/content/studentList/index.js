/**
 * Created by qoder on 16-11-2.
 */
import React,{Component} from 'react';
import ListTable from './ListTable'
import QueryStuForm from './queryStuForm'
import {Pagination} from 'react-bootstrap';
import './index.css';


class StudentList extends Component{
  render(){
    return (
      <div className="adminList-wrapper">
        <QueryStuForm/>
        <ListTable/>
        <div className="pager">
          <Pagination
            prev
            next
            first
            last
            boundaryLinks
            items={Math.ceil(100 / 15)}
            maxButtons={5}
            activePage={1}
            onSelect={this.handleSelect}/>
        </div>
      </div>
    )
  }
}

export default StudentList;
