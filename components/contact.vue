<template>
  <div class="contact" id="contact">
      <h2>CONTACT</h2>
      <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSe1mMJuYTuZdH1e8Lla6m40DLqGMpGzK4IKPdeeCQrXhMkzHw/formResponse">
          <input id="name" type="text" required name="entry.847711677" placeholder=" 氏名">
          <input id="email" type="email" required name="entry.1165210537" placeholder=" メールアドレス">
          <textarea id="msg" required name="entry.1438906958" placeholder=" お問い合わせ内容"></textarea>
          <button type="submit" name="button">送信</button>
      </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contact{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  h2{
    font-size: 2rem;
    font-weight: 700;
    color: $textColor;
    border-bottom: $textColor solid 5px;
    margin-top: 80px;
    @include mq(sm) {
        margin-top: 40px;
    }
  }
  form{
    max-width: 1200px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }
  input{
    width: 100%;
    height: 1.8rem;
    background: #fff;
    font-size: 1.2rem;
    color: $textColor;
    font-family: "Noto Sans JP";
    outline: none;
    border-style: none;
    border-bottom: $textColor solid 2px;
    margin-top: 40px;
    &:focus{
      outline: none;
    }
  }
  textarea{
    width: 100%;
    height: 30rem;
    background: #fff;
    font-size: 1.2rem;
    font-family: "Noto Sans JP";
    color: $textColor;
    resize: none;
    outline: none;
    border-style: none;
    border-bottom: $textColor solid 2px;
    margin-top: 40px;
    &:focus{
      outline: none;
    }
  }
  button{
    width: 180px;
    height: 60px;
    display: inline-block;
    background: $textColor;
    font-size: 1rem;
    color: #fff;
    outline: none;
    border: 2px solid $textColor;
    cursor: pointer;
    margin: 40px 0 80px;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    transition: all .5s;
    position: relative;
    z-index: 2;
    &::after{
      position: absolute;
      z-index: -1;
      display: block;
      content: '';
      box-sizing: border-box;
      transition: all .5s;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: $textColor;
      left: 0;
    }
    &::before{
      position: absolute;
      z-index: -1;
      display: block;
      content: '';
      box-sizing: border-box;
      transition: all .5s;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: $textColor;
      right: 0;
    }
    &:hover{
      background-color: #fff;
      border-color: $textColor;
      color: $textColor;
      &::after{
        width: 0;
        background-color: $textColor;
      }
      &::before{
        width: 0;
        background-color: $textColor;
      }
    }
    @include mq(sm) {
      margin: 40px 0 40px;
    }
  }
}
</style>