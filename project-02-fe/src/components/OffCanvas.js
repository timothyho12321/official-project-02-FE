import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import css from './OffCanvas.css';

export default function OffCanvas(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Detailed <FontAwesomeIcon icon={faSearchPlus}/>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Detailed Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>Please fill in the form before clicking submit.</div>
                    <div className='search-brand-div mt-3'>
                        <label>Brand</label>
                        <input type="text"
                            className='form-control'
                            value={props.searchBrand}
                            name="searchBrand"
                            onChange={props.updateFormField} />
                    </div>


                    <div className='search-type-div mt-3'>  <label >Type</label>
                        <select className="search-type-dropdown-list"
                            name="searchType"
                            value={props.searchType}
                            onChange={props.updateFormField}>



                            <option value="please-select" >Choose one type</option>

                            {props.existingCarTypes.map(c =>
                                <option key={c} value={c} >{c}</option>)}




                        </select></div>


                    <div className='search-year-div mt-3'>
                        <label>Year Launch or after</label>
                        <input type="number"
                            className='form-control'
                            value={props.searchYear}
                            name="searchYear"
                            onChange={props.updateFormField} />
                    </div>

                    {props.yearGreaterError ? <p className='error-message-style'>Enter year equal to or less than {props.makeAutoYear}</p> : ""}
                    {props.yearLengthError ? <p className='error-message-style'>Enter 4 digits minimal</p> : ""}


                    <div className=' mt-3'>
                        <label>Select Minimum Price</label>
                        <select name="minPrice"
                            value={parseInt(props.minPrice)}
                            onChange={props.updateFormField}
                        >
                            <option value="">Select min price</option>
                            <option value={40000}>Min $40,000</option>
                            <option value={60000}>Min $60,000</option>
                            <option value={80000}>Min $80,000</option>
                            <option value={100000}>Min $100,000</option>
                            <option value={120000}>Min $120,000</option>

                        </select>


                    </div>

                    <div className=' mt-3'>
                        <label>Select Maximum Price</label>
                        <select name="maxPrice"
                            value={parseInt(props.maxPrice)}
                            onChange={props.updateFormField}
                        >
                            <option value="">Select max price</option>
                            <option value={40000}>Max $40,000</option>
                            <option value={60000}>Max $60,000</option>
                            <option value={80000}>Max $80,000</option>
                            <option value={100000}>Max $100,000</option>
                            <option value={120000}>Max $120,000</option>

                        </select>


                    </div>



                    <div className='search-rating-div mt-3'>
                        <label>Rating</label>
                        <select className="search-type-dropdown-list"
                            name="searchRating"
                            value={parseInt(props.searchRating)}
                            onChange={props.updateFormField}>
                            <option value="please-select" >Choose one type</option>
                            <option value={1}>1</option>
                            <option value={2} >2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select></div>


                    <button className='btn btn-primary mt-3'
                        onClick={props.filterSearch}

                    >Submit Search</button>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}