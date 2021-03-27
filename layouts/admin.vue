<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page">
        <nuxt-link to="/admin" class="link linkWhite"> Posts </nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite" > New Post </nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite"> Comments </nuxt-link>
        <span @click="logoutUser" class="link linkWhite"> Log out </span>
      </Intro>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/system/Header'

export default {
  name: 'admin',

  components: { Header },
  middleware: ['auth'],

  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
        .then(() => this.$router.push('/auth'))
    }
  },
}
</script>

<style lang="scss">
.linkWhite {
 &.nuxt-link-exact-active {
    color: rgb(1, 185, 123);
    font-size: 22px;
  }


}

</style>