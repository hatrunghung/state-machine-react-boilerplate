import { Machine } from 'xstate'
import { exampleActions, anotherExampleActions } from './actions/exampleActions'
import { exampleGuards } from './guards/exampleGuards'
import { exampleService } from './service/exampleService'

export const ExampleMachine = Machine({
  id: 'example-machine',
  initial: 'put-your-initial-state-here',
  states: {},
  context: {},
}, {
  guards: {
    exampleGuards: exampleGuards
  },
  actions: {
    exampleActions: exampleActions,
    anotherExampleActions: anotherExampleActions
  },
  activities: {},
  services: {
    exampleService: exampleService
  }
})
