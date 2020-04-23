<template>
	<div class="row map">

		<!-- <h2>Center is {{currentCenter}} , zoom is {{currentZoom}}</h2> -->
		<l-map 	
				@update:zoom="zoomUpdate"
				@update:center="centerUpdate"
				:zoom="zoom" 
				:center="center">
			<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
			<l-marker
					:key="index"
					v-for="(brew,index) in brews" 
					:lat-lng="latLng(brew.latitude, brew.longitude)">


						<l-icon
							:icon-size="brew.iconSize"
							:icon-url="icon"
						>
							
						</l-icon>	
					</l-marker>
		</l-map>
	</div>
	
</template>

<script>
	// If you need to reference 'L', such as in 'L.icon', then be sure to
	// explicitly import 'leaflet' into your component
	import L from 'leaflet';
	import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
	import beer from '../assets/beer.png'

	export default {
		name: "BrewMap",
		props: {
			brews: Array
		},
		data: function() {
			return {
				zoom:6,
				center: L.latLng(35.305057, -112.210539),
				currentCenter: L.latLng(35.305057, -112.210539),
				currentZoom: 6,
				// find diferente maps on https://manage.thunderforest.com/dashboard
				url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=a6be1ac0e3c74e219178e2d27d483284',
				// url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="http://osm.org/			pyright">OpenStreetMap</a> contributors',
				marker: L.latLng(47.413220, -1.219482),
				icon: beer,
				iconSize: [35,35]

			}
		},
		components: {
			LMap,
			LTileLayer,
			LMarker,
			LIcon
			},
		methods: {
			latLng: function(lat, lng) {
				return L.latLng(lat, lng);
			},

			centerUpdate: function(center) {
				this.currentCenter = center
			},

			zoomUpdate: function(zoom){
				this.currentZoom = zoom
			}
		}

	}
	
</script>

<style scoped>

	.map{
		height: 95vh;
	}
	
</style>