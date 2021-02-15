<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="">
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Descr: </AppInput>
        <AppInput v-model="post.img"> Img: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>

        <div class="controls">
          <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
          <AppButton class="btn btnPrimary" @click="save">Save</AppButton>
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
    save() {
      
      this.post.date = new Date().toLocaleString()
      console.log( this.post.date )
      
      this.$emit('submit', this.post)
    },

    cancel() {
      this.$router.push('/admin/')
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