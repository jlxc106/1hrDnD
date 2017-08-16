$(document).ready(function(){
    items = new Item();
    characters = new Character();
    characters.init();
})

function Character(){
    this.str = 0;
    this.dex = 0;
    this.intel = 0;
    this.char = 0;
    this.constit = 0;
    this.willp = 0;
    this.init = function(){
        this.rollStats();
        this.getItems();
        this.getName()
    }

    this.rollStats = function(){
        //rng between 3 and 18 to assign stats for character
        this.str = Math.floor(Math.random()*16) + 3;
        this.dex = Math.floor(Math.random()*16) + 3;
        this.intel = Math.floor(Math.random()*16) + 3;
        this.char = Math.floor(Math.random()*16) + 3;
        this.constit = Math.floor(Math.random()*16) + 3;
        this.willp = Math.floor(Math.random()*16) + 3;
    }

    this.getName = function(){
        this.charName = null;
        var charVowels = ['a', 'e', 'i', 'o', 'u'];
        var charConst = ['b', 'c', 'd', 'f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
        function genCharName(){
            var name = charVowels[Math.floor(Math.random() * charVowels.length)];
            for(var i = 0; i < Math.floor(Math.random() * 16) + 3; i++) {
                if (Math.floor(Math.random() * 2) === 0) {
                    name += charVowels[Math.floor(Math.random() * charVowels.length)];
                } else name += charConst[Math.floor(Math.random() * charConst.length)];
            } return name;
        }
        this.charName = genCharName();
    }
    this.inventory = [];
    this.getItems = function(){
        var highest_stat = this.str;
        var weapon = items.weapon.type[Math.floor(Math.random() * 3)];
        this.inventory.push(weapon);
        if(weapon.isOneHanded === true) {
            this.inventory.push(items.shield.type[Math.floor(Math.random() * 3)]);
            this.inventory.push(items.helmet.type[Math.floor(Math.random() * 3)])

        } else {
            this.inventory.push(items.rings.type[Math.floor(Math.random() * 3)]);
            this.inventory.push(items.chest_armor.type[Math.floor(Math.random() * 3)])
        }
    };
}

//items
function Item() {
    this.helmet = {
        type : [{
            name: 'leather_helmet',
            str: 1,
            dex: 1,
            intel: 1,
        }, {
            name: 'steel_helmet',
            str: 2,
            dex: 2,
            intel: 2,
        },
            {
                name: 'gold_helmet',
                str: 3,
                dex: 3,
                intel: 3,
            }
        ]
    }

    this.chest_armor = {
        type : [{
            name: 'leather_chest',
            str: 1,
            dex: 1,
            intel: 1,
        }, {
            name: 'steel_chest',
            str: 2,
            dex: 2,
            intel: 2,
        }, {
            name: 'gold_chest',
            str: 3,
            dex: 3,
            intel: 3
        }
        ]
    }
    this.hand_armor = {
        type : [{
            name: 'leather_hand',
            str: 1,
            dex: 1,
            intel: 1,
        }, {
            name: 'steel_hand',
            str: 2,
            dex: 2,
            intel: 2,
        }, {
            name: 'gold_hand',
            str: 3,
            dex: 3,
            intel: 3
        }
        ]
    }
    this.leg_armor = {
        type : [{
            name: 'leather_legs',
            str: 1,
            char: 1,
            willp: 1,
        }, {
            name: 'steel_legs',
            str: 2,
            char: 2,
            willp: 2,
        }, {
            name: 'gold_legs',
            str: 3,
            char: 3,
            willp: 3
        }
        ]
    }
    this.necklace = {
        type : [{
            name: 'leather_necklace',
            constit: 1,
            char: 1,
            willp: 1,
        }, {
            name: 'steel_necklace',
            constit: 2,
            char: 2,
            willp: 2,
        }, {
            name: 'gold_necklace',
            constit: 3,
            char: 3,
            willp: 3
        }
        ]
    }
    this.rings = {
        type : [{
            name: 'leather_rings',
            constit: 1,
            char: 1,
            willp: 1,
        }, {
            name: 'steel_rings',
            constit: 2,
            char: 2,
            willp: 2,
        }, {
            name: 'gold_rings',
            constit: 3,
            char: 3,
            willp: 3
        }
        ]
    }
    this.weapon = {
        type : [{
            name: 'hammer',
            str: 3,
            dex: 5,
            isOneHanded: true
        }, {
            name: 'staff',
            constit: 4,
            intel: 4,
            willp: 4,
            isOneHanded: true
        }, {
            name: 'Sword',
            str: 5,
            dex: 1,
            isOneHanded: false
        }
        ]
    }
    this.shield = {
        type : [{
            name: 'leather shield',
            str: 1,
            dex: 5
        }, {
            name: 'metal shield',
            str: 4,
            dex: 1,
        }, {
            name: 'heavy shield',
            str: 6,
        }
        ]
    }
}

var items = null;
var characters = null;
// var HelmetObj = new Helmet();
