import { playing } from './playing/playing.js'
export const services = app => {
  app.configure(playing)

  // All services will be registered here
}
