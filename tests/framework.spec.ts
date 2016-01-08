import { expect } from 'chai'

describe(`(Framework) Karma Plugins`, () => {
  it(`Should expose "expect" globally.`, () => {
    expect(expect).to.exist
  })

  it(`Should have chai-as-promised helpers.`, () => {
    const pass = new Promise(res => res('test'))
    const fail = new Promise((res, rej) => rej())

    return Promise.all([
      expect(pass).to.be.fulfilled,
      expect(fail).to.not.be.fulfilled
    ])
  })

  it(`Should have sinon`, () => {
    expect(sinon).to.exist
    expect(sinon.spy()).to.be.instanceof(Function)
  })
})
