import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Picture = (props) => {
  const {earth_date, sol, camera, rover, img_src} = props.photoObj
  console.log('props', props);

  return (
      <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img_src} />
            <Card.Body>
                <Card.Title>From: {rover.name} Rover</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
      </div>

  )
}

export default Picture;


{/* <table>
<tbody>
  <tr>
    <th className="add-pad">
      <h3>
        Earth Date
      </h3>
      {earth_date}
    </th>
    <th>
      <h3>
        Sol
      </h3>
      {sol}
    </th>
    <th className="add-pad">
      <h3>
        Camera
      </h3>
      {camera.name}
    </th>
    <th>
      <h3>
        Rover
      </h3>
      {rover.name}
    </th>
    <th className="add-pad">
      <h3>
        Picture
      </h3>
      <img className="rover-image" src={img_src} alt="Mars pictures"/>
    </th>
  </tr>

</tbody>
</table> */}