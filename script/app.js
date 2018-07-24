new Vue({
    el: '.main',
    data: {
        playerHealth: '',
        monsterHealth: '',
        isActive: false,
        logActive: false,
        logInfo: []
    },
    methods: {
        startGame: function(){
            this.isActive = !this.isActive;
            this.monsterHealth = 100;
            this.playerHealth = 100;
        },
        attack: function(minAtt, maxAtt, who){
                if(this.monsterHealth <= 0 || this.playerHealth <= 0){this.isActive = false;
                    this.logActive = false;
                    this.logInfo = [];
                     return}
                let damage = Math.max(Math.floor(Math.random()*maxAtt),minAtt);
                if(who == 'monster'){ this.monsterHealth = Math.max((this.monsterHealth-damage),0)}
                else if(who == 'player'){this.playerHealth = Math.max((this.playerHealth-damage),0)};
                this.logNotifications(`${who} was attacked with ${damage}`);
             
        },
        heal: function(){
            if(this.playerHealth >= 90){
                this.logNotifications(`player is now fully healed`);
                return  this.playerHealth = 100}
            this.playerHealth += 10;
            this.monsterHealth += 2;
            this.attack(3, 7, 'player');
            this.logNotifications(`player was healed with 10`);
            this.logNotifications(`monster was healed with 2`);
        },
        logNotifications: function(text){
            this.logActive = true;
            this.logInfo.push(text);
        },
        giveUp: function(){
             this.isActive = false;
             this.logActive = false;
             this.logInfo = [];
             return
        }
       
    }
})