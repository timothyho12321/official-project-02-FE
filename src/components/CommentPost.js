import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import React from "react";
import Button from "react-bootstrap/esm/Button";

import './CommentPost.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class CommentPost extends React.Component {

    state = {
        commentorEmail: "",
        isEmailRight: false,
        emailError: false
    }



    BASE_API_URL = "https://project2-timothy-carousel.onrender.com/"

    // BASE_API_URL = "http://localhost:3080/"

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteComment = async () => {

        // console.log(this.props.idForDelete);
        // console.log(this.props.allcomment);
        // console.log(this.props.allcomment.email);

        // console.log(this.BASE_API_URL+"delete-comment/"+ this.props.idForDelete)


        if (this.state.commentorEmail !== this.props.allcomment.email) {
            console.log("Detected entered email is wrong")

            this.setState({
                emailError: true
            })
        } else {
            console.log("Entered email is right. Post deleted.")

            try {

                this.notify()

                let response = await axios.put(this.BASE_API_URL
                    + "delete-comment/" + this.props.idForDelete, {
                    "email": this.props.allcomment.email

                })
                console.log(response);

                this.setState({
                    isEmailRight: false
                })

            } catch (e) {
                console.log(e)
            }


        }


    }

    renderKeyEmail = () => {
        this.setState({
            isEmailRight: true
        })

    }

    notify = () => toast("Comment deleted");

    render() {

        return (
            <React.Fragment>
                <div className="mt-2 comment-box-div"
                    style={{
                        border: "1px solid black",
                        "backgroundColor": "beige"
                    }}
                >
                    <div className="ms-2">Commenter: {this.props.allcomment?.username}</div>
                    <div className="ms-2 mb-1">{this.props.allcomment?.other_comment}</div>
                    <div className="comment-close-button">
                        <Button className="button-height"
                            variant="transparent"
                            // onClick={this.deleteComment}

                            onClick={this.renderKeyEmail}

                        >
                            <FontAwesomeIcon className="icon-div"
                                icon={faTimesSquare} />

                        </Button>

                    </div>


                    {this.state.isEmailRight ?

                        <React.Fragment>
                            <div className="commentor-email-div-style">
                                <div className="ms-2 ">
                                    <label>Enter commentor email to confirm delete</label>
                                    <input type="text"
                                        className="form-control mb-2"
                                        value={this.state.commentorEmail}
                                        onChange={this.updateFormField}
                                        name="commentorEmail"
                                        style={{ "width": "80%" }}
                                    />

                                    {this.state.emailError &&<div className="error-message-email-style mb-2">Wrong email entered.</div>}
                                    <Button

                                        className="mb-2 delete-comment-button"
                                        variant='light'
                                        onClick={this.deleteComment}>
                                        Delete Comment
                                    </Button>


                                </div>

                            </div>



                        </React.Fragment>


                        : ""



                    }




                </div>



            </React.Fragment>

        )

    }


}