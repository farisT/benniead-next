import React, {Component} from 'react';
import {Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import arn1 from '../../static/images/arn1.jpg';
import levy from '../../static/images/levy.jpg';
import casleo from '../../static/images/casleo.jpg';

export default class PicStory extends React.Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, status: 'Closed' };
      
    }
    onEntering() {
        this.setState({ status: 'Opening...' });
      }
    
      onEntered() {
        this.setState({ status: 'Opened' });
      }
    
      onExiting() {
        this.setState({ status: 'Closing...' });
      }
    
      onExited() {
        this.setState({ status: 'Closed' });
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
  render() {
    return (
      <div>
      <Fade>
        <Row>
            
                <Col sm={{size: 4, offset:2}}>
                    <div className="img-container-button">
                        <img className="img-fluid"src={arn1}/>
                        <Button color="primary" onClick={this.toggle}>Toggle</Button>
                    </div>
                </Col>
                <Col sm={{size: 4, offset:0}}>
                        <Collapse
                            isOpen={this.state.collapse}
                            onEntering={this.onEntering}
                            onEntered={this.onEntered}
                            onExiting={this.onExiting}
                            onExited={this.onExited}
                            >
                            <Card>
                                <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                                </CardBody>
                            </Card>
                        </Collapse>
                </Col>
                {/* <Col sm={{size: 5, offset:0}}>

                </Col> */}            
        </Row>
        </Fade>
        <br/>
        <Row>
            <Fade>
                <Col sm={{size: 4, offset:6}}>
                        <img className="img-fluid"src={casleo}/>
                </Col>
            </Fade>
        </Row>
        <br/>
        <Row>
            <Fade>
                <Col sm={{size: 10, offset:1}}>
                    <img className="img-fluid"src={levy}/>
                </Col>
            </Fade>
        </Row>
        <br/>

      </div>
    );
  }
}

