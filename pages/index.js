import React, { Component } from 'react';
import {Row , Col} from 'reactstrap';
import { Parallax, Background } from 'react-parallax';
import NavBar from '../components/NavBar/NavBar';
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
  <Row>
    <Col xs={{size: 10, offset:1}} sm={{size: 6, offset:3}}>
      <br/>
      <br/>
      <Form/>
    </Col>
  </Row>
  <Row>
  </Row>
  <Row className="finalCol">
    <Col className="linksCol" xs={{size: 10, offset:1}} sm={{size: 8, offset:2}}>
     <h3 className="linksTitle">Inspiration</h3>
    </Col>
    <Col xs={{size: 10, offset:1}} sm={{size: 2, offset:2}}>
      <a href="https://www.instagram.com/bennie_ad/"><img className="img-fluid icons-footer"  src="../static/images/instagram.svg"/></a>
    </Col>
    <Col xs={{size: 10, offset:1}} sm={{size: 2, offset:0}}>
      <a href="https://www.facebook.com/Bennie-AD-189186795056887/"><img className="img-fluid icons-footer"  src="../static/images/facebook-logo.svg"/></a>
    </Col>
    <Col xs={{size: 10, offset:1}} sm={{size: 2, offset:0}}>
      <a href="https://www.pinterest.com/bennie_ad/"><img className="img-fluid icons-footer" src="../static/images/pinterest-logo.svg"/></a>
    </Col>
    <Col xs={{size: 10, offset:1}} sm={{size: 2, offset:0}}>
      <a href="https://bennie-ad.tumblr.com/"><img className="img-fluid icons-footer" src="../static/images/tumblr-logo.svg"/></a>
    </Col>
  </Row>
</div>
)
