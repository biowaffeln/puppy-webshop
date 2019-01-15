import React from 'react'
import Api from '../../services/api.service'
import PuppyDetails from './PuppyDetails'
import { connect } from 'react-redux'

class DetailsPageContainer extends React.Component {

  state = {
    puppy: null
  }

  async componentDidMount() {
    try {
      const puppy = await Api.getPuppyById(this.props.match.params.id)
      this.setState({ puppy })
    }
    catch {
      this.props.history.push('/')
    }
  }

  render() {
    const { puppy } = this.state
    const { language } = this.props
    return (
      puppy && <PuppyDetails puppy={puppy} language={language} />
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
})

export default connect(
  mapStateToProps
)(DetailsPageContainer)
