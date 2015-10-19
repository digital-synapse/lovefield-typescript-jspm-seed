System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": true,
    "typeCheck": true,
    "resolveAmbientRefs": true
  },  
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "digital-synapse/lovefield": "github:digital-synapse/lovefield@master",
    "typescript": "npm:typescript@1.6.2"
  }
});
