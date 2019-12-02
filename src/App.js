import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import CommentDetail from "./components/CommentDetail/CommentDetail";
import "./App.css";
import Comment from "./models/comment";
import ApprovalCard from "./components/ApprovalCard/approvalCard";
import faker from "faker";

const commentList = [
  new Comment({ authorName: "Jim", commentDetails: faker.lorem.sentence() }),
  new Comment({ authorName: "James", commentDetails: faker.lorem.sentence() }),
  new Comment({ authorName: "Jill", commentDetails: faker.lorem.sentence() })
];

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <div className="ui container comments">
              <ApprovalCard>
                <CommentDetail comment={commentList[1]} />
              </ApprovalCard>
              <ApprovalCard>
                <CommentDetail comment={commentList[2]} />
              </ApprovalCard>
              <ApprovalCard>
                <CommentDetail comment={commentList[0]} />
              </ApprovalCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
