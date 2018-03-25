define(['dart_sdk', 'packages/router_example/src/crisis/mock_crises', 'packages/router_example/src/crisis/crisis'], function(dart_sdk, mock_crises, crisis) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__mock_crises = mock_crises.src__crisis__mock_crises;
  const src__crisis__crisis = crisis.src__crisis__crisis;
  const _root = Object.create(null);
  const src__crisis__crisis_service = Object.create(_root);
  const $firstWhere = dartx.firstWhere;
  let ListOfCrisis = () => (ListOfCrisis = dart.constFn(core.List$(src__crisis__crisis.Crisis)))();
  let CrisisTobool = () => (CrisisTobool = dart.constFn(dart.fnType(core.bool, [src__crisis__crisis.Crisis])))();
  src__crisis__crisis_service.CrisisService = class CrisisService extends core.Object {
    getAll() {
      return async.async(ListOfCrisis(), function* getAll() {
        return src__crisis__mock_crises.mockCrises;
      });
    }
    get(id) {
      return async.async(src__crisis__crisis.Crisis, (function* get() {
        return (yield this.getAll())[$firstWhere](dart.fn(crisis => crisis.id == id, CrisisTobool()));
      }).bind(this));
    }
  };
  (src__crisis__crisis_service.CrisisService.new = function() {
  }).prototype = src__crisis__crisis_service.CrisisService.prototype;
  dart.addTypeTests(src__crisis__crisis_service.CrisisService);
  dart.setMethodSignature(src__crisis__crisis_service.CrisisService, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_service.CrisisService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__crisis__crisis.Crisis)), []),
    get: dart.fnType(async.Future$(src__crisis__crisis.Crisis), [core.int])
  }));
  dart.trackLibraries("packages/router_example/src/crisis/crisis_service.ddc", {
    "package:router_example/src/crisis/crisis_service.dart": src__crisis__crisis_service
  }, '{"version":3,"sourceRoot":"","sources":["crisis_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AASgC;cAAS,oCAAU;;;QAE9B,EAAM;AAAE;cACvB,EAAC,MAAM,WAAM,gBAAc,CAAC,QAAC,MAAM,IAAK,MAAM,GAAG,IAAI,EAAE;MAAC;;;;EAC9D","file":"crisis_service.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_service: src__crisis__crisis_service
  };
});

//# sourceMappingURL=crisis_service.ddc.js.map
