import React, { Component } from 'react';
import './App.css';

const Header = () =>
  <section className="hero is-info">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          <span className="icon"><i className="fas fa-film"></i></span> Cinema
        </h1>
        <h2 className="subtitle">
          Buy your ticket, a candy and pick a seat!
        </h2>
      </div>
    </div>
  </section>

const Footer = () =>
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        Created by Roberto for demo purposes only.
      </p>
    </div>
  </footer>

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Dale</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
