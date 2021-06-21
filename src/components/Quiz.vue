<template>
    <v-container>
        <v-sheet color="white" elevation="2" height="50" class="d-flex flex-column mb-1">
            <v-row align="center" style="border: 1px solid lightgray;" no-gutters>
                <v-col cols="1" class="pl-4">
                    <v-checkbox
                    class="ma-0 pa-0"
                    v-model="checkbox"
                    @click="checkUncheckAll"
                    hide-details />
                </v-col>
                <v-col cols="7">
                    <div class="text-body-1 font-weight-medium">Вопрос</div>
                </v-col>                
                <v-col cols="3">
                    <v-btn depressed color="primary" width="200" tile :ripple="false"
                    @click="newQuestion" >Добавить вопрос</v-btn>
                </v-col>                            
                <v-col cols="1">
                    <v-icon @click="delSelectQuestions">mdi-close-circle</v-icon>
                </v-col>
            </v-row>
        </v-sheet>

        <v-sheet color="white" elevation="1" height="50" class="d-flex flex-column" v-for="q in qList" :key="q.qid">
            <v-row align="center" style="border-bottom: 1px solid lightgray;" no-gutters>
                <v-col cols="1" class="pl-4">
                    <v-checkbox
                    class="ma-0 pa-0"
                    v-model="questions"
                    :value="q.qid"
                    hide-details />
                </v-col>
                <v-col cols="9">
                    <div class="text-body-1 font-weight-medium">{{ q.question }}</div>
                </v-col>                
                <v-col cols="1">
                    <v-icon @click="runEdit(q.qid)">mdi-pencil</v-icon>
                </v-col>                                
                <v-col cols="1">
                    <v-icon @click="delQuestion(q.qid)">mdi-close-circle</v-icon>
                </v-col>
            </v-row>
        </v-sheet>  

        <v-dialog v-model="dialog" width="1000"> 
            <question v-on:closeModal="closeModal" />
        </v-dialog>

    </v-container>    
</template>

<script>
import Question from './Question.vue'
export default {
    data() {
        return {
            checkbox: false,
            questions: [],
            dialog: false,
        }
    },
    components: {
        Question        
    },
    computed: {
        qList() {
            return this.$store.getters.getQuizList
        }
    },
    methods: {
        runEdit(qid) {
            this.$store.commit('editQuiz', qid)
            this.dialog = true
        },
        newQuestion() {
            this.$store.commit('newQuiz')
            this.dialog = true
        }, 
        delQuestion(qid) {
            this.$store.commit('delQuiz', qid)
        },
        delSelectQuestions(){
            this.questions.forEach(e => this.delQuestion(e))
            this.questions = []
        },
        closeModal() {
            this.dialog = false
        },
        checkUncheckAll() {
            if(!this.checkbox){
                this.questions = []
            } else {
                this.qList.forEach(q => this.questions.push(q.qid))
            }         
        }
    }
}
</script>

<style scoped>
.v-btn  {
    text-transform: none;
}
</style>