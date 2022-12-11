
import React from 'react'
import css from './CreatePage.css'
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify';

export default class CreatePage extends React.Component {

    state = {
        currentEngineDB: [],
        nameOfModel: "",
        yearOfLaunch: null,
        brandOfCar: "",
        typeOfCar: "",
        seatNumber: 4,
        color: "",
        colorShade: "",
        landTerrain: "",
        userName: "",
        email: "",
        rating: null,
        description: "",
        image: "",
        price: null,
        engineName: "",
        comfortFeatures: [],

        modelNameError: false,
        yearLaunchError: false,
        carBrandError: false,
        carTypeError: false,
        // seatNumberError: false,
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


        //Setting currentEngineDB into array and setState
        // currentEngine in mongoDB is a fixed list
        const response = await axios.get(this.BASE_API_URL + "engine")

        // console.log(response.data)

        // for (let e of response.data){
        //     console.log(e.engine_name)
        // }

        this.setState({
            currentEngineDB: response.data
        })
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    // updateFormNumber = (event) => {
    //     this.setState({
    //         [event.target.name]: parseInt(event.target.value)
    //     })

    // }

    updateFormNumber = (event) => {

        if (event.target.value === "") {
            console.log("Take empty string and convert state to null")
            this.setState({
                [event.target.name]: null
            })
        } else {
            this.setState({
                [event.target.name]: parseInt(event.target.value)
            })

        }



    }

    updateCheckBoxes = (event) => {
        if (!this.state.comfortFeatures.includes(event.target.value)) {
            let modified = [...this.state.comfortFeatures, event.target.value]

            // console.log(modified);
            this.setState({
                comfortFeatures: modified
            })

        } else {

            let indexToReplace = this.state.comfortFeatures.indexOf(event.target.value)

            // console.log(indexToReplace);
            this.setState({
                comfortFeatures: [...this.state.comfortFeatures.slice(0, indexToReplace)
                    , ...this.state.comfortFeatures.slice(indexToReplace + 1)]
            })
        }

    }

    checkErrors = () => {

        if (this.state.nameOfModel === "") {
            this.setState({
                modelNameError: true
            })
        }
        if (this.state.yearOfLaunch === null) {
            this.setState({
                yearLaunchError: true
            })
        }
        if (this.state.brandOfCar === "") {
            this.setState({
                carBrandError: true
            })
        }
        if (this.state.typeOfCar === "") {
            this.setState({
                carTypeError: true
            })
        }
        if (this.state.color === "") {
            this.setState({
                colorError: true
            })
        }
        if (this.state.colorShade === "") {
            this.setState({
                colorShadeError: true
            })
        }
        if (this.state.landTerrain === "") {
            this.setState({
                landTerrainError: true
            })
        }
        if (this.state.userName === "") {
            this.setState({
                userNameError: true
            })
        }
        if (this.state.email === "") {
            this.setState({
                emailError: true
            })
        }
        if (this.state.rating === null) {
            this.setState({
                carRatingError: true
            })
        }
        if (this.state.description === "") {
            this.setState({
                descriptionError: true
            })
        }
        if (this.state.image === "") {
            this.setState({
                imageError: true
            })
        }
        if (this.state.price === null) {
            this.setState({
                priceError: true
            })
        }
        if (this.state.engineName === "") {
            this.setState({
                engineNameError: true
            })
        }
        if (this.state.comfortFeatures.length === 0) {

            console.log(this.state.comfortFeatures.length)
            this.setState({
                comfortFeaturesError: true
            })
        }



        // set back to false when form is filled in 
        if (this.state.nameOfModel != "") {
            this.setState({
                modelNameError: false
            })

        }
        if (this.state.yearOfLaunch != null) {

            this.setState({
                yearLaunchError: false
            })
        }
        if (this.state.brandOfCar != "") {
            this.setState({
                carBrandError: false
            })
        }
        if (this.state.typeOfCar != "") {
            this.setState({
                carTypeError: false
            })
        }
        if (this.state.color != "") {
            this.setState({
                colorError: false
            })
        }
        if (this.state.colorShade != "") {
            this.setState({
                colorShadeError: false
            })
        }
        if (this.state.landTerrain != "") {
            this.setState({
                landTerrainError: false
            })
        }
        if (this.state.userName != "") {
            this.setState({
                userNameError: false
            })
        }
        if (this.state.email != "") {
            this.setState({
                emailError: false
            })
        }
        if (this.state.rating != null) {

            this.setState({
                carRatingError: false
            })
        }
        if (this.state.description != "") {
            this.setState({
                descriptionError: false
            })
        }
        if (this.state.image != "") {
            this.setState({
                imageError: false
            })
        }
        if (this.state.price != null) {

            this.setState({
                priceError: false
            })
        }
        if (this.state.engineName != "") {
            this.setState({
                engineNameError: false
            })
        }
        if (this.state.comfortFeatures.length != 0) {
            // console.log(this.state.comfortFeatures.length )

            this.setState({
                comfortFeaturesError: false
            })
        }

    }







    notify = () => toast("Car posted successfully")

    createCarPost = async () => {

        if (this.state.nameOfModel !== "" &&
            this.state.yearOfLaunch !== null &&
            this.state.brandOfCar !== "" &&
            this.state.typeOfCar !== "" &&
            this.state.color !== "" &&
            this.state.colorShade !== "" &&
            this.state.landTerrain !== "" &&
            this.state.userName !== "" &&
            this.state.email !== "" &&
            this.state.rating !== null &&
            this.state.description !== "" &&
            this.state.image !== "" &&
            this.state.price !== null &&
            this.state.engineName !== "" &&
            this.state.comfortFeatures.length !== 0


        )


        // Use this checking if only there are two event 
        // handler onMouseDown and onClick
        // (this.state.modelNameError === false &&
        //     this.state.yearLaunchError === false &&
        //     this.state.carBrandError === false &&
        //     this.state.carTypeError === false &&
        //     this.state.colorError === false &&
        //     this.state.colorShadeError === false &&
        //     this.state.landTerrainError === false &&
        //     this.state.userNameError === false &&
        //     this.state.emailError === false &&
        //     this.state.carRatingError === false &&
        //     this.state.descriptionError === false &&
        //     this.state.imageError === false &&
        //     this.state.priceError === false &&
        //     this.state.engineNameError === false &&
        //     this.state.comfortFeaturesError === false

        // ) 


        {

            // console.log(this.BASE_API_URL + "newcarandengine")
            // alert("Car successfully created.")


            console.log(this.state.rating);

            this.notify()
            const response = await axios.post(this.BASE_API_URL + "newcarandengine", {

                name_of_model: this.state.nameOfModel,
                year_of_launch: parseInt(this.state.yearOfLaunch),
                brand: this.state.brandOfCar,
                type: this.state.typeOfCar,
                seats: parseInt(this.state.seatNumber),
                // // KEY INTO PARAMS AS OBJECT IN FRONT END FOR COLOR (NAME AND SHADE)
                color: {
                    "name": this.state.color,
                    "shade": this.state.colorShade
                },
                land_terrain: this.state.landTerrain,
                username: this.state.userName,
                email: this.state.email,
                rating: this.state.rating,
                description: this.state.description,
                cost_price: parseInt(this.state.price),
                image: this.state.image,

                engine_name: this.state.engineName,


                comfort_features_id: this.state.comfortFeatures,


            })
            console.log(response)

        } else {


            console.log(this.state.rating);
            console.log("Validation did not pass. Car not posted.")
        }




    }



    render() {

        return (
            <React.Fragment>
                <h3>Create a new  car post with this form.</h3>


                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Main Car Details</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <label>Name of Model</label>
                                <input type="text"
                                    className='form-control
                        '
                                    name="nameOfModel"
                                    value={this.state.nameOfModel}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.modelNameError &&
                                <div className='display-error-message-style'>

                                    Please fill in name of car model.
                                </div>}

                            <div className=
                                'create-input-div-space'
                            >
                                <label >
                                    Year of Launch</label>
                                <input type="number"
                                    className='form-control'
                                    name="yearOfLaunch"
                                    value={this.state.yearOfLaunch}
                                    onChange={this.updateFormNumber} />
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
                                    name="brandOfCar"
                                    value={this.state.brandOfCar}
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
                                    name="typeOfCar"
                                    value={this.state.typeOfCar}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.carTypeError &&
                                <div className='display-error-message-style'>

                                    Please fill in type of car.
                                </div>}

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Properties</Accordion.Header>
                        <Accordion.Body>
                            <div className=
                                'create-input-div-space'
                            >
                                <div>
                                    Seat Number</div>
                                <input type="radio"
                                    name="seatNumber"
                                    value={2}
                                    checked={parseInt(this.state.seatNumber) === 2}
                                    onClick={this.updateFormField}
                                />
                                <label >2</label>
                                <input type="radio"
                                    name="seatNumber"
                                    value={4}
                                    checked={parseInt(this.state.seatNumber) === 4}
                                    onClick={this.updateFormField}
                                    className="radio-button-style" />
                                <label >4</label>
                                <input type="radio"
                                    name="seatNumber"
                                    value={6}
                                    checked={parseInt(this.state.seatNumber) === 6}
                                    onClick={this.updateFormField}
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
                                    name="color"
                                    value={this.state.color}
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
                                    name="colorShade"
                                    value={this.state.colorShade}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.colorShadeError &&
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
                                    name="landTerrain"
                                    value={this.state.landTerrain}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.landTerrainError &&
                                <div className='display-error-message-style'>

                                    Please fill in land terrain for car.
                                </div>}

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>User details and review</Accordion.Header>
                        <Accordion.Body>
                            <div className=
                                'create-input-div-space'
                            >
                                <label>
                                    Username
                                </label>
                                <input type="text"
                                    className='form-control'
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.userNameError &&
                                <div className='display-error-message-style'>

