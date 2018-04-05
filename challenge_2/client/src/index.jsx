import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constuctor(props) {
      this.state = {
        start : null,
        mid   : null,
        end   : null,
      };
  }
  handleClick () {
    console.log('got clicked')
  }
  handleUpdate (e) {
    console.log('state key', e.target.name)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render () {
    return (
      <div className='start-input'>
        <input name='start' type='text'/>
        <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
