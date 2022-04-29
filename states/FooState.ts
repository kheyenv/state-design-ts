import State from '../State'

class FooState extends State {
    public SomeHandle(): void {
        console.log('Foo state did \'SomeHandle()\'')
    }
    public AnotherHandle(): void {
        console.log('Foo state did \'AnotherHandle()\'')
    }
}

export default FooState