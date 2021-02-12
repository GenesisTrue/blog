<template>
  <div class="wrapper-content wrapper-content--fixed">

    <promo/>
    <intro title="My lasts posts:"/>
    <postsList :posts="postsLoaded"/>
    <contacts/>

  </div>  
</template>




<script>

import promo from '~/components/Promo'
import contacts from '~/components/Contacts.vue'


export default {
  components: { promo, contacts },

  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   return new Promise ((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         postsLoaded:  [
  //           { 
  //             id: 1,
  //             title: '1 post',
  //             descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //             img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
  //           }
  //         ]
  //       })
  //     },1500)
  //   })
  //   .then(data => {
  //     return data
  //   })
  //   .catch(e => {
  //     context.error(e)
  //   })
  // },

  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }


}


</script>

