import React, {useState} from 'react';
import './App.css';


class App extends React.Component {
  state = {
    Person: {
      fullName: "Wissem Jderi",
      bio: "I im 16 years old and im learning React!",
      imgSrc : 'https://gomycodelearn.blob.core.windows.net/profiles/ddd72406-313d-44bd-82a2-01a19ec3201a-132746154884244297.jpg' ,
      profession: "Learning Web Development"
    },
    show: false
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="img"></img>
            <h1>{this.state.Person.profession}</h1>
          
          </>
        )}

        <button onClick={this.handleShowPerson}>Show informations</button>
      </>
    );
  }
}

export default App;
