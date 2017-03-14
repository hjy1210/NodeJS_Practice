import React from 'react'
import login from '../src/login'

export default React.createClass({
  render(){
    var token
    login.login("honjang","abcde",(e)=>{
      console.login(e)
      return <div>{e}</div>
    })
    //return <div>Hello World</div>
  }
})