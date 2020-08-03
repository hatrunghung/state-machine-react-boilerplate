## Notes
Because `XState` is a library for state management, so it should not be opinionated on how it should be used inside of a project. And also `XState` leverages the concept of statecharts, it should not be adding more complexity in the app, it just reveals it

## The structure
Up to the opinion of the engineer or team, separating several the statecharts component into sub-folders such as `actions`, `services`, `guards`, etc. is only for when you don't like the verbosity when putting everything inside the machine's declaration, it should not introduce more complexity, only depends on personal's preference.

## Visualizer
`XState` library has a very good visualizer for you to see your statecharts: `https://xstate.js.org/viz/`
