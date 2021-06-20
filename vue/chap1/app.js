Vue.createApp({
    data() {
        return {
            goals: [],
            inputContent: ''
        };
    },
    methods: {
        addGoal(event) {
            this.goals.push(this.inputContent);
            this.inputContent = '';
        }    
    }
}).mount('#app');