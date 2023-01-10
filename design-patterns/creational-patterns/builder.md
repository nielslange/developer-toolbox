# Builder

The Builder pattern is a design pattern that provides a way to create complex objects with a step-by-step approach. This pattern separates the construction of an object from its representation, allowing the same construction process to create different representations. The Builder pattern is particularly useful when creating objects that have many optional parts or when the construction process is complex.

**Benefits**

* It separates the construction of an object from its representation, allowing the same construction process to create different representations.
* It allows you to create complex objects step-by-step by specifying only the required and optional components.
* It provides a convenient way to create objects with many optional parts.
* It allows you to change the construction process without affecting the final representation of the object.
* It allows you to reuse the same object construction code throughout the application.
* It allows you to use a fluent interface, making the code more readable and user-friendly.

**Drawbacks**

* It can add complexity to the application, as a new builder and its related classes must be created for each type of object.
* It can make the code more difficult to read and understand, especially when there are many builders and related classes.
* There can be lots of optional method to build, which makes the class very cluttered and hard to maintain
* The pattern can be overused, making the code overly verbose and less maintainable
* It can be harder to understand the final object once all of the methods have been called, since it is not immediately obvious which values were set and which were omitted.

Like the other patterns, the Builder pattern is more useful for larger and complex projects, where it allows for more flexibility and scalability in the codebase, but can be overkill for small projects. It is a good choice when you want to create an object with many optional fields, or when the construction process is too complex. Also, it can be useful when you want to provide a fluent interface to configure an object.

### Example in TypeScript

```typescript
class SailingShipBuilder {
    private ship: SailingShip;

    constructor() {
        this.ship = new SailingShip();
    }

    setMastHeight(height: number) {
        this.ship.mastHeight = height;
    }

    setSailArea(area: number) {
        this.ship.sailArea = area;
    }

    setHullLength(length: number) {
        this.ship.hullLength = length;
    }

    build(): SailingShip {
        return this.ship;
    }
}

class SailingShip {
    mastHeight: number;
    sailArea: number;
    hullLength: number;
}
```

With this example, you can use an instance of `SailingShipBuilder` to set the various properties of a `SailingShip` object, and then call the `build()` method to get a finished `SailingShip` object.

#### Usage

```typescript
const builder = new SailingShipBuilder();
builder.setMastHeight(50);
builder.setSailArea(250);
builder.setHullLength(50);

const ship = builder.build();
console.log(ship); 
```

This way you can create SailingShip with the required properties, you can also have different builders for different type of ships where each will have its specific set of properties, such as RacingSailBuilder and CruisingSailBuilder.

The Builder pattern provides a convenient way to create complex objects with many optional parts, and it also separates the construction process from the final representation of the object. This makes it easy to create different representations of the same object, and it also makes it easy to change the construction process without affecting the final representation of the object.

\
\


