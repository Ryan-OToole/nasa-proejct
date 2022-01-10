import React from 'react'

const Picture = (props) => {
  const {earth_date, sol, camera, rover} = props.photoObj
  console.log('props', props);

  return (
    <table>
      <tbody>
        <tr>
          <th>
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
          <th>
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
        </tr>

      </tbody>
    </table>
  )
}

export default Picture;
