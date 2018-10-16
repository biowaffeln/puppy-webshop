import React from 'react'
import { Form, FormGroup, Label, Input, Container } from 'reactstrap'

const LoginPage = () =>
  <Container>
    <h2>Welcome Back!</h2>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
    </Form>
  </Container>

export default LoginPage
