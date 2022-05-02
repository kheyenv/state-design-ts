
import { Context, ContextStatus } from '../../Context'
import FooState from '../FooState'
import BarState from '../BarState'
import mock from 'ts-mockito'

describe('FooState', () => {
    const MockedContext = mock.mock(Context)
    beforeAll(() => {
        mock.reset(MockedContext)
    }) 
    it('constructor', () => {
        const state = new FooState
        expect(state.name()).toEqual('Foo')
    })
    it('handle() no state change', () => {
        mock.when(MockedContext.getStatus()).thenReturn(ContextStatus.NOT_READY)
        const context = mock.instance(MockedContext)

        const state = new FooState
        state.setContext(context)
        state.SomeHandle(null)

        mock.verify(MockedContext.transitionTo(mock.anything())).never()
    })
    it('handle() state change', () => {
        mock.when(MockedContext.getStatus()).thenReturn(ContextStatus.READY)
        const context = mock.instance(MockedContext)

        const state = new FooState
        state.setContext(context)
        state.SomeHandle(null)

        mock.verify(MockedContext.transitionTo(mock.anyOfClass(BarState))).once()
    })
})