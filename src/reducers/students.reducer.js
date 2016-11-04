/**
 * Created by qoder on 16-11-3.
 */

import {GET_STUDENTS_SUCCESS,GET_GRADUATE_FAIL} from '../actions/consts';
const initialState={
  page:1,
  size:15,
  count:0,
  academy:"全部",
  students:[],
  major:"",
  class:"",
  isBlock:'全部'
}

export default function students(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS_SUCCESS:
      return {
        page:action.page,
        size:action.size,
        count:action.count,
        academy:action.academy,
        students:action.students,
        major:action.major,
        class:action.stuClass,
        isBlock:action.isBlock
      }

    case GET_GRADUATE_FAIL:
      return initialState;
    default:
      return state;
  }
}
