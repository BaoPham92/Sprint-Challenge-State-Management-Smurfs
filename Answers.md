1. What problem does the context API help solve?
```
 The context API allows for data distribution across multiple components, though with limitations.
```

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
```
Actions: Dispatched action calls for triggering specific logic conerning what data needs to be handled for our state.

Reducers: Reducers are our initialization of state, as well as our source of handling state updates.
```

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
```
Application state refers to an overall global state for the entire application, whereas component state is local data and information pertaining to just that local environment (In this case, the component the state is being initialized for).
```

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
```
Redux-Thunk allows for processing async logic with the store we initialize for using Redux.
```

5. What is your favorite state management system you've learned and this sprint? Please explain why!

```
There is no favorite. Every technology has a reason for currently not being depreciated, etc.

Context-API is great if the application is not large, but gets the job done. Draw backs are really the performance is being heavily impacted if used far beyond the necessary need for data flow management.

Redux is a great tool for state management when it comes to being used on much more complex infrastructure projects. However, can be completely unecessary for small lightweight projects, expecially in agile developments.

useReducers is a great way for completing data computations in a much more performant manner, but lacks the perks where Redux may excel.

```
