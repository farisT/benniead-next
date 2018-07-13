import React from 'react';
import {Row , Col} from 'reactstrap';
import NavBar from '../components/NavBar/NavBar';
import bennieHomeOne from '../static/images/bennieHomeOne.jpg';

export default () => (
  <div className="App">
    <NavBar/>
        <br/>
    <Row>
        <Col xs={{size: 10, offset:1}} sm={{size: 6, offset:3}}>
            <h2>The Story</h2>
            <p>My mother used to tell me that whatever you wear defines who you are. Over the years I have grown to understand that this is not true in its entirety, but she had a good point.</p>
            <p>Why is it not true in its entirety? The only continents I haven’t visited is Oceana and Antarctica, meaning I have seen and met many people who dress to reflect their environment rather than who they are. However, no matter what you wear the style tells the difference in taste and story from person to person in the same environment.</p>
            <p>Our purpose is to integrate elegance to the style required in your environment with an emphasis on quality - Therefore, we dont have a stock room, we just have different tailors good at doing different things and we are perfect in finding any shoes or accessories you are dreaming of!</p>
        </Col>
    </Row>
        <br/>
    <Row>
        <Col xs={{size: 10, offset:1}} sm={{size: 6, offset:3}}>
            <img className="img-fluid fade-in" src ={bennieHomeOne} alt="Bennie"/>
        </Col>
    </Row>
        <br/>
        <br/>
  </div>
)