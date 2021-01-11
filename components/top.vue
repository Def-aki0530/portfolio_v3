<template>
  <div class="top" id="top">
      <div class="main-visual-container">
          <div class="main-visual">
                <div class="title">
                    <h1>Anzai Kouki<div class="br"></div>PORTFOLIO</h1>
                </div>
                <div class="sub-title">
                    <h2>DESIGN<div class="br"></div>&<div class="br"></div>CODING</h2>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top{
    width: 100%;
    height: 100vh;
}

.main-visual-container{
    width: 70%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: -1;
    @include mq(xl) {
        width: 80%;
    }
    @include mq(lg) {
        width: 90%;
    }
    @include mq(sm) {
        width: 100%;
    }
}

.main-visual{
    width: 100%;
    height: calc(100vh - 150px);
    background: url("/img/mainVisual.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
}

.title{
    display: inline-block;
    h1{
        font-size: 4.75rem;
        font-weight: 700;
        color: $textColor;
        line-height: 1.25;
        white-space: nowrap;
        border-bottom: $textColor solid 10px;
        position: absolute;
        top: 50px;
        left: 70px;
        @include mq(md) {
            font-size: 3rem;
            border-bottom: $textColor solid 7px;
            top: 25px;
            left: 35px;
        }
    }
}

.sub-title{
    display: inline-block;
    h2{
        font-size: 3.5rem;
        font-weight: 700;
        color: $textColor;
        line-height: 1;
        white-space: nowrap;
        padding-left: 15px;
        border-left: $textColor solid 10px;
        position: absolute;
        bottom: 60px;
        right: 60px;
        @include mq(md) {
            font-size: 2rem;
            border-left: $textColor solid 7px;
            bottom: 30px;
            right: 30px;
        }
    }
}

.br::before{
  white-space: pre;
}
</style>