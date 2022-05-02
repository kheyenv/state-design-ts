import { ContextStatus } from '../Context'
import State from '../State'

// to states
import FooState from './FooState'

class InitState extends State {
    protected _name: string = 'Init'

    public SomeHandle(input: any): void {
        if (this._context.getStatus() == ContextStatus.READY) {
            this._context.transitionTo(new FooState)
        }
    }
}

export default InitState