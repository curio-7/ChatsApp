import React from 'react'
import { Route } from 'react-router-dom'
import ChatPage from './Pages/ChatPage'
import HomePage from './Pages/HomePage'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component = {HomePage} exact />
      <Route path="/chats" component = {ChatPage}/>
    </div>
  )
}

export default App

