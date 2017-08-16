
function Character(){
    this.str = 0;
    this.dex = 0;
    this.intel = 0;
    this.char = 0;
    this.constit = 0;
    this.willp = 0;
    this.init = function(){
        this.rollStats();
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



}

//items
function Item(){



    function Helmet(){

    }
}

// var HelmetObj = new Helmet();
