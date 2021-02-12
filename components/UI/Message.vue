<template>
  <div class="message" :class="mesClass">
    <p> {{ message }} </p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: 'success'
    },
    
    message: {
    type: String,
    required: true
    }
  },
 
}
</script>

<style lang="scss">
.message {
  font-size: 22px;
  &.success {
    color: rgb(1, 185, 123);
  }
  &.error {
    color: #fc5c65;
  }

}

</style>