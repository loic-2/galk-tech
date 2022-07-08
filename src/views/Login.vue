<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="connexion" style="margin-top:12%;">
       <div class="title"> <h3>Connexion</h3></div>
        <div class="form">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <font-awesome-icon icon="user" />
                </span>
                <input type="text" class="form-control" placeholder="Votre nom" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <font-awesome-icon icon="barcode" />
                </span>
                <input type="text" class="form-control" placeholder="Votre matricule" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <font-awesome-icon icon="lock" />
                </span>
                <input type="text" class="form-control" placeholder="Votre mot de passe" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <input type="submit" @click="gotoHome"  class="form-control submit" value="Se connecter">
            </div>
        </div>
        <div class="text-align-right gotoSignin mb-3">
            <router-link to="/signin">Vous n'avez pas de compte ?</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"login",
    methods: {
        gotoHome(){
            this.$router.push('/home')
        }
    },

}
</script>

<style scoped>
.title{
    background-color: rgba(38, 40, 92, 0.7);
    border-radius: 5px;
    margin-bottom: 30px;
}
.title>h3{
    color: #fff;
}
div > .submit{
    background-color: rgba(38, 40, 92, 0.7);
    color: white;
    font-style: normal;
}
.gotoSignin{
    margin-left: 80%;
}
</style>