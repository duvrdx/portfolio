<template>
    <div class="header-holder">
        <span class="logo">duvrdxOS</span>

        <div class="menu">
            <a @click="toggleAbout" >about me</a>
            <Window class="Window" title="about-me" description="Hello, my name is Eduardo Próspero. I'm currently a student in the Bachelor's program in Information Systems and a researcher in the Nu[Tec]² research group at the Federal Institute of Espírito Santo. I've conducted research in the field of Machine Learning and Deep Learning, and I have interests in the following areas:
            Machine Learning,
            FullStack Web Development,
            Data Science,
            Deep Learning,
            Computer Vision.
        
        " v-if="aboutMe" @hide="aboutMe = false" />
            <span>•</span>

            <a @click="toggleStack">stack</a>
            <Window class="Window" title="stack" description=" I have knowledge in the following technologies: Python, Java, C, JavaScript, Flask, Django, VueJS, React, TensorFlow, PyTorch, MatplotLib, Pandas, Keras, Numpy."  v-if="stack" @hide="stack= false" />
            <span>•</span>

            <a @click="toggleContact">contact</a>
            <Window class="Window" title="contact" description="You can contact me by the following link" url="https://heylink.me/duvrdx/" v-if="contact" @hide="contact = false" />

        </div>

        <span class="timestamp">{{ timestamp }}</span>
    </div>
</template>

<script>
import Window from './Window.vue';

export default {
name: 'HeaderComponent',
components:{
    Window
},props: {
    name: String,
    iconClass: String,
    description: String,
    imgPathWindow: String,
    url: String
},
data(){
    return {
        timestamp: new Date().toLocaleString(),
        aboutMe: false,
        contact: false,
        stack: false,
        screenWidth: window.innerWidth
    };
    
},
methods: {
    updateTimestamp() {
        this.timestamp = new Date().toLocaleString();
    },toggleAbout() {
        this.aboutMe = !(this.aboutMe);
    },toggleStack() {
        this.stack = !(this.stack);
    },toggleContact() {
        this.contact = !(this.contact);
    }
},
created() {
    // Atualiza o timestamp a cada segundo
    this.updateTimestampInterval = setInterval(() => {
        this.timestamp = new Date().toLocaleString();
    }, 1000);
},
beforeUnmont() {
    clearInterval(this.updateTimestampInterval);
}
}
</script>

<style>

.header-holder{
    color: var(--secondary-color);
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    width: 100%;
    background-color: var(--accent-color);
    align-items: center;
    padding: .5rem 0;
}

.logo{
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0 .5rem;
    padding: .1rem;
    border: 2px solid var(--secondary-color);
}

.menu a{
    margin-right: .2rem;
    color: var(--secondary-color)
}

.menu a:hover{
    font-size: 1.1rem;
    color: rgb(203, 152, 252)
}



.timestamp{
    position: absolute;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0 .5rem;
    right: 0;
}

@media screen and (max-device-width: 512px)
    and (orientation: portrait){
        .timestamp{
            display: none;
        }
    }
</style>