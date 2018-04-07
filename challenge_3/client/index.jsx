import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      test : ''
    };

    this.handleChange.bind(this);
    this.handleClick.bind(this);
  };

  handleClick () {
    console.log('clickaroo');
  };

  handleChange (e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  render () {
    return (
      <div>
        <input name='test' onChange={this.handleChange}/>  
        <button onClick={this.handleClick}> BUTTON </button>
      </div>
    )
  }
}

