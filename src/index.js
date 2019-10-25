import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Aula 01 - JS Basics 01: variáveis (var, let, const), hoisting, funções e arrow-functions

// Existem três formas de definir uma variável: var, let e const

/*
// var é hoisting 
console.log(variavel1)
var variavel1 = 10
console.log(variavel1)
*/

/*
// let não é hoisting com a mesma construção de var o erro ocorre
console.log(variavel2)
let variavel2 = 20
console.log(variavel2)
*/

/*
// const não é hoisting com a mesma construção de var o erro ocorre
console.log(variavel3)
const variavel3 = 30
console.log(variavel3)
*/

/*
// A diferença entre const e var é que não se pode modificá-la
const variavel4 = 60
console.log(variavel4)
variavel4 = variavel4 + 1 
*/

/*
 Por que aconselhável uso de const?
 Um conceito importante na linguagem é utilizar variáveis imutáveis
 ajuda a controlar a qualidade do código, ao criar desse tipo teremos a certeza que ela não mudará
 O var está caindo em desuso
 É comum criar funções utilizando const, pois tem-se a certeza que essa função só existe a partir daquele ponto
 funcões simples também são hoisting
 Vá na App.js e observe como reescrever a função App()
*/

/*
  Funções em java script são como variáveis normais
  Ela também é hoisting
  Preferível criá-las utilizando const para evitar esse comportamento
*/

/*
console.log(soma(1, 2))
function soma(a, b) {
    return a + b
}
// É possível passar funções como parâmetros então é possível injetar comportamentos em funções
const funcSoma = soma
console.log(funcSoma(4,5))
*/



/*
// É possível declarar como variável
// Esse tipo tabém tem um problema que é de que quem a chama controla o contexto ou o this
const soma = function soma(a, b) {
    return a + b
}
console.log(soma(1, 3))
*/

/*
// Se coloco a função dentro de um const acabo com o problema do hoisting
console.log(soma(1, 3))
const soma = function soma(a, b) {
    return a + b
}
console.log(soma(1, 3))
*/

/*
// para resolver o problema do contexto eu utilizo a arrow-function
// ela não tem um this próprio, se usar o this dentro dela se tem a certeza de ser o de fora
const soma = (a, b) => {
    return a + b
}
console.log(soma(1, 5))
*/

/*
// pode ser rescrita ainda dessa forma por ter apenas um comando
const soma = (a, b) => a + b
console.log(soma(10, 15))
*/


// Aula 02 - JS Basics 02: high-order functions, objects e vetores

/*
// template string
const a = 'Antônio'
const str = `olá ${a}`
console.log(str)
*/

/*
// objetos
const obj = {
    name: 'Antônio',
    lastName: 'Pinheiro'
}
console.log(obj.name, obj.lastName)
*/

/*
// objetos dentro de objetos
const obj = {
    name: 'Antônio',
    lastName: 'Pinheiro',
    address: {
        city: 'Recife'
    }
}
console.log(obj.address.city, '(...acesso direto ao campo do objeto)')
console.log(obj['name'], '(...acesso do dado pelo atributo)')

const n = 'name'
console.log(obj[n], '(...acesso do dado dinamicamente pelo atributo)')

// vetor
const arr = [1, 2, 3, 'Rogério'] // pode ser heterogênio
console.log(arr[0], '(...pegando valor vetor pelo índice)')

// função Object.keys() - dado um objeto é retornado um vetor com todas as chaves
const keys = Object.keys(obj)
console.log(keys, '(...todas as chaves de obj)')
console.log(keys[0], '(...trazendo a posição 0 de keys)')

// varrendo o vetor keys trazendo as chaves(atributos)
keys.forEach( item => {
    console.log(item, '(...item de keys)')
})

// varrendo o vetor keys trazendo os conteúdos dentro e cada chave(atributo)
// high order functions - são funções que recebem outras funções
keys.forEach( item => {
    console.log(obj[item], '(...conteúdo dentro das keys)')
})

// map - outra order-function (converte vetores)
const keys2 = Object.keys(obj)
const values = keys2.map(item => {
    return obj[item]
})
console.log(values, '(...pegando os valores dentro das chaves, utilizando o map)')
*/

// Aula 03 - JS Basics 03: destructuring assignament

/*
// ****************** BLOCO 1 - tem que está descomentado para os demais funcionarem *********
// objeto
const obj = {
    name: 'Antônio',
    lastName: 'Pinheiro',
    address: {
        city: 'Recife'
    }
}
// vetor composto pelas chaves do objeto
const keys = Object.keys(obj)
// ****************** FIM BLOCO 1
*/


/*

// podemos fazer assim
// ****************** BLOCO 2  **********************
const name = obj.name
console.log(name, '...pegando o conteúdo de "name"')
// ******************  FIM  2  ******************
*/

/*
// como o nome da constante é igual a chave, podemos fazer também
// ****************** BLOCO 3  **********************
const { name } = obj
console.log(name, '...pega o conteúdo de "name" usando destructuring')
// ****************** FIM  3   **********************
*/

/*
// ****************** BLOCO 4  **********************
const getName = person => {
    return person.name
}
console.log(getName(obj), '... pega o conteúdo de "name" usando arrow-function')

const getName1 = ({ name }) => {
    return name
}
console.log(getName(obj), '... pega o conteúdo de "name" usando arrow-function com destructuring')
// ******************  FIM 4  **********************
*/

/*
// ****************** BLOCO 5  **********************
const [i1, i2] = keys
console.log('keys ', keys)
console.log(i1, i2)
// ****************** FIM  5   **********************
*/

// Aula 04 - JS Basics 04 - import / export módulos

// dentro da pasta source foi criado Header.js
// Vamos para lá


