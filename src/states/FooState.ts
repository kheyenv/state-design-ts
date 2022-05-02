import { ContextStatus } from '../Context'
import State from '../State'

// to states
import BarState from './BarState'

class FooState extends State {
    protected _name: string = 'Foo'

    public SomeHandle(input: any): void {
        if (this._context.getStatus() == ContextStatus.READY) {
            this._context.transitionTo(new BarState)
        }
    }
}

export default FooState