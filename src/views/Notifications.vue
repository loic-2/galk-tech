<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container notifications">
        <div class="message row">
            <h2 style="margin-top:30px">Liste des notifications</h2>
            <div class="alert alert-success d-flex align-items-center" @click="showSuccessDetails" style="margin-top:30px" role="alert">
                <font-awesome-icon icon="circle-check" /><span>&nbsp;</span><span>&nbsp;</span> 
            Mauvais branchement d'un cable d'alimentation
            <font-awesome-icon icon="chevron-down" @click="showSuccessDetails" style="margin-left:65%" v-if="!showSuccess"/>
            <font-awesome-icon icon="chevron-up" @click="showSuccessDetails" style="margin-left:65%" v-if="showSuccess"/>
            </div>
                <div class="details" v-if="showSuccess">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            <div class="alert alert-danger d-flex align-items-center" @click="showDangerDetails" role="alert">
                <font-awesome-icon icon="circle-exclamation" /><span>&nbsp;</span><span>&nbsp;</span> 
            Mauvais branchement d'un cable d'alimentation
            <font-awesome-icon icon="chevron-down" @click="showDangerDetails" style="margin-left:65%" v-if="!showDanger"/>
            <font-awesome-icon icon="chevron-up" @click="showDangerDetails" style="margin-left:65%" v-if="showDanger"/>
            </div>
            <div class="details" v-if="showDanger">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <div class="alert alert-warning d-flex align-items-center" @click="showWarningDetails" role="alert">
                <font-awesome-icon icon="warning" /><span>&nbsp;</span><span>&nbsp;</span> 
            Mauvais branchement d'un cable d'alimentation
            <font-awesome-icon icon="chevron-down" @click="showWarningDetails" style="margin-left:65%" v-if="!showWarning"/>
            <font-awesome-icon icon="chevron-up" @click="showWarningDetails" style="margin-left:65%" v-if="showWarning"/>
            </div>
            <div class="details" v-if="showWarning">
                <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div class="alert alert-info d-flex align-items-center" @click="showInfoDetails" role="alert">
            <font-awesome-icon icon="circle-info" /><span>&nbsp;</span><span>&nbsp;</span>  
            Mauvais branchement d'un cable d'alimentation
            <font-awesome-icon icon="chevron-down" @click="showInfoDetails" style="margin-left:65%" v-if="!showInfo"/>
            <font-awesome-icon icon="chevron-up" @click="showInfoDetails" style="margin-left:65%" v-if="showInfo"/>
            </div>
            <div class="details" v-if="showInfo">
                <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                            <tr>
                                <td>19-05-2022</td>
                                <td>Coupure d'electricite</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showSuccess:false,
            showDanger:false,
            showInfo:false,
            showWarning:false,
        }
    },  
    methods: {
        showSuccessDetails(){
            this.showSuccess=!this.showSuccess
        },
        showDangerDetails(){
            this.showDanger=!this.showDanger
        },
        showInfoDetails(){
            this.showInfo=!this.showInfo
        },
        showWarningDetails(){
            this.showWarning=!this.showWarning
        },
    }, 
    
}
</script>

<style scoped>
    .alert{
        cursor: pointer;
    }
</style>