import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import React from "react";
import Button from "react-bootstrap/esm/Button";

import './CommentPost.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class CommentPost extends React.Component {

    state = {

    }



    BASE_API_URL = "https://project2-timothy-carousel.onrender.com"

    deleteComment = async () => {

        // console.log(this.props.idForDelete);
        // console.log(this.props.allcomment);
        // console.log(this.props.allcomment.email);

        // console.log(this.BASE_API_URL+"delete-comment/"+ this.props.idForDelete)
        try {

            {this.notify()}

            let response = await axios.put(this.BASE_API_URL
                +"delete-comment/" + this.props.idForDelete, {
                "email": this.props.allcomment.email

            })
            console.log(response);

        } catch (e) {
            console.log(e)
        }





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
                    <div className="ms-2">Commenter: {this.props.allcomment.username}</div>
                    <div className="ms-2 mb-1">{this.props.allcomment.other_comment}</div>
                    <div className="comment-close-button">
                        <Button className="button-height"
                            variant="transparent"
                            onClick={this.deleteComment}
                        >
                            <FontAwesomeIcon className="icon-div"
                                icon={faTimesSquare} />

                        </Button>

                    </div>
                </div>



            </React.Fragment>

        )

    }


}