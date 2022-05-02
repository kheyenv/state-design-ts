import { Context } from './Context'

abstract class State {
    protected _context : Context
    protected abstract _name: string

    public setContext(context: Context) {
        this._context = context
    }

    public name(): string {
        return this._name
    }

    public abstract SomeHandle(input: any): void
}

export default State