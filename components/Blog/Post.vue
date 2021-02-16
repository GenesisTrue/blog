<template>
   <section class="post">
      <div class="container">

        <!-- header -->
        <div class="post-header">
          <img class="center img" :src="post.img" alt="post.title">
          <h1 class="title "> {{ post.title }}</h1>
        </div>

        <!-- body -->
        <div class="post-body">
          <p> {{ post.content }} </p>
        </div>
        
      </div>
    </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },




}
</script>

<style lang="scss">

.center {
  display: block;
  margin: 0 auto;

}
.img {
  max-width: 900px;
  max-height: 506px;
  box-shadow: inset 0px 0px 30px 30px rgba(0,0,0,0.9);

}
.title {
  text-align: center;
  margin-top: 30px;
}

.post-body {
  line-height: 35px;
  font-size: 20px;
  word-break:break-all;
}

</style>