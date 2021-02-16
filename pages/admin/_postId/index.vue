<template>
  <newPostForm :postEdit="post" @submit="onSubmit"></newPostForm>
</template>

<script>

import axios from 'axios'

import newPostForm from '@/components/Admin/NewPostForm'

export default {
  components: { newPostForm },
  layout: 'admin',

  asyncData(context) {
    console.log('postID context',context )
    
      return axios.get(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
        .then(result => {
          return {
            post: {...result.data, id: context.params.postId}
          }
        })
        .catch(err => context.error(err))
  },


  methods: {
    onSubmit(post) {
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin/')
        })
    }
  },

}
</script>

<style>

</style>