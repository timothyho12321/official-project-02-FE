import React from 'react'
import Car from './carsvg.svg'
import './HomePage.css';


export default class HomePage extends React.Component {

    state = {


    }

    render() {

        return (
            <React.Fragment>
                <h1 className='header-style'
                >Welcome to CARousel</h1>
                <div className='div-for-car-image'>
                   


                <img src={require('./car.png')}
                         className="car-image-style"
                         alt="Banner car image" />

                </div>



            </React.Fragment>
        )

    }




}