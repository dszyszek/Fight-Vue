new Vue({
    el: '.main',
    data: {
        playerHealth: '',
        monsterHealth: '',
        isActive: false,
        logActive: false
    },
    methods: {
        startGame: function(){
            this.isActive = !this.isActive;
            //console.log(this.isActive);
            this.monsterHealth = 100;
            this.playerHealth = 100;
        },
        attack: function(minAtt, maxAtt, who){
                if(this.monsterHealth <= 0 || this.playerHealth <= 0){this.isActive = false;
                     return}
                let damage = Math.max(Math.floor(Math.random()*maxAtt),minAtt);
                if(who == 'monster'){ this.monsterHealth = Math.max((this.monsterHealth-damage),0)}
                else if(who == 'player'){this.playerHealth = Math.max((this.playerHealth-damage),0)};
        },
        heal: function(){
            if(this.playerHealth >= 90){return this.playerHealth = 100}
            this.playerHealth += 10;
            this.monsterHealth += 2;
            this.attack(3,7,"player");
        },
        giveUp: function(){
            return this.isActive = false
        }
    }
})