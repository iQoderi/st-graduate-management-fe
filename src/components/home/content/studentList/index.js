/**
 * Created by qoder on 16-11-2.
 */
import React,{Component} from 'react';
import ListTable from './ListTable'
import QueryStuForm from './queryStuForm'
import {Pagination} from 'react-bootstrap';
import './index.css';


class StudentList extends Component{
  constructor(props) {
    super(props);
    this.readPage=this.readPage.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
  }

  readPage(page,size,body){
    const {getStudents}=this.props.action;
    getStudents(page,size,body);
  }

  handleSelect(eventKey) {
    const per = 15;
    const {academy,major,isBlock}=this.props.students;
    const body={academy,major,isBlock};
    this.readPage(eventKey, per,body);
  }
  componentDidMount() {
    this.readPage(1,15,"全部","","全部");
  }

  render(){
      const {students,action}=this.props;
      return (
        <div className="adminList-wrapper">
          <QueryStuForm action={action}/>
          <ListTable students={students} action={action}/>
          <div className="pager">
            <Pagination
            prev
            next
            first
            last
            boundaryLinks
            items={Math.ceil(students.count/ 15)}
            maxButtons={5}
            activePage={students.page}
            onSelect={this.handleSelect}/>
          </div>
        </div>
      )
    }
}

export default StudentList;
