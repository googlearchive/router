define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/router_example/src/routes', 'packages/router_example/src/crisis/crisis_list_component.template', 'packages/router_example/src/hero/hero_component.template', 'packages/router_example/src/hero/hero_list_component.template', 'packages/router_example/src/not_found_component.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/router_example/src/route_paths.template'], function(dart_sdk, reflector, routes, crisis_list_component, hero_component, hero_list_component, not_found_component, angular, angular_router, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__routes = routes.src__routes;
  const src__crisis__crisis_list_component$46template = crisis_list_component.src__crisis__crisis_list_component$46template;
  const src__hero__hero_component$46template = hero_component.src__hero__hero_component$46template;
  const src__hero__hero_list_component$46template = hero_list_component.src__hero__hero_list_component$46template;
  const src__not_found_component$46template = not_found_component.src__not_found_component$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__route_paths$46template = route_paths.src__route_paths$46template;
  const _root = Object.create(null);
  const src__routes$46template = Object.create(_root);
  let VoidToRoutes = () => (VoidToRoutes = dart.constFn(dart.fnType(src__routes.Routes, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__routes$46template, {
    /*src__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__routes$46template.initReflector = function() {
    if (dart.test(src__routes$46template._visited)) {
      return;
    }
    src__routes$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__routes.Routes), dart.fn(() => new src__routes.Routes.new(), VoidToRoutes()));
    src__crisis__crisis_list_component$46template.initReflector();
    src__hero__hero_component$46template.initReflector();
    src__hero__hero_list_component$46template.initReflector();
    src__not_found_component$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__route_paths$46template.initReflector();
  };
  dart.fn(src__routes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/routes.template.ddc", {
    "package:router_example/src/routes.template.dart": src__routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["routes.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAuBI,+BAAQ;YAAG;;;;;AAEb,kBAAI,+BAAQ,GAAE;AACZ;;AAEF,sCAAW;AAEX,IAAO,kCAAe,CAAC,iCAAM,EAAE,cAAM,IAAI,sBAAM;AAC/C,IAAM,2DAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,yCAAa;EACrB","file":"routes.template.ddc.js"}');
  // Exports:
  return {
    src__routes$46template: src__routes$46template
  };
});

//# sourceMappingURL=routes.template.ddc.js.map
