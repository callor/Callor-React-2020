import React, { Component } from "react";
import ReactSummernote from "react-summernote";

// import $ from "jquery";
// import Popper from "popper.js";

import "bootstrap";
import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";

import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ko-KR"; // you can import any other locale

class SummernoteEditor extends Component {
  onChange = (content) => {
    console.log("onChange ", content);
  };

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: "ko-KR",
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default SummernoteEditor;
