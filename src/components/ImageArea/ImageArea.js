import React from 'react';
import Dropzone from 'react-dropzone'

class ImageArea extends React.Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  onDrop(files) {
    this.setState({files});

    console.log(this.state.files);

    this.props.handleImageUpload(files);
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  

  render() {
    
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ))

    return (
      <section>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          onFileDialogCancel={this.onCancel.bind(this)}
        >
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
                <p>Drop files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    );
  }
}

export default ImageArea;