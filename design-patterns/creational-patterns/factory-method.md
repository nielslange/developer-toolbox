# Factory Method

The Factory Method pattern is a creational design pattern that provides a way to create objects without specifying their concrete classes. It defines a method or interface for creating objects, and subclasses can override this method to change the type of objects that will be created.

**Benefits**

* It allows you to create objects without specifying their concrete classes, making the code more flexible and easier to change.
* It promotes consistency among objects by encapsulating the creation of objects in a single location.
* It allows subclasses to change the type of objects that will be created.
* It allows the code to be easily extended with new types of objects without modifying existing code.

**Drawbacks**

* It can add complexity to the codebase, especially when there are many types of objects that need to be created.
* It can make the code more difficult to read and understand, especially when there are many factories and related classes.
* It may add more boilerplate code in the application, making it less readable
* In some situations, using the Abstract Factory pattern can be simpler and more appropriate.

As with other patterns, the Factory Method pattern can be more useful for larger and more complex projects, but for small projects, it may be an overkill. The choice between the Factory Method and Abstract Factory pattern depends on the specific use-case and requirements. It's worth considering the number and types of objects that needs to be created, as well as the complexity of the object creation process.

### Example in TypeScript

```typescript
interface ISailFactory {
    createSail(): ISail;
}

interface ISail {
    getArea(): number;
}

class RacingSail implements ISail {
    getArea() {
        return 250;
    }
}

class CruisingSail implements ISail {
    getArea() {
        return 150;
    }
}

class SailFactory implements ISailFactory {
    createSail(): ISail {
        return new RacingSail();
    }
}

class RacingSailFactory extends SailFactory {
    createSail(): ISail {
        return new RacingSail();
    }
}

class CruisingSailFactory extends SailFactory {
    createSail(): ISail {
        return new CruisingSail();
    }
}
```

#### Usage

```typescript
let racingSailFactory = new RacingSailFactory();
let racingSail = racingSailFactory.createSail();
let cruisingSailFactory = new CruisingSailFactory();
let cruisingSail = cruisingSailFactory.createSail();
```

In the previous example, the Factory Method pattern is implemented through the `ISailFactory` interface and its two implementing classes `RacingSailFactory` and `CruisingSailFactory` . The `ISailFactory` interface defines a single method `createSail()` which will be implemented in the two subclasses.

To use the Factory Method for creating sailing ships, you can create an instance of either the `RacingSailFactory` or the `CruisingSailFactory` class and then use the `createSail()` method to create an instance of the corresponding sail.

This way, the client code can use the factory to create an instance of the correct sail based on the requirement, without worrying about the implementation details of the sailing ship, this way it's more flexible, extensible and maintainable.

As a side note, if you want to change the implementation of sailing ships, for example, change the logic for calculating the sail area, or change the class that implements ISail. You will only have to change it in the respective factory method, which is much easier than changing the whole codebase, that use the sailing ship class.\
