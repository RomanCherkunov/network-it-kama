import Messages from './Messages'
import { addDialogActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer'
import { connect } from 'react-redux'
import React from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class MessagesContainer extends React.Component {


    render() {
        // if(!this.props.isAuth) return <Redirect to={'/login'} />
        return <Messages {...this.props} />
    
    }
}




let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText,
        personsData: state.dialogsPage.personsData,
        dialogsPage: state.DialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(addDialogActionCreator())},
        onMessageChangeText: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
    }
}




export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(MessagesContainer)
