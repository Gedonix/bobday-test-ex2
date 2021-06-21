<template>
    <v-container class="mt-4 mx-auto grey lighten-5">
        <v-sheet color="white" elevation="1" height="250" class="d-flex flex-column">            
            <v-row align="center" class="brd" no-gutters>
                <v-col class="pl-8"><v-icon>mdi-arrow-left</v-icon> </v-col>                
            </v-row>
            <v-spacer></v-spacer>
            <v-row no-gutters>
                <v-col cols="8">
                    <v-row no-gutters align="center" justify="space-between"  class="mb-4">         
                        <v-col class="pl-4" cols="2">
                            <div class="text-body-2 font-weight-bold">НАЗВАНИЕ:</div>
                        </v-col>
                        <v-col cols="8">            
                            <v-text-field  
                            v-model="nameTest"        
                            solo            
                            dense
                            hide-details="auto"
                            append-icon="mdi-close-circle"       
                            />
                        </v-col>
                    </v-row>                                       
                    <v-row no-gutters align="center" justify="space-between">         
                        <v-col class="pl-4" cols="2">
                            <div class="text-body-2 font-weight-bold">КАТЕГОРИЯ&nbsp;ТЕСТА:</div>
                        </v-col>
                        <v-col cols="8">            
                            <v-select                               
                            solo
                            dense
                            hide-details="auto"
                            append-icon="mdi-chevron-down"
                            />   
                        </v-col>
                    </v-row>    
                </v-col>   
                <v-col cols="1" />
                <v-col cols="3">
                    <v-btn depressed color="primary" width="200" tile :ripple="false"
                    class="mb-4" @click="saveName">Сохранить</v-btn>
                    <v-btn depressed color="grey darken-1" width="200" tile :ripple="false"
                    class="white--text">Сохранить черновик</v-btn>     
                </v-col>               
            </v-row>
        </v-sheet>
        <v-dialog v-model="dialog" width="325">
            <info />
        </v-dialog>
    </v-container>
</template>

<script>
import Info from './Info.vue'
export default {
    components: { Info },
    data() {
        return {
            nameTest: '',
            dialog: false,
        }
    },
    methods: {
        saveName() {
            this.$store.commit('setTestName', this.nameTest)
            this.dialog = true
        }
    }
}
</script>

<style scoped>
.brd {
    border-bottom: 1px dotted black;
    height: 0;
}
.v-btn  {
    text-transform: none;
}
</style>