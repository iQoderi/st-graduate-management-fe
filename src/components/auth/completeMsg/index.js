/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';
import  {Link} from  'react-router';
import ReadMore from '../ReadMore';
require('./index.css');
const myAvatar = require('../../../images/avator.jpg');
const CompleteMsg = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="brand">NEUQ.
          <span>大学生就业择业平台</span>
          <Link to="/auth/login" className="logout">退出</Link>
        </h1>
        <div className="user-info">
          <div className="avatar">
            <img src={myAvatar} alt="个人头像"/>
          </div>
          <div className="form-container">
            <div className="raw-email">
              <span>1621532838@qq.com</span>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input placeholder="姓名" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <select>
                  <option>经济学院</option>
                  <option>管理学院</option>
                  <option>计算机与通信工程学院</option>
                  <option>控制工程学院</option>
                  <option>语言学院</option>
                  <option>数学与统计学院</option>
                  <option>资源与材料学院</option>
                </select>
              </div>
            </div>

            <div className="control-group">
              <div className="from-group">
                <input placeholder="专业" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input placeholder="班级" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input placeholder="QQ号" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input placeholder="手机号" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <a href="javascript:;" className="btn btn-link btn-circle save">
                保存
              </a>
              <a href="javascript:;" className="cancel">
                取消
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">&copy; 2016 东北大学秦皇岛分校数学与统计学院</div>
      </div>
    )
  }
});


export  default CompleteMsg;
