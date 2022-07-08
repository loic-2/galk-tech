<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class=" container compteur">
    <div class="compteur-action">
        <div class="row">
            <div class="col-2">
                <button class="ajout btn btn-primary" @click="openAddDialog">
                    <font-awesome-icon icon="add"/>
                    Ajouter
                </button>
            </div>
            <div class="recherche col-3 offset-7">
                <input type="text" class="form-control" placeholder="Rechercher un compteur..." name="" id="">
                <font-awesome-icon class="search-icon" icon="search"/>
            </div>
        </div>
        <div class="row" style="margin-bottom:70px">
                <div class="col-3 offset-9">
                    <select name="" id="" class="form-select">
                        <option value="localisation">Localisation</option>
                        <option value="nom">Nom</option>
                        <option value="identifiants">Identifiants</option>
                        <option value="action">Action</option>
                    </select>
                </div>
        </div>
    </div>
    <div class="table-compteurs">
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Loclaisation</th>
                <th scope="col">Identifiant du compteur</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                    <button class="delete btn btn-primary"><font-awesome-icon icon="eye"/></button>
                    <button class="delete btn btn-success"><font-awesome-icon icon="pen"/></button>
                    <button class="delete btn btn-danger"><font-awesome-icon icon="trash"/></button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                    <button class="delete btn btn-primary"><font-awesome-icon icon="eye"/></button>
                    <button class="delete btn btn-success"><font-awesome-icon icon="pen"/></button>
                    <button class="delete btn btn-danger"><font-awesome-icon icon="trash"/></button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td >Larry the Bird</td>
                <td>demo</td>
                <td>
                    <button class="delete btn btn-primary"><font-awesome-icon icon="eye"/></button>
                    <button class="delete btn btn-success"><font-awesome-icon icon="pen"/></button>
                    <button class="delete btn btn-danger"><font-awesome-icon icon="trash"/></button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {

    methods: {
        openAddDialog(){
            this.$swal.fire({
                title:"test"
            })
        }
    },

}
</script>

<style scoped>
.ajout{
    background-color: rgba(38, 40, 92, 0.7);
    border-color: rgba(38, 40, 92, 0.7);
    margin-left: -70px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.search-icon{
    position: absolute;
    right: 20px;
    top: 30px;
}
.recherche{
    margin-top: 20px;
    margin-bottom: 20px;
}
td > button{
    margin-right: 10px;
}
</style>