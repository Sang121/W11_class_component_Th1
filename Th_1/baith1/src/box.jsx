import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Box extends Component {
  constructor (props){

    super(props)
    this.state={
        bgBox:`green`
    }
  }
componentDidMount(){
    setTimeout(() => {
        this.setState({
          bgBox: 'grey'
        });
      },1000
      );
      
}
  render() {
    return (
      <div
      className="App" style={{height:100 ,width:100,backgroundColor:this.state.bgBox}} >box</div>
    )
  }
}
