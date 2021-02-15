import axios from 'axios'


export const state = () => ({
  postsLoaded: [],
  token: null

})


export const mutations = {

  setPosts(state, posts) {
    state.postsLoaded = posts
  },

  addPost(state, post) {
    state.postsLoaded.push(post)
  },

  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },

  addComment(state, comment) {
    state.commentsLoaded.push(comment)
  },

  setToken(state, token) {
    state.token =  token
  },

  destroyToken(state){
    state.token = null
  }

}


export const actions = {
  nuxtServerInit({commit}, context) {
    return axios.get('https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts.json')
      .then(res => {
        debugger
        const postsArray = []
        for(let key in res.data) {
          postsArray.push( { ...res.data[key], id: key} )
        }
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e.message)) 
  },

  authUser({commit}, authData) {
    const key = 'AIzaSyCKEXSNW-WSFyiduEoRNzwI52DSIVBDZqs'

    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, { 
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    .then(res => commit('setToken', res.data.idToken))
    .catch(e => console.log(e.message))
  },

  logoutUser({commit}) {
    console.log('Destroy')
    
    commit('destroyToken')
  },

  addPost({commit}, post) {
    return axios.post('https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts.json', post)
    .then(res => {
      commit('addPost', { ...post, id: res.data.name })
    })
    .catch(e => console.log(e.message))
  },

  editPost({commit, state}, post) {
    return axios.put(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e.message))
  },

  addComment({commit}, comment) {
    return axios.post('https://blog-nuxt-11cab-default-rtdb.firebaseio.com/comments.json', comment)
    .catch(e => console.log(e.message))
  }
}


export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded
  },

  checkAuthUser(state) {
    return state.token != null
  }
}




