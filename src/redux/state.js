let rerenderEntireTree = () => {

}

const state = {
    newPostText: 'new post text',
    newMessageText: 'new message text',
    postsData: [
        {text: 'super message number 1', likes: '1', dislikes:'0'},
        {text: 'super message number 2', likes: '2', dislikes:'1'},
        {text: 'super message number 3', likes: '3', dislikes:'2'},
        {text: 'super message number 3', likes: '3', dislikes:'2'},
    ],

    personsData: [
        {name: 'Alex', id: '1'},
        {name: 'Sveta', id: '2'},
        {name: 'Anna', id: '3'},
        {name: 'Sergey', id: '4'},
    ],

    dialogsData: [
        {message: 'hello'},
        {message: 'how are you'},
        {message: 'I\'m okey'},
    ]
}

export const addDialog = () => {
    const newDialog = {
        message: state.newMessageText
    }
    state.dialogsData.push(newDialog)
    state.newMessageText = ''
    rerenderEntireTree(state)
}

export const addPost = () => {
    const newPost = {
        id: 5,
        text: state.newPostText,
        likes: 1,
        dislikes: 1
    }
    state.postsData.push(newPost)
    state.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.newPostText = newText
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
    state.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state