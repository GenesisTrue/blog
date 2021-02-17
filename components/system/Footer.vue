<template>
  <footer>
      <div class="wrapper-footer">
        <div class="items">
          <a class="soc-link"
             target="_blank"
             href="https://github.com/GenesisTrue"
             >
             <img src="@/static/img/icons/github.png" alt="">
          </a>
          <a class="soc-link" 
             href="https://www.instagram.com/navruzov_n_k/"
             target="_blank"
             >
             <img src="@/static/img/icons/instagram.png" alt="">
          </a>

          <a class="soc-link"
             href="/"
             >
            <img src="@/static/img/icons/telegram.png" alt="">
          </a>
        </div>
        <div class="text">
          Released under the MIT License <br> <br>
          Copyright © 2021-2021 Genesis
        </div>
      </div>
  </footer>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.wrapper-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  background-color: #475050;
  width: 100%;
  height: 200px;

  .soc-link {
    margin: 0 10px;
  }
  .text {
    margin-top: 30px;
    color: #fff
  }

}
</style>