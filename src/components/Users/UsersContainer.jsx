import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, ToggleIsFetching, getUsers, ToggleFollowingProgress } from '../../redux/users_reducer'
import Preloader from '../common/preloader/Preloader'
import { usersAPI } from '../../api/api'
import { unFollowThunk, followThunk } from './../../redux/users_reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux'

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.getUsers((this.props.currentPage, this.props.pageSize))

    }


    onPageChanged = (num) => {


        this.props.setCurrentPage(num)
        this.props.ToggleIsFetching(true)

        usersAPI.getUsers(num, this.props.pageSize)
        .then(data => {
            this.props.ToggleIsFetching(false)
            this.props.setUsers(data.items)
            console.log(data)
        })
    }

    render() {
        return <>
                {this.props.isFetching ?  <Preloader /> : null }
                 <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followThunk={this.props.follow}
                        unFollowThunk={this.props.unfollow}
                        followingProgress={this.props.followingProgress} />
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}


// const withRedirect = withAuthRedirect(UsersAPIComponent)


// export default connect(mapStateToProps, {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, ToggleIsFetching, ToggleFollowingProgress, getUsers, followThunk, unFollowThunk})(withRedirect)


export default compose(connect(mapStateToProps, {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, ToggleIsFetching, ToggleFollowingProgress, getUsers, followThunk, unFollowThunk}), withAuthRedirect)(UsersAPIComponent)
