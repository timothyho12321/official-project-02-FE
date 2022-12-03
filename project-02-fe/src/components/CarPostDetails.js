import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function CarPostDetails(props) {
  const values = [true]
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          See Details
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>{props.carStore.brand} {props.carStore.name_of_model}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div>



            <div><h4>Car Details: </h4></div>
            <div>
              Name of car poster: {props.carStore.username}

            </div>


            <div>
              <img src={props.carStore.image}
                style={{
                  width: "100%",
                  height: "100%"
                }} />
            </div>

            <div>
              <p>Year of Launch: {props.carStore.year_of_launch}</p>
            </div>

            <div>
              <p>Type: {props.carStore.type}</p>
            </div>
            <div>
              <p>Seat Number: {props.carStore.
                seats}</p>
            </div>
            <div>
              <p>Type: {props.carStore.type}</p>
            </div>
            <div>
              <p>Color: {props.carStore.color.name}</p>
            </div>
            <div>
              <p>Color Shade: {props.carStore.color.shade}</p>
            </div>
            <div>
              <p>Land Terrain: {props.carStore.land_terrain}</p>
            </div>
            <div>
              <p>Car Rating: {props.carStore.rating}
                <FontAwesomeIcon icon={faStar} />
              </p>
            </div>
            <div>
              <p>Description: {props.carStore.description}</p>
            </div>
            <div>
              <p>Price: ${props.carStore.cost_price}</p>
            </div>
            <div>
              <p>Engine Name: {props.carStore.engine_id}</p>
            </div>
            <div>
              <p>Comfort Features: 
                {props.carStore.comfort_features_id.map(c=>
                  <span className='badge bg-secondary ms-2'>
                    {c}</span>)}</p>
            </div>




            <div></div>

          </div>

          



        </Modal.Body>
      </Modal>
    </>
  );
}

