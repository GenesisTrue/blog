 <template>
    <PostsList :admin=true :posts="postsLoaded"/>
</template>



<script>

import userPosts from '@/components/Admin/UserPosts'

export default {
  components: {userPosts},

  layout: 'admin',

   computed: {
    postsLoaded() {
      if(this.$store.getters.checkAuthUser) {
      // if(localStorage.getItem('token')) {
        let posts = this.$store.getters.getPostsLoaded
        let newPosts = posts.filter(post => post.userId === this.$store.getters.getLocalId)
        return newPosts           
      }else {
        return this.$store.getters.getPostsLoaded
      }
    },
  }
}


</script>

