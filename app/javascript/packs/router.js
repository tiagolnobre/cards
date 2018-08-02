import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter )

import HomePage from '../components/Home.vue';
import TestPage from '../components/Test.vue';

export const routes = [
  { path: '', component: HomePage , name: 'home'},
  { path: '/test', component: TestPage , name: 'test'}
];


// export default new VueRouter({
//     routes: [
//         {
//             path: '',
//             name: 'main',
//             component: Vue.component( 'main', require( '../app.vue' ) ),
//             children: [
//               {
//                    path: '/home',
//                    name: 'home',
//                    component: Vue.component( 'Test', require( '../test.vue' ) )
//                },
//             ]
//         }
//       ]
// });
