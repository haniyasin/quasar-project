import { PlayingService, getOptions } from './playing.class.js'

export const playingPath = 'playing'
export const playingMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './playing.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const playing = app => {
  // Register our service on the Feathers application
  app.use(playingPath, new PlayingService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: playingMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(playingPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
