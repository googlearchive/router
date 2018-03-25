define(['dart_sdk', 'packages/router_example/src/crisis/crisis'], function(dart_sdk, crisis) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__crisis = crisis.src__crisis__crisis;
  const _root = Object.create(null);
  const src__crisis__mock_crises = Object.create(_root);
  let JSArrayOfCrisis = () => (JSArrayOfCrisis = dart.constFn(_interceptors.JSArray$(src__crisis__crisis.Crisis)))();
  dart.defineLazy(src__crisis__mock_crises, {
    /*src__crisis__mock_crises.mockCrises*/get mockCrises() {
      return JSArrayOfCrisis().of([new src__crisis__crisis.Crisis.new(1, 'Dragon Burning Cities'), new src__crisis__crisis.Crisis.new(2, 'Sky Rains Great White Sharks'), new src__crisis__crisis.Crisis.new(3, 'Giant Asteroid Heading For Earth'), new src__crisis__crisis.Crisis.new(4, 'Procrastinators Meeting Delayed Again')]);
    }
  });
  dart.trackLibraries("packages/router_example/src/crisis/mock_crises.ddc", {
    "package:router_example/src/crisis/mock_crises.dart": src__crisis__mock_crises
  }, '{"version":3,"sourceRoot":"","sources":["mock_crises.dart"],"names":[],"mappings":";;;;;;;;;;;MAEmB,mCAAU;YAAG,uBAC9B,IAAI,8BAAM,CAAC,GAAG,0BACd,IAAI,8BAAM,CAAC,GAAG,iCACd,IAAI,8BAAM,CAAC,GAAG,qCACd,IAAI,8BAAM,CAAC,GAAG","file":"mock_crises.ddc.js"}');
  // Exports:
  return {
    src__crisis__mock_crises: src__crisis__mock_crises
  };
});

//# sourceMappingURL=mock_crises.ddc.js.map
