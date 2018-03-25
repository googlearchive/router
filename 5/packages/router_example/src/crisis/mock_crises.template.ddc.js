define(['dart_sdk', 'packages/router_example/src/crisis/crisis.template'], function(dart_sdk, crisis) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__crisis$46template = crisis.src__crisis__crisis$46template;
  const _root = Object.create(null);
  const src__crisis__mock_crises$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__mock_crises$46template, {
    /*src__crisis__mock_crises$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__mock_crises$46template.initReflector = function() {
    if (dart.test(src__crisis__mock_crises$46template._visited)) {
      return;
    }
    src__crisis__mock_crises$46template._visited = true;
    src__crisis__crisis$46template.initReflector();
  };
  dart.fn(src__crisis__mock_crises$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/mock_crises.template.ddc", {
    "package:router_example/src/crisis/mock_crises.template.dart": src__crisis__mock_crises$46template
  }, '{"version":3,"sourceRoot":"","sources":["mock_crises.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,4CAAa;EACrB","file":"mock_crises.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__mock_crises$46template: src__crisis__mock_crises$46template
  };
});

//# sourceMappingURL=mock_crises.template.ddc.js.map
