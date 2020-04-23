
// import { L } from 'vue2-leaflet'
// import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../scss/main.scss'


import Vue from 'vue'
import App from './App.vue'

// this part resolve an issue where the markers would not appear
// 1:09:53

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png")
// });

// // delete L.Icon.Default.prototype._getIconUrl;

// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //   iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// // });

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
