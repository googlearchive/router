define(['dart_sdk', 'packages/router_example/src/route_paths', 'packages/angular_router/src/route_definition', 'packages/router_example/src/not_found_component.template', 'packages/router_example/src/crisis/crisis_list_component.template', 'packages/router_example/src/hero/hero_list_component.template', 'packages/router_example/src/hero/hero_component.template'], function(dart_sdk, route_paths, route_definition, not_found_component, crisis_list_component, hero_list_component, hero_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__route_definition = route_definition.src__route_definition;
  const src__not_found_component$46template = not_found_component.src__not_found_component$46template;
  const src__crisis__crisis_list_component$46template = crisis_list_component.src__crisis__crisis_list_component$46template;
  const src__hero__hero_list_component$46template = hero_list_component.src__hero__hero_list_component$46template;
  const src__hero__hero_component$46template = hero_component.src__hero__hero_component$46template;
  const _root = Object.create(null);
  const src__routes = Object.create(_root);
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  src__routes.Routes = class Routes extends core.Object {
    get crises() {
      return this[crises];
    }
    set crises(value) {
      super.crises = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      super.heroes = value;
    }
    get all() {
      return this[all];
    }
    set all(value) {
      super.all = value;
    }
  };
  (src__routes.Routes.new = function() {
    this[crises] = src__routes.Routes._crises;
    this[heroes] = src__routes.Routes._heroes;
    this[all] = JSArrayOfRouteDefinition().of([src__routes.Routes._crises, src__routes.Routes._heroes, src__routes.Routes._hero, src__route_definition.RouteDefinition.redirect({path: '', redirectTo: src__route_paths.heroes.toUrl()}), src__route_definition.RouteDefinition.new({path: '.*', component: src__not_found_component$46template.NotFoundComponentNgFactory})]);
  }).prototype = src__routes.Routes.prototype;
  dart.addTypeTests(src__routes.Routes);
  const crises = Symbol("Routes.crises");
  const heroes = Symbol("Routes.heroes");
  const all = Symbol("Routes.all");
  dart.setFieldSignature(src__routes.Routes, () => ({
    __proto__: dart.getFields(src__routes.Routes.__proto__),
    crises: dart.finalFieldType(src__route_definition.RouteDefinition),
    heroes: dart.finalFieldType(src__route_definition.RouteDefinition),
    all: dart.finalFieldType(ListOfRouteDefinition())
  }));
  dart.defineLazy(src__routes.Routes, {
    /*src__routes.Routes._crises*/get _crises() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.crises, component: src__crisis__crisis_list_component$46template.CrisisListComponentNgFactory});
    },
    /*src__routes.Routes._heroes*/get _heroes() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.heroes, component: src__hero__hero_list_component$46template.HeroListComponentNgFactory});
    },
    /*src__routes.Routes._hero*/get _hero() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.hero, component: src__hero__hero_component$46template.HeroComponentNgFactory});
    }
  });
  dart.trackLibraries("packages/router_example/src/routes.ddc", {
    "package:router_example/src/routes.dart": src__routes
  }, '{"version":3,"sourceRoot":"","sources":["routes.dart"],"names":[],"mappings":";;;;;;QAsBe,gBAAK;;QAiBH,mCAAI;QA1BN,6CAAI;QAKJ,yCAAI;QAKJ,oCAAG;;;;;;IAGV;;;;;;IACA;;;;;;IAEsB;;;;;;;;IAHtB,YAAM,GAAG,0BAAO;IAChB,YAAM,GAAG,0BAAO;IAEM,SAAG,GAAG,+BAChC,0BAAO,EACP,0BAAO,EACP,wBAAK,EACL,AAAI,8CAAwB,QACpB,gBAZG,AAaG,AAAM,gBAbJ,OAaU,MAAM,MAEhC,AAAI,yCAAe,QACX,iBACK,AAAK,mCAAD,2BAA2B;EAGhD;;;;;;;;;;;;MA/Be,0BAAO;YAAG,AAAI,0CAAe,aACvB,AAUN,gBAAK,OAVO,aACZ,AAAK,6CAAD,6BAA6B;;MAGjC,0BAAO;YAAG,AAAI,0CAAe,aACvB,AAKN,gBAAK,OALO,aACZ,AAAK,yCAAD,2BAA2B;;MAG/B,wBAAK;YAAG,AAAI,0CAAe,aAC3B,AAAM,gBAAD,KAAK,aACV,AAAI,oCAAD,uBAAuB","file":"routes.ddc.js"}');
  // Exports:
  return {
    src__routes: src__routes
  };
});

//# sourceMappingURL=routes.ddc.js.map
