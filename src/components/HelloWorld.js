import React from "react"
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  static propTypes = {
    pageLoaded: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      hello: "world"
    }
  }

  componentDidMount() {
    this.props.pageLoaded()
  }

  render() {
    return(
      <div>Hello World</div>
    )
  }
}

export default HelloWorld
