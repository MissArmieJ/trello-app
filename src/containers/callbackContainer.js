import {connect} from "react-redux"
import {callback} from "../actions/actions"
import Callback from "../components/callback";

const mapStateToProps = state => {
  return {
    ...state,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    pageLoaded: () => {
      dispatch(callback())
    },
  }
}

const CallbackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Callback)

export default CallbackContainer