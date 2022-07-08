<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="banner" >
        <div class="container welcome-word">
            <h3>Localisation By GALKT-TECH</h3>
            <button class="btn btn-primary" @click="goToCompteur">Aller au compteur</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goToCompteur(){
            this.$router.push('/object')
        }
    }
}
</script>
<style scoped>
.banner{
    background-image: url('../assets/background.jpeg');
    width: 100%;
    height: 500px;
}
.welcome-word{
    padding-top: 15%;
}
</style>