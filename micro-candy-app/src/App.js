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
            <select name={candy}>
              <option value="0" selected>0 {pluralize(candy)}</option>
              <option value="1">1 {candy}</option>
              <option value="2">2 {pluralize(candy)}</option>
              <option value="3">3 {pluralize(candy)}</option>
            </select>
          </div>
        </p>
      </div>
    </div>
  </div>

class App extends Component {
  addToCart(e) {
    e.preventDefault();

    const candies = {
      lolypop: e.target.lolypop.value,
      chocolate: e.target.chocolate.value
    };

    window.dispatchEvent(new CustomEvent('addToCart', { detail: candies }));
    window.dispatchEvent(new CustomEvent('closeApp'));
  }

  render() {
    return (
      <section className="section">
        <form onSubmit={this.addToCart}>
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
                    <button type="submit" className="button is-primary">Add to cart</button>
                  </p>
                </div>
              </p>
            </div>
          </nav>
        </form>
      </section>
    );
  }
}

export default App;
