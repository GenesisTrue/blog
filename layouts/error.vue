<template>
  <section class="not-found">
    <div class="container">
      
      <div class="not-found__wrapper">
        <p class="title">Page Not Found</p>
        <nuxt-link to="/"> Back to main page</nuxt-link>
      </div>
  
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.not-found__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
}
</style>