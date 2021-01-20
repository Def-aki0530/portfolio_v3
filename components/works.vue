<template>
  <div class="works" id="works">
      <div class="works-container">
        <h2>WORKS</h2>
        <div>
          <worksTitle title="WEBデザイン＆コーディング"/>
          <webDesignCoding :webDesignCoding="webDesignCoding"/>
        </div>
        <div>
          <worksTitle title="団体ロゴデザイン"/>
          <div class="logo-area">
            <img v-for="elem in teamLogo" :key="elem.id" :src="elem.teamLogo.url" :alt="elem.logoName">
          </div>
        </div>
        <div>
          <worksTitle title="DJロゴデザイン"/>
          <div class="logo-area">
            <img v-for="elem in djLogo" :key="elem.id" :src="elem.djLogo.url" :alt="elem.logoName">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import worksTitle from "~/components/worksTitle";
import webDesignCoding from "~/components/webDesignCoding";

export default {
  props:[
      "webDesignCoding",
      "teamLogo",
      "djLogo"
    ],
  components: {
    worksTitle,
    webDesignCoding,
  },
}
</script>

<style lang="scss">
.works{
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  h2{
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    color: $textColor;
    border-bottom: $textColor solid 5px;
  }
}

.works-container{
  max-width: 1200px;
  width: calc(100% - 40px);
  padding: 80px 0;
  @include mq(sm) {
    padding: 40px 0;
  }
}

.logo-area{
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  @include mq(sm) {
    width: calc(100% - 30px);
  }
  img{
    width: 360px;
    height: 200px;
    object-fit: cover;
    margin: 20px 15px 0;
    @include mq(sm) {
        width: 100%;
        height: auto;
    }
  }
}
</style>