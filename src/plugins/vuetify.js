import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F44336',
                secondary: '#FF6B3C',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});