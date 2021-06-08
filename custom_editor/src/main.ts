import Vue from 'vue';
import Quasar from 'quasar';
import iconSet from 'quasar/icon-set/mdi-v5';
import lang from 'quasar/lang/ja';

import router from '@/router';

import App from '@/App.vue';

import '@/styles/quasar.scss';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v5/mdi-v5.css';

Vue.use(Quasar, {
    config: {
        dark: true
    },
    plugins: {},
    lang,
    iconSet
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
