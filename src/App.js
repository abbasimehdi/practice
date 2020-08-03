import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/validation';
import Char from './Char/Char';
class App extends Component {
  state = {
    userInput : ''
  }
  inputChangehanddler = (event) => {
      this.setState({ userInput : event.target.value });
  }
  deleteCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedtext = text.join('');
      this.setState({ userInput : updatedtext});
  };
   render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index) }
        />
    });
    const style = {
        backgroundColor: 'red',
        padding: '10px',
        color: 'aliceblue',
        // border-top-left-radius: '10px',
        // border-top-right-radius: '10px',
      }
    if(this.state.userInput.length >= 5){
      style.backgroundColor = 'green';
    }
  
    return (
      <div className="App">
        <div className="Screen">
          <p style={style}>inputs</p>
            <input 
              name="name" 
              onChange={this.inputChangehanddler} 
              value={this.state.userInput}
              />
            <p>{this.state.userInput}</p>
            <Validation  
               inputLenght = {this.state.userInput.length}
            />
            { charList } 
        </div>
        
      </div>
    );
  }
}

export default App;
