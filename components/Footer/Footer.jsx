import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';
import Link from 'next/link';
import bennieLogo from '../../static/images/logo.jpeg';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
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
    );
  }
}

