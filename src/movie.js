import React, { Component } from 'react';
import Actor from './actor';

class Movie extends Component {

  state = { liked: false, hideActors: true };

  render() {
    let likedOrNot = '';

    if(this.state.liked === true) {
      likedOrNot = '❤';
    } else {
      likedOrNot = 'Like';
    }

    let actorsList = this.props.movie.cast.map(actor => (
      <Actor name={actor.name} role={actor.role} />
    ))

    let myActors;
    if(this.state.hideActors === true) {
      myActors = null;
    } else {
      myActors = actorsList;
    }

    return (
      <div>
        <h2>{ this.props.movie.title }</h2>
        <img src={ this.props.movie.poster } alt={this.props.movie.title} />

        <div><strong>Rating: { this.props.movie.rating }</strong></div>
        <p>
        { this.props.movie.description }
        </p>



      { myActors }

        <button className="like" onClick={this.toggleLike}>
          { likedOrNot }
        </button>

        <button onClick={this.toggleActors}>
          Actors
        </button>

      </div>
    );
  }

  toggleLike = () => {
    if(this.state.liked === true) {
      this.setState( { liked: false } );
    } else {
      this.setState( { liked: true } );
    }
  }

  toggleActors = () => {
    if(this.state.hideActors === true) {
      this.setState( { hideActors: false } );
    } else {
      this.setState( { hideActors: true } );
    }
  }
}

export default Movie;
