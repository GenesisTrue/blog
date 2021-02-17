<template>
  <nuxt-link :to="getLink" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title">{{ post.title }}</h3> 
      <p>📅 {{ post.date }}</p>
    </div>
    
  </nuxt-link>
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
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
}
</script>


<style lang="scss">
.post-preview {
  // max-width: 32%;
  width: 400px;
  height: 396px;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;
  
  img {
    // margin-bottom: 16px;
    width: 100%;
    border-radius: 10px;
    max-height: 320px;
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
      padding: 10px 16px;
      color: #999;
      text-align: justify;
    }
  }
}
</style>