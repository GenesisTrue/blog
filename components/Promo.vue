<template>
  <section class="promo">
    <div class="container">
      <h1 class="title"> Welcome to my blog</h1>
    
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
  background: url('~assets/img/nubelson.jpg') center (center/cover) no-repeat;
  height: 92vh;
  text-align: center;
    p {
      color: #999999;
    }
  .title {
    color: white;
  }
  .title-white {
    position: absolute;
    left: 40px;
    bottom: 80px;
    text-align: left;
    font-size: 38px;
    font-weight: 700;
    color: white;
  
  }

}

</style>
