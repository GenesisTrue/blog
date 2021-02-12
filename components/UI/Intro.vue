<template>
  <section class="intro">
    <div class="container">
      <h1> {{ title }}</h1>
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin: 20px 0;
  text-align: center;
  color: #fff;
  background-color: rgb(53, 73, 94);
  
  h1 {
    font-size: 26px;
  }
  
}




</style>