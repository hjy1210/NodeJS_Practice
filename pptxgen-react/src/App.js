import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import chardet from 'chardet'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { encoding: "", text: "" }
    this.drop = this.drop.bind(this)
    this.setEncoding = this.setEncoding.bind(this)
  }
  setEncoding(ev,file) {
    // var buf = new Uint8Array(ev.target.result) // OK
    // var buf = new Array(ev.target.result)  // Not OK
    // var buf = ev.target.result // Not OK
    // var buf = new Buffer(ev.target.result)  //OK but depracated
    var buf = Buffer.from(ev.target.result)
    var enc = chardet.detect(buf)
    console.log(enc)
    this.setState({ encoding: enc })
    var reader=new FileReader()
    reader.readAsText(file,enc)
    reader.onloadend=(ev)=>{
      this.setState({text:ev.target.result})
    }
    // this.setState({text:buf.toString(enc)})  // not work for Big5, OK for utf8
  }
  drop(ev) {
    ev.preventDefault();
    var file = ev.dataTransfer.files[0];
    var reader = new FileReader()
    reader.onloadend = (ev)=>this.setEncoding(ev,file)
    reader.readAsArrayBuffer(file)
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Drag and drop any textfile, will display the content and encoding of the file.
        </p>
        <p>Encoding is {this.state.encoding}</p>
        <textarea readOnly onDrop={this.drop} onDragOver={this.allowDrop} rows="20"  value={this.state.text}></textarea>

      </div>
    );
  }
}

export default App;
