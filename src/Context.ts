import InitState from './states/InitState'
import State from './State'

export enum ContextStatus {
    NOT_READY,
    READY
}

export class Context {
    private _state: State
    private _status: ContextStatus = ContextStatus.NOT_READY

    constructor(state?: State) {
        if (state) {
            this.transitionTo(state)
        }
        else {
            this.transitionTo(new InitState)
        }
    }

    public transitionTo(state: State) {
        this._state = state
        this._state.setContext(this)
        this._status = ContextStatus.NOT_READY
    }

    public makeReady() {
        this._status = ContextStatus.READY
    }

    public getStatus() {
        return this._status
    }

    public getCurrentState() {
        return this._state.name()
    }

    public handle(input: any) {
        this._state.SomeHandle(input)
    }
}