### Recipie CLI Challenge


Objective
- Make use of Singleton Api


What happens when you include the singleton module inside your class?

- It makes the `new` method private and so you can’t use it.
- It adds a class method called `instance` that *instantiates only one instance* of the class.

To use ruby `Singleton` module you need to:

- Require the lib singleton then include it inside the desired class.
- Use the `instance` method to get the instance you need.


To use Singleton, include the module in your class.
```ruby
class Klass
   include Singleton
   # ...
end
```
This ensures that only one instance of Klass can be created.
```
a,b  = Klass.instance, Klass.instance

a == b
# => true
```


```
Klass.new
# => NoMethodError - new is private ...
```
The instance is created at upon the first call of `Klass.instance`.

TODO: Add instructions to play around with object id's
`.object_id`
`ObjectSpace.each_object(Ingredient) {|x| p x.object_id }`
`ObjectSpace._id2ref(70251746638580)`
