define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/router_example/src/crisis/dialog_service', 'packages/angular/angular.template'], function(dart_sdk, reflector, dialog_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__crisis__dialog_service = dialog_service.src__crisis__dialog_service;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__crisis__dialog_service$46template = Object.create(_root);
  let VoidToDialogService = () => (VoidToDialogService = dart.constFn(dart.fnType(src__crisis__dialog_service.DialogService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__dialog_service$46template, {
    /*src__crisis__dialog_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__dialog_service$46template.initReflector = function() {
    if (dart.test(src__crisis__dialog_service$46template._visited)) {
      return;
    }
    src__crisis__dialog_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__crisis__dialog_service.DialogService), dart.fn(() => new src__crisis__dialog_service.DialogService.new(), VoidToDialogService()));
    angular$46template.initReflector();
  };
  dart.fn(src__crisis__dialog_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/dialog_service.template.ddc", {
    "package:router_example/src/crisis/dialog_service.template.dart": src__crisis__dialog_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["dialog_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAaI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAO,kCAAe,CAAC,wDAAa,EAAE,cAAM,IAAI,6CAAa;AAC7D,IAAM,gCAAa;EACrB","file":"dialog_service.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__dialog_service$46template: src__crisis__dialog_service$46template
  };
});

//# sourceMappingURL=dialog_service.template.ddc.js.map
