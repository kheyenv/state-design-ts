import State from '../State'

class BarState extends State {
    public SomeHandle(): void {
        console.log('Bar state did \'SomeHandle()\'')
    }
    public AnotherHandle(): void {
        console.log('Bar state did \'AnotherHandle()\'')
    }
}

export default BarState