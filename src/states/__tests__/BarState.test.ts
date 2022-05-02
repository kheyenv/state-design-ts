
import { Context, ContextStatus } from '../../Context'
import BarState from '../BarState'
import mock from 'ts-mockito'

describe('BarState', () => {
    const MockedContext = mock.mock(Context)
    beforeAll(() => {
        mock.reset(MockedContext)
    }) 
    it('constructor', () => {
        const state = new BarState
        expect(state.name()).toEqual('Bar')
    })
    it('handle() no state change', () => {
        mock.when(MockedContext.getStatus()).thenReturn(ContextStatus.NOT_READY)
        const context = mock.instance(MockedContext)

        const state = new BarState
        state.setContext(context)
        state.SomeHandle(null)

        mock.verify(MockedContext.transitionTo(mock.anything())).never()
    })
    it('handle() state change', () => {
        mock.when(MockedContext.getStatus()).thenReturn(ContextStatus.READY)
        const context = mock.instance(MockedContext)

        const state = new BarState
        state.setContext(context)
        state.SomeHandle(null)

        // Terminating state, no further states
        mock.verify(MockedContext.transitionTo(mock.anything())).never()
    })
})