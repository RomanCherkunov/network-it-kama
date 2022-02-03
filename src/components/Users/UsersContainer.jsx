import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, ToggleIsFetching } from '../../redux/users_reducer'
import Preloader from '../common/preloader/Preloader'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.ToggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response)
        })
    }


    onPageChanged = (num) => {
        this.props.setCurrentPage(num)
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.ToggleIsFetching(false)
            this.props.setUsers(response.data.items)
            console.log(response)
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
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(followAC(userId))},
//         unfollow: (userId) => {dispatch(unfollowAC(userId))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (pageNum) => {dispatch(setCurrentPageAC(pageNum))},
//         setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
//         ToggleIsFetching: (isFetching) => {dispatch(isFetchingAC(isFetching))}
//     }
// }

export default connect(mapStateToProps, {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, ToggleIsFetching })(UsersAPIComponent)