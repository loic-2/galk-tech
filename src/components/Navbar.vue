<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="nav-bar row" style="margin-bottom:50px">
      <div class="col-2 self-align-left">
        <h4 class="title">GALKT-TECH</h4>
      </div>
      <div class="navigation-items col offset-2">
        <router-link to="/home">Acceuil</router-link>
        <router-link to="/users">Utilisateurs</router-link>
        <router-link to="/object">Compteurs</router-link>
        <router-link to="notifications">Notifications</router-link>
      </div>
      <div class="profile-actions col-2">
        <button class="deconnexion btn btn-primary" @click="gotoLogin">Deconnexion</button>
      </div>
    </div>
</template>
<script>
export default {

  methods:{
    gotoLogin(){
      this.$router.push('/')
    }
  }
    
}
</script>
<style scoped>
.row{
  margin: 0;
}
.title{
  font-family: serif;
  background-color: #26285c;
  color: white;
}
.nav-bar{
  height: 50px;
  padding-top: 10px;
  background-color: #26285c;
  position: fixed;
  z-index: 99;
  width: 100%;
}
.navigation-items > a{
  margin-top: 0;
  margin-left: 20px;
  text-decoration-style: none;
  padding: 13px;
  color: white;
}
.navigation-items > a:hover{
  background-color: rgba(255, 255, 255, 0.3);
  border-top: #fff solid 3px;
}
a{
  text-decoration-line: none;
  font-size: 20px;
}
.router-link-active{
  color: brown;
}
div>button{
  margin-top: -4px;
}

.router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border-top: #ffffff 3px solid;
    border-bottom: #ffffff 3px solid;
}
</style>