import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 300,
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    entries: 0,
    joined: ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        entries: user.entries,
        joined: user.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://tranquil-falls-14865.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://tranquil-falls-14865.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          }).then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);

    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }

    this.setState({ route: route });
  }

  handleImageUpload = (file) => {
    const files = Array.from(file);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch('https://tranquil-falls-14865.herokuapp.com/image-upload', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {
        this.setState({
          input: data[0].secure_url
        })
      });
  }

  onButtonRenew = () => {
    this.setState({
      imageUrl:'',
      input:''
    })
  }


  render() {
    const { isSignedIn, imageUrl, route, boxes ,input} = this.state;
    return (
      <div className="App">
        <Particles params={ particlesOptions } className='particles' />
        <Navigation onRouteChange={ this.onRouteChange } isSignedIn={ isSignedIn } />
        { route === 'home' ?
          <div>
            <Logo />
            <Rank name={ this.state.user.name } entries={ this.state.user.entries } />
            <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit } onButtonRenew={this.onButtonRenew} imageUrl={ imageUrl } input={ input } faces={boxes.length}/>
            <FaceRecognition boxes={ boxes } imageUrl={ imageUrl } handleImageUpload={ this.handleImageUpload } input={input}/></div>
          : (route === 'signin' ?
            <Signin onRouteChange={ this.onRouteChange } loadUser={ this.loadUser } /> :
            <Register onRouteChange={ this.onRouteChange } loadUser={ this.loadUser } />
          )
        }
      </div>
    );
  }
}

export default App;
