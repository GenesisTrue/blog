<template>
  <div class="post-preview">
    <nuxt-link :to="getLink" class="post-preview"> 
      <img
        :src="post.post_image" 
        :alt="post.post_title"
      > 
    </nuxt-link>
    <div class="post-content">
    <nuxt-link :to="getLink" class="post-preview">  <h3 class="title">{{ post.post_title }}</h3> </nuxt-link>
      <p>📅 {{ post.post_date }}</p>
    </div>
  </div>

    

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
     admin: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getLink() {
      return this.admin ? `/admin/${this.post.post_id}` : `/blog/${this.post.post_id}`
    }
  }
}
</script>


<style lang="scss">
.post-preview {
  max-width: 36%;
  // height: 400px;
  margin: 0 16px;
  margin-bottom: 20px;
  // text-align: center;
  
  img {
    // margin-bottom: 16px;
    // width: 1%;
    border-radius: 10px;
    // max-height: 320px;
    &:hover {
      transform: scale(1.01);
    }
  }
 

  .title {
    // height: 84px;
    text-align: left;
    padding: 0 16px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .post-content {
    p {
      padding: 0 16px;
      color: #999;
      text-align: justify;
    }
  }
}
</style>