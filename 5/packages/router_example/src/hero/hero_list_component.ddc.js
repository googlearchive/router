define(['dart_sdk', 'packages/router_example/src/hero/hero', 'packages/router_example/src/route_paths', 'packages/angular_router/src/lifecycle', 'packages/angular_router/src/router/router_state', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/router_example/src/hero/hero_service'], function(dart_sdk, hero, route_paths, lifecycle, router_state, router_outlet_directive, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero__hero = hero.src__hero__hero;
  const src__route_paths = route_paths.src__route_paths;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__router__router_state = router_state.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__hero__hero_service = hero_service.src__hero__hero_service;
  const _root = Object.create(null);
  const src__hero__hero_list_component = Object.create(_root);
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  let HeroTobool = () => (HeroTobool = dart.constFn(dart.fnType(core.bool, [src__hero__hero.Hero])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero__hero.Hero)))();
  const _heroService = Symbol('_heroService');
  const _router = Symbol('_router');
  const _getHeroes = Symbol('_getHeroes');
  const _selectHero = Symbol('_selectHero');
  const _getId = Symbol('_getId');
  src__hero__hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get selectedHero() {
      return this[selectedHero];
    }
    set selectedHero(value) {
      this[selectedHero] = value;
    }
    [_getHeroes]() {
      return async.async(dart.void, (function* _getHeroes() {
        this.heroes = (yield this[_heroService].getAll());
      }).bind(this));
    }
    onActivate(_, current) {
      return async.async(dart.void, (function* onActivate() {
        yield this[_getHeroes]();
        yield this[_selectHero](current);
      }).bind(this));
    }
    [_selectHero](routerState) {
      return async.async(dart.void, (function* _selectHero() {
        let id = this[_getId](routerState);
        if (id != null) this.selectedHero = this.heroes[$firstWhere](dart.fn(hero => hero.id == id, HeroTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }).bind(this));
    }
    [_getId](routerState) {
      return core.int.parse((() => {
        let l = routerState.queryParameters[$_get](src__route_paths.idParam);
        return l != null ? l : '';
      })(), {onError: dart.fn(_ => null, StringToNull())});
    }
    onSelect(hero) {
      this.selectedHero = hero;
      this.gotoDetail();
    }
    gotoDetail() {
      return this[_router].navigate(src__route_paths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from([src__route_paths.idParam, dart.toString(this.selectedHero.id)])}));
    }
  };
  (src__hero__hero_list_component.HeroListComponent.new = function(heroService, router) {
    this[heroes] = null;
    this[selectedHero] = null;
    this[_heroService] = heroService;
    this[_router] = router;
  }).prototype = src__hero__hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(src__hero__hero_list_component.HeroListComponent);
  const heroes = Symbol("HeroListComponent.heroes");
  const selectedHero = Symbol("HeroListComponent.selectedHero");
  src__hero__hero_list_component.HeroListComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__hero__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getMethods(src__hero__hero_list_component.HeroListComponent.__proto__),
    [_getHeroes]: dart.fnType(async.Future$(dart.void), []),
    onActivate: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_selectHero]: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState]),
    [_getId]: dart.fnType(core.int, [src__router__router_state.RouterState]),
    onSelect: dart.fnType(dart.void, [src__hero__hero.Hero]),
    gotoDetail: dart.fnType(async.Future$(src__router__router.NavigationResult), [])
  }));
  dart.setFieldSignature(src__hero__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(src__hero__hero_list_component.HeroListComponent.__proto__),
    [_heroService]: dart.finalFieldType(src__hero__hero_service.HeroService),
    [_router]: dart.finalFieldType(src__router__router.Router),
    heroes: dart.fieldType(ListOfHero()),
    selectedHero: dart.fieldType(src__hero__hero.Hero)
  }));
  dart.trackLibraries("packages/router_example/src/hero/hero_list_component.ddc", {
    "package:router_example/src/hero/hero_list_component.dart": src__hero__hero_list_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.dart"],"names":[],"mappings":";;;;;;;;QAiD4D,gBAAK;;;;;;;;;;;;;;;;;;;;;IA/BpD;;;;;;IACN;;;;;;;AAIqB;AACxB,mBAAM,IAAG,MAAM,kBAAY,OAAO;MACpC;;eAGwB,CAAC,EAAE,OAAmB;AAAE;AAC9C,cAAM,gBAAU;AAChB,cAAM,iBAAW,CAAC,OAAO;MAC3B;;kBAEyB,WAAuB;AAAE;AAChD,YAAI,KAAK,YAAM,CAAC,WAAW;AAC3B,YAAI,EAAE,IAAI,MACR,iBAAY,GACR,WAAM,aAAW,CAAC,QAAC,IAAI,IAAK,IAAI,GAAG,IAAI,EAAE,0BAAU,cAAM;MACjE;;aAEW,WAAuB;YAC9B,SAAG,MAAM;gBAAC,WAAW,gBAAgB,QAAO,AAQU,gBAAK,QARR;+BAAK;sBAC3C,QAAC,CAAC,IAAK;IAAK;aAEf,IAAS;AACrB,uBAAY,GAAG,IAAI;AACnB,qBAAU;IACZ;;YAEyC,cAAO,SAAS,CAAC,AAAA,AAAM,gBAAD,KAAK,MAC1D,cAAa,yCADmC,AAC5B,gBADiC,QAC1B,gBAAE,iBAAY,GAAG;IAAc;;mEA7B7C,WAAY,EAAO,MAAO;IAHtC,YAAM;IACZ,kBAAY;IAEM,kBAAY,GAAZ,WAAY;IAAO,aAAO,GAAP,MAAO;EAAC","file":"hero_list_component.ddc.js"}');
  // Exports:
  return {
    src__hero__hero_list_component: src__hero__hero_list_component
  };
});

//# sourceMappingURL=hero_list_component.ddc.js.map
