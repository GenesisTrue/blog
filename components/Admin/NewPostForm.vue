<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Descr: </AppInput>
        <AppInput v-model="post.img"> Img: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>

        <div class="controls">
          <div class="btn btnDanger" @click="cancel"> Cancel </div>
          <AppButton @click="onSubmit"> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object
    }
  },
  
  data() {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        descr: '',
        img: '',
        content: '',
        date: ''
        
      }
    }
  },

  methods: {
    onSubmit() {
      this.post.date = new Date().toLocaleString()
      console.log( this.post.date )
      this.$emit('submit', this.post)
    },

    cancel() {
      this.$router.push('/admin')
    }
    
  },
}
</script>



<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;

  .btn {
    width: 220px;
  }
}


</style>