//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/friendcard";
import Footer from "./components/Footer/";
import animal from "./animal.json";
import "./App.css";

class App extends Component {
  state = {
    animal,
    clicked: [],
    score: 0
  };

  imageClick = event => {
    const current = event.target.alt;
    const AlreadyClicked =
      this.state.clicked.indexOf(current) > -1;

    if (AlreadyClicked) {
      this.setState({
        animal: this.state.animal.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
        alert("You lose. Play again?");

    } else {
      this.setState(
        {
          animal: this.state.animal.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clicked: this.state.clicked.concat(
            current
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              animal: this.state.animal.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }
  };
 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.animal.map(animal => (
            <FriendCard
              imageClick={this.imageClick}
              id={animal.id}
              key={animal.id}
              image={animal.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;