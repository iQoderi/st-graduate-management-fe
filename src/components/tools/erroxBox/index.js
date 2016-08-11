/**
 * Created by qoder on 16-6-14.
 */
import React from 'react';

const AlertDanger=React.createClass({
  render:function () {
    return (
      <div className="alert alert-danger alert-dismissable">
        <button aria-hidden="true" data-dismiss="alert" className="close" type="button">×</button>
        H+是一个很棒的后台UI框架 <a className="alert-link" href="notifications.html#">了解更多</a>.
      </div>
    )
  }
});
