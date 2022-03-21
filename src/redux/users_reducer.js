import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state=initialState, action) => {

    switch(action.type) {
        case FOLLOW: 
            return {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })}
        
        case UNFOLLOW:
            return {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })}

        case SET_USERS:
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}
                
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

            case SET_TOTAL_USERS_COUNT:
                return {...state, totalUsersCount: action.totalUsersCount}

            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}

            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {...state, 
                        followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                                                             : state.followingProgress.filter(id => id !== action.userId)
                }

        default:
            return state

    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const ToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const ToggleFollowingProgress= (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(ToggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(ToggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        // console.log(data)
    })
    }
}

export const unFollowThunk = (id) => {
    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, id))
        usersAPI.getUnFollow(id)
        .then(data => {
           if (data.resultCode === 0) {
            dispatch(unfollow(id))
           }
           dispatch(ToggleFollowingProgress(false, id))
        })
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, id))
        usersAPI.getFollow(id)
        .then(data => {
           if (data.resultCode === 0) {
            dispatch(follow(id))
           }
           dispatch(ToggleFollowingProgress(false, id))
        })
    }
}

export default usersReducer