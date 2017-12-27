import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions'
import ChatBoard from './ChatBoard'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onInit: actions.application.init
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(ChatBoard)
