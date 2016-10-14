/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import QuerySTForm from './queryForm';
import SearchStuModal from '../../../tools/searchStuResult.modal';
require('./index.css');

const QueryMsg = React.createClass({
  render: function () {
    const {action, myMsg, isSearchStu, graduateList}=this.props;
    return (
      <div className="AddAdmin-wrapper search-stu-wrapper">
        <QuerySTForm action={action}/>
        <div style={{marginTop: '100px'}}>
          <SearchStuModal
            myMsg={myMsg}
            isSearchStu={isSearchStu}
            graduateList={graduateList}
            action={action}/>
        </div>
      </div>
    )
  }
});

export  default QueryMsg;
