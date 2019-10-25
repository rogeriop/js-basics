// Aula 04 - JS Basics 04 - import / export módulos
import React from 'react' // maneira existente para trazer o react para ess arquivo

const Header = () => <h1>Olá 0</h1>

export const Header1 = () => <h1>Olá 1</h1> // maneira 2 de tornar disponível essa const

export const Header2 = () => <h1>Olá 2</h1> // posso exportar mais de um 

export default Header // maneira de tornar disponível esse arquivo para os outros

