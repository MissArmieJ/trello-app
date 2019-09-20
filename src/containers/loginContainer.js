import {connect} from "react-redux"
import Login from "../components/login"
import {loggingIn} from "../actions/actions"

const mapStateToProps = state => {
  return {
    ...state,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    pageLoaded: () => {
      dispatch(loggingIn())
    },
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default LoginContainer