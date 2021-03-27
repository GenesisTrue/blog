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
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url" @click="logOut">{{ link.title }}</nuxt-link>
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
      links: [],
    }
  },
  computed: {
    //  statusUser(){
    //   if(this.$store.getters.checkAuthUser) {
    //     return 'Log Out'

    //   }else{
    //     return 'Log In'
    //   }
    // },
    getPage() {
      // debugger
        if(this.$store.getters.checkAuthUser) {
          this.links.push(
            { title:'Posts', url: '/blog'},
            { title:'About', url: '/about'},
            { title:'Log out', url: '/auth'},
          )
        }else{
            this.links.push(
            { title:'Posts', url: '/blog'},
            { title:'About', url: '/about'},
            { title:'Log in', url: '/auth'},
          )
        }


  
      return this.links
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('logoutUser')
    }
  },

}
</script>

<style lang="scss">
li:last-child {
 margin-left: 40px;
}
.logo a{
  color: rgb(53, 73, 94);
}
.navbar-link {
  &.nuxt-link-exact-active {
    color: #41b883;
  }
}

</style>