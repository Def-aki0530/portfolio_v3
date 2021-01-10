<template>
  <div class="index-container">
    <top />
    <about />
    <works />
    <contact />
  </div>
</template>

<script>
import top from "~/components/top"
import about from "~/components/about"
import works from "~/components/works"
import contact from "~/components/contact"

export default {
  components: {
    top,
    about,
    works,
    contact,
  }
}
</script>

<style>

</style>
