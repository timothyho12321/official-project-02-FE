import axios from 'axios'
import React from 'react'

import css from './MyPosts.css'

import CarPost2 from '../components/CarPost2.js'



export default class MyPosts extends React.Component {

    state = {
        data: [],
        searchEmail: "",
        searchByEmailSuccess: false
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }


    BASE_API_URL = "http://localhost:3080/"

    searchEmailPost = async () => {

        // console.log("Search by user email ran")
        let response = await axios.get(this.BASE_API_URL + "getposts", {
            params: {
                email: this.state.searchEmail
            }
        })
        // console.log(response)


        this.setState({
            data: response.data,
            searchByEmailSuccess: true
        })


    }

    deleteCar = async (c) => {

        alert("This car will be deleted")
        // console.log(c._id);
        let savedId = c._id;
        // console.log("Saved", savedId)

        //BUG IS HERE. HOW TO KEY IN PARAMS AS ID INTO HEADER..
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

                {this.state.searchByEmailSuccess ?

                    <React.Fragment>
                        <h1>Display searched posts if success</h1>
                        <div className='row'>
                            {this.state.data.map(c =>
                                <div >
                                    <CarPost2 key={c._id}
                                        car={c}
                                        deleteCar={() => {
                                            this.deleteCar(c)
                                        }
                                        }
                                    />


                                </div>)}
                        </div>


                    </React.Fragment>


                    : ""}


            </React.Fragment>
        )

    }




}