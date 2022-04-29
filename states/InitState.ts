import State from '../State'

class InitState extends State {
    public SomeHandle(): void {
        console.log('Init state did \'SomeHandle()\'')
    }
    public AnotherHandle(): void {
        console.log('Init state did \'AnotherHandle()\'')
    }
}

export default InitState