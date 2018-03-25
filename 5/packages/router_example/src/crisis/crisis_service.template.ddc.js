define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/router_example/src/crisis/crisis_service', 'packages/router_example/src/crisis/crisis.template', 'packages/router_example/src/crisis/mock_crises.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, crisis_service, crisis, mock_crises, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__crisis__crisis_service = crisis_service.src__crisis__crisis_service;
  const src__crisis__crisis$46template = crisis.src__crisis__crisis$46template;
  const src__crisis__mock_crises$46template = mock_crises.src__crisis__mock_crises$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__crisis__crisis_service$46template = Object.create(_root);
  let VoidToCrisisService = () => (VoidToCrisisService = dart.constFn(dart.fnType(src__crisis__crisis_service.CrisisService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__crisis_service$46template, {
    /*src__crisis__crisis_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__crisis_service$46template.initReflector = function() {
    if (dart.test(src__crisis__crisis_service$46template._visited)) {
      return;
    }
    src__crisis__crisis_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__crisis__crisis_service.CrisisService), dart.fn(() => new src__crisis__crisis_service.CrisisService.new(), VoidToCrisisService()));
    src__crisis__crisis$46template.initReflector();
    src__crisis__mock_crises$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__crisis__crisis_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/crisis_service.template.ddc", {
    "package:router_example/src/crisis/crisis_service.template.dart": src__crisis__crisis_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["crisis_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAgBI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAO,kCAAe,CAAC,wDAAa,EAAE,cAAM,IAAI,6CAAa;AAC7D,IAAM,4CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,gCAAa;EACrB","file":"crisis_service.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_service$46template: src__crisis__crisis_service$46template
  };
});

//# sourceMappingURL=crisis_service.template.ddc.js.map
