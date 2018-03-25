define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/router_example/src/hero/hero_service', 'packages/router_example/src/hero/hero.template', 'packages/router_example/src/hero/mock_heroes.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, hero_service, hero, mock_heroes, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero__hero_service = hero_service.src__hero__hero_service;
  const src__hero__hero$46template = hero.src__hero__hero$46template;
  const src__hero__mock_heroes$46template = mock_heroes.src__hero__mock_heroes$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero__hero_service$46template = Object.create(_root);
  let VoidToHeroService = () => (VoidToHeroService = dart.constFn(dart.fnType(src__hero__hero_service.HeroService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero__hero_service$46template, {
    /*src__hero__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero__hero_service$46template.initReflector = function() {
    if (dart.test(src__hero__hero_service$46template._visited)) {
      return;
    }
    src__hero__hero_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__hero__hero_service.HeroService), dart.fn(() => new src__hero__hero_service.HeroService.new(), VoidToHeroService()));
    src__hero__hero$46template.initReflector();
    src__hero__mock_heroes$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero__hero_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/hero/hero_service.template.ddc", {
    "package:router_example/src/hero/hero_service.template.dart": src__hero__hero_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAgBI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAO,kCAAe,CAAC,kDAAW,EAAE,cAAM,IAAI,uCAAW;AACzD,IAAM,wCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service.template.ddc.js"}');
  // Exports:
  return {
    src__hero__hero_service$46template: src__hero__hero_service$46template
  };
});

//# sourceMappingURL=hero_service.template.ddc.js.map
