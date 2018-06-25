import React, { Component } from 'react';
import {pluralize, titleize} from 'inflected';
import './App.css';

const CandyInput = ({candy}) =>
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{titleize(candy)}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control is-expanded">
          <div className="select">
            <select>
              <option selected>0 {pluralize(candy)}</option>
              <option>1 {candy}</option>
              <option>2 {pluralize(candy)}</option>
              <option>3 {pluralize(candy)}</option>
            </select>
          </div>
        </p>
      </div>
    </div>
  </div>

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="content">
          <h2 className="title">Candy Store</h2>
          <p>
            Catch your candies in the exclusive line before your movie session.
          </p>
          <CandyInput candy="lolypop"/>
          <CandyInput candy="chocolate"/>
        </div>
        <nav className="level">
          <div className="level-left">
          </div>

          <div className="level-right">
            <p className="level-item">
              <div className="field is-grouped">
                <p className="control">
                  <button className="button">Cancel</button>
                </p>
                <p className="control">
                  <button className="button is-primary">Add to cart</button>
                </p>
              </div>
            </p>
          </div>
        </nav>
      </section>
    );
  }
}

export default App;
