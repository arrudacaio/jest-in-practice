
import { expect } from 'chai' 
import map from './map'

it('map should be a function', () => {
    expect(map).to.be.a('function')
})

/**map([1,2,3], () => {}) */

/**Esse teste tem que ser para os parametros */
it('map([1,2], (item) => item) should return [1,2]', () => {
    expect(map([1,2], (item) => item)).to.be.a.deep.equal([1,2])
})

it('map([3,4], (item) => item) should return [3,4]', () => {
    expect(map([3,4], (item) => item)).to.be.a.deep.equal([3,4])
})

it('map([1,2], (item) => item + 1) should return [2,3]', () => {
    expect(map([1,2], (item) => item + 1)).to.be.a.deep.equal([2,3])
})

it('map([4,6], (item) => item + 1) should return [5,7]', () => {
    expect(map([4,6], (item) => item + 1)).to.be.a.deep.equal([5,7])
})

it('map([1,2], (item, index) => index) should return [0,1]', () => {
    expect(map([1,2], (item, index) => index)).to.be.a.deep.equal([0,1])
})

it('map([1,2], (item, index,arr) => arr) should return [[1,2],[1,2]]', () => {
    expect(map([1,2], (item, index,arr) => arr)).to.be.a.deep.equal([[1,2],[1,2]])
})