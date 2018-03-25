define(['dart_sdk', 'packages/router_example/src/route_paths', 'packages/angular_router/src/router/navigation_params', 'packages/angular_router/src/lifecycle', 'packages/angular_router/src/router/router_state', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/router_example/src/hero/hero', 'packages/router_example/src/hero/hero_service'], function(dart_sdk, route_paths, navigation_params, lifecycle, router_state, router_outlet_directive, hero, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__router__navigation_params = navigation_params.src__router__navigation_params;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__router__router_state = router_state.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__hero__hero = hero.src__hero__hero;
  const src__hero__hero_service = hero_service.src__hero__hero_service;
  const _root = Object.create(null);
  const src__hero__hero_component = Object.create(_root);
  const $_get = dartx._get;
  const $toString = dartx.toString;
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _heroService = Symbol('_heroService');
  const _router = Symbol('_router');
  const _getId = Symbol('_getId');
  src__hero__hero_component.HeroComponent = class HeroComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    onActivate(_, current) {
      return async.async(dart.void, (function* onActivate() {
        let id = this[_getId](current);
        if (id != null) this.hero = (yield this[_heroService].get(id));
      }).bind(this));
    }
    [_getId](routerState) {
      return core.int.parse((() => {
        let l = routerState.parameters[$_get](src__route_paths.idParam);
        return l != null ? l : '';
      })(), {onError: dart.fn(_ => null, StringToNull())});
    }
    goBack() {
      return this[_router].navigate(src__route_paths.heroes.toUrl(), new src__router__navigation_params.NavigationParams.new({queryParameters: new (IdentityMapOfString$String()).from([src__route_paths.idParam, dart.toString(this.hero.id)])}));
    }
  };
  (src__hero__hero_component.HeroComponent.new = function(heroService, router) {
    this[hero$] = null;
    this[_heroService] = heroService;
    this[_router] = router;
  }).prototype = src__hero__hero_component.HeroComponent.prototype;
  dart.addTypeTests(src__hero__hero_component.HeroComponent);
  const hero$ = Symbol("HeroComponent.hero");
  src__hero__hero_component.HeroComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__hero__hero_component.HeroComponent, () => ({
    __proto__: dart.getMethods(src__hero__hero_component.HeroComponent.__proto__),
    onActivate: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_getId]: dart.fnType(core.int, [src__router__router_state.RouterState]),
    goBack: dart.fnType(async.Future$(src__router__router.NavigationResult), [])
  }));
  dart.setFieldSignature(src__hero__hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(src__hero__hero_component.HeroComponent.__proto__),
    hero: dart.fieldType(src__hero__hero.Hero),
    [_heroService]: dart.finalFieldType(src__hero__hero_service.HeroService),
    [_router]: dart.finalFieldType(src__router__router.Router)
  }));
  dart.trackLibraries("packages/router_example/src/hero/hero_component.ddc", {
    "package:router_example/src/hero/hero_component.dart": src__hero__hero_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.dart"],"names":[],"mappings":";;;;;;;QAmC4B,gBAAK;;;;;;;;;;;;;;;;;IAlB1B;;;;;;eAOmB,CAAC,EAAE,OAAmB;AAAE;AAC9C,YAAM,KAAK,YAAM,CAAC,OAAO;AACzB,YAAI,EAAE,IAAI,MAAM,SAAI,IAAG,MAAO,kBAAY,IAAI,CAAC,EAAE;MACnD;;aAEW,WAAuB;YAAK,SAAG,MAChC;gBAAC,WAAW,WAAW,QAAO,AAKd,gBAAK,QALgB;+BAAK;sBAAa,QAAC,CAAC,IAAK;IAAK;;YAExC,cAAO,SAAS,CACjD,AAAM,AAEgB,gBAAK,OAFf,MAAM,IAClB,IAAI,mDAAgB,mBACC,yCAAC,AAAM,gBAAD,QAAQ,gBAAE,SAAI,GAAG;IAAc;;0DAd3C,WAAY,EAAO,MAAO;IAJxC,WAAI;IAIU,kBAAY,GAAZ,WAAY;IAAO,aAAO,GAAP,MAAO;EAAC","file":"hero_component.ddc.js"}');
  // Exports:
  return {
    src__hero__hero_component: src__hero__hero_component
  };
});

//# sourceMappingURL=hero_component.ddc.js.map
