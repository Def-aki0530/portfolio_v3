<template>
  <div class="header">
      <div class="pc-header">
        <div></div>
        <nuxt-link tag="a" v-scroll-to="'#top'" to @click.native="eventClick('header > top', 'link', '#top')">TOP</nuxt-link>
        <nuxt-link tag="a" v-scroll-to="'#about'" to @click.native="eventClick('header > about', 'link', '#about')">ABOUT</nuxt-link>
        <nuxt-link tag="a" v-scroll-to="'#works'" to @click.native="eventClick('header > works', 'link', '#works')">WORKS</nuxt-link>
        <nuxt-link tag="a" v-scroll-to="'#contact'" to @click.native="eventClick('header > contact', 'link', '#contact')">CONTACT</nuxt-link>
      </div>
      <nav class="sm-header" :class="{active:active}">
      <button class="menu-icon" @click="doAction()"><span></span></button>
      <ul>
        <li><nuxt-link class="menu-in" tag="a" v-scroll-to="'#top'" to @click.native="eventClick('header > top', 'link', '#top')">TOP</nuxt-link></li>
        <li><nuxt-link class="menu-in" tag="a" v-scroll-to="'#about'" to @click.native="eventClick('header > about', 'link', '#about')">ABOUT</nuxt-link></li>
        <li><nuxt-link class="menu-in" tag="a" v-scroll-to="'#works'" to @click.native="eventClick('header > works', 'link', '#works')">WORKS</nuxt-link></li>
        <li><nuxt-link class="menu-in" tag="a" v-scroll-to="'#contact'" to @click.native="eventClick('header > contact', 'link', '#contact')">CONTACT</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:false,
        }
    },
    methods: {
        doAction:function() {
            this.active = !this.active 
        },
        eventClick(click_name, event_category, click_url ) {
            const event = 'my-custom-event'
            const page_url = location.hostname + location.pathname
            const page_title = document.title

            //console.log(click_name, event_category, click_url, event, page_url, page_title)
            this.$gtm.push({
                event: event,
                click_name: click_name,
                event_category: event_category,
                page_url: page_url,
                page_title: page_title,
                click_url: click_url,
            })
        }
    },
}
</script>

<style lang="scss">
.pc-header{
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    background: #fff;
    position: fixed;
    z-index: 100;
    div{
        width: 62.5%;
    }
    a{
        width: 80px;
        display: block;
        font-size: 1rem;
        font-weight: 400;
        color: $textColor;
        text-align: center;
        text-decoration: none;
        margin: 0 7.5px;
    }
    @include mq(xl) {
        display: none;
    }
}

.sm-header{
    display: none;
    position: fixed;
    right: 0;
    z-index: 100;
    button{
        &:focus{
            outline: none;
        }
    }
    @include mq(xl) {
        display: block;
    }
}

.menu-in{
    color: $textColor;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
}

nav {
    z-index: 100;
}

nav ul {
    position: fixed;
    top: 60px;
    right: 11px;
    height: 100vh;
    visibility: hidden;
    pointer-events: none;
    list-style: none;
    width: 35px;
}

nav ul li {
    letter-spacing: 2px;
    padding: 0.7rem 0;
    writing-mode: vertical-lr;
}

nav.active ul {
    visibility: visible;
    pointer-events: initial;
    transition-delay: 0.2s;
}

.menu-icon{
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    height: 35px;
    position: fixed;
    top: 16px;
    right: 16px;
    width: 35px;
}

.menu-icon span {
    height: 3px;
    display: block;
    position: absolute;
    top: 15px;
    right: 5px;
    left: 5px;
    background: $textColor;
    transition: transform 0.3s;
}
.menu-icon span:before, .menu-icon span:after {
    width: 100%;
    height: 3px;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    background: $textColor;
    
}

.menu-icon span:before {
    top: -8px;
}

.menu-icon span:after {
    bottom: -8px;
}

.active .menu-icon span {
    transform: rotate(90deg);
}
</style>