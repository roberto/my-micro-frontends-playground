import React, { Component, Fragment } from 'react';
import './App.css';

const Header = () =>
  <section className="hero is-primary">
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

const ContactForm = () =>
  <Fragment>
    <div className="box">
      <p className="title is-4">Contact Information</p>
      <p className="subtitle is-6">It will be used to send information about the tickets.</p>
      <div className="field">
        <label className="label">Name</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Put your name" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input className="input" type="email" placeholder="Email address" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
    </div>
  </Fragment>

const PageActions = () =>
  <nav className="level">
    <div className="level-left">
    </div>
    <div className="level-right">
      <span className="level-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="button">
              <span>Cancel</span>
              <span className="icon is-small">
                <i className="fas fa-times"></i>
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary">
              <span>Continue</span>
              <span className="icon is-small">
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </p>
      </div>
      </span>
    </div>
  </nav>


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className="title">Dale</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <ContactForm />
              <div className="box">
                <my-container></my-container>
              </div>
              <PageActions />
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
