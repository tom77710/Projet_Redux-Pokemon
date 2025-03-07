import React from "react";
import "./styles.css";
import { connect } from 'react-redux';

import { CLICK } from './store/action'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ click }) => {
  return (
    <div className="App">
      {click}
      <GameBoy />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ click }) => {
  return {
    click
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch({ type: CLICK })
  }
}

export default connect(mapStateToProps)(App);