import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store';


export function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName"
        value={props.newChannelEntry}
        placeholder="Enter channel name"
        onChange={props.handleChange}
         />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const mapDispatchToProps = function (dispatch) {
  return {
    handleChange(evt){
      dispatch(writeChannel(evt.target.value))
    },

    handleSubmit(evt){
      evt.preventDefault();
      const name = evt.target.channelName.value;
      dispatch(postChannel({ name }));
    }
  };
}
const mapStateToProps = function (state) {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;