                                    Please fill in a username.
                                </div>}

                            <div className=
                                'create-input-div-space'
                            >
                                <label>
                                    Email</label>
                                <input type="text"
                                    className='form-control'
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.emailError &&
                                <div className='display-error-message-style'>

                                    Please fill in an email.
                                </div>}

                            <div className=
                                'create-input-div-space'
                            >
                                <label >
                                    Car rating:</label>
                                <select name="rating"
                                    value={this.state.rating}
                                    onChange={this.updateFormNumber}
                                >
                                    <option value={""}>Select one</option>
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
                                <textarea className='form-control'
                                    placeholder='Fill in details of car recommendation'
                                    rows={3}
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.updateFormField}
                                >

                                </textarea>

                            </div>
                            {this.state.descriptionError &&
                                <div className='display-error-message-style'>

                                    Please fill in description.
                                </div>}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Car Features</Accordion.Header>
                        <Accordion.Body>
                            <div className=
                                'create-input-div-space'
                            >
                                <label>Image</label>
                                <input type="text"
                                    placeholder='Type URL link of car image'
                                    className='form-control'
                                    name="image"
                                    value={this.state.image}
                                    onChange={this.updateFormField} />
                            </div>
                            {this.state.imageError &&
                                <div className='display-error-message-style'>

                                    Please fill in image url of car.
                                </div>}
                            <div className=
                                'create-input-div-space'
                            >
                                <label>Select Price Estimate</label>
                                <select name="price"
                                    value={parseInt(this.state.price)}
                                    onChange={this.updateFormNumber}
                                >
                                    <option value={""}>Select one</option>
                                    <option value={40000}>Max $40,000</option>
                                    <option value={60000}>Max $60,000</option>
                                    <option value={80000}>Max $80,000</option>
                                    <option value={100000}>Max $100,000</option>
                                    <option value={120000}>Max $120,000</option>

                                </select>
                            </div>
                            {this.state.priceError &&
                                <div className='display-error-message-style'>

                                    Please select price of car.
                                </div>}
                            <div className=
                                'create-input-div-space'
                            >

                                <label>Engine Name</label>
                                <select name="engineName"
                                    value={this.state.engineName}
                                    onChange={this.updateFormField}
                                    className="space-engine-dropdown-tab"
                                >
                                    <option value={""}> Please select one</option>
                                    {this.state.currentEngineDB.map(e =>
                                        <option value={e.engine_name} key={e._id}>
                                            Engine Name: {e.engine_name} |
                                            Top Speed: {e.top_speed} |
                                            Engine Power: {e.engine_power} |
                                            Oil Consumption: {e.oil_consumption}
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
                                    className='checkbox-style'
                                    value="637b79c39b9228988ebddfde"
                                    checked={this.state.comfortFeatures.includes
                                        ("637b79c39b9228988ebddfde")}
                                    onChange={this.updateCheckBoxes}
                                />
                                <label>Premium Sound System</label>

                                <div>
                                    <input type="checkbox"
                                        name="comfortFeatures"
                                        value="637b79c39b9228988ebddfdf"
                                        checked={this.state.comfortFeatures.includes
                                            ("637b79c39b9228988ebddfdf")}
                                        onChange={this.updateCheckBoxes}
                                    />
                                    <label>Wireless Connectivity</label>

                                    <input type="checkbox"
                                        name="comfortFeatures"
                                        className='checkbox-style'
                                        value="637b79c39b9228988ebddfe0"
                                        checked={this.state.comfortFeatures.includes
                                            ("637b79c39b9228988ebddfe0")}
                                        onChange={this.updateCheckBoxes}
                                    />
                                    <label>Digital Keys</label>
                                </div>

                                <div>
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
                                        className='checkbox-style'
                                        value="637b79c39b9228988ebddfe2"
                                        checked={this.state.comfortFeatures.includes
                                            ("637b79c39b9228988ebddfe2")}
                                        onChange={this.updateCheckBoxes}
                                    />
                                    <label>Ventilated Seats</label>

                                </div>


                            </div>
                            {this.state.comfortFeaturesError &&
                                <div className='display-error-message-style'>

                                    Please pick one comfort feature.
                                </div>}


                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <div className=
                    'create-input-div-space'
                >
                    <Button variant='light'
                        className='button-orange-style'
                        // onMouseDown={this.checkErrors}
                        // onClick={this.createCarPost}


                        onClick={() => {
                            this.checkErrors()
                            this.createCarPost()
                        }}
                    >
                        Confirm Create Car Post
                    </Button>
                </div>

            </React.Fragment>
        )

    }




}