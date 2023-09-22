"use strict";

class Pokemon{ // créer une classe pokemon avec comme paramètres
    constructor(name,attack,defense,hp,luck){ // name, attack, defense, hp, luck
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){ // créer une compétence attackPokemon
        if(this.isLucky()){
            let damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(this.name+' a attaqué '+pokemon.name+' pour '+damage+' de dégats, il lui reste '+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){ // créer une compétence isLucky
        return this.luck>Math.random()
    }
}
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5); // créer deux pokemons avec des stats différents
let boulbi=new Pokemon('Boulbi',18,4,70,0.8);

while(dracofeu.hp >0 && boulbi.hp>0){ // tant que l'un ne meurt pas, faire attaquer tour à tour
    dracofeu.attackPokemon(boulbi)
    if(boulbi.hp<=0){ 
        console.log(boulbi.name+" is dead !");
        break;// si l'un deux meurt, afficher "pokemon is dead" comme message de fin
    }
    boulbi.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" is Dead !");
        break
    }
}