import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';

import './EditCarPostForm.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    editComfortFeatures: [],

    modelNameError: false,
    yearLaunchError: false,
    carBrandError: false,
    carTypeError: false,

    colorError: false,
    colorShadeError: false,
    landTerrainError: false,
    userNameError: false,
    emailError: false,
    carRatingError: false,
    descriptionError: false,
    imageError: false,
    priceError: false,
    engineNameError: false,
    comfortFeaturesError: false


  }

  BASE_API_URL = "https://project2-timothy-carousel.onrender.com/"
  // BASE_API_URL = "http://localhost:3080/"


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

  notify = () => toast("Car Edited. See by researching email.")

  editCarPost = async () => {



    if (this.state.modelNameError === false &&
      this.state.yearLaunchError === false &&
      this.state.carBrandError === false &&
      this.state.carTypeError === false &&
      this.state.colorError === false &&
      this.state.colorShadeError === false &&
      this.state.landTerrainError === false &&
      this.state.userNameError === false &&
      this.state.emailError === false &&
      this.state.carRatingError === false &&
      this.state.descriptionError === false &&
      this.state.imageError === false &&
      this.state.priceError === false &&
      this.state.engineNameError === false &&
      this.state.comfortFeaturesError === false) {
      try {


        this.notify()

        let response = await axios.put(this.BASE_API_URL + "car_only/"
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



      } catch (e) {

        console.log(e)
      }


    }






  }

  checkErrors = () => {

    if (this.state.editNameOfModel === "") {
      this.setState({
        modelNameError: true
      })
    }
    if (this.state.editYearOfLaunch === null) {
      this.setState({
        yearLaunchError: true
      })
    }
    if (this.state.editBrandOfCar === "") {
      this.setState({
        carBrandError: true
      })
    }
    if (this.state.editTypeOfCar === "") {
      this.setState({
        carTypeError: true
      })
    }
    if (this.state.editColor === "") {
      this.setState({
        colorError: true
      })
    }
    if (this.state.editColorShade === "") {
      this.setState({
        colorShadeError: true
      })
    }
    if (this.state.editLandTerrain === "") {
      this.setState({
        landTerrainError: true
      })
    }
    if (this.state.editUserName === "") {
      this.setState({
        userNameError: true
      })
    }

    if (this.state.editRating === null) {
      this.setState({
        carRatingError: true
      })
    }
    if (this.state.editDescription === "") {
      this.setState({
        descriptionError: true
      })
    }
    if (this.state.editImage === "") {
      this.setState({
        imageError: true
      })
    }
    if (this.state.editPrice === null) {
      this.setState({
        priceError: true
      })
    }
    if (this.state.editEngineName === "") {
      this.setState({
        engineNameError: true
      })
    }
    if (this.state.editComfortFeatures.length === 0) {

      console.log(this.state.editComfortFeatures.length)
      this.setState({
        comfortFeaturesError: true
      })
    }



    // set back to false when form is filled in 
    if (this.state.editNameOfModel !== "") {
      this.setState({
        modelNameError: false
      })

    }
    if (this.state.editYearOfLaunch !== null) {

      this.setState({
        yearLaunchError: false
      })
    }
    if (this.state.editBrandOfCar !== "") {
      this.setState({
        carBrandError: false
      })
    }
    if (this.state.editTypeOfCar !== "") {
      this.setState({
        carTypeError: false
      })
    }
    if (this.state.editColor !== "") {
      this.setState({
        colorError: false
      })
    }
    if (this.state.editColorShade !== "") {
      this.setState({
        colorShadeError: false
      })
    }
    if (this.state.editLandTerrain !== "") {
      this.setState({
        landTerrainError: false
      })
    }
    if (this.state.editUserName !== "") {
      this.setState({
        userNameError: false
      })
    }
    if (this.state.editRating !== null) {
      this.setState({
        carRatingError: false
      })
    }
    if (this.state.editDescription !== "") {
      this.setState({
        descriptionError: false
      })
    }
    if (this.state.editImage !== "") {
      this.setState({
        imageError: false
      })
    }
    if (this.state.editPrice !== null) {

      this.setState({
        priceError: false
      })
    }
    if (this.state.editEngineName !== "") {
      this.setState({
        engineNameError: false
      })
    }
    if (this.state.editComfortFeatures.length !== 0) {
      console.log(this.state.editComfortFeatures.length)

      this.setState({
        comfortFeaturesError: false
      })
    }


  }


  render() {
    return (
      <React.Fragment>
        {this.state.values.map((v, idx) => (
          <Button key={idx}
            className="me-2
          button-orange-style"
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
                {this.state.modelNameError &&
                  <div className='display-error-message-style'>

                    Please fill in name of car model.
                  </div>}

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
                {this.state.yearLaunchError &&
                  <div className='display-error-message-style'>

                    Please fill in year of launch.
                  </div>}


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
                {this.state.carBrandError &&
                  <div className='display-error-message-style'>

                    Please fill in brand of car.
                  </div>}


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
                {this.state.carTypeError &&
                  <div className='display-error-message-style'>

                    Please fill in type of car.
                  </div>}


                <label>
                  Seat Number
                </label>

                <div className=
                  'create-input-div-space form-check-inline ms-2'
                >

                  <input type="radio"
                    name="editSeatNumber"
                    className='form-check-input'
                    value={2}
                    checked={parseInt(this.state.editSeatNumber) === 2}
                    onClick={this.updateFormNumber}
                  />
                  <label className='radio-label-style'>2</label>

                </div>
                <div className=
                  'create-input-div-space form-check-inline'
                >
                  <input type="radio"
                    name="editSeatNumber"
                    className='form-check-input'
                    value={4}
                    checked={parseInt(this.state.editSeatNumber) === 4}
                    onClick={this.updateFormNumber}
                  />
                  <label className='radio-label-style'>4</label>

                </div>

                <div className=
                  'create-input-div-space form-check-inline'
                >
                  <input type="radio"
                    name="editSeatNumber"
                    className='form-check-input'
                    value={6}
                    checked={parseInt(this.state.editSeatNumber) === 6}
                    onClick={this.updateFormNumber}
                  />
                  <label className='radio-label-style'>6</label>


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
                {this.state.colorError &&
                  <div className='display-error-message-style'>

                    Please fill in color of car.
                  </div>}


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
                {this.state.colorError &&
                  <div className='display-error-message-style'>

                    Please fill in color shade of car.
                  </div>}

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
                {this.state.landTerrainError &&
                  <div className='display-error-message-style'>

                    Please fill in land terrain for car.
                  </div>}

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
                {this.state.userNameError &&
                  <div className='display-error-message-style'>

                    Please fill in a username.
                  </div>}

                <div className=
                  'create-input-div-space'
                >
                  <label >
                    Car rating
                  </label>
                  <select name="editRating"
                    value={this.state.editRating}
                    onChange={this.updateFormNumber}
                    className="form-control"
                  >
                    <option>Select one</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                {this.state.carRatingError &&
                  <div className='display-error-message-style'>

                    Please fill in car rating.
                  </div>}

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
                {this.state.descriptionError &&
                  <div className='display-error-message-style'>

                    Please fill in description.
                  </div>}

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
                {this.state.imageError &&
                  <div className='display-error-message-style'>

                    Please fill in image url of car.
                  </div>}

                <div className=
                  'create-input-div-space'
                >
                  <label>Price Estimate</label>
                  <select name="editPrice"
                    value={parseInt(this.state.editPrice)}
                    onChange={this.updateFormNumber}
                    className="form-control"
                  >
                    <option value={40000}>Max $40,000</option>
                    <option value={60000}>Max $60,000</option>
                    <option value={80000}>Max $80,000</option>
                    <option value={100000}>Max $100,000</option>
                    <option value={120000}>Max $120,000</option>

                  </select>
                </div>
                {this.state.imageError &&
                  <div className='display-error-message-style'>

                    Please select price of car.
                  </div>}

                <div className=
                  'create-input-div-space'
                >

                  <label>Engine Name (with performance)</label>
                  <select name="editEngineName"
                    value={this.state.editEngineName}
                    onChange={this.updateFormField}
                    className="space-engine-dropdown-tab form-control"
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
                {this.state.engineNameError &&
                  <div className='display-error-message-style'>

                    Please select an engine name.
                  </div>}



                <div className=
                  'create-input-div-space'
                >

                  <label>Comfort Features</label>

                </div>

                <div className="form-check
                                create-input-div-space"
                >

                  <input className='form-check-input'
                    type="checkbox"
                    name="editComfortFeatures"
                    value="637b79c39b9228988ebddfdd"
                    checked={this.state.editComfortFeatures.includes
                      ("637b79c39b9228988ebddfdd")}
                    onChange={this.updateCheckBoxes}
                  />
                  <label>Blind Spot Monitoring</label>

                </div>

                <div className="form-check">

                  <input type="checkbox"
                    name="editComfortFeatures"
                    className='form-check-input'
                    value="637b79c39b9228988ebddfde"
                    checked={this.state.editComfortFeatures.includes
                      ("637b79c39b9228988ebddfde")}
                    onChange={this.updateCheckBoxes}
                  />
                  <label>Premium Sound System</label>
                </div>

                <div className="form-check">
                  <input type="checkbox"
                    name="editComfortFeatures"
                    className='form-check-input'
                    value="637b79c39b9228988ebddfdf"
                    checked={this.state.editComfortFeatures.includes
                      ("637b79c39b9228988ebddfdf")}
                    onChange={this.updateCheckBoxes}
                  />
                  <label>Wireless Connectivity</label>

                </div>

                <div className="form-check">

                  <input type="checkbox"
                    name="editComfortFeatures"
                    className='form-check-input'
                    value="637b79c39b9228988ebddfe0"
                    checked={this.state.editComfortFeatures.includes
                      ("637b79c39b9228988ebddfe0")}
                    onChange={this.updateCheckBoxes}
                  />
                  <label>Digital Keys</label>
                </div>

                <div className='form-check'>
                  <input type="checkbox"
                    name="editComfortFeatures"
                    className='form-check-input'
                    value="637b79c39b9228988ebddfe1"
                    checked={this.state.editComfortFeatures.includes
                      ("637b79c39b9228988ebddfe1")}
                    onChange={this.updateCheckBoxes}
                  />
                  <label>AI Bot Alexa Enabled</label>

                </div>
                <div className='form-check'>

                  <input type="checkbox"
                    name="editComfortFeatures"
                    className='form-check-input'
                    value="637b79c39b9228988ebddfe2"
                    checked={this.state.editComfortFeatures.includes
                      ("637b79c39b9228988ebddfe2")}
                    onChange={this.updateCheckBoxes}
                  />
                  <label>Ventilated Seats</label>

                </div>


                {this.state.comfortFeaturesError &&
                  <div className='display-error-message-style'>

                    Please pick one comfort feature.
                  </div>}







                <div className=
                  'create-input-div-space'
                >

                  <Button className='button-orange-style'
                    variant='light'
                    onMouseDown={this.checkErrors}
                    onClick={this.editCarPost}>
                    Confirm Change
                  </Button>

                  {/* <button className='btn btn-light'
                    onMouseDown={this.checkErrors}
                    onClick={this.editCarPost}
                  >Confirm Edit Car Post</button> */}

                </div>




              </div>

            </div>



          </Modal.Body>
        </Modal>
      </React.Fragment>

    );
  }


}

