import { connect } from 'react-redux'
import { getBuddyNickname } from '../../../selectors/chat'
import Header from './Header'

export const mapStateToProps = (state) => {
  return {
    buddyNickname: getBuddyNickname(state)
  }
}

export default connect(
  mapStateToProps
)(Header)
