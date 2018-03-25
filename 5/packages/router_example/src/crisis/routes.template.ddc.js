define(['dart_sdk', 'packages/router_example/src/crisis/crisis_component.template', 'packages/router_example/src/crisis/crisis_list_home_component.template', 'packages/angular_router/angular_router.template', 'packages/router_example/src/crisis/route_paths.template'], function(dart_sdk, crisis_component, crisis_list_home_component, angular_router, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__crisis_component$46template = crisis_component.src__crisis__crisis_component$46template;
  const src__crisis__crisis_list_home_component$46template = crisis_list_home_component.src__crisis__crisis_list_home_component$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__crisis__route_paths$46template = route_paths.src__crisis__route_paths$46template;
  const _root = Object.create(null);
  const src__crisis__routes$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__routes$46template, {
    /*src__crisis__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__routes$46template.initReflector = function() {
    if (dart.test(src__crisis__routes$46template._visited)) {
      return;
    }
    src__crisis__routes$46template._visited = true;
    src__crisis__crisis_component$46template.initReflector();
    src__crisis__crisis_list_home_component$46template.initReflector();
    angular_router$46template.initReflector();
    src__crisis__route_paths$46template.initReflector();
  };
  dart.fn(src__crisis__routes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/routes.template.ddc", {
    "package:router_example/src/crisis/routes.template.dart": src__crisis__routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["routes.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAgBI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,iDAAa;EACrB","file":"routes.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__routes$46template: src__crisis__routes$46template
  };
});

//# sourceMappingURL=routes.template.ddc.js.map
