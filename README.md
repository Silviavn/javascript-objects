 #Objetos de javascript

 Hemos visto los objetos primitivos de   javajavascript como como

 - Numbers
 - Booleans
 - String
 - Symbols
 - Null
 - Underfined

 Otros elementos de javascript muy ultilizados y que no son muy primitivos ya que tienen "superpoderes"(metodos) son:

 - Arreglos  
 - Objetos 

 Ejemplos

 ```javascript
 var arr = []
 var obj = {}

 Los arreglos se declaran utulizando `[]` y  los objetos se declaran con `{}`
  
Los elementos tienen elementos ordenados por indices en cambio los objetos no tienen indices. Sus elementos se rescatan u obtienen  mediante **llaves**.Ejemplo:

```javascript
var hero = {
name:"Thor"
weapon: "martillo"
hair:"rubio"
}
console.log(hero["name"])
console.log(hero["weapon"])
console.log(hero["hair"])

```javascript
console.log(hero.name)
console.log(hero.name)
console.log(hero.name)
```
