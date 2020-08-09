
import { expect } from 'chai' 
import map from './map'

it('map should be a function', () => {
    expect(map).to.be.a('function')
})

/**map([1,2,3], () => {}) */

/**Esse teste tem que ser para os parametros */
it('first param should be an array', () => {
    expect(map()).to.be.a('function')
})