import axios from 'axios'

// const projectKey = 'AIzaSyCKEXSNW-WSFyiduEoRNzwI52DSIVBDZqs'


export const state = () => ({
  postsLoaded: [],
  localID: null,
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
    const postIndex = state.postsLoaded.findIndex(post => post.postId === postEdit.postId)
    state.postsLoaded[postIndex] = postEdit
  },

  addComment(state, comment) {
    state.commentsLoaded.push(comment)
  },
  
  deletePost(state, post){
    state.postsLoaded = state.postsLoaded.filter(posts => {
      return posts.id != post.id
    })
  },  

  setlocalID(state, localID) {
    state.localID = localID
  },

  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token) 
  },
  destroyToken(state) {
    state.token = null
    localStorage.removeItem('token')
  }
}


export const actions = {

  /* Get posts  */
  
  nuxtServerInit({commit}, context) {
    return axios.get('http://127.0.0.1:8080/api/posts/allPosts')
      .then(res => {
        // console.log(res.data)
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({...res.data[key]})            
        }
        // for(let key in res.data) {
        //   postsArray.push( { ...res.data[key], postId: key} )
        //   // postsArray.push( { ...res.data[key]} )
        // }
        
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e.message)) 
  },


  /* SIGN IN  */

  registerUser({commit}, userDate) {

    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${projectKey}`, { 
      email: userDate.email,
      password: userDate.password,
      returnSecureToken: true
    })
    .then(res => {
      // commit('setToken', res.data.idToken)
      let userId = res.data.localId
      axios.post(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/users.json`,{... userDate, userId})
    })
  },

 
  /* SIGN UP  */

  authUser({commit}, authData) {
    
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${projectKey}`, { 
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    .then(res => {
      
      commit('setToken', res.data.idToken)
      commit('setlocalID', res.data.localId)
      
    })
    .catch(e => console.log(e.message))
  },

  logoutUser({commit}) {
    commit('destroyToken')
  },

  /* Add new post */

  addPost({commit}, post) {
    
    
    return axios.post('https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts.json', post)
    .then(res => {
      commit('addPost', { ...post, userId: state.localID  })
    })
    .catch(e => console.log(e.message))
  },

  /* Edit post */

  editPost({commit, state}, post) {
    // const {postId} = post
    // delete post.postId
    return axios.put(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts/${post.postId}.json?auth=${state.token}`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e.message))
  },

  /* Delete post */

  deletePost({commit, state}, post){
    return axios.delete(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts/${post.postId}.json?auth=${state.token}`, post)
      .then(res => {
        commit('deletePost', post)
      })
    
  },
  
  /* Add new comment  */

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
  },

  getToken(state) {
    return state.token
  },

  getLocalId(state) {
    return state.localID
  }
}




