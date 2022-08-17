let btnComponent = Vue.component('button-counter', {
    template: `
    <button @click="count++">{{count}}</button>
    `,
    data: function () {
        return {
            count: 0
        }
    }
})

let blogPostComponent = Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div>
        <h5>{{ post.title }}</h5>        
        <button 
            @click="enlargeText(0.1)"> 
            Enlarge text 
        </button>
        <button 
            @click="reduceText(0.2)"> 
            Reduce text 
        </button>
        <div v-html="post.content"></div>
    </div>
    `,
    methods: {
        enlargeText: function (amount) {
            this.$emit('enlarge-text', amount)
        },
        reduceText: function (amount) {
            this.$emit('reduce-text', amount)
        }
    }
})


let customInputComponent = Vue.component('custom-input', {
    props: ['value'],
    template: `
    <div style="border: 5px solid gold; width: fit-content;">        
        <input
            type = "text"
            :value = "value"
            @input = "$emit('input-custom', $event.target.value)"
        >
    </div>
    `
})

let slotComponent = Vue.component('alert-box', {
    template: `
    <div :style='alertStyle'>
        <strong>Error !</strong>
        <slot></slot>
    </div>
    `,
    data: function () {
        return {
            alertStyle: {
                padding: '4px',
                backgroundColor: 'orange'
            }
        }
    }
})

let vueApp = new Vue({
    el: '#hello-component',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: `<span style= 'color:red'>blog content as html</span>` },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        postFontSize: 1,
        searchText: 'hello'
    },
    methods: {
        reduceTextParent: function (amount) {
            this.postFontSize -= amount
        },
        updateTextModel: function ($event) {
            this.searchText = $event.target.value
        }
    }
})
