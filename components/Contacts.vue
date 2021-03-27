<template>
  <section class="contact">
    <div class="container">
      <div class="wrapper__form">
        <h2 class="title">Contact me</h2>
        <Message v-if="message" :message="message"/>
        <form @submit.prevent="onSubmit" class="contact-form">
          <AppInput v-model="user.name"> Name: </AppInput>
          <AppInput v-model="user.email" type="email"> Email: </AppInput>
          <AppTextArea v-model="user.text"> Text: </AppTextArea>
          <div class="controls">
            <AppButton class="btn btnPrimary"> Submit</AppButton>
          </div>
        </form> 
      </div>
    </div>
  </section>
</template>

<script>

import Message from '~/components/UI/Message'
import AppButton from '~/components/UI/Controls/Button'
import AppInput from '~/components/UI/Controls/Input'
import AppTextArea from '~/components/UI/Controls/TextArea'

export default {

  components: { Message,  AppButton, AppInput, AppTextArea },

  data() {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.message = 'Submited'
      setTimeout(() => {
        this.message = ''
      }, 2000)
        this.user.name = ''      
        this.user.email = ''      
        this.user.text = ''      
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

  .contact {
    text-align: center;
    background-color: #ffffff;
    .title  {
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
    // .btn {
    //   background-color: #fff;
    //   border: none;
    //   box-shadow: 0 -3px rgb(216, 216, 216) inset;
    //   color: #35495e;
    //      &:hover {
    //     background:rgb(216, 216, 216)
    //   }
    // }
  }
</style>