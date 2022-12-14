import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChair, faDroplet, faBrush, faHillRockslide, faNoteSticky, faPlug, faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import CommentPost from './CommentPost';
import './SeeDetailedPost.css';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class SeeDetailedPost extends React.Component {

    state = {
        data: [],
        comfort_features_id: [],
        commentUserName: "",
        commentEmail: "",
        commentDescription: "",
        changeStateForRender: false,
        errorForUserName: false,
        errorForEmail: false,
        errorForDescription: false
    }

    BASE_API_URL = "https://project2-timothy-carousel.onrender.com/"
    // BASE_API_URL = "http://localhost:3080/"

    updateFormField = (event) => {
        // console.log("update form ran")
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    notify = () => toast("Comment submitted");


    submitComment = async () => {


        // Validate that commenter username, email and description is not empty string
        if (this.state.commentUserName === "") {
            // console.log("Know comment username is empty string")

            this.setState({
                errorForUserName: true
            })
        }

        if (this.state.commentEmail === "") {
            // console.log("Know comment email is empty string")
        
            this.setState({
                errorForEmail: true
            })
        }

        if (this.state.commentDescription === "") {
            // console.log("Know comment description is empty string")
        
            this.setState({
                errorForDescription: true
            })
        }


        else if (
            this.state.commentUserName !== "" &&
            this.state.commentEmail !== "" &&
            this.state.commentDescription !== ""
        ) {

            console.log("Axios put ran as passed validation")

            { this.notify() }



            // console.log(this.BASE_API_URL + "car/" + this.props._id)
            const response = await axios.put(this.BASE_API_URL + "car/" + this.props._id, {

                name_of_model: this.props.name_of_model,
                year_of_launch: this.props.year_of_launch,
                brand: this.props.brand,
                type: this.props.type,
                seats: this.props.seats,
                color: {
                    "name": this.props.colorSpecial,
                    "shade": this.props.colorShadeSpecial
                },
                land_terrain: this.props.land_terrain,
                username: this.props.username,
                email: this.props.email,
                rating: this.props.rating,
                description: this.props.description,
                cost_price: this.props.cost_price,
                image: this.props.image,
                engine_name: this.props.engine_id,
                comfort_features_id: this.props.keep_comfort_features_id,

                // comments: {
                //     "username": this.commentUserName,
                //     "email": this.commentEmail,
                //     "other_comment": this.commentDescription
                // }
                comments: {
                    "username": this.state.commentUserName,
                    "email": this.state.commentEmail,
                    "other_comment": this.state.commentDescription
                }



            })


            console.log(response)


        }




    }

    render() {


        return (

            <React.Fragment>


                <div>
                    <div className='mt-2 mb-2'>
                        <Button className='button-back-page-style'

                            variant='light'
                            onClick={this.props.changePreviousPage}
                        > <FontAwesomeIcon icon={faChevronLeft} />Back Page</Button>
                    </div>


                    <div><h4> {this.props.brand} {this.props.name_of_model}  </h4></div>
                    <div>
                        <i className="bi bi-pencil ms-2"></i> Post by: {this.props.username}

                    </div>


                    <div>
                        <img src={this.props.image}
                            style={{
                                width: "100%",
                                height: "100%"
                            }} alt="car" 
                            className='mt-2'/>
                    </div>

                    <div className='mt-2'>
                        <p><i className="bi bi-rocket-takeoff-fill"></i> Launch year: {this.props.year_of_launch}</p>
                    </div>

                    <div>
                        <p><i className="bi bi-car-front-fill"></i> Type: {this.props.type}</p>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faChair} />
                            Seat Number: {
                                this.props.seats}</p>
                    </div>
                    <div>
                        <p><i className="bi bi-car-front-fill"></i>Type: {this.props.type}</p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faDroplet} />Color: {this.props.colorSpecial && this.props.colorSpecial}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faBrush} />Color Shade: {this.props.colorShadeSpecial && this.props.colorShadeSpecial}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faHillRockslide} />Land Terrain: {this.props.land_terrain}</p>
                    </div>
                    <div>
                        <p><i className="bi bi-stars"></i>  Rated: {this.props.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faNoteSticky} />Description: {this.props.description}</p>
                    </div>
                    <div>
                        <p><i className="bi bi-currency-dollar"></i>Price: ${this.props.cost_price}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faPlug} />Engine Name: {this.props.engine_id}</p>
                    </div>

                    <div>
                        <p><FontAwesomeIcon icon={faPlus} />Comfort Features:

                            {Array.isArray(this.props.comfortFeaturesProp?.comfort_features_id
                            ) && this.props.comfortFeaturesProp.comfort_features_id.map(c => {
                                return <span className='badge bg-secondary ms-2'>
                                    {c}</span>
                            })}</p>
                    </div>

                    <div className='outer-comment-div '>
                        <div>Other Users Comments:</div>
                        <div>
                            {this.props.comments?.map((c) =>

                                <CommentPost
                                    key={c?.email}
                                    allcomment={c}
                                    idForDelete={this.props._id}
                                />

                            )}
                        </div>

                        <div className='d-flex
                    justify-content-center'>
                            <div className='add-comment-div mt-2'>
                                <div className='mt-2'>Add more comments</div>
                                <div className='mt-2'>
                                    <label>Username</label>
                                    <input type="text"
                                        name='commentUserName'
                                        className='form-control'
                                        value={this.state.commentUserName}
                                        onChange={this.updateFormField}
                                    />
                                </div>

                                {this.state.errorForUserName ?
                                    <div className='mt-2 div-error-style'>
                                        Please fill in a username
                                    </div>
                                    : null
                                }

                                <div className='mt-2'>
                                    <label>Email</label>
                                    <input type="text"
                                        name='commentEmail'
                                        className='form-control'
                                        value={this.state.commentEmail}
                                        onChange={this.updateFormField}
                                    />
                                </div>

                                {this.state.errorForEmail ?
                                    <div className='mt-2 div-error-style'>
                                        Please fill in an email.
                                    </div>
                                    : null
                                }

                                <div className='mt-2'>
                                    <label>Comment</label>
                                    <textarea
                                        className='form-control'
                                        name='commentDescription'
                                        value={this.state.commentDescription}
                                        onChange={this.updateFormField}
                                    />

                                </div>

                                {this.state.errorForDescription ?
                                    <div className='mt-2 div-error-style'>
                                        Please fill in comment description.
                                    </div>
                                    : null
                                }

                                <div className='mt-2 mb-2 ms-2'>
                                    <Button variant='info'
                                        className='button-style'
                                        onClick={this.submitComment}

                                    >
                                        Click to submit
                                    </Button>

                                </div>

                            </div>

                        </div>




                    </div>









                </div>




            </React.Fragment >
        )

    }


}