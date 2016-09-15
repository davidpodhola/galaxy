import {Application} from 'spectron'
import {assert}  from 'chai'
import path from 'path'

const appPath = path.resolve(__dirname, '../'); // require the whole root
const electron = path.resolve(__dirname, '../node_modules/.bin/electron');

describe('application launch', function () {
  this.timeout(10000)

  beforeEach(function () {

this.app = new Application({
        path: electron,
        args: [appPath]
});

    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })
})
