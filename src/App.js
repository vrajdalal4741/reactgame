import React, { Component } from 'react';
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

  Shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  gameWon = score => {
    if (score === 11) {
      const images = this.state.images;
      for (let i = 0; i < images.length; i++) {
        images[i].clicked = false
      };
        if(this.state.currentScore > this.state.maxScore){
          this.setState({ maxScore: this.state.currentScore + 1 });

        };

        this.setState({ images });
        this.setState({ navNote: "YOU JUST WON!!" });
        this.setState({ currentScore: 0});

    };
  };

  updateState = id => {

    const Image = this.state.images.find(image => image.id === id);

    if(Image.clicked === false) {

      Image.clicked = true;
      this.Shuffle(images);

      this.setState({ images });
      this.setState({ navNote: "Nice! Continue choosing a different RB!" });
      this.setState({ currentScore: this.state.currentScore + 1 });
      this.gameWon(this.state.currentScore);

    } else {

        const images = this.state.images

        for (let i = 0; i < images.length; i++) {
          images[i].clicked = false

        };

        if(this.state.currentScore > this.state.maxScore){
          this.setState({ maxScore: this.state.currentScore });

        }

        this.setState({ images });
        this.setState({ navNote: "OH NO! You clicked on that back already!" });
        this.setState({ currentScore: 0});
    };

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
