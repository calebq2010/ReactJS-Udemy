import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      headerText: "Welcome to React!",
      contentText: "In this lecture, we will go over the Component testing again"
    };

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}



class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Content extends Component {
  render(){
    return (
      <div>
        <div className="App-intro">
          <p>
            In this lecture we are going to go over Component.
          </p>
        </div>
        <div>
          <h4>Array: {this.props.propArray}</h4>
        </div>
      </div> 
    );
  }
}



Content.defaultProps = {
  propArray: [1, 2, 3],
  propBool: true,
  propFunction: function(e) {return e},
  propNumber: 2,
  propString: 'Testing',
  propObject: {
    objectName: "objectValue1",
    objectName: "objectValue2",
    objectName: "objectValue3"
  }
}

Content.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunction: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

export default App;
