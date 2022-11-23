import React from 'react';
import axios from 'axios';
import CarPost from '../components/CarPost'
export default class HomePage extends React.Component {

    state = {
        data: []

    }

    BASE_API_URL = "http://localhost:3080/"

    async componentDidMount() {
        const response = await axios.get(this.BASE_API_URL + "car")
        this.setState({
            data: response.data
        })
        console.log(this.state.data)
    }


    render() {

        return (
            <React.Fragment>
                <h1>This is the HomePage</h1>
                {
                    this.state.data.map(c =>
                        <div className="card mt-3" key={c._id}>
                            <CarPost car={c} />


                        </div>)


                }

            </React.Fragment>
        )

    }




}