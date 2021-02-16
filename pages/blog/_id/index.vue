<template>
  <div class="wrapper-content wrapper-content--fixed">
   <post :post="post"/>
   <myHr></myHr>
   <comments :comments="comments"/>
   <newComment :postId="$route.params.id"/>
  </div>  
</template>


<script>

import axios from 'axios'

import post from '~/components/Blog/Post'
import newComment from '~/components/Comments/NewComment'
import comments from '~/components/Comments/Comments'
import myHr from '~/components/Hr/MyHr'



export default {
  components: { post, comments, newComment, myHr },

  async asyncData(context) {
    let [post , comments] = await Promise.all([
      axios.get(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/comments.json`)
    ])

    let commentsArrayRes = null
    if(comments.data) {
       commentsArrayRes = Object.values(comments.data)
      .filter(comment => (comment.postId === context.params.id && comment.publish))
    }else{
      commentsArrayRes = []
    }

    return {
      post: post.data,
      comments: commentsArrayRes
    }
  },
}
</script>

<style lang="scss" scoped>


.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    max-width: 400px;
    margin-bottom: 16px;
  }
  p {
    color: #999;
  }
}

.post-body {
  text-align-last: left;
}

</style>
