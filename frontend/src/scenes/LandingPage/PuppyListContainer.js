import React, { Component } from 'react'
import PuppyList from './PuppyList'
import Api from '../../services/api.service'

class PuppyListContainer extends Component {

  state = {
    puppies: []
  }

  async componentDidMount() {
    const puppies = await Api.getAllPuppies()
    this.setState({ puppies })
  }

  render() {
    return (
      <PuppyList puppies={this.state.puppies} />
    )
  }

}

export default PuppyListContainer
