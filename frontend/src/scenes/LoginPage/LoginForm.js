import React from 'react'
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap'

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const data = await this.props.onSubmit(this.state)
    if(data.token) {
      this.props.history.push('/') 
    }
  }

  render() {
    return (
      <Container>
        <div className="row pt-5">
          <div className="col">
            <h2 className="text-center">Welcome Back!</h2>
          </div>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col col-lg-6">
            <Form>
              <FormGroup>
                <Label for="username">Email</Label>
                <Input type="username" name="username" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" onChange={this.handleChange} />
              </FormGroup>
              <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
            </Form>
          </div>
        </div>
      </Container>
    )
  }
}

export default LoginForm
