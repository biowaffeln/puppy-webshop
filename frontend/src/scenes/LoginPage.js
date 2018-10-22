import React from 'react'
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap'

const LoginPage = () =>
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
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    </div>
  </Container>

export default LoginPage
