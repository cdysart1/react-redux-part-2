import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';

export function ChannelList (props) {
  return (
    <ul>
      <li>
        <NavLink to={"URL_GOES_HERE"} activeClassName="active">
          <span># {/* channel name goes here */}</span>
          <span className="badge">{/* number of messages calculation goes here */} </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

const mapStateToProps = function (state) {
  return {};
};

 const ChannelListContainer = connect(mapStateToProps)(ChannelList);
 export default ChannelListContainer;



