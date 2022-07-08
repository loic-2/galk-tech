<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="connexion" style="margin-top:12%;">
       <div class="title"> <h3>Inscription</h3></div>
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
                    <font-awesome-icon icon="briefcase" />
                </span>
                <input type="text" class="form-control" placeholder="Poste" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <font-awesome-icon icon="building" />
                </span>
                <input type="text" class="form-control" placeholder="Lieu de service" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <font-awesome-icon icon="lock" />
                </span>
                <input type="text" class="form-control" placeholder="Votre mot de passe" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <font-awesome-icon icon="lock" />
                </span>
                <input type="text" class="form-control" placeholder="Confirmer votre mot de passe" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
                <input type="submit" @click="go" class="form-control submit" value="S' inscrire">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"signin",
    methods: {
        go(){
            this.$router.push('/')
        }
    },
}
</script>

<style>
.title{
    background-color: rgba(38, 40, 92, 0.7);;
    border-radius: 5px;
    margin-bottom: 30px;
}
.title>h3{
    color: #fff;
}
div > .submit{
    background-color: rgba(38, 40, 92, 0.7);
    color: white;
}
</style>