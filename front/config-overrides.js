const { override, addBabelPlugins, disableEsLint } = require('customize-cra')

module.exports = override(
  disableEsLint(),
  ...addBabelPlugins(
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./src",
            "rootPathPrefix": "~/"
          },
          {
            "rootPathSuffix": "./src/components",
            "rootPathPrefix": "#/"
          },
        ]
      }
    ]
  )
)
