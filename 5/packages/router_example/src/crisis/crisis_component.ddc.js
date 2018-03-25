define(['dart_sdk', 'packages/router_example/src/route_paths', 'packages/router_example/src/crisis/route_paths', 'packages/angular_router/src/lifecycle', 'packages/angular_router/src/router/router_state', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/router_example/src/crisis/crisis', 'packages/router_example/src/crisis/crisis_service', 'packages/router_example/src/crisis/dialog_service'], function(dart_sdk, route_paths, route_paths$, lifecycle, router_state, router_outlet_directive, crisis, crisis_service, dialog_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__crisis__route_paths = route_paths$.src__crisis__route_paths;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__router__router_state = router_state.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__crisis__crisis = crisis.src__crisis__crisis;
  const src__crisis__crisis_service = crisis_service.src__crisis__crisis_service;
  const src__crisis__dialog_service = dialog_service.src__crisis__dialog_service;
  const _root = Object.create(null);
  const src__crisis__crisis_component = Object.create(_root);
  const $_get = dartx._get;
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  const _crisisService = Symbol('_crisisService');
  const _router = Symbol('_router');
  const _dialogService = Symbol('_dialogService');
  const _name = Symbol('_name');
  const _getId = Symbol('_getId');
  src__crisis__crisis_component.CrisisComponent = class CrisisComponent extends core.Object {
    get instanceId() {
      return this[instanceId];
    }
    set instanceId(value) {
      super.instanceId = value;
    }
    get crisis() {
      return this[crisis$];
    }
    set crisis(value) {
      this[crisis$] = value;
    }
    set name(n) {
      this[_name] = n;
      core.print(dart.str`>> [${this.instanceId}] Crisis name changed to ${this[_name]}`);
    }
    get name() {
      return this[_name];
    }
    [_getId](routerState) {
      return core.int.parse((() => {
        let l = routerState.parameters[$_get](src__route_paths.idParam);
        return l != null ? l : '';
      })(), {onError: dart.fn(_ => null, StringToNull())});
    }
    onActivate(_, current) {
      return async.async(dart.void, (function* onActivate() {
        core.print(dart.str`>> [${this.instanceId}] Crisis onActivate ${_ == null ? null : _.toUrl()} (${this.name}) -> ${current == null ? null : current.toUrl()} ...`);
        let id = this[_getId](current);
        if (id == null) return null;
        this.crisis = (yield this[_crisisService].get(id));
        let t = this.crisis;
        this.name = t == null ? null : t.name;
        core.print(dart.str`>> [${this.instanceId}] Crisis onActivate name = ${this.name}`);
      }).bind(this));
    }
    onDeactivate(prev, current) {
      core.print(dart.str`>> [${this.instanceId}] Crisis onDeactivate ${prev == null ? null : prev.toUrl()} (${this.name}) -> ${current == null ? null : current.toUrl()}`);
    }
    save() {
      return async.async(dart.void, (function* save() {
        core.print(dart.str`>> [${this.instanceId}] Crisis save ${this.name} (was ${(() => {
          let t = this.crisis;
          return t == null ? null : t.name;
        })()}`);
        let l = this.crisis;
        l == null ? null : l.name = this.name;
        this.goBack();
      }).bind(this));
    }
    goBack() {
      return this[_router].navigate(src__crisis__route_paths.home.toUrl());
    }
    canDeactivate(prev, next) {
      return async.async(core.bool, (function* canDeactivate() {
        core.print(dart.str`>> [${this.instanceId}] Crisis canDeactivate ${prev == null ? null : prev.toUrl()} -> ${next == null ? null : next.toUrl()}; ${(() => {
          let t = this.crisis;
          return t == null ? null : t.name;
        })()} == ${this.name}`);
        return FutureOrOfbool()._check(this.crisis == null || (() => {
          let t = this.crisis;
          return t == null ? null : t.name;
        })() == this.name ? true : this[_dialogService].confirm('Discard changes?'));
      }).bind(this));
    }
  };
  (src__crisis__crisis_component.CrisisComponent.new = function(crisisService, router, dialogService) {
    let x = src__crisis__crisis_component.CrisisComponent._instanceCount;
    src__crisis__crisis_component.CrisisComponent._instanceCount = dart.notNull(x) + 1;
    this[instanceId] = x;
    this[crisis$] = null;
    this[_name] = null;
    this[_crisisService] = crisisService;
    this[_router] = router;
    this[_dialogService] = dialogService;
    core.print(dart.str`[${this.instanceId}] CrisisComponent created`);
  }).prototype = src__crisis__crisis_component.CrisisComponent.prototype;
  dart.addTypeTests(src__crisis__crisis_component.CrisisComponent);
  const instanceId = Symbol("CrisisComponent.instanceId");
  const crisis$ = Symbol("CrisisComponent.crisis");
  src__crisis__crisis_component.CrisisComponent[dart.implements] = () => [src__lifecycle.CanDeactivate, src__lifecycle.OnActivate, src__lifecycle.OnDeactivate];
  dart.setMethodSignature(src__crisis__crisis_component.CrisisComponent, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_component.CrisisComponent.__proto__),
    [_getId]: dart.fnType(core.int, [src__router__router_state.RouterState]),
    onActivate: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    onDeactivate: dart.fnType(dart.void, [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    save: dart.fnType(async.Future$(dart.void), []),
    goBack: dart.fnType(async.Future$(src__router__router.NavigationResult), []),
    canDeactivate: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.setGetterSignature(src__crisis__crisis_component.CrisisComponent, () => ({
    __proto__: dart.getGetters(src__crisis__crisis_component.CrisisComponent.__proto__),
    name: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(src__crisis__crisis_component.CrisisComponent, () => ({
    __proto__: dart.getSetters(src__crisis__crisis_component.CrisisComponent.__proto__),
    name: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__crisis__crisis_component.CrisisComponent, () => ({
    __proto__: dart.getFields(src__crisis__crisis_component.CrisisComponent.__proto__),
    instanceId: dart.finalFieldType(core.int),
    crisis: dart.fieldType(src__crisis__crisis.Crisis),
    [_name]: dart.fieldType(core.String),
    [_crisisService]: dart.finalFieldType(src__crisis__crisis_service.CrisisService),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_dialogService]: dart.finalFieldType(src__crisis__dialog_service.DialogService)
  }));
  dart.defineLazy(src__crisis__crisis_component.CrisisComponent, {
    /*src__crisis__crisis_component.CrisisComponent._instanceCount*/get _instanceCount() {
      return 0;
    },
    set _instanceCount(_) {}
  });
  dart.trackLibraries("packages/router_example/src/crisis/crisis_component.ddc", {
    "package:router_example/src/crisis/crisis_component.dart": src__crisis__crisis_component
  }, '{"version":3,"sourceRoot":"","sources":["crisis_component.dart"],"names":[],"mappings":";;;;;;QA2CoC,gBAAK;QAyBe,wBAAK;;;;;;;;;;;;;;;;;;IA7CrD;;;;;;IACC;;;;;;aAGO,CAAQ;AACpB,iBAAK,GAAG,CAAC;AACT,gBAAK,CAAC,eAAM,eAAU,4BAA0B,WAAK;IACvD;;YAEmB,YAAK;;aAUb,WAAuB;YAAK,SAAG,MAChC;gBAAC,WAAW,WAAW,QAAC,AAAM,gBAAD,QAAQ;+BAAK;sBAAa,QAAC,CAAC,IAAK;IAAK;eAGrD,CAAC,EAAE,OAAmB;AAAE;AAC9C,kBAAK,CACD,eAAM,eAAU,uBAAsB,CAAC,kBAAD,CAAC,MAAO,OAAM,SAAI,QAAO,OAAO,kBAAP,OAAO,MAAO;AACjF,YAAM,KAAK,YAAM,CAAC,OAAO;AACzB,YAAI,EAAE,IAAI,MAAM,MAAO;AACvB,mBAAM,IAAG,MAAO,oBAAc,IAAI,CAAC,EAAE;AACrC,gBAAO,WAAM;iBAAT;AACJ,kBAAK,CAAC,eAAM,eAAU,8BAA4B,SAAI;MACxD;;iBAGkB,IAAgB,EAAE,OAAmB;AACrD,gBAAK,CACD,eAAM,eAAU,yBAAwB,IAAI,kBAAJ,IAAI,MAAO,OAAM,SAAI,QAAO,OAAO,kBAAP,OAAO,MAAO;IACxF;;AAEoB;AAClB,kBAAK,CAAC,eAAM,eAAU,iBAAe,SAAI;kBAAQ,WAAM;;;AACvD,2BAAM;oCAAS,SAAI;AACnB,mBAAM;MACR;;;YAEqC,cAAO,SAAS,CAAC,AAAA,AAAM,wBAAD,KAAK,MAAM;IAAG;kBAG9C,IAAgB,EAAE,IAAgB;AAAE;AAC7D,kBAAK,CACD,eAAM,eAAU,0BAAyB,IAAI,kBAAJ,IAAI,MAAO,SAAS,IAAI,kBAAJ,IAAI,MAAO;kBAAO,WAAM;;mBAAY,SAAI;AACzG,uCAAO,WAAM,IAAI;kBAAQ,WAAM;;gBAAU,SAAI,GACvC,OACA,oBAAc,QAAQ,CAAC;MAC/B;;;gEAvCqB,aAAc,EAAO,MAAO,EAAO,aAAc;YAfnD,4DAAc;IAAd,4DAAc,qBAvBnC;IAuBQ,gBAAU;IACT,aAAM;IAEN,WAAK;IAYS,oBAAc,GAAd,aAAc;IAAO,aAAO,GAAP,MAAO;IAAO,oBAAc,GAAd,aAAc;AACpE,cAAK,CAAC,YAAG,eAAU;EACrB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlBW,4DAAc;YAAG","file":"crisis_component.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_component: src__crisis__crisis_component
  };
});

//# sourceMappingURL=crisis_component.ddc.js.map
