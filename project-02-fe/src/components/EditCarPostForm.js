import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTachographDigital, faTruckField } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';



export default class EditCarPostForm extends React.Component {
  state = {
    data: [],
    show: false,
    values: [true],
    fullscreen: true,
    editYearOfLaunch: null
  }

  handleShow(breakpoint) {
    this.setState({
      show: true,
      fullscreen: breakpoint
    })
  }

  // const values = [true]
  // const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setShow(true);
  // }

  BASE_API_URL = "http://localhost:3080/"

  searchEachCarDetailsById = async () => {

    // console.log("Search ran")
    let response = await axios.get(this.BASE_API_URL + "car/" + this.props.carStore._id)
    // console.log(response.data);

    this.setState({
      data: response.data,
      editYearOfLaunch: response.data[0].year_of_launch
    })
  }

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  updateFormNumber = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })

  }


  render() {
    return (
      <React.Fragment>
        {this.state.values.map((v, idx) => (
          <Button key={idx} className="me-2"
            variant="light"
            onClick={


              () => {
                this.handleShow()

              }
            }
            onMouseDown={

              // this.props.changeStateToEachCarYear

              this.searchEachCarDetailsById



            }
          >
            Edit own car
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
          </Button>
        ))}
        <Modal show={this.state.show} fullscreen={this.state.fullscreen} onHide={() => { this.setState({ show: false }) }}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p>{this.props.carStore.brand} {this.props.carStore.name_of_model}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div>

              <div><h4>Edit Car Details: </h4></div>

              <div>

                <input type="number"
                  className='form-control'
                  name="editYearOfLaunch"

                  value={this.state.editYearOfLaunch}
                  onChange={this.updateFormNumber}
                />

                <label>
                  Year of Launch filled
                </label>

              </div>
              <div>
                Name of car poster: {this.props.carStore.username}

              </div>


              <div>
                <img src={this.props.carStore.image}
                  style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>

              <div>
                <p>Year of Launch: {this.props.carStore.year_of_launch}</p>
              </div>

              <div>
                <p>Type: {this.props.carStore.type}</p>
              </div>
              <div>
                <p>Seat Number: {this.props.carStore.
                  seats}</p>
              </div>
              <div>
                <p>Type: {this.props.carStore.type}</p>
              </div>
              <div>
                <p>Color: {this.props.carStore.color.name}</p>
              </div>
              <div>
                <p>Color Shade: {this.props.carStore.color.shade}</p>
              </div>
              <div>
                <p>Land Terrain: {this.props.carStore.land_terrain}</p>
              </div>
              <div>
                <p>Car Rating: {this.props.carStore.rating}
                  <FontAwesomeIcon icon={faStar} />
                </p>
              </div>
              <div>
                <p>Description: {this.props.carStore.description}</p>
              </div>
              <div>
                <p>Price: ${this.props.carStore.cost_price}</p>
              </div>
              <div>
                <p>Engine Name: {this.props.carStore.engine_id}</p>
              </div>
              <div>
                <p>Comfort Features:
                  {this.props.carStore.comfort_features_id.map(c =>
                    <span className='badge bg-secondary ms-2'>
                      {c}</span>)}</p>
              </div>




              <div></div>

            </div>

            { /* 
            
              
             
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
      </React.Fragment>

    );
  }


}

