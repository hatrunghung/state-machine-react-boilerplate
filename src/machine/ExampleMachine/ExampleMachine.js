import { Machine } from 'xstate'

export const ExampleMachine = Machine({
  id: 'example-machine',
  initial: 'put-your-initial-state-here',
  states: {},
  context: {},
}, {
  guards: {},
  actions: {},
  activities: {},
  services: {}
})
