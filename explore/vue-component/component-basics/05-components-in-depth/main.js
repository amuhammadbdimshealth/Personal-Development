let btnComponent = {
    template: `
    <button @click="count++">{{count}}</button>
    `,    
    data: function () {
        return {
            count: 0
        }
    }    
}
let userProfileComponent = {
    template: '#user-template',
    props: {
        profileColor: String,
        userName: String
    },
    methods: {
        changeProfileColor: function () {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.userProfileColor = `#${randomColor}`
        }
    },
    data: function () {
        return {
            userProfileColor: this.profileColor
        }
    }
}

Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
})

let vueApp = new Vue({
    el: '#hello-component',
    components: {
        'button-counter': btnComponent,
        'user-profile': userProfileComponent

    },
    data: {
        profileColor: 'red',
        lovingVue: true
    },
    methods: {
        
    }
})
