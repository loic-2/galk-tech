<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carte col-4">
    <div class="contenu" style="margin:5px;">
        <div class="image">
            <font-awesome-icon icon="code" class="icon"/>
        </div>
        <div class="titre">
            <h5>Developpement</h5>
        </div>
        <div class="details">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae inventore ducimus voluptates possimus unde  
            </p>
        </div>
        <button class="btn btn-primary">Details <font-awesome-icon icon="angles-right"/></button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .col-4{
        padding: 15px;
    }
    .carte{
        position: relative;
        padding: 15px;
    }
    .contenu{
        background-color: #dddd;
        padding: 10px;
        padding-top: 20px;
        padding-block: 20px;
        border-radius: 15px;
        
    }

    div,.contenu:hover{
        cursor: pointer;
    }
    .icon{
        height: 70px;
        width: 70px;
    }
    .titre,.details{
        color: rgba(38, 40, 92, 0.7);
    }
    h5{
        color: rgba(38, 40, 92, 0.7);
    }
</style>