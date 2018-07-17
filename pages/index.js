import React, { Component } from 'react';
import {Row , Col} from 'reactstrap';
import PicStory from '../components/PicStory/PicStory';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';
import Form from '../components/Form/Form';
import smartphone from '../static/images/benniePhone.png';
import '../styles/main.scss';

export default () => (
  <div className="App">
  <NavBar/>
  <Carousel/>
  <Row className="whatsappRow">
    <Col className="whatsappCol" xs={{size: 10, offset:1}} sm={{size: 4, offset:0}}>
       <a href="https://api.whatsapp.com/send?phone=31657814354"><img className="img-fluid icons" src={smartphone}/></a>
       <h4 className="underline">Step 1</h4>
       <div className="whiteText" ><a href="https://api.whatsapp.com/send?phone=31657814354"></a>Call/Message us with your request and we setup an appointment to take your measurements</div>
    </Col>
    <Col className="whatsappCol" xs={{size: 10, offset:1}} sm={{size: 4, offset:0}} >
      <img className="img-fluid icons" src="../static/images/needle.svg"/>
      <h4 className="underline">Step 2</h4>
      <div className="whiteText">Once we have your measurements we make the perfect suit based on your choices and our suggestions</div>
    </Col>
    <Col className="whatsappCol" xs={{size: 10, offset:1}} sm={{size: 4, offset:0}}>
       <img className="img-fluid icons" src="../static/images/calendar.svg"/>
       <h4 className="underline">Step 3</h4>
       <div className="whiteText">Once the suit is ready, plan a date and we will personally deliver your suit to make sure everything is perfect!</div>
    </Col>
  </Row>
  <br/>
  <PicStory/>
  <Row>
    <Col xs={{size: 10, offset:1}} sm={{size: 6, offset:3}}>
      <br/>
      <br/>
      <Form/>
    </Col>
  </Row>
  <Row>
  </Row>
  <Footer/>
</div>
)
