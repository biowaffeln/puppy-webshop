// Alex, Mark

import React from 'react'
import Puppy from './Puppy'
import Basket from './Basket'
import posed from 'react-pose'
import './styles.scss'

const AnimatedBasket = posed(Basket)({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
})

class Logo extends React.Component {
  state = {
    hover: false
  }

  enter = () => {
    this.setState({ hover: true })
  }

  leave = () => {
    this.setState({ hover: false })
  }

  render() {
    return (
      <div className="logo" onMouseEnter={this.enter} onMouseLeave={this.leave}>
        <Puppy className="puppy" />
        <AnimatedBasket
          className="basket"
          pose={this.state.hover ? "visible" : "hidden"}
        />
        Puppy Webshop
      </div>
    )
  }
}

export default Logo
