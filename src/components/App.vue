<template>
  <div class="templateHolder">
    <Header/>
    <div class="grid">
      <div v-for="item in firstRow" :key="item.id">
        <Icon :name="item.name" :iconClass="item.icon" :imgPathWindow="item.image" :description="item.description" :url="item.url"/>
      </div>
    </div>

    <div class="grid">
      <div v-for="item in secondRow" :key="item.id">
        <Icon :name="item.name" :iconClass="item.icon" :imgPathWindow="item.image" :description="item.description" :url="item.url"/>
      </div>
    </div>

  </div>
</template>

<script>
import Icon from './Icon.vue';
import Header from './Header.vue';
import {ref} from "vue";

const firstRow = ref([
  {name: "Rocks Classification",
    icon:"blur_linear",
    image:"",
    url:"https://github.com/duvrdx/ic_classificacao_rochas",
    description:"This project examines granite classification accuracy through CNN convolutional layer variations. It is linked to an article that delves into the subject. The 5-layer architecture achieved a remarkable 99% accuracy. The following technologies were used: Python, TensorFlow, Jupyter Notebook, Matplotlib."},
  {name: "To-Do w/ VueJS",
    icon:"check_box",
    image:"",
    url:"https://github.com/duvrdx/todo-vuejs-frontend",
    description:"This project aimed to create a To-Do List to explore the use of databases and APIs, as well as front-end development. The following technologies were used: Python, Javascript, Flask, VueJS."},
  {name: "Graph Api w/ Spring Boot",
    icon:"linear_scale",
    image:"",
    url:"https://github.com/duvrdx/mygraph_api",
    description:"This project implements the graph data structure, using Java and Spring Boot to create an API that makes this implementation easy to use. The following technologies were used: Java, Spring Boot."},
  {name: "spOOOtify w/ Java",
    icon:"music_note",
    image:"",
    url:"https://github.com/duvrdx/sPOOtify",
    description:"This project carries out the implementation of a system inspired by Spotify, using the Java language, aiming to study and comprehend object-oriented programming concepts. The following technologies were used: Java."},
])

const secondRow = ref([
  {name: "Hate Speech Classification",
    icon:"text_fields",
    image:"",
    url:"https://github.com/duvrdx/twitter_hate_speech",
    description:"This project was developed during a Natural Language Processing course, where we worked on a paper exploring and comparing technologies for hate speech classification on Twitter. The following technologies were used: Python, PyTorch, SciKit Learn, Jupyter Notebook, Matplotlib"},
  {name: "Multithread Processing w/ C",
    icon:"apps",
    image:"",
    url:"https://github.com/duvrdx/threads_so",
    description:"This project was undertaken during the Operating Systems course to comprehend the functioning of multithreaded processing. The task involves accomplishing asynchronous processing of a large matrix.The following technologies were used: C"},
  {name: "Simple Crud w/ Flask",
    icon:"assessment",
    image:"",
    url:"https://github.com/duvrdx/lsi",
    description:"This project aimed to delve into the CRUD concept and was developed during the Information Systems Laboratory course. The following technologies were used: Python, Flask, SQLite"}
])

export default {
  name: 'App',
  components: {
    Icon, Header
  },data(){
    return{
      firstRow: firstRow,
      secondRow: secondRow
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: var(--primary-color);
  width: 100vw;
  height: 100vh;
}

#app{

  --primary-color: #6092A6;
  --secondary-color: #B4D2D9;
  --accent-color: #012B3F;
  
  width: 100%;
  height: 100%;
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--primary-color);
  
}

a{
  text-decoration: none;
}

.grid{
  display: flex;
  flex-direction: row;
}
</style>
