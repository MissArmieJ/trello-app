import React from "react"
import PropTypes from 'prop-types';

class Cards extends React.Component {
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
      <div>Hello World</div>
    )
  }
}

export default Cards
