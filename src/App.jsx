import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import Alert from "react-bootstrap/Alert";

function App() {
  return (
    <>
      <Header />
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
    </>
  );
}

export default App;
