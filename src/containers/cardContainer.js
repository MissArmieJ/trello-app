import {connect} from "react-redux"
import HelloWorld from "../components/HelloWorld"
import {fetchCards} from "../actions/actions"

const mapStateToProps = state => {
  return {
    ...state,
    board: state.board,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    pageLoaded: () => {
      dispatch(fetchCards())
    },
  }
}

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloWorld)

export default CardContainer