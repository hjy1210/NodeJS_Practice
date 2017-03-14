import React from 'react'
import login from '../src/login'
import {getJobs} from '../src/getJobs'

export default class extends React.Component {
  constructor() {
    super()
    this.state = { token: "Hello Word 1234" }
    this.handler = function(){
      login.login("honjang", "abcde", (e) => {
        this.setState({ token: e })
        console.log(e)
      })
      //this.setState({token:"Beauty"})
    }
    this.handler=this.handler.bind(this)
    this.handler2=function(){
      getJobs((jobs)=>{
        this.setState({token:JSON.stringify(jobs,null,2)})
      })
    }
    this.handler2=this.handler2.bind(this)
  }
  render() {
    return (
      <div>
        <button type="button" onClick={()=>{
            this.handler2()
          }
        }>Get Token
        </button>
        <div>
          {this.state.token}
        </div>
      </div>)
  }
}