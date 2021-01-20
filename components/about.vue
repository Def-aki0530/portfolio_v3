<template>
    <div class="about" id="about">
        <div class="scroll-down">
            <div class="scroll-down-s">SCROLL</div>
            <div class="stickarrow">
                <div class="stickarrow-left"></div>
            </div>
            <div class="scroll-down-d">DOWN</div>
        </div>
        <div class="about-container">
            <div class="about-head">
                <h2>ABOUT</h2>
                <div></div>
            </div>
            <div class="name">
                <h2>安西 鴻輝</h2>
                <h3>Anzai kouki</h3>
            </div>
            <div class="profile">
                <p>誕生日：1999/05/30　出身：神奈川県</p>
                <p>東京都市大学 メディア情報学部 情報システム学科 3年</p>
                <p>大学進学後、デザインとコーディングのできるエンジニアを目指す</p>
                <p>Webにおけるデザイン・フロントエンド・バックエンドを勉強中</p>
                <p>研究室ではAIを専門に学習</p>
            </div>
            <div class="profile">開発言語　HTML/CSS/SASS/Vue.js/Nuxt.js/Ruby on Rails/PHP/JAVA/C</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about{
    width: 100%;
    display: flex;
    justify-content: center;
    background: #fff;
    position: relative;
}

.scroll-down{
    display: flex;
    position: absolute;
    
}

.scroll-down-s{
    position: absolute;
    top: -45px;
    left: 10px;
}

.scroll-down-d{
    position: absolute;
    top: -45px;
    left: 90px;
}

.stickarrow{
    width: 140px;
    height: 15px;
    border-bottom: 2px solid $textColor;
    transform: rotate(-90deg) translateX(40px);
    position: relative;
}

.stickarrow-left{
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: 4px solid $textColor;
    transform: skew(60deg) translateX(-15px) translateY(15px);
}

.about-container{
    max-width: 1200px;
    width: 100%;
    margin: 80px 20px;
    @include mq(sm) {
        margin: 40px 20px;
    }
}

.about-head{
    width: 100%;
    display: flex;
    align-items: center;
    h2{
        display: inline-block;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
    }
    div{
        width: 80px;
        border: $textColor solid 1px;
        background: $textColor;
        margin: 0 15px;
    }
}

.name{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    h2{
        font-size: 3.5rem;
        font-weight: 700;
        color: $textColor;
        line-height: 1.5;
    }
    h3{
        font-size: 1.5rem;
        font-weight: 700;
        color: $subColor;
        line-height: 1.5;
        margin-left: 15px;
    }
}

.profile{
    font-size: 1rem;
    color: $textColor;
    line-height: 1.5;
    margin-top: 20px;
}
</style>