import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    
    return (
        <Container className='mt-4'>
            <div className="text-center m-4">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    Kolkata Knight Riders beat Royal Challengers Bangalore
                </Marquee>
            </div>
           
        </Container>
    );
};

export default Header;