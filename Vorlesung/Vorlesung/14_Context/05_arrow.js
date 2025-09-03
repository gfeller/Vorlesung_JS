class Animal
{
    hungry = true;
    thirsty = true;
    eat(){
        console.log(this);
        this.hungry = false;
    }

    drink = () => {
        console.log(this);
        this.thirsty = false;
    }
}

const animal = new Animal()
animal.drink();
animal.eat();

const {eat, drink} = animal;
drink()
eat()
