import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Modal2(props) {
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
              <p>Price: ${props.carStore.cost_price}</p>
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





            <div></div>

          </div>

          { /* 
          
            
            <div>
              <label>Car rating:</label>
              <select name="rating"
                value={this.state.rating}
                onChange={this.updateFormField}
              >
                <option>Select one</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>

            <div>
              <label>Description</label>
              <input type="text"
                placeholder='Fill in details of car recommendation'

                className='form-control'
                name="description"
                value={this.state.description}
                onChange={this.updateFormField} />
            </div>
            <div>
              <label>Image</label>
              <input type="text"
                placeholder='Type URL link of car image'
                className='form-control'
                name="image"
                value={this.state.image}
                onChange={this.updateFormField} />
            </div>
            <div>
              <label>Select Price Estimate</label>
              <select name="price"
                value={parseInt(this.state.price)}
                onChange={this.updateFormField}
              >
                <option value={40000}>Max $40,000</option>
                <option value={60000}>Max $60,000</option>
                <option value={80000}>Max $80,000</option>
                <option value={100000}>Max $100,000</option>
                <option value={120000}>Max $120,000</option>

              </select>
            </div>
            <div className='space-create-form-input-section'>
              <label>Engine Name</label>
              <select name="engineName"
                value={this.state.engineName}
                onChange={this.updateFormField}
                className="space-engine-dropdown-tab"
              >

                {this.state.currentEngineDB.map(e =>
                  <option value={e.engine_name} key={e._id}>
                    Engine Name: {e.engine_name} |
                    Top Speed: {e.top_speed} |
                    Engine Power: {e.engine_power} |
                    Oil Consumption: {e.oil_consumption}
                  </option>)}

              </select>
            </div>

            <div>
              <input type="checkbox"
                name="comfortFeatures"
                value="637b79c39b9228988ebddfdd"
                checked={this.state.comfortFeatures.includes
                  ("637b79c39b9228988ebddfdd")}
                onChange={this.updateCheckBoxes}
              />
              <label>Blind Spot Monitoring</label>
              <input type="checkbox"
                name="comfortFeatures"
                value="637b79c39b9228988ebddfde"
                checked={this.state.comfortFeatures.includes
                  ("637b79c39b9228988ebddfde")}
                onChange={this.updateCheckBoxes}
              />
              <label>Premium Sound System</label>
              <input type="checkbox"
                name="comfortFeatures"
                value="637b79c39b9228988ebddfdf"
                checked={this.state.comfortFeatures.includes
                  ("637b79c39b9228988ebddfdf")}
                onChange={this.updateCheckBoxes}
              />
              <label>Wireless Connectivity</label>

              <div>
                <input type="checkbox"
                  name="comfortFeatures"
                  value="637b79c39b9228988ebddfe0"
                  checked={this.state.comfortFeatures.includes
                    ("637b79c39b9228988ebddfe0")}
                  onChange={this.updateCheckBoxes}
                />
                <label>Digital Keys</label>
                <input type="checkbox"
                  name="comfortFeatures"
                  value="637b79c39b9228988ebddfe1"
                  checked={this.state.comfortFeatures.includes
                    ("637b79c39b9228988ebddfe1")}
                  onChange={this.updateCheckBoxes}
                />
                <label>AI Bot Alexa Enabled</label>
                <input type="checkbox"
                  name="comfortFeatures"
                  value="637b79c39b9228988ebddfe2"
                  checked={this.state.comfortFeatures.includes
                    ("637b79c39b9228988ebddfe2")}
                  onChange={this.updateCheckBoxes}
                />
                <label>Ventilated Seats</label></div>

              <div>
                <button className='btn btn-light'
                  onClick={this.createCarPost}
                >Confirm Create Car Post</button>
              </div>


            </div>
          </div> */}



        </Modal.Body>
      </Modal>
    </>
  );
}

