import React from 'react'
import {
  Form, FormGroup, Label, Input, Container,
  Button,
  Alert
} from 'reactstrap'

class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    errors: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const data = await this.props.onSubmit(this.state)
    if (data.token) {
      this.props.history.push('/')
    } else if (data.errors) {
      this.setState({
        errors: data.errors
      })
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
                <Label for="username">Username</Label>
                <Input type="username" name="username" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" onChange={this.handleChange} />
              </FormGroup>
              {this.state.errors && <Alert color="danger">
                {this.state.errors}
              </Alert>}
              <Button color="primary" onClick={this.handleSubmit} disabled={disabled(this.state)}>Submit</Button>
            </Form>
          </div>
        </div>
      </Container>
    )
  }
}

const disabled = ({ username, password }) => /^[\s]*$/.test(username) || /^[\s]*$/.test(password)

export default LoginForm
