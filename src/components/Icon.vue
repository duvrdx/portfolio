<template>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <div>
    <div @click="toggleWindow" class="item-holder">
      <i class="large material-icons">{{ iconClass }} </i>
      <span>{{ name }}</span>
    </div>
    <Window :url="url" :title="name" :description="description" :iconClass="iconClass" v-if="showWindow" @hide="showWindow = false" />
  </div>
</template>

<script>
import Window from './Window.vue';

export default {
  name: 'IconComponent',
  components:{
    Window
  },
  props: {
    name: String,
    iconClass: String,
    description: String,
    imgPathWindow: String,
    url: String
  },
  data() {
    return {
      showWindow: false,
    };
  },
  methods: {
    toggleWindow() {
      this.showWindow = !(this.showWindow);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-holder{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 7rem;
  height: 8rem;
  margin: .2rem .5rem;
}
img{
  width: 3.5rem;
  height: 3.5rem;
  margin: .3rem;
}
i{
  font-size: 3.5rem;
  color: var(--secondary-color);
}
span {
  background-color: var(--accent-color);
  color: var(--secondary-color);
  font-size: 1rem;
  padding: .2rem;
  width: 100%;
}

.item-holder:hover i{
  transition: ease-in-out 0.3s;
  cursor: pointer;
  font-size: 3.8rem;
}

.item-holder:hover span{
  transition: ease-in-out 0.3s;
  cursor: pointer;
  background-color: #045074;
}

</style>
