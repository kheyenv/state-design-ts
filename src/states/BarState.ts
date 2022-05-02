import State from '../State'

class BarState extends State {
    protected _name: string = 'Bar'

    public SomeHandle(input: any): void {
        console.log(`Final state of ${this._name} reached!`)
    }
}

export default BarState