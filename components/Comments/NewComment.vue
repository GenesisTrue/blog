<template>
  <section class="new-comment">
    <div class="container">
      <div class="wrapper__form">
        <h2 class="title">New Comment</h2>
        <Message v-if="message" :message="message"/>
        <form @submit.prevent="onSubmit" class="contact-form">
          <AppInput v-model="comment.name" type="text" >Name:</AppInput>
          <AppTextArea v-model="comment.text">Comment:</AppTextArea>

          <div class="controls">
            <AppButton class="btn btnPrimary"> Submit </AppButton>
          </div>
        </form> 
      </div>
    </div>
  </section>
</template>

<script>


export default {

  props: {
    postId: {
      type: String,
      required: true
    }
  },



  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        date: new Date().toLocaleString(),
        ...this.comment
      })
      .then(() => {
        this.message = `Submited! Your comment is being verified`
        this.comment.name = ''
        this.comment.text = ''
      })
      .catch(e => console.log(e.message))

    }
  }
}

</script>

<style lang="scss">

  .wrapper__form{
    border: 2px solid #41b883 ;
    padding: 40px 0;
    margin: 0 200px;
    background-color: #f7f7f7bd;
    border-radius: 20px;
  }

  .new-comment {
    text-align: center;
    background-color: #ffffff;
    .title {
      color: #35495e;
    }
    .contact-form {
      max-width: 600px;
      margin: 30px auto;
    }
    .controls {
      margin: 30px 0;
    }
    .btn {
      background-color: #41b883;
      border: 1px solid #41b883 ;
      box-shadow: 0 -3px #388864 inset;
      color: #ffffff;
      &:hover {
        background:#388864 
      }
    }
    input, textarea, select, button {
     border: 1px solid #41b883 ;
    }

  }
</style>