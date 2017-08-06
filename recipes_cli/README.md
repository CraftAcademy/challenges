### Recipie CLI Challenge


Objective
- Make use of Singleton Api


What happens when you include the singleton module inside your class?

- It makes the `new` method private and so you can’t use it.
- It adds a class method called `instance` that *instantiates only one instance* of the class.

To use ruby `Singleton` module you need to:

- Require the lib singleton then include it inside the desired class.
- Use the `instance` method to get the instance you need.
