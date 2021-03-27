<template>
  <newPostForm
   :postEdit="post" 
   @submit="onSubmit" 
   @delete="onDelete">
  </newPostForm>
</template>

<script>

import axios from 'axios'

import newPostForm from '@/components/Admin/NewPostForm'

export default {
  components: { newPostForm },
  layout: 'admin',
  asyncData(context) {
    // debugger
    const { postId } = context.params
    return axios.get(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts/${postId}.json`)
    .then((result) => {

      return {
        post: {...result.data, postId }
      }
    }).catch(err => {
      console.error(err)
      return {}
    })
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch('editPost', post)
        .then(() => {
          // this.$router.push('/admin/')
        })
    },
    onDelete(post){
      this.$store.dispatch('deletePost', post)
        .then(() => {
          this.$router.push('/admin/')
        })
    }
  },

}
</script>

<style>

</style>