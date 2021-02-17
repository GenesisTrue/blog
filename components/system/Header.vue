<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
             <nuxt-link to="/"> Main </nuxt-link> 
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="(link, index) in getPage" :key="index">
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      links: [
      ]
    }
  },

  computed: {
    getPage() {
     if(this.$store.getters.checkAuthUser) {
       this.links.push(
        { title:'Posts', url: '/admin/'},
        { title:'About', url: '/about'},
        { title:'Log In', url: '/auth'}
        )
     }else {
       this.links.push(
        { title:'Posts', url: '/blog'},
        { title:'About', url: '/about'},
        { title:'Log In', url: '/auth'}
        )
     }
      return this.links
    } 
  }

}
</script>

<style lang="scss">
.logo a{
  color: rgb(53, 73, 94);
}
.navbar-link {
  &.nuxt-link-exact-active {
    color: #41b883;
  }
}

</style>