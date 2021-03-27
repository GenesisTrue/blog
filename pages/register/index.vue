<template>
  <section class="register">
    <div class="container">
      <form class="register_form">
        <AppInput type="text" v-model="user_reg.first_name">First Name:</AppInput>
        <AppInput type="text" v-model="user_reg.last_name">Last Name</AppInput>
        <AppInput type="email" v-model="user_reg.email">Email:</AppInput>
        <AppInput type="password" v-model="user_reg.password">Password:</AppInput>
        
        <div class="controls">
          <AppButton @click.prevent="registerBtn">Sign in</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user_reg: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      }
    }
  },

  methods: {
    registerBtn() {

      this.$store.dispatch('registerUser', this.user_reg)
        .then(() => {
          this.$router.push('/admin')
        })
        .catch(e => {
          console.log(e.message)
        })
    }
   
  },
}
</script>

<style lang="scss">
.register {
  text-align: center;
  padding: 95px 0;
  
}
.register_form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 700px;

  input{
    min-width: 460px;
  }
}

</style>