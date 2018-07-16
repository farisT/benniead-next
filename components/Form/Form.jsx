import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          welcomeMessage: '',
          show: '',
        };
      }
async submitData(event) {
    event.preventDefault();
    let Name = event.target.name.value;
    let Email = event.target.email.value
    let Message = event.target.message.value
    const userInterestObject = {
      name: Name,
      email:Email,
      message:Message,
    }
    this.setState({
      welcomeMessage: 'Awesome to see that you are interested! We will get back to you with more information about our platform', show:'displayNone'
    });
   await fetch('/user/interest', {
    method: 'post',
    body: JSON.stringify(userInterestObject)
  })
        }

  render() {
     const confirmation = this.state.welcomeMessage;
     const show = this.state.show;
    return (
        <div>
          <Form className={show} onSubmit={this.submitData.bind(this)} >
            <p>Interested in further elaboration? Leave a message!</p>
            <FormGroup>
            <Label>Name</Label>
              <Input type="name" name="name" placeholder="" required/>
            </FormGroup>
            <FormGroup>
            <Label >Email</Label>
              <Input type="email" name="email" placeholder="" required />
            </FormGroup>
            <FormGroup>
            <Label>Tell us what you need - we can make it happen!</Label>
              <Input type="textarea" name="message" required/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
          <br/>
          <p>{confirmation}</p>
      </div>
    );
  }
}