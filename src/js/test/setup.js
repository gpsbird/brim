/* @flow */
const enzyme = require("enzyme")
const Adapter = require("enzyme-adapter-react-16")

jest.mock("electron", function() {
  let electron = {
    app: {
      isPackaged: true,
      getName: () => "TestApp"
    },
    getCurrentWebContents: jest.fn(),
    Menu: {
      buildFromTemplate: jest.fn(),
      setApplicationMenu: jest.fn()
    }
  }

  return {...electron, remote: electron}
})

enzyme.configure({adapter: new Adapter()})
