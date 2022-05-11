
import { Context, ContextStatus } from '../Context'

const state = require('../State')

describe('Context', () => {
    it('constructor', () => {
        const context = new Context
        expect(context.getCurrentState()).toEqual('Init')
    })
    it('makeReady()', () => {
        const context = new Context
        expect(context.getStatus()).toEqual(ContextStatus.NOT_READY)
        context.makeReady()
        expect(context.getStatus()).toEqual(ContextStatus.READY)
    })
    it('reset', () => {
        const context = new Context
        expect(context.getCurrentState()).toEqual('Init')
        context.makeReady()
        context.handle(null)
        expect(context.getCurrentState()).not.toEqual('Init')
        context.reset()
        expect(context.getCurrentState()).toEqual('Init')
    })
})