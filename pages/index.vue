<template>
  <div class="wrapper-content wrapper-content--fixed">

    <promo/>
    <!-- <intro title="My lasts posts:"/> -->
    <postsList :posts="postsLoaded"/>
    <contacts/>

  </div>  
</template>




<script>

import promo from '~/components/Promo'
import contacts from '~/components/Contacts.vue'


export default {
  components: { promo, contacts },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }


}


</script>

