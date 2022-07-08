<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <Banner class="banner"></Banner>
    <div class="container">
        <h4 class="titre" style="margin-top:50px">Nos Services</h4>
        <h4 class="underline"></h4>
        <div class="row">
            <Card class="carte"/>
            <Card class="carte"/>
            <Card class="carte"/>
        </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue"
import Card from "./Card.vue"
export default {
    components:{
        Banner,
        Card
    },
    data() {
        return {
            cards:{
                type:Array,
                value:[
                    {
                        id:1
                    },
                    {
                        id:2
                    },
                    {
                        id:3
                    }
                ]
            }
        }
    },
}
</script>

<style scoped>
.row{
    margin-top: 30px;
    margin-bottom: 30px;
}
.carte{
}
.titre{
    color: rgba(38, 40, 92, 0.7);
}
.underline{
    height: 8px;
    margin-left: 40%;
    margin-right: 40%;
    background-color: rgba(38, 40, 92, 0.7);
}
</style>