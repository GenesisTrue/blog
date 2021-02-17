<template>
  <section class="promo">
    <div class="container">
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
// 1900x680 
</script>

<style lang="scss">
.promo {
  position: relative;
  background: url('~static/img/main.jpg') center (center/cover) no-repeat;
  box-shadow: inset 0px 0px 30px 30px rgba(0,0,0,0.5);
  
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
