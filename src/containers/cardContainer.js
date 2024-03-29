import {connect} from "react-redux"
import Cards from "../components/cards"
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
)(Cards)

export default CardContainer