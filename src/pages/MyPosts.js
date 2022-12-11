import axios from 'axios'
import React from 'react'

import './MyPosts.css'

import { toast } from 'react-toastify';

import EditCarPost from '../components/EditCarPost.js'
import Modal3 from '../components/EditCarPostForm'


export default class MyPosts extends React.Component {

    state = {
        data: [],
        searchEmail: "",
        searchByEmailSuccess: false,
        eachCarYear: null,
        editYearOfLaunch: null,
        changeValueToRender: null,
        invalidEmailKeyed: false
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })




    }


    BASE_API_URL = "https://project2-timothy-carousel.onrender.com/"
    // BASE_API_URL = "http://localhost:3080/"

    changeStateToRender = () => {
        this.setState({
            changeValueToRender: 1
        })

    }

    searchEmailPost = async () => {



        if (!this.state.searchEmail.includes("@") || !this.state.searchEmail.includes(".")) {
            console.log("no search ran")
            this.setState({
                invalidEmailKeyed: "wrongFormat",
                data: [],
                searchByEmailSuccess: false
            })
        } else {

            // console.log("Search by user email ran")

            try {

                let response = await axios.get(this.BASE_API_URL + "getposts", {
                    params: {
                        email: this.state.searchEmail
                    }
                })

                this.setState({
                    data: response.data,
                    searchByEmailSuccess: true,
                    invalidEmailKeyed: false
                })

            } catch (error) {
                // console.log(error.response.status)
                this.setState({
                    data: [],
                    searchByEmailSuccess: false,
                    invalidEmailKeyed: "wrongEmail"
                })

            }








        }




    }

    notify = () => toast("Car is deleted.")

    deleteCar = async (c) => {

        alert("This car will be deleted")
        this.notify()
        // console.log(c._id);
        let savedId = c._id;
        // console.log("Saved", savedId)

        
        let response = await axios.delete(this.BASE_API_URL +
            "car/" + savedId)

        // console.log(response)
        this.searchEmailPost()

    }





    render() {

        return (
            <React.Fragment>
                <h1>Change your posts</h1>


                <label>Enter your account email</label>
                <div className='text-and-button-div'>
                    <input type="text"
                        className='form-control'
                        name="searchEmail"
                        value={this.state.searchEmail}
                        onChange={this.updateFormField}
                    />


                    <button className='btn btn-light search-button'
                        onClick={this.searchEmailPost}
                    >Search</button>


                </div>

                {this.state.invalidEmailKeyed === "wrongFormat" && <div className='display-error-message'>
                    Key in email in correct format
                </div>}



                {this.state.invalidEmailKeyed === "wrongEmail" && <div className='display-error-message mt-3'>
                    No such email found.
                    <div className='mt-2'>Enter the same email when creating post.</div>
                    <div className='mt-2'> Or create a new post in 'Create page'.</div>
                </div>}

                {this.state.searchByEmailSuccess ?

                    <React.Fragment>

                        <div className='row'
                        id='card_div_center_edit_margin_media'>

                            {(this.state.data.length > 0) && this.state.data.map(c =>

                                <EditCarPost
                                    className="mt-3 col-12 col-lg-5 col-md-5" key={c._id}
                                    car={c}
                                    deleteCar={() => {
                                        this.deleteCar(c)
                                    }
                                    }


                                    updateFormField={this.updateFormField}

                                    // To delete if unable to utilise
                                    searchEmailPost={this.searchEmailPost}

                                // sendModal3={this.sendModal3}
                                />



                            )}
                        </div>


                    </React.Fragment>


                    : ""}


            </React.Fragment>
        )

    }




}