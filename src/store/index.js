import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quizList: [{
                qid: 1001,
                question: 'Кто съел колобка',
                select: 'Один верный',
                correctAnswersList: [],
                correctAnswer: 4,
                idCount: 5,
                answers: [
                    { id: 1, text: 'Медведь' },
                    { id: 2, text: 'Волк' },
                    { id: 3, text: 'Заяц' },
                    { id: 4, text: 'Лиса' }
                ],
            },
            {
                qid: 1002,
                question: 'Где родилась елочка',
                select: 'Один верный',
                correctAnswersList: [],
                correctAnswer: 2,
                idCount: 5,
                answers: [
                    { id: 1, text: 'В саду' },
                    { id: 2, text: 'В лесу' },
                    { id: 3, text: 'В огороде' },
                    { id: 4, text: 'В квартире' }
                ],
            },
            {
                qid: 1003,
                question: 'Во что превратилась тыква',
                select: 'Один верный',
                correctAnswersList: [],
                correctAnswer: 1,
                idCount: 5,
                answers: [
                    { id: 1, text: 'Карету' },
                    { id: 2, text: 'Самолет' },
                    { id: 3, text: 'Сани' },
                    { id: 4, text: 'Мороженое' }
                ],
            }
        ],
        qidCount: 2001,
        nameTest: '',
        pattern: {
            question: '',
            select: 'Один верный',
            correctAnswersList: [],
            correctAnswer: 1,
            idCount: 5,
        },
        current: {}
    },
    mutations: {
        newQuiz(state) {
            state.current = {...state.pattern, answers: [] }
            for (let i = 1; i < 5; i++) {
                state.current.answers.push({ id: i, text: '' })
            }
        },
        delQuiz(state, pld) {
            state.quizList = state.quizList.filter(q => q.qid !== pld)
        },
        editQuiz(state, pld) {
            state.current = state.quizList.find(q => q.qid === pld)
        },
        replace(state, pld) {
            state.quizList = state.quizList.filter(q => q.qid !== pld.qid)
            state.quizList.push(pld)
        },
        setTestName(state, name) {
            state.nameTest = name
        },
    },
    getters: {
        getQuizList: state => {
            return state.quizList;
        },
        getNameTest: state => {
            if (!state.nameTest) state.nameTest = `Тест № ${Date.now()}`
            return state.nameTest
        },
        getCurrent: state => {
            return state.current
        },
    },
    actions: {
        addQuiz(context, pld) {
            context.state.qidCount = context.state.qidCount + 1
            context.state.quizList.push({ qid: context.state.qidCount, ...pld })
            context.commit('newQuiz')
        },
    },
    modules: {}
})