import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { Upload } from '@icedesign/base';
import './Editor.scss';

// const { Core } = Upload;
// const formats = [
//   'header',
//   'font',
//   'size',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
//   'color',
// ];
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = value => {
    this.setState({ text: value });
    const { onChange } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  };

  render() {
    return (
      <div className="editor-wrapper">
        <ReactQuill value={this.state.text} onChange={this.handleChange} />
        <div className="editor-display">
          <p dangerouslySetInnerHTML={{ __html: this.state.text }} />
        </div>
      </div>
    );
  }
}

export default Editor;
