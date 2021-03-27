<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postPreview
         v-for="(post, index) in posts" 
         :key="index"
         :post="post"
         :admin="admin"
        />
      </div>
    </div>
  </section>
</template>

<script>

import postPreview from '~/components/Blog/PostPreview'


export default {
  components: { postPreview },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },

 



}
</script>


<style lang="scss">
.post-list {
  margin-bottom: 60px;
}
.posts__wrapper {
  display: flex;
  // align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>