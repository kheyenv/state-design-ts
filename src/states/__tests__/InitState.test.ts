
import { Context, ContextStatus } from '../../Context'
import FooState from '../FooState'
import InitState from '../InitState'
import mock from 'ts-mockito'

describe('InitState', () => {
    const MockedContext = mock.mock(Context)
    beforeAll(() => {
        mock.reset(MockedContext)
    }) 
    it('constructor', () => {
        const state = new InitState
        expect(state.name()).toEqual('Init')
    })
    it('handle() no state change', () => {
        mock.when(MockedContext.getStatus()).thenReturn(ContextStatus.NOT_READY)
        const context = mock.instance(MockedContext)

        const state = new InitState
        state.setContext(context)
        state.SomeHandle(null)

        mock.verify(MockedContext.transitionTo(mock.anything())).never()
    })
    it('handle() state change', () => {
        mock.when(MockedContext.getStatus()).thenReturn(ContextStatus.READY)
        const context = mock.instance(MockedContext)

        const state = new InitState
        state.setContext(context)
        state.SomeHandle(null)

        mock.verify(MockedContext.transitionTo(mock.anyOfClass(FooState))).once()
    })
})