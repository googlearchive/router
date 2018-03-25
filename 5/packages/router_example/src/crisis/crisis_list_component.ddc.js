define(['dart_sdk', 'packages/router_example/src/crisis/crisis', 'packages/router_example/src/route_paths', 'packages/router_example/src/crisis/route_paths', 'packages/angular_router/src/lifecycle', 'packages/angular_router/src/router/router_state', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/router_example/src/crisis/crisis_service', 'packages/router_example/src/crisis/routes'], function(dart_sdk, crisis, route_paths, route_paths$, lifecycle, router_state, router_outlet_directive, crisis_service, routes) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__crisis = crisis.src__crisis__crisis;
  const src__route_paths = route_paths.src__route_paths;
  const src__crisis__route_paths = route_paths$.src__crisis__route_paths;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__router__router_state = router_state.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__crisis__crisis_service = crisis_service.src__crisis__crisis_service;
  const src__crisis__routes = routes.src__crisis__routes;
  const _root = Object.create(null);
  const src__crisis__crisis_list_component = Object.create(_root);
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  let CrisisTobool = () => (CrisisTobool = dart.constFn(dart.fnType(core.bool, [src__crisis__crisis.Crisis])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfCrisis = () => (ListOfCrisis = dart.constFn(core.List$(src__crisis__crisis.Crisis)))();
  dart.defineLazy(src__crisis__crisis_list_component, {
    /*src__crisis__crisis_list_component._instanceCount*/get _instanceCount() {
      return 0;
    },
    set _instanceCount(_) {}
  });
  const _crisisService = Symbol('_crisisService');
  const _router = Symbol('_router');
  const _getCrises = Symbol('_getCrises');
  const _selectHero = Symbol('_selectHero');
  const _getId = Symbol('_getId');
  src__crisis__crisis_list_component.CrisisListComponent = class CrisisListComponent extends core.Object {
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get crises() {
      return this[crises];
    }
    set crises(value) {
      this[crises] = value;
    }
    get selectedCrisis() {
      return this[selectedCrisis];
    }
    set selectedCrisis(value) {
      this[selectedCrisis] = value;
    }
    get instanceId() {
      return this[instanceId];
    }
    set instanceId(value) {
      super.instanceId = value;
    }
    [_getCrises]() {
      return async.async(dart.void, (function* _getCrises() {
        this.crises = (yield this[_crisisService].getAll());
      }).bind(this));
    }
    onActivate(_, current) {
      return async.async(dart.void, (function* onActivate() {
        core.print(dart.str`>> [${this.instanceId}] CrisisList onActivate ${_ == null ? null : _.toUrl()} (${(() => {
          let t = this.selectedCrisis;
          return t == null ? null : t.id;
        })()}) -> ${current == null ? null : current.toUrl()} ...`);
        yield this[_getCrises]();
        yield this[_selectHero](current);
        core.print(dart.str`>> [${this.instanceId}] CrisisList onActivate selected ${(() => {
          let t = this.selectedCrisis;
          return t == null ? null : t.id;
        })()}`);
      }).bind(this));
    }
    onDeactivate(current, next) {
      core.print(dart.str`>> [${this.instanceId}] CrisisList onDeactivate ${current == null ? null : current.toUrl()} -> ${next == null ? null : next.toUrl()}`);
    }
    [_selectHero](routerState) {
      return async.async(dart.void, (function* _selectHero() {
        let id = this[_getId](routerState);
        core.print(dart.str`>> [${this.instanceId}] CrisisList _selectHero ${id}`);
        if (id != null) this.selectedCrisis = this.crises[$firstWhere](dart.fn(hero => hero.id == id, CrisisTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }).bind(this));
    }
    [_getId](routerState) {
      return core.int.parse((() => {
        let l = routerState.parameters[$_get](src__route_paths.idParam);
        return l != null ? l : '';
      })(), {onError: dart.fn(_ => null, StringToNull())});
    }
    onSelect(crisis) {
      return async.async(dart.dynamic, (function* onSelect() {
        this.selectedCrisis = crisis;
        core.print(dart.str`>> [${this.instanceId}] CrisisList onSelect selected ${(() => {
          let t = this.selectedCrisis;
          return t == null ? null : t.id;
        })()}`);
        yield this.gotoDetail();
        core.print(dart.str`>> [${this.instanceId}] CrisisList onSelect selected ${(() => {
          let t = this.selectedCrisis;
          return t == null ? null : t.id;
        })()}, after gotoDetail`);
      }).bind(this));
    }
    gotoDetail() {
      return this[_router].navigate(src__crisis__route_paths.crisis.toUrl({parameters: new (IdentityMapOfString$String()).from([src__route_paths.idParam, dart.toString(this.selectedCrisis.id)])}));
    }
  };
  (src__crisis__crisis_list_component.CrisisListComponent.new = function(crisisService, router, routes) {
    this[crises] = null;
    this[selectedCrisis] = null;
    let x = src__crisis__crisis_list_component._instanceCount;
    src__crisis__crisis_list_component._instanceCount = dart.notNull(x) + 1;
    this[instanceId] = x;
    this[_crisisService] = crisisService;
    this[_router] = router;
    this[routes$] = routes;
    core.print(dart.str`[${this.instanceId}] CrisisListComponent created`);
  }).prototype = src__crisis__crisis_list_component.CrisisListComponent.prototype;
  dart.addTypeTests(src__crisis__crisis_list_component.CrisisListComponent);
  const routes$ = Symbol("CrisisListComponent.routes");
  const crises = Symbol("CrisisListComponent.crises");
  const selectedCrisis = Symbol("CrisisListComponent.selectedCrisis");
  const instanceId = Symbol("CrisisListComponent.instanceId");
  src__crisis__crisis_list_component.CrisisListComponent[dart.implements] = () => [src__lifecycle.OnActivate, src__lifecycle.OnDeactivate];
  dart.setMethodSignature(src__crisis__crisis_list_component.CrisisListComponent, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_list_component.CrisisListComponent.__proto__),
    [_getCrises]: dart.fnType(async.Future$(dart.void), []),
    onActivate: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    onDeactivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_selectHero]: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState]),
    [_getId]: dart.fnType(core.int, [src__router__router_state.RouterState]),
    onSelect: dart.fnType(dart.void, [src__crisis__crisis.Crisis]),
    gotoDetail: dart.fnType(async.Future$(src__router__router.NavigationResult), [])
  }));
  dart.setFieldSignature(src__crisis__crisis_list_component.CrisisListComponent, () => ({
    __proto__: dart.getFields(src__crisis__crisis_list_component.CrisisListComponent.__proto__),
    [_crisisService]: dart.finalFieldType(src__crisis__crisis_service.CrisisService),
    routes: dart.finalFieldType(src__crisis__routes.Routes),
    [_router]: dart.finalFieldType(src__router__router.Router),
    crises: dart.fieldType(ListOfCrisis()),
    selectedCrisis: dart.fieldType(src__crisis__crisis.Crisis),
    instanceId: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/router_example/src/crisis/crisis_list_component.ddc", {
    "package:router_example/src/crisis/crisis_list_component.dart": src__crisis__crisis_list_component
  }, '{"version":3,"sourceRoot":"","sources":["crisis_list_component.dart"],"names":[],"mappings":";;;;;;;;QA4E0B,gBAAK;QAD6B,wBAAK;;;;;;;;;;;;;;;;;MAhE7D,iDAAc;YAAG;;;;;;;;;;IAeN;;;;;;IAEA;;;;;;IACN;;;;;;IACD;;;;;;;AAMoB;AACxB,mBAAM,IAAG,MAAM,oBAAc,OAAO;MACtC;;eAGwB,CAAC,EAAE,OAAmB;AAAE;AAC9C,kBAAK,CACD,eAAM,eAAU,2BAA0B,CAAC,kBAAD,CAAC,MAAO;kBAAO,mBAAc;;oBAAY,OAAO,kBAAP,OAAO,MAAO;AACrG,cAAM,gBAAU;AAChB,cAAM,iBAAW,CAAC,OAAO;AACzB,kBAAK,CACD,eAAM,eAAU;kBAAmC,mBAAc;;;MACvE;;iBAEkB,OAAmB,EAAE,IAAgB;AACrD,gBAAK,CACD,eAAM,eAAU,6BAA4B,OAAO,kBAAP,OAAO,MAAO,SAAS,IAAI,kBAAJ,IAAI,MAAO;IACpF;kBAEyB,WAAuB;AAAE;AAChD,YAAI,KAAK,YAAM,CAAC,WAAW;AAC3B,kBAAK,CAAC,eAAM,eAAU,4BAA0B,EAAE;AAClD,YAAI,EAAE,IAAI,MACR,mBAAc,GACV,WAAM,aAAW,CAAC,QAAC,IAAI,IAAK,IAAI,GAAG,IAAI,EAAE,4BAAU,cAAM;MACjE;;aAEW,WAAuB;YAAK,SAAG,MAChC;gBAAC,WAAW,WAAW,QAAO,AAYhB,gBAAK,QAZkB;+BAAK;sBAAa,QAAC,CAAC,IAAK;IAAK;aAE/D,MAAa;AAAE;AAC3B,2BAAc,GAAG,MAAM;AACvB,kBAAK,CACD,eAAM,eAAU;kBAAiC,mBAAc;;;AACnE,cAAM,eAAU;AAChB,kBAAK,CACD,eAAM,eAAU;kBAAiC,mBAAc;;;MACrE;;;YAEyC,cAAO,SAAS,CAAC,AAAA,AAAM,wBAAD,OAAO,MAC5D,cAAa,yCAAC,AAAM,gBAAD,QAAQ,gBAAE,mBAAc,GAAG;IAAc;;yEA5C7C,aAAc,EAAO,MAAO,EAAE,MAAW;IAJrD,YAAM;IACZ,oBAAc;YACF,iDAAc;0EA9BnC;IA8BQ,gBAAU;IAES,oBAAc,GAAd,aAAc;IAAO,aAAO,GAAP,MAAO;IAAO,aAAM,GAAN,MAAM;AAChE,cAAK,CAAC,YAAG,eAAU;EACrB","file":"crisis_list_component.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_list_component: src__crisis__crisis_list_component
  };
});

//# sourceMappingURL=crisis_list_component.ddc.js.map
