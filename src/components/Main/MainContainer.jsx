import  React  from 'react';
import Main from './Main';
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from './../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class MainContainer extends React.Component  {

  
  componentDidMount() {
    let userId = this.props.match.params.userId
    console.log(this.props)
    if(!userId) {userId = 22371}
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if(prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
    
  }

  render() {
    console.log('render')
      return (
        <Main {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
  )}
}
  

// let AuthRedirectComponent = withAuthRedirect(MainContainer)


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


// let withUrlDataContainerComponent = withRouter(MainContainer)

export default  compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect) (MainContainer)



// export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)
