import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState(
      {red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }
  render(){
    return(
      <div>
        <NumInput
          ref="red"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          label="Red"
          update={this.update} />
      </div>
    )
  }
}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : '';
    return (
      <div>
        <input ref="inp"
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
        {label}
      </div>
    );
  }
}

NumInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  val: PropTypes.number,
  label: PropTypes.string,
  update: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range',
}

// class App extends React.Component {
//   render() {
//     return (
//       <Buttons>
//         <button value="A">A</button>
//         <button value="B">B</button>
//         <button value="C">C</button>
//       </Buttons>
//     )
//   }
// }

// class Buttons extends React.Component {
//   constructor() {
//     super();
//     this.state = {selected: 'None'}
//   }
//   selectItem(selected) {
//     this.setState({selected})
//   }
//   render() {
//     let fn = child =>
//       React.cloneElement(child, {
//         onClick: this.selectItem.bind(this, child.props.value)
//       })
//     let items = React.Children.map(this.props.children, fn)
//     return (
//       <div>
//         <h2>You have selected: {this.state.selected}</h2>
//         {items}
//       </div>
//     );
//   }
// }


// export class App extends React.Component {
//   render() {
//     return (
//       <Parent>
//         <div className="childA"></div>
//         <div className="childB"></div>
//       </Parent>
//     )
//   }
// }

// class Parent extends React.Component {
//   render() {
//     let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
//     // let items = React.Children
//     //   .map(this.props.children, child => child)
//     // map is one of the methods of React.Children
//     // takes this.props.children as first argument
//     // let items = React.Children.only(this.props.children)
//     console.log(items)
//     return null
//   }
// }

// export class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: 'add JSX here',
//       output: '',
//       err: ''
//     }
//   }
//   update(e) {
//     let code = e.target.value;
//     try {
//       this.setState({
//         output: window.Babel
//           .transform(code, {presets: ['es2015', 'react']})
//           .code,
//         err: ''
//       })
//     }
//     catch(err) {
//       this.setState({err: err.message})
//     }
//   }
//   render() {
//     return (
//       <div>
//         <header>{this.state.err}</header>
//         <div className="container">
//           <textarea 
//           onChange={this.update.bind(this)}
//           defaultValue={this.state.input}
//           cols="30" rows="10" />
//           <pre>
//             {this.state.output}
//           </pre>
//         </div>
//       </div>
//     );
//   }
// }


// const HOC = (InnerComponent) => class extends React.Component {
//   constructor() {
//     super();
//     this.state = {count: 0}
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount() {
//     console.log('will mount')
//   }
//   render() {
//     // {...this.props} and {...this.state}
//     // to pass the props and state to the innerComponent
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     );
//   }
// }

// const Button = HOC((props) => 
//   // will update the count of the button - the component
//   // independantly from the count of the label
//   <button onClick={props.update}>
//     {props.children} - {props.count}
//   </button>)

// class Label extends React.Component {
//   componentWillMount() {
//     console.log('label will mount')
//   }
//   render() {
//     // will update the count of the label only
//     return (
//       <label onMouseMove={this.props.update}>{this.props.children}  - {this.props.count}</label>
//     );
//   }
// }

// const LabelHOC = HOC(Label)

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount() {
//     // call to the Starwars API
//     fetch('http://swapi.co/api/people/?format=json')
//       // get the response as json
//       .then( response => response.json())
//       // set the result items in the state of items
//       .then( ({results: items}) => this.setState({items}))
//   }
//   filter(e){
//     // set the filter value from the input below
//     this.setState({filter: e.target.value})
//   }
//   render() {
//     // get the items
//     let items = this.state.items;
//     // create a filter only if the input is 
//     // filled in
//     if (this.state.filter) {
//       items = items.filter( item =>
//         // only show the items that have a letter in commun
//         // with the text in the input
//         // (searching for them as lowercase)
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase())
//       )
//     }
//     return (
//       // input of the filter
//       // map the elements from the array
//       // the key is needed in this context
//       <div>
//         <input type="text" onChange={this.filter.bind(this)}/>
//         {items.map( item => 
//           <Person key={item.name} person={item} />)}
//       </div>
//     );
//   }
// }
// // the key is not needed in the context of Person because it
// // doesn't have any siblings
// const Person = (props) => <h4>{props.person.name}</h4>

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {increasing: false}
//   }

//   update(){
//     ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('root'))
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//   render() {
//     console.log(this.state.increasing)
//     return(
//       <button onClick={this.update.bind(this)}>
//         {this.props.val}
//       </button>
//     )
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`prevProps: ${prevProps.val}`)
//   }
// }

// App.defaultProps = {val: 0}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount() {
//     console.log('componentWillMount');
//     this.setState({m: 2})
//   }
//   render() {
//     console.log('render');
//     return <button onClick={this.update}>{this.state.val * this.state.m}</button>
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//     console.log(ReactDOM.findDOMNode(this))
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//     clearInterval(this.inc)
//   }
// }

// class Wrapper extends React.Component {
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }

//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }

// export default Wrapper

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {a: ''}
//   }
//   update(e) {
//     this.setState({
//       a: ReactDOM.findDOMNode(this.a).value,
//       b: this.b.refs.input.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Input1
//           ref={component => this.a = component}
//           update={this.update.bind(this)}
//         /> {this.state.a}
//         <hr/>
//         <Input2
//           ref={component => this.b = component}
//           update={this.update.bind(this)}
//         /> {this.state.b}
//       </div>
//     );
//   }
// }

// class Input1 extends React.Component {
//   render() {
//     return <input type="text" onChange={this.props.update}/>
//   }
// }

// class Input2 extends React.Component {
//   render() {
//     // without the ref, this.a references to the div
//     return <div><input ref="input" onChange={this.props.update}/></div>
//   }
// }


// export class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {currentEvent: '---'}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({currentEvent: e.type})
//   }
//   render() {
//     return (
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onChange={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update}
//           cols="30"
//           rows="10" />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }

// export class App extends React.Component {
//   render() {
//     return <Title text="this is a title" />
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   // text: React.PropTypes.String.isRequired
//   text(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`)
//     }

//     if (props[propName].length <6 ) {
//       return new Error(`${propName} is too short`)
//     }
//   }
// }




// export class App extends React.Component {
//   render() {
//     return <Button>I <Heart /> React</Button>
//   }
// }

// const Button = (props) => <button>{props.children}</button>

// const Heart = (props) => <span>&hearts;</span>


// export class Heart extends React.Component {
//   render() {
//     return (
//       <span>&hearts;</span>
//     );
//   }
// }



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state text',
//       cat: 0
//     }
//     this.update = this.update.bind(this)
//   }
//   update( e ) {
//     this.setState({txt: e.target.value})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update} />
//       </div>
//     )
//   }
// }

// const Widget = (props) =>
//   <input type="text" onChange={props.update} />

// Definition of the properties that can be called in the component
// DEPRECATED
// Should use the prop-types package from npm instead
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired,
// }

// App.defaultProps = {
//   txt: 'this is the default text',
//   cat: 5
// }


// const App = () => <h1>Hello Stateless</h1>


export default App
