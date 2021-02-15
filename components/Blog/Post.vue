<template>
   <section class="post">
      <div class="container">

        <!-- header -->
        <div class="post-header">
          <img class="center" :src="post.img" alt="post.title">
          <h1 class="title "> {{ post.title }}</h1>
          <!-- <p> {{ post.descr } </p> -->
        </div>}

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
  }
}
</script>

<style lang="scss">

.center {
  display: block;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin-top: 30px;
}

.post-body {
  line-height: 35px;
  font-size: 20px;
}

</style>