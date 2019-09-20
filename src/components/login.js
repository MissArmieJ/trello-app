import React from "react"
import PropTypes from 'prop-types';

class Login extends React.Component {
  static propTypes = {
    pageLoaded: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.pageLoaded()
  }

  render() {
    return(
      <div>Logging in...</div>
    )
  }
}

export default Login
