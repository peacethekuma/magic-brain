import React from 'react';
import Dropzone from 'react-dropzone'

class ImageArea extends React.Component {
  constructor() {
    super();
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
    return (
      <section>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          onFileDialogCancel={this.onCancel.bind(this)}
        >
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()} className="b--dashed">
              <input {...getInputProps()} />
                <p className="pa4 lh-copy">Drop files here, <br/> or click to select files</p>
            </div>
          )}
        </Dropzone>
      </section>
    );
  }
}

export default ImageArea;