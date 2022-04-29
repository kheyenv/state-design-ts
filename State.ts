import Context from './Context'

abstract class State {
    protected context : Context

    public setContext(context: Context) {
        this.context = context
    }

    public abstract SomeHandle(): void
    public abstract AnotherHandle(): void
}

export default State