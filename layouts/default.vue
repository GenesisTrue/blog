<template>
  <div class="wrapper">
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/system/Header'
import Footer from '@/components/system/Footer'

export default {
  name: 'default',
  components: { Header, Footer }
}
</script>