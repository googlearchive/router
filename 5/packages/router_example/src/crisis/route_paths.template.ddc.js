define(['dart_sdk', 'packages/router_example/src/route_paths.template', 'packages/angular_router/angular_router.template'], function(dart_sdk, route_paths, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths$46template = route_paths.src__route_paths$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const src__crisis__route_paths$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__route_paths$46template, {
    /*src__crisis__route_paths$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__route_paths$46template.initReflector = function() {
    if (dart.test(src__crisis__route_paths$46template._visited)) {
      return;
    }
    src__crisis__route_paths$46template._visited = true;
    src__route_paths$46template.initReflector();
    src__route_paths$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.fn(src__crisis__route_paths$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/route_paths.template.ddc", {
    "package:router_example/src/crisis/route_paths.template.dart": src__crisis__route_paths$46template
  }, '{"version":3,"sourceRoot":"","sources":["route_paths.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,yCAAa;AACnB,IAAM,yCAAa;AACnB,IAAM,uCAAa;EACrB","file":"route_paths.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__route_paths$46template: src__crisis__route_paths$46template
  };
});

//# sourceMappingURL=route_paths.template.ddc.js.map
