<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email"> Login: </AppInput>
        <AppInput type="password" v-model="user.password"> Password: </AppInput>

        <div class="controls">
          <AppButton>Log in</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // nodirnavruzov996@gmail.com
      // '123123'
      user: {
        email: 'nodirnavruzov996@gmail.com',
        password: '123123'
      }
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('authUser', this.user)
        .then(res => {
          this.$router.push('/admin')
        })
        .catch(e => {
          console.log(e.message)
          //reset
          this.user.email = ''
          this.user.password = ''
        })
    }
  },
}
</script>

<style lang="scss">
.auth {
  text-align: center;
  
}
.auth__form {
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