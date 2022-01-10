import React, { Component, Fragment } from 'react'
import PictureList from './PictureList';

class PictureContainer extends Component {

    state = {
        photoContainer: {},
        filteredPhotoContainer: {}
        };

    componentDidMount() {
        const MY_KEY = process.env.REACT_APP_API_KEY;
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${MY_KEY}`)
          .then(response => response.json())
          .then(data => this.setState({
                    photoContainer: data,
                    filteredPhotoContainer: data,
                    })
          )
      }
    
  render() {
    return (
      <div>
          <PictureList photoContainer={this.state.photoContainer} />
      </div>
    );
  }
}

export default PictureContainer;
