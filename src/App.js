//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, {Component} from 'react'
import {Button, Form, Container, Header, FormField} from 'semantic-ui-react'

export default class App extends Component {
  // state = { counter: 0 };
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      salary: '',
      hobby: '',
      location: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    console.log("hola");

    axios.post('https://sheet.best/api/sheets/4b3a5b3b-e79d-406b-86de-72d2a8cdc1df', this.state)
    .then(response => {
      console.log(response);
    })
    
    
  }

  render(){
    const { name, age, salary, hobby, location } = this.state; 

    return(
      <Container fluid className="container">
        <Header as ='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange = {this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler} />
          </Form.Field>
          
          {/* <FormField>
          <label>Location</label>
            <select class="ui dropdown">
              <option value="">Location</option>
              <option value="1" type="text" name="location" value = {location} onChange={this.changeHandler}>District of Columbia</option>
              <option value="0">Puerto Rico</option>
            </select>
          </FormField> */}
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>

      </Container>
    )
  }
}
