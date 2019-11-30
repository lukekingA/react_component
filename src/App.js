
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import CommentDetail from "./components/CommentDetail/CommentDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <div className="ui container comments">
              <CommentDetail/>
              <CommentDetail/>
              <CommentDetail/>
              <CommentDetail/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
