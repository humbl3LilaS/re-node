

# Using EventEmitter in NodeJs

## Creating EventEmitter

1. use `EventEmitter` object directly
2. extend `EventEmitter`

What are differences

> - Use `EventEmitter` directly if your event is not couple to the business logic of the business object.
> - Extends `EventEmitter` if the events you want to emit are the effect of an object's actions



# Firing Events

- We can fire an event by using `emit()` method of `EventEmitter` object
- `emit(name)` - name is the name of the event we want to emit
- after providing the name of event in first argument, we can provide any number of arguments which can be use to send data the listener.

## Listening Events

- We can listen to an event by using `on()` method of `EventEmitter object`

Method signature : `on(event_name, callback_function)`

- we need to provide the exact name of the event we want to listen

## Removing Events Listeners

- We can remove event listeners by using `off()` method

Method signature: `off(event_name, function)`
> `function` is the function the `off` method is listening

- To reference the second argument of the `off()` method we have to separate the call back functions of the listener into a variable





REFERENCE: [Using Event Emitters In Node](https://www.digitalocean.com/community/tutorials/using-event-emitters-in-node-js)