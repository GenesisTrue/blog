<template>
   <section class="post">
      <div class="container">

        <!-- header -->
        <div class="post-header">
          <div class="wrap-img">
            <img class="center img" :src="post.img" alt="post.title">
          </div>
          <h1 class="title post-title"> {{ post.title }}</h1>
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
.wrap-img{
  box-shadow: inset 0px 0px 30px 30px rgba(0,0,0,0.9);
  
}
.center {
  display: block;
  margin: 0 auto;

}
.img {
  position: relative;
}
.title {
  text-align: center;
  margin-top: 30px;
}


.post-body {
  line-height: 35px;
  font-size: 20px;
  // word-break:break-all;
}

</style>