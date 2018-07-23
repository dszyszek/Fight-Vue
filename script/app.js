new Vue({
    el: '.main',
    data: {
        playerHealth: 0,
        monsterHealth: 0,
        isActive: false,
        logActive: false
    },
    methods: {
        startGame: function(){
            this.isActive = !this.isActive;
            //console.log(this.isActive);
            this.monsterHealth = 100;
            this.playerHealth = 100;
        }
    }
})