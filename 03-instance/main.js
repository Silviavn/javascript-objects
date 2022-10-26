function Pokemon (name, height, hp, defense, attackpoints) {

    this.name = name,
    this.height = height,
    this.hp = hp,
    this.defense = defense,
    this.attackPoints = aP,
    
    this.shhowStats = () => {
        return `Nombre : ${this.name}, Altura: ${this.height}`
    }
}
const pikachu = new Pokemon ("Pikachu", 4, 35, 40, 55)
const charmander = new Pokemon ("Charmander", 6, 39, 52, 43)

pikachu.attack(charmander)
charmander.attack(pikachu)

console.log(charmander.shhowStats());
console.log(pikachu.shhowStats());
















