<template>
  <v-container class="mt-4 mx-auto grey lighten-5">
    <v-row style="height: 60px;" align="center" justify="end">
      <v-col offset="11" class="pb-4"><v-icon @click="close">mdi-close</v-icon> </v-col>
    </v-row>
    <v-form ref="form">
      <v-row class="brdtb" align="center" justify="center">         
        <v-col cols="2">
          <div class="text-body-1">ВОПРОС:</div>
        </v-col>
        <v-col cols="8">            
          <v-text-field          
            solo            
            dense
            v-model="quiz.question" 
            hide-details="auto"
            append-icon="mdi-close-circle"
            @click:append="questionClear"        
            />
        </v-col>
      </v-row>
      
      <v-row class="mt-4" align="center" justify="center">         
        <v-col cols="2">
          <div class="text-body-1">ТИП ОТВЕТА:</div>
        </v-col>
        <v-col cols="8">  
          <v-select
            v-model="quiz.select"
            :items="choice"
            solo
            dense
            hide-details="auto"
            append-icon="mdi-chevron-down"
          />          
        </v-col>
      </v-row>

      <v-row class="mt-4" align="center" justify="center">         
        <v-col cols="10" class="pb-0">
          <div class="text-body-1">ОТВЕТЫ:</div>
        </v-col>
      </v-row>

      <v-row class="mt-0" align="center" justify="center">         
        <v-col cols="10"  class="pt-0">
          <v-row align="center" justify="center" class="mt-0 mb-0">
            <v-col cols="8" />
            <v-col cols="1" class="pt-0 pb-0 pl-8">
              <div class="text-body-2">Верный</div>
            </v-col>          
          </v-row>
          <v-radio-group v-model="quiz.correctAnswer">
            <v-row align="center" v-for="(answer, i) in quiz.answers" :key="answer.id">
              <v-col cols="1">
                <div class="text-body-1">{{i + 1}})</div>
              </v-col>
              <v-col cols="9">
                <v-text-field          
                  solo
                  dense
                  v-model="answer.text" 
                  hide-details="auto" 
                />
              </v-col>
              <v-col cols="1">
                <v-radio v-if="one" :value="answer.id"/>
                <v-checkbox v-else
                  class="ma-0 pa-0" 
                  v-model="quiz.correctAnswersList"
                  :value="answer.id"
                  hide-details />
              </v-col>
              <v-col cols="1"><v-icon @click="deleteAnswer(answer.id)">mdi-close-circle</v-icon></v-col>
            </v-row>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row class="mt-0" align="center" justify="center">         
        <v-col cols="10" class="pa-0 pl-8">
          <v-btn @click="addAnswer" class="mt-0" small fab dark color="secondary">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mt-0" align="center" justify="center"> 
        <v-btn 
          depressed 
          color="primary" 
          width="300" 
          tile 
          :ripple="false"
          @click="sendObject"
        >ГОТОВО</v-btn>          
      </v-row>
     
      <v-row 
        style="height: 50px; border-bottom: 1px solid black;">
      </v-row>

    </v-form> 
  </v-container>
</template>

<script>
export default {
    data() {
        return {
          choice: ['Один верный', 'Множественный выбор'],  
        }
    },
    methods: {
      close() {
        this.$emit('closeModal')
      },
      questionClear () {
        this.quiz.question = ''
      },             
      addAnswer() {
        this.quiz.answers.push({id: this.quiz.idCount++, text: ''})
      },
      deleteAnswer(idx) {
        this.quiz.answers = this.quiz.answers.filter( a => a.id !== idx)
      },
      sendObject(){  
        if(this.quiz.qid) {
          this.$store.commit('replace', this.quiz)
          this.close()
        } else {
          this.$store.dispatch('addQuiz', this.quiz)
        }
        console.log(JSON.stringify(this.quiz)); 
      }
    },  
    computed: {
      one() {
        return this.quiz.select === 'Один верный' ? true : false
      },
      quiz() {
        return this.$store.getters.getCurrent
      }
    },
}
</script>

<style>
.brdtb{
  border-top: 2px dotted black;
  border-bottom: 2px dotted black;
  height: 80px;
}
.v-text-field {
  border: 1px solid lightgrey;
  border-radius: 0;  
}
</style>
