define(['dart_sdk', 'packages/router_example/src/hero/hero.template'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero__hero$46template = hero.src__hero__hero$46template;
  const _root = Object.create(null);
  const src__hero__mock_heroes$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero__mock_heroes$46template, {
    /*src__hero__mock_heroes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero__mock_heroes$46template.initReflector = function() {
    if (dart.test(src__hero__mock_heroes$46template._visited)) {
      return;
    }
    src__hero__mock_heroes$46template._visited = true;
    src__hero__hero$46template.initReflector();
  };
  dart.fn(src__hero__mock_heroes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/hero/mock_heroes.template.ddc", {
    "package:router_example/src/hero/mock_heroes.template.dart": src__hero__mock_heroes$46template
  }, '{"version":3,"sourceRoot":"","sources":["mock_heroes.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,wCAAa;EACrB","file":"mock_heroes.template.ddc.js"}');
  // Exports:
  return {
    src__hero__mock_heroes$46template: src__hero__mock_heroes$46template
  };
});

//# sourceMappingURL=mock_heroes.template.ddc.js.map
