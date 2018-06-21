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
        <Header header={this.state.headerText} />
        <Content content={this.state.contentText}/>
        {/*<Clock />*/}
      </div>
    );
  }
}

App.defaultProps = {
  header: 'Default Props for the Header....',
  content: 'Default Props for the content....'
}

class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => {this.tick()}
      , 1000)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render(){
    return (
      <div>
        <h1>This is the time: {this.state.date.toLocaleTimeString()} </h1>
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.content}
      </div>
    );
  }
}

export default App;
