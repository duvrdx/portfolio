<template>
    <div class="window-holder"
        :style="{ left: divX + 'px', top: divY + 'px' }"
        @mousedown="startDragging"
        @mousemove="dragDiv"
        @mouseup="stopDragging"
        @mouseleave="stopDragging">
        <div class="window">
            <div class="window-header">
                <span> {{ title }}</span>
                <a class="close-button" @click="hideComponent">X</a>
            </div>
            <div class="content">
                <p> {{ description }} </p>
                
                <i class="large material-icons">{{ iconClass }} </i>
                
                <a v-if="url" style="margin-top:1rem" :href=url target="_blank"> Link </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'WindowComponent',
props: {
    title: String,
    description: String,
    iconClass: String,
    visible: Boolean,
    url: String
    },
    methods: {
    hideComponent() {
        this.$emit('hide');
    },
    startDragging(e) {
        this.isDragging = true;
        this.offset.x = e.clientX - this.divX;
        this.offset.y = e.clientY - this.divY;
        document.body.style.cursor = 'grabbing';
    },
    dragDiv(e) {
        if (!this.isDragging) return;
        this.divX = e.clientX - this.offset.x;
        this.divY = e.clientY - this.offset.y;
    },
    stopDragging() {
        this.isDragging = false;
        document.body.style.cursor = 'grab';
    },
    },data() {
    return {
        isDragging: false,
        offset: { x: 0, y: 0 },
        divX: 400,
        divY: 100,
    };
}
}
</script>

<style>

i{  
    margin: 1rem;
    font-size: 5rem;
}

.window-holder{
    cursor: grab;
    position: absolute;
    z-index: 5;
    width: 25rem ;
    height: 27rem;
    top: 20%; 
    left: 35%;
    background-color: var(--secondary-color);
    padding: .5rem;
    box-shadow: 10px 10px 0px -1px var(--accent-color);
    user-select: none;
}

.window{
    height: 100%;
    width: 100%;
    border: .15rem solid var(--accent-color);
    padding: .5rem;
    color: var(--accent-color);
}

.window-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-size: 1.5rem;
}

.close-button{
    width: 1.7rem;
    height: 1.7rem;
    border: .15rem solid var(--accent-color);
    color: var(--accent-color);
}

.close-button:hover{
    color: var(--primary-color)
}

.content{
    width: 100%;
    height: 70%;
    margin-top: 1rem;
    color: var(--accent-color);
    display: flex;
    flex-direction: column;
}

.img-holder{
    margin: 1rem 0;
    font-size: 5rem;
    border: .15rem solid var(--accent-color);
    width: 100%;
    height: 70%;
}

img{
    height: 100%;
    width: auto;
}
a{
    text-decoration: none;
}
a:hover{
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--primary-color)
}
</style>