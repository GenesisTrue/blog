<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments </h2>
      <p class="com-length" v-if="comments.length"><strong>{{comments.length}} comments on this post</strong> </p>

      <p v-if="comments.length == 0">{{checkComments}} </p>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <div class="info-wrapper">
          <p class="name">👤 {{ comment.name}}</p>
          <p class="comment-date">{{comment.date}}</p>
        </div>

        <p class="text"> {{ comment.text}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  },

    computed: {
    checkComments() {
      if (!this.comments.length) {
        return `No comments! You can be the first`
      }
    }
   
  }
  
}
</script>

<style lang="scss">


.comments {
  // text-align: center;
  margin: 0 auto;
  .com-length {
    margin-bottom: 10px;
  }
}


.comment {
  width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  // text-align: center;
  background-color: #fff;

  .info-wrapper {
    height: 80px;
  }


  .name {
    // display: inline-block;
    font-size: 24px;
    color: #35495e;
    // padding-bottom: 20px;
  }
  .comment-date {
    margin-left: 34px;
    // display: inline-block;
    font-size: 15px;
  }
}

</style>