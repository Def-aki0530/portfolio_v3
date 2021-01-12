<template>
    <div class="works-title">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style lang="scss">
.works-title{
    h3{
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 700;
        color: $textColor;
        border-left: 5px solid $textColor;
        padding-left: 10px;
        margin-top: 40px;
    }
}
</style>