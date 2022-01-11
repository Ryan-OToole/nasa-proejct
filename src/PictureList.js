import React, { Component } from 'react'
import Picture from './Picture'

class PictureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            containerArray: []
        }
    }

    mapPictures = () => {
        let container = [];
        if ( this.props.photoContainer != {} ) {
            for (let photoKey in this.props.photoContainer.photos) {
                let photoObj = this.props.photoContainer.photos[photoKey];
                container.push(photoObj);
            }
        }
        return container.map(photoObj => {
            return <Picture photoObj={photoObj} />
        })
    }
    


    render() {
        return (
            <div>
                {this.mapPictures()}
            </div>
        );
    }
}

export default PictureList;