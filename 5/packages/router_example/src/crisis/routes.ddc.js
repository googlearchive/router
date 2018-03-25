define(['dart_sdk', 'packages/angular_router/src/route_definition', 'packages/router_example/src/crisis/route_paths', 'packages/router_example/src/crisis/crisis_component.template', 'packages/router_example/src/crisis/crisis_list_home_component.template'], function(dart_sdk, route_definition, route_paths, crisis_component, crisis_list_home_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_definition = route_definition.src__route_definition;
  const src__crisis__route_paths = route_paths.src__crisis__route_paths;
  const src__crisis__crisis_component$46template = crisis_component.src__crisis__crisis_component$46template;
  const src__crisis__crisis_list_home_component$46template = crisis_list_home_component.src__crisis__crisis_list_home_component$46template;
  const _root = Object.create(null);
  const src__crisis__routes = Object.create(_root);
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  src__crisis__routes.Routes = class Routes extends core.Object {
    get crisis() {
      return this[crisis];
    }
    set crisis(value) {
      super.crisis = value;
    }
    get home() {
      return this[home];
    }
    set home(value) {
      super.home = value;
    }
    get all() {
      return this[all];
    }
    set all(value) {
      super.all = value;
    }
  };
  (src__crisis__routes.Routes.new = function() {
    this[crisis] = src__crisis__routes.Routes._crisis;
    this[home] = src__crisis__routes.Routes._home;
    this[all] = JSArrayOfRouteDefinition().of([src__crisis__routes.Routes._crisis, src__crisis__routes.Routes._home]);
  }).prototype = src__crisis__routes.Routes.prototype;
  dart.addTypeTests(src__crisis__routes.Routes);
  const crisis = Symbol("Routes.crisis");
  const home = Symbol("Routes.home");
  const all = Symbol("Routes.all");
  dart.setFieldSignature(src__crisis__routes.Routes, () => ({
    __proto__: dart.getFields(src__crisis__routes.Routes.__proto__),
    crisis: dart.finalFieldType(src__route_definition.RouteDefinition),
    home: dart.finalFieldType(src__route_definition.RouteDefinition),
    all: dart.finalFieldType(ListOfRouteDefinition())
  }));
  dart.defineLazy(src__crisis__routes.Routes, {
    /*src__crisis__routes.Routes._crisis*/get _crisis() {
      return src__route_definition.RouteDefinition.new({routePath: src__crisis__route_paths.crisis, component: src__crisis__crisis_component$46template.CrisisComponentNgFactory});
    },
    /*src__crisis__routes.Routes._home*/get _home() {
      return src__route_definition.RouteDefinition.new({routePath: src__crisis__route_paths.home, component: src__crisis__crisis_list_home_component$46template.CrisisListHomeComponentNgFactory, useAsDefault: true});
    }
  });
  dart.trackLibraries("packages/router_example/src/crisis/routes.ddc", {
    "package:router_example/src/crisis/routes.dart": src__crisis__routes
  }, '{"version":3,"sourceRoot":"","sources":["routes.dart"],"names":[],"mappings":";;;;;;;QAee,wBAAK;QANL,wCAAG;QAOH,kDAAK;;;;;;IAJZ;;;;;;IAQA;;;;;;IAEsB;;;;;;;;IAVtB,YAAM,GAAG,kCAAO;IAQhB,UAAI,GAAG,gCAAK;IAEU,SAAG,GAAG,+BAChC,kCAAO,EACP,gCAAK;EAET;;;;;;;;;;;;MAnBe,kCAAO;YAAG,AAAI,0CAAe,aACvB,AAON,wBAAK,OAPO,aACZ,AAAI,wCAAD,yBAAyB;;MAK5B,gCAAK;YAAG,AAAI,0CAAe,aAC3B,AAAM,wBAAD,KAAK,aACV,AAAM,kDAAD,iCAAiC,gBACnC","file":"routes.ddc.js"}');
  // Exports:
  return {
    src__crisis__routes: src__crisis__routes
  };
});

//# sourceMappingURL=routes.ddc.js.map
