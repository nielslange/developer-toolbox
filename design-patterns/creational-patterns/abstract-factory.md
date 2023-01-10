# Abstract Factory

The Abstract Factory pattern is a design pattern that provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. This pattern is often used to create families of related or dependent objects without specifying their concrete classes.

**Benefits**

* It allows you to create families of related or dependent objects without specifying their concrete classes.
* It promotes consistency among objects.
* It isolates the code that creates objects from the code that uses them.
* It allows you to change the implementations of objects at run-time if the factory is passed as an interface.
* It allows you to replace a specific implementation of a factory with a different implementation without affecting the client code.

**Drawbacks**

* It can add complexity to the application, as a new factory and its related classes must be created for each type of object.
* It can make the code more difficult to read and understand, especially when there are many factories and related classes.
* Since the factory and products are tightly coupled, you can't use one factory to produce products from another factory.
* In some situations, using the Factory Method pattern can be simpler and more appropriate.

It is worth noting that the Abstract Factory pattern is more complex than the simple factory pattern but it gives more flexibility and scalability for the code. This means that in small projects it could be an overkill, but for larger projects, it could be an excellent solution. Also, the choice between Factory Method and Abstract Factory pattern depends on the specific use-case and requirements.

In general, the Abstract Factory pattern is a good choice when:

* A system should be independent of the way the products it works with are created, composed, and represented.
* A system should be configured with one of multiple families of products.
* A family of related product objects is designed to be used together, and you need to enforce this constraint.
* You want to provide a class library of products, and you want to reveal just their interfaces, not their implementations.

### Example in TypeScript

```typescript
interface ISailFactory {
    createMast(): IMast;
    createSail(): ISail;
    createHull(): IHull;
}

interface IMast {
    getHeight(): number;
}

interface ISail {
    getArea(): number;
}

interface IHull {
    getLength(): number;
}

class TallMast implements IMast {
    getHeight() {
        return 50;
    }
}

class ShortMast implements IMast {
    getHeight() {
        return 30;
    }
}

class LargeSail implements ISail {
    getArea() {
        return 250;
    }
}

class SmallSail implements ISail {
    getArea() {
        return 150;
    }
}

class LongHull implements IHull {
    getLength() {
        return 50;
    }
}

class ShortHull implements IHull {
    getLength() {
        return 30;
    }
}

class RacingSailFactory implements ISailFactory {
    createMast() {
        return new TallMast();
    }

    createSail() {
        return new LargeSail();
    }

    createHull() {
        return new LongHull();
    }
}

class CruisingSailFactory implements ISailFactory {
    createMast() {
        return new ShortMast();
    }

    createSail() {
        return new SmallSail();
    }

    createHull() {
        return new ShortHull();
    }
}
```

With this example, you can use either `RacingSailFactory` or `CruisingSailFactory` to create a sailing ship and its components, but the specific types of components created will depend on the factory you use.

You can create an object of required subtype based on some inputs like user inputs or some configuration setting, You will only need to use factory factory to create the required subtype factory and then use the subtype factory to create the object of that subtype.

#### Usage

```typescript
let factory: ISailFactory;
if (config === 'racing') {
    factory = new RacingSailFactory();
} else {
    factory = new CruisingSailFactory();
}

const mast = factory.createMast();
const sail = factory.createSail();
const hull = factory.createHull();
```

This way you can create different ship type based on the configuration inputs, whether racing or cruising, and each will have specific features as per required by its type.
