import React from 'react'
import login from '../src/login'

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
  }
  render() {
    return (
      <div>
        <button type="button" onClick={()=>{
            this.handler()
          }
        }>Get Token
        </button>
        <div>
          {this.state.token}
        </div>
      </div>)
  }
}