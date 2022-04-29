import InitState from './states/InitState'
import State from './State'

class Context {
    private state: State

    constructor(state?: State) {
        if (state) {
            this.next(state)
        }
        else {
            this.next(new InitState)
        }
    }

    public handle(input: any) {

    }

    public next(state: State): void {
        this.state = state
        this.state.setContext(this)
    }
}

export default Context