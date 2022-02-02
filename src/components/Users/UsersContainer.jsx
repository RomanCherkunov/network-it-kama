import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users_reducer'
import Users from './UsersClass'



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNum) => {dispatch(setCurrentPageAC(pageNum))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)