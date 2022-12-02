import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTachographDigital, faTruckField } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

import './EditCarPostForm.css'

export default class EditCarPostForm extends React.Component {
  state = {
    data: [],
    show: false,
    values: [true],
    fullscreen: true,
    currentEngineDB: [],
    editNameOfModel: "",
    editYearOfLaunch: null,
    editBrandOfCar: "",
    editTypeOfCar: "",
    editSeatNumber: null,
    editColor: "",
    editColorShade: "",
    editLandTerrain: "",
    editUserName: "",
    editRating: "",
    editDescription: "",
    editImage: "",
    editPrice: null,
    editEngineName: "",
    editComfortFeatures: []

  }

  BASE_API_URL = "http://localhost:3080/"

  async componentDidMount() {
    const response = await axios.get(this.BASE_API_URL + "engine")

    // console.log(response)
    this.setState({
      currentEngineDB: response.data
    })

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



  searchEachCarDetailsById = async () => {

    // console.log("Search ran")
    let response = await axios.get(this.BASE_API_URL + "car/comfort-feature-id-to-edit/" + this.props.carStore._id)
    // console.log(response.data);


    //THIS RETURNS AN ARRAY OF THE CURRENT ENGINE DETAILS BY ID FROM ENGINE COLLECTION IN MONGODB
    let findCarEngineByName = await axios.get(this.BASE_API_URL + "engine/" + this.props.carStore.engine_id)
    // console.log("EngineName",findCarEngineByName.data)

    this.setState({
      data: response.data,
      editNameOfModel: response.data[0].name_of_model,
      editYearOfLaunch: response.data[0].year_of_launch,
      editBrandOfCar: response.data[0].brand,
      editTypeOfCar: response.data[0].type,
      editSeatNumber: response.data[0].seats,
      editColor: response.data[0].color.name,
      editColorShade: response.data[0].color.shade,
      editLandTerrain: response.data[0].land_terrain,
      editUserName: response.data[0].username,
      editRating: response.data[0].rating,
      editDescription: response.data[0].description,
      editPrice: response.data[0].cost_price,
      editImage: response.data[0].image,
      editEngineName: findCarEngineByName.data[0].engine_name,
      editComfortFeatures: response.data[0].comfort_features_id,
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

  updateCheckBoxes = (event) => {

    if (!this.state.editComfortFeatures.includes(event.target.value)) {

      this.setState({
        editComfortFeatures: [...this.state.editComfortFeatures, event.target.value]
      })

    } else {

      let indexToReplace = this.state.editComfortFeatures.indexOf(event.target.value)

      this.setState({
        editComfortFeatures: [...this.state.editComfortFeatures.slice(0, indexToReplace),
        ...this.state.editComfortFeatures.slice(indexToReplace + 1)]
      })

    }


  }


  editCarPost = async () => {

     

    try {

      let response = await axios.put(this.BASE_API_URL + "car/"
        + this.props.carStore._id, {

        name_of_model: this.state.editNameOfModel,
        year_of_launch: this.state.editYearOfLaunch,
        brand: this.state.editBrandOfCar,
        type: this.state.editTypeOfCar,
        seats: this.state.editSeatNumber,
        color: {
          "name": this.state.editColor,
          "shade": this.state.editColorShade
        },
        land_terrain: this.state.editLandTerrain,
        username: this.state.editUserName,
        email: this.props.carStore.email,
        rating: this.state.editRating,
        description: this.state.editDescription,
        cost_price: this.state.editPrice,
        image: this.state.editImage,

        engine_name: this.state.editEngineName,


        comfort_features_id: this.state.editComfortFeatures

      }

      )

      console.log(response)

      // TO debug and delete
      // {this.props.searchEmailPost}

    } catch (e) {

      console.log(e)
    }

    

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
              <div><h4>Edit Your Post: </h4></div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div>



              <div>

                <div >
                  <label>Name of Model</label>
                  <input type="text"
                    className='form-control'
                    name="editNameOfModel"
                    value={this.state.editNameOfModel}
                    onChange={this.updateFormField} />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Year of Launch
                  </label>
                  <input type="number"
                    className='form-control'
                    name="editYearOfLaunch"

                    value={this.state.editYearOfLaunch}
                    onChange={this.updateFormNumber}
                  />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Car Brand</label>
                  <input type="text"
                    className='form-control'
                    name="editBrandOfCar"
                    value={this.state.editBrandOfCar}
                    onChange={this.updateFormField} />
                </div>
                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Car Type
                  </label>
                  <input type="text"
                    className='form-control'
                    name="editTypeOfCar"
                    value={this.state.editTypeOfCar}
                    onChange={this.updateFormField} />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <div>
                    Seat Number</div>
                  <input type="radio"
                    name="editSeatNumber"
                    value={2}
                    checked={parseInt(this.state.editSeatNumber) === 2}
                    onClick={this.updateFormNumber}
                  />
                  <label >2</label>
                  <input type="radio"
                    name="editSeatNumber"
                    value={4}
                    checked={parseInt(this.state.editSeatNumber) === 4}
                    onClick={this.updateFormNumber}
                    className="radio-button-style" />
                  <label >4</label>
                  <input type="radio"
                    name="editSeatNumber"
                    value={6}
                    checked={parseInt(this.state.editSeatNumber) === 6}
                    onClick={this.updateFormNumber}
                    className="radio-button-style" />
                  <label >6</label>


                </div>
                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Color</label>
                  <input type="text"
                    className='form-control'
                    name="editColor"
                    value={this.state.editColor}
                    onChange={this.updateFormField} />
                </div>
                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Color Shade</label>
                  <input type="text"
                    className='form-control'
                    name="editColorShade"
                    value={this.state.editColorShade}
                    onChange={this.updateFormField} />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Land Terrain</label>
                  <input type="text"
                    className='form-control'
                    name="editLandTerrain"
                    value={this.state.editLandTerrain}
                    onChange={this.updateFormField} />
                </div>
                <div className=
                  'create-input-div-space'
                >
                  <label>
                    Username
                  </label>
                  <input type="text"
                    className='form-control'
                    name="editUserName"
                    value={this.state.editUserName}
                    onChange={this.updateFormField} />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label >
                    Car rating:</label>
                  <select name="editRating"
                    value={this.state.editRating}
                    onChange={this.updateFormNumber}
                  >
                    <option>Select one</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label>Description</label>
                  <input type="text"
                    placeholder='Fill in details of car recommendation'

                    className='form-control'
                    name="editDescription"
                    value={this.state.editDescription}
                    onChange={this.updateFormField} />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label>Image</label>
                  <input type="text"
                    placeholder='Type URL link of car image'
                    className='form-control'
                    name="editImage"
                    value={this.state.editImage}
                    onChange={this.updateFormField} />
                </div>

                <div className=
                  'create-input-div-space'
                >
                  <label>Select Price Estimate</label>
                  <select name="editPrice"
                    value={parseInt(this.state.editPrice)}
                    onChange={this.updateFormNumber}
                  >
                    <option value={40000}>Max $40,000</option>
                    <option value={60000}>Max $60,000</option>
                    <option value={80000}>Max $80,000</option>
                    <option value={100000}>Max $100,000</option>
                    <option value={120000}>Max $120,000</option>

                  </select>
                </div>

                <div className=
                  'create-input-div-space'
                >

                  <label>Engine Name (with performance specification)</label>
                  <select name="editEngineName"
                    value={this.state.editEngineName}
                    onChange={this.updateFormField}
                    className="space-engine-dropdown-tab"
                  >
                    <option> Please select one</option>
                    {this.state.currentEngineDB.map(e =>
                      <option value={e.engine_name} key={e._id}>
                        E-Name: {e.engine_name} |
                        Speed: {e.top_speed} |
                        Power: {e.engine_power} |
                        Oil: {e.oil_consumption}
                      </option>)}

                  </select>
                </div>


                <div>
                  <div className=
                    'create-input-div-space'
                  >
                    <input type="checkbox"
                      name="editComfortFeatures"
                      value="637b79c39b9228988ebddfdd"
                      checked={this.state.editComfortFeatures.includes
                        ("637b79c39b9228988ebddfdd")}
                      onChange={this.updateCheckBoxes}
                    />
                    <label>Blind Spot Monitoring</label>
                    <input type="checkbox"
                      name="editComfortFeatures"
                      className='checkbox-style'
                      value="637b79c39b9228988ebddfde"
                      checked={this.state.editComfortFeatures.includes
                        ("637b79c39b9228988ebddfde")}
                      onChange={this.updateCheckBoxes}
                    />
                    <label>Premium Sound System</label>

                    <div>
                      <input type="checkbox"
                        name="editComfortFeatures"
                        value="637b79c39b9228988ebddfdf"
                        checked={this.state.editComfortFeatures.includes
                          ("637b79c39b9228988ebddfdf")}
                        onChange={this.updateCheckBoxes}
                      />
                      <label>Wireless Connectivity</label>

                      <input type="checkbox"
                        name="editComfortFeatures"
                        className='checkbox-style'
                        value="637b79c39b9228988ebddfe0"
                        checked={this.state.editComfortFeatures.includes
                          ("637b79c39b9228988ebddfe0")}
                        onChange={this.updateCheckBoxes}
                      />
                      <label>Digital Keys</label>
                    </div>

                    <div>
                      <input type="checkbox"
                        name="editComfortFeatures"
                        value="637b79c39b9228988ebddfe1"
                        checked={this.state.editComfortFeatures.includes
                          ("637b79c39b9228988ebddfe1")}
                        onChange={this.updateCheckBoxes}
                      />
                      <label>AI Bot Alexa Enabled</label>
                      <input type="checkbox"
                        name="editComfortFeatures"
                        className='checkbox-style'
                        value="637b79c39b9228988ebddfe2"
                        checked={this.state.editComfortFeatures.includes
                          ("637b79c39b9228988ebddfe2")}
                        onChange={this.updateCheckBoxes}
                      />
                      <label>Ventilated Seats</label>

                    </div>

                  </div>




                </div>

                <div className=
                  'create-input-div-space'
                >
                  <button className='btn btn-light'
                    onClick={this.editCarPost}
                  >Confirm Edit Car Post</button>
                </div>




              </div>

            </div>



          </Modal.Body>
        </Modal>
      </React.Fragment>

    );
  }


}

