<template>
  <section class="promo">
    <div class="container">
      <h1 class="title"> My SRR Blog! With Nuxt.js!</h1>
    
    </div>
      <h2 class="title-white">
     Most of you are familiar with the virtues of a programmer. 
      There are three, of course: <br> laziness, impatience, and hubris.
      </h2>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.promo {
  position: relative;
  background: url('~assets/img/bundo_unsplash.jpg') center (center/cover) no-repeat;
  height: 92vh;
  text-align: center;
    p {
      color: #999999;
    }
  .title {
    color: rgba(255, 255, 255, 0.692);
  }
  .title-white {
    position: absolute;
    left: 40px;
    bottom: 80px;
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    color: white;
  
  }

}

</style>
