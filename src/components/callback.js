import React from "react"
import PropTypes from 'prop-types';

class Callback extends React.Component {
  static propTypes = {
    pageLoaded: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("callback component did mount")
    this.props.pageLoaded()
  }

  render() {
    return(
      <div>Authenticating...</div>
    )
  }
}

export default Callback
