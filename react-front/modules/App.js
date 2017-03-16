import React from 'react'
import {getCors,login, getDishes} from '../src/login'

export default class extends React.Component {
  constructor() {
    super()
    this.state = { token: "Hello Word" ,dishes:""}
    this.getCorsHandle=this.getCorsHandle.bind(this)
    this.loginHandle=this.loginHandle.bind(this)
    this.getDishesHandle=this.getDishesHandle.bind(this)
  }
  getCorsHandle(event){
    getCors((result)=>{
      console.log(JSON.parse(result))
      this.setState({token:JSON.stringify(JSON.parse(result))})
    })
  }
  loginHandle(event){
    login('honjang','abcde',(result)=>{
      console.log(result)
      this.setState({token:result})
    })
  }
  getDishesHandle(event){
    getDishes(this.state.token,(result)=>{
      var str=JSON.stringify(JSON.parse(result),null,2)
      console.log(str)
      this.setState({dishes:str})
    })
  }
  
  render() {
    return (
      <div>
        <p>There is a restful service, using cors as middleware, on localhost:3000. 
          Although restful service and us are in different domains,
          we still can use this restful service
          as our back end. Following buttons call restful services.
        </p>
        <button onClick={this.getCorsHandle} >
          Get home page
        </button>
         <button onClick={this.loginHandle} >
          Login, Get token
        </button>
         <button onClick={this.getDishesHandle} >
          After login, get Dishes
        </button>
        <h2>Token</h2>
        <div>
          {this.state.token}
        </div>
        <h2> Dishes </h2>
        <div>{this.state.dishes}</div>
      </div>)
  }
}
