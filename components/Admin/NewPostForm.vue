<template>
  <section class="new-post">
    <div class="container">
      <form>
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Descr: </AppInput>
        <AppInput v-model="post.img"> Img: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>

        <div class="controls">
          <div class="btn btnDanger" @click="cancel"> Cancel </div>
          <AppButton @click.prevent="onSubmit" > Save </AppButton>
        </div>

        <div class="delte-wrapper">
           <div class="btn btnBlack" @click.prevent="onDelete"> DELETE POST </div>
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
      post:   {
        title: '',
        descr: '',
        img: '',
        content: '',
        date: ''
        
      }
    }
  },
  mounted() {
    if (this.postEdit) {
      this.post = this.postEdit
    }
  },
  methods: {
    onSubmit() {
      this.post.date  = new Date().toLocaleString().split(':',2).join(':')
      this.post.userId = this.$store.getters.getLocalId

      this.$emit('submit', this.post)
      // this.$router.push('/admin')
    },

    cancel() {
      this.$router.push('/admin')
    },

    onDelete(){
      
      this.$emit('delete', this.post)
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

.delte-wrapper {
  text-align: right;
  .btnBlack {
    background-color: black;
    color: white;
  }
}

</style>