// show what image is clicked *
// when an image is clicked shuffle the images.*
// make a new array of images (notPicked). 
// when an image is clicked compare the id to (notPicked) if it is undefined the game is over.
// if there is a match increment the score and remove the image from notPicked.


import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FriendCard from './components/FriendCard/';
import friends from './friends.json';
import './App.css';


class App extends Component {
  notPicked = friends;
  state = {
    friends: friends,
    message: 'Click on an image to Start!',
    score: 0,
    topScore: 0,
  };


  
  // Randomize array element order in-place.
  // Using Durstenfeld shuffle algorithm.
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    // console.log(array);
    this.setState({ friends })
    
  };

  friendClick = id => {
    console.log(id);
    console.log(this.notPicked);
    
    const result = this.notPicked.find( image => image.id === id);
    console.log(result);

    if (result === undefined){
      this.notPicked = friends;
      this.setState({
        friends: friends,
        message: "You're Wrong, sorry!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0
      })
    }
    else {
      let newNotPicked = this.notPicked.filter(val => val.id !== id);
      this.notPicked = newNotPicked;
      this.setState({
        message: "You are correct!",
        score: this.state.score + 1,
      })
    }
    
    this.shuffleArray(friends);
    
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />
        <div className='friendCard'>
          {this.state.friends.map(friend => (
          
          
            <FriendCard
              friendClick={this.friendClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
