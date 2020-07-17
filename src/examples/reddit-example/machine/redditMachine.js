import { Machine, assign } from 'xstate'

export const redditMachine = Machine({
  id: 'reddit',
  initial: 'idle',
  context: {
    subreddit: null, // none selected
  },
  states: {
    idle: {},
    selected: {}
  },
  on: {
    SELECT: {
      target: '.selected', // relative state targets -> reddit.selected
      actions: assign({
        subreddit: (context, event) => event.name
      })
    }
  }
})