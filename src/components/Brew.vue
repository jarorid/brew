<template>

  <div class="container">
    <div class="row">
      <div class="col-12">
        
          <h1 class="text-center text-info">Breweries list</h1>

          <h2>{{ msg }} {{ name }}</h2>

      </div>
      <!-- /.col-12 -->

    </div>
    <!-- .row -->
    <div class="row">
      <div class="col-6 brew-list">
        <BrewList 
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
          :brews="brews"
        /> 
      </div>
      <!-- .col-6 -->

      <div class="col-6">
        <BrewMap :brews="brews"/>
      </div>
      <!-- .col-6 -->


    </div>
    <!-- .row -->
  </div>
  <!-- .container -->

</template>

<script>

  import axios from 'axios'
  import BrewList from './BrewList.vue'
  import BrewMap from './BrewMap.vue'

export default {
  name: 'Brew',
  components: {BrewList, BrewMap},
  data: function () {
    return {
        brews: [],
        normalIcon:[25,25],
        largeIcon:[50,50]
    }
  },
  mounted: function() {
        // https://www.openbrewerydb.org/documentation/01-listbreweries

        this.brews = axios.get('https://api.openbrewerydb.org/breweries')
              .then((r) => {
                // All data
                  // this.brews = r.data;
                // Filtering data
                  this.brews = r.data.filter(r=> r.state = 'Arizona')
                  .map(r =>{
                    r.iconSize = this.normalIcon;
                    return r;
                  });
              })
  },
  methods:{
    mouseOverBrew: function(index){
      this.brews[index].iconSize= this.largeIcon;
    },
    mouseLeftBrew: function(index){
      this.brews[index].iconSize= this.normalIcon;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>



</style>
