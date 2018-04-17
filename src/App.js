import React, { Component } from 'react';
import './App.css';
import Nav from "./component/Nav";
import Header from "./component/Header";
import Container from "./component/Container";
import Footer from "./component/Footer";
import Game from "./component/Game";
import images from "./images.json";

class App extends Component {

  state = {
    images: images,
    currentScore: 0,
    maxScore: 0,
    navNote: "Click on a Running Back to begin!"
  };



  render() {
    return (
     <div>
      <Nav 
        navNote={this.state.navNote} 
        currentScore={this.state.currentScore} 
        maxScore={this.state.maxScore} 
      />
      <Header />
      <Container>
        {this.state.images.map(image => (
        <Game
          updateState={this.updateState}
          id={image.id}
          key={image.id}
          name={image.name}
          image={image.image}
          clicked={image.clicked}
        />
        ))}
      </Container>
      <Footer />
     </div> 
    );
  }
}

export default App;
