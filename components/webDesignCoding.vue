<template>
  <div class="works-web">
      <a href="" class="works-web-container">
          <img src="" alt="">
          <div class="web-text">
              <div class="web-title">ページ名</div>
              <div class="web-discription">ページ詳細</div>
          </div>
      </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.works-web{
    width: 100%;
}

.works-web-container{
    width: calc(100% - 30px);
    display: flex;
    text-decoration: none;
    margin: 20px 15px 0;
    @include mq(sm) {
        flex-direction: column;
    }
    img{
        width: 360px;
        height: 200px;
        object-fit: cover;
        filter: drop-shadow(3px 3px 6px $textColor);
        @include mq(sm) {
            width: 100%;
        }
    }
}

.web-text{
    margin-left: 40px;
    @include mq(md) {
        margin-left: 20px;
    }
    @include mq(sm) {
        margin: 0;
    }
}

.web-title{
    font-size: 1.2rem;
    color: $textColor;
    margin-top: 20px;
    @include mq(md) {
        margin-top: 15px;
    }
}

.web-discription{
    font-size: 1rem;
    color: $textColor;
    margin-top: 15px;
    @include mq(md) {
        margin-top: 10px;
    }
}
</style>