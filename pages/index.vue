<template>
  <div class="index-container">
    <top />
    <about />
    <works />
    <contact />
  </div>
</template>

<script>
import top from "~/components/topWrapper"
import about from "~/components/aboutWrapper"
import works from "~/components/worksWrapper"
import contact from "~/components/contactWrapper"

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
