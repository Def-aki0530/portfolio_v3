<template>
  <div class="index-container">
    <top />
    <about />
    <works :webDesignCoding='webDesignCoding' :teamLogo='teamLogo' :djLogo='djLogo'/>
    <contact />
  </div>
</template>

<script>
import axios from "axios";
import top from "~/components/top"
import about from "~/components/about"
import works from "~/components/works"
import contact from "~/components/contact"

export default {
  async asyncData() {
    const getWebDesignCoding = axios.get('https://anzaikoukiportfolio.microcms.io/api/v1/webdesigncoding?limit=99', {headers: {"X-API-KEY": process.env.API_KEY} });
    const getTeamLogo = axios.get('https://anzaikoukiportfolio.microcms.io/api/v1/teamlogo?limit=99', {headers: {"X-API-KEY": process.env.API_KEY} });
    const getDjLogo = axios.get('https://anzaikoukiportfolio.microcms.io/api/v1/djlogo?limit=99', {headers: {"X-API-KEY": process.env.API_KEY} });
  
    let webDesignCoding_data;
    let teamLogo_data;
    let djLogo_data;

    await Promise.all([getWebDesignCoding,getTeamLogo,getDjLogo]).then(values => {
      webDesignCoding_data = values[0].data.contents
      teamLogo_data = values[1].data.contents
      djLogo_data = values[2].data.contents
    })

    return {
      webDesignCoding: webDesignCoding_data,
      teamLogo: teamLogo_data,
      djLogo: djLogo_data,
    }
  },
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
