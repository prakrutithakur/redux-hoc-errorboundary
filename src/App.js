import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from './actions';
import { useState } from "react";
import Axios from 'axios';
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import EnhancedLikes from "./components/HOC/LikesCount";
import EnhancedComments from "./components/HOC/CommentsCount";
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedin = useSelector(state => state.isLogged);
  // const [logtext, setlogtext] = useState("Log in");
  const [joke, setjoke] = useState(" ");
  const dispatch = useDispatch();
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((Response) => {
      console.log(Response);
      setjoke(Response.data.setup + "..." + Response.data.punchline);
    });
  }


  // if (isLoggedin) {
  //   setlogtext("Log Out");
  // } else {
  //   setlogtext("Log In");
  // }


  return (
    <div className="App sabcenter">

      <h1>Redux</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      {
        isLoggedin ? <p>signed in</p> : <p>Not signed in</p>
      }
      <button onClick={() => dispatch(isLogged())}>
        {
          isLoggedin ? "Log out" : "Log In"
        }
      </button>
      <br />
      <h1>Api Calling--Axios</h1>
      <button onClick={getJoke}>Get Joke</button>
      <br />
      {joke}

      <h1>ErrorBoundary</h1>
      <ErrorBoundary>
        <Hero hero="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hero="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hero="Joker" />
      </ErrorBoundary>

      <h1>HigherOrderObjects</h1>

      <EnhancedLikes />
      <EnhancedComments />
    </div>


  );
}

export default App;
