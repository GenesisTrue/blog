<template>
  <client-only>
    <commentTable :thead="['Post Name','Name', 'Text', 'Status', 'Change Status', 'Delete']">
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td><span> {{ comment.post_name }} </span></td>
          <td><span> {{comment.name}} </span></td>
          <td><span> {{comment.text}} </span></td>
          <td>
            <span v-if="comment.publish" class="status true"> Publish </span>
            <span v-else class="status false"> Hidden </span>
          </td>
          <td><span @click="changeComment(comment)" class="link"> Change Status</span></td>
          <td><span @click="deleteComment(comment.id)" class="link"> Delete</span></td>
        </tr>
      </tbody>
    </commentTable>
  
  </client-only>
</template>

<script>

import axios from 'axios'
import commentTable from '@/components/Admin/CommentTable'

export default {
  components: { commentTable },
  layout: 'admin',

    data() {
    return {
        comments: [],
    }
  },

  mounted() {
    this.loadComments()
  },

  methods: {
    loadComments() {
      axios.get('https://blog-nuxt-11cab-default-rtdb.firebaseio.com/comments.json')
        .then(res => {
          if(res.data === null) return this.comments
          let posts = this.$store.getters.getPostsLoaded
          let commentsArray = []
          let pn 
          let userId = this.$store.getters.getLocalId
            
          Object.keys(res.data).forEach(key => {

            const comment = res.data[key]

            posts.forEach(post => {
              if(post.postId === comment.postId && post.userId === userId ) {
                pn = post.title
                commentsArray.push({ ...comment, id: key, post_name: pn })
              }
            })
          })

          this.comments = commentsArray
        })
    },
    changeComment(comment) {

      comment.publish = !comment.publish
      axios.put(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
    },
    
    deleteComment(id) {
      axios.delete(`https://blog-nuxt-11cab-default-rtdb.firebaseio.com/comments/${id}.json`)
        .then(res => this.loadComments())
    },
  },

}
</script>

<style lang="scss">


</style>