/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';
import  {Link} from  'react-router';
import isLegal from '../../../library/isLegal';
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import goto from '../../../library/changeHash';
require('./index.css');

const myAvatar = require('../../../images/avator.jpg');
const CompleteMsg = React.createClass({
  getInitialState: function () {
    return {
      myEmail: '841599872@qq.com'
    }
  },
  saveMyMess: function () {
    var data = [
      this.refs.c_name.value, this.refs.c_academy.value,
      this.refs.c_major.value, this.refs.c_class.value,
      this.refs.c_num.value, this.refs.c_qqNum.value, this.refs.c_phone.value];
    var _this = this;
    const {is_loading, is_tips, action}=this.props;
    if (isLegal(data)) {
      var options = {
        email: '841599872@qq.com',
        name: this.refs.c_name.value,
        academy: this.refs.c_academy.value,
        major: this.refs.c_major.value,
        class: this.refs.c_class.value,
        studentId: this.refs.c_num.value,
        QQNumber: this.refs.c_qqNum.value,
        phone: this.refs.c_phone.value,
        role: this.refs.c_role0.checked ? '毕业生' : '在校生'
      };
      _this.loading();
      const token = localStorage.getItem('neuqst.token');
      fetch(API.BaseMsg, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
          'Token': token
        },
        body: JSON.stringify(options)
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          _this.loaded();
          if (json.code === 10000) {
            _this.isTips('保存信息完成', 1000);
            goto('/home', 1500);
          } else {
            _this.isTips(json.data.Msg, 1500);
          }
        })
    } else {
      _this.isTips('请填写完整您的信息', 1500);
    }
  },
  isTips: function (tip, time) {
    clearTimeout(timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    var timer = setTimeout(this.props.action.hideTips, time);
  },
  loading: function () {
    const {showLoading}=this.props.action;
    showLoading();
  },
  loaded: function () {
    const {hideLoading}=this.props.action;
    hideLoading();
  },
  componentDidMount: function () {
    alert('我被渲染啦');
  },
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
              <span>{this.state.myEmail}</span>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input placeholder="姓名"
                       ref="c_name"
                       autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <select ref="c_academy">
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
                <input
                  ref="c_major"
                  placeholder="专业" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input
                  ref="c_class"
                  placeholder="班级" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input
                  ref="c_num"
                  placeholder="学号" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input
                  ref="c_qqNum"
                  placeholder="QQ号" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group">
              <div className="from-group">
                <input
                  ref="c_phone"
                  placeholder="手机号" autocomplete="off" type="text"/>
              </div>
            </div>
            <div className="control-group radio-2">
              <label className="radio-inline radio-2">
                <input type="radio" name="role" value="0" defaultChecked={true} ref="c_role0"/>毕业生
              </label>
              <label className="radio-inline">
                <input type="radio" name="role" value="1" ref="c_role1"/>在校生
              </label>
            </div>
            <div className="control-group">
              <a
                onClick={this.saveMyMess}
                href="javascript:;" className="btn btn-link btn-circle save">
                保存
              </a>
              <Link to="/auth/login" className="cancel">
                取消
              </Link>
            </div>
          </div>
        </div>
        <div className="c-footer">&copy; 2016 东北大学秦皇岛分校数学与统计学院</div>
      </div>
    )
  }
});


export  default CompleteMsg;
