import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: 'add JSX here',
      output: '',
      err: ''
    }
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
          .transform(code, {presets: ['es2015', 'react']})
          .code,
        err: ''
      })
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea 
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}
          cols="30" rows="10" />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }
}

export default App