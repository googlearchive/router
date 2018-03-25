define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/router_example/src/crisis/crisis_list_home_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, crisis_list_home_component, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__crisis__crisis_list_home_component = crisis_list_home_component.src__crisis__crisis_list_home_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__crisis__crisis_list_home_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfCrisisListHomeComponent = () => (AppViewOfCrisisListHomeComponent = dart.constFn(src__core__linker__app_view.AppView$(src__crisis__crisis_list_home_component.CrisisListHomeComponent)))();
  let AppViewAndintToAppViewOfCrisisListHomeComponent = () => (AppViewAndintToAppViewOfCrisisListHomeComponent = dart.constFn(dart.fnType(AppViewOfCrisisListHomeComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfCrisisListHomeComponent = () => (ComponentRefOfCrisisListHomeComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_list_home_component.CrisisListHomeComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfCrisisListHomeComponent = () => (ComponentFactoryOfCrisisListHomeComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__crisis__crisis_list_home_component.CrisisListHomeComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__crisis_list_home_component$46template, {
    /*src__crisis__crisis_list_home_component$46template.styles$CrisisListHomeComponent*/get styles$CrisisListHomeComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  let const$;
  src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0 = class ViewCrisisListHomeComponent0 extends src__core__linker__app_view.AppView$(src__crisis__crisis_list_home_component.CrisisListHomeComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_1 = html.Text.new('Welcome to the Crisis Center');
      this[_el_0][$append](_text_1);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('crises-home'));
    let t = src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0._renderType;
    t == null ? src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__crisis__crisis_list_home_component$46template.styles$CrisisListHomeComponent) : t;
    this.setupComponentType(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0._renderType);
  }).prototype = src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.prototype;
  dart.addTypeTests(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0);
  dart.setMethodSignature(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_list_home_component.CrisisListHomeComponent), [])
  }));
  dart.setFieldSignature(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0, () => ({
    __proto__: dart.getFields(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0, {
    /*src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__crisis__crisis_list_home_component$46template.viewFactory_CrisisListHomeComponent0 = function(parentView, parentIndex) {
    return new src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_list_home_component$46template.viewFactory_CrisisListHomeComponent0, AppViewAndintToAppViewOfCrisisListHomeComponent());
  dart.defineLazy(src__crisis__crisis_list_home_component$46template, {
    /*src__crisis__crisis_list_home_component$46template.styles$CrisisListHomeComponentHost*/get styles$CrisisListHomeComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _CrisisListHomeComponent_0_5 = Symbol('_CrisisListHomeComponent_0_5');
  src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0 = class _ViewCrisisListHomeComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_CrisisListHomeComponent_0_5] = new src__crisis__crisis_list_home_component.CrisisListHomeComponent.new();
      this[_compView_0].create(this[_CrisisListHomeComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfCrisisListHomeComponent()).new(0, this, this.rootEl, this[_CrisisListHomeComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_CrisisListHomeComponent_0_5] = null;
    src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0.prototype;
  dart.addTypeTests(src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0);
  dart.setMethodSignature(src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0, () => ({
    __proto__: dart.getFields(src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__crisis__crisis_list_home_component$46template.ViewCrisisListHomeComponent0),
    [_CrisisListHomeComponent_0_5]: dart.fieldType(src__crisis__crisis_list_home_component.CrisisListHomeComponent)
  }));
  src__crisis__crisis_list_home_component$46template.viewFactory_CrisisListHomeComponentHost0 = function(parentView, parentIndex) {
    return new src__crisis__crisis_list_home_component$46template._ViewCrisisListHomeComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_list_home_component$46template.viewFactory_CrisisListHomeComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__crisis__crisis_list_home_component$46template, {
    /*src__crisis__crisis_list_home_component$46template.CrisisListHomeComponentNgFactory*/get CrisisListHomeComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfCrisisListHomeComponent()).new('crises-home', src__crisis__crisis_list_home_component$46template.viewFactory_CrisisListHomeComponentHost0, src__crisis__crisis_list_home_component$46template._CrisisListHomeComponentMetadata));
    },
    /*src__crisis__crisis_list_home_component$46template._CrisisListHomeComponentMetadata*/get _CrisisListHomeComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__crisis__crisis_list_home_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__crisis_list_home_component$46template.initReflector = function() {
    if (dart.test(src__crisis__crisis_list_home_component$46template._visited)) {
      return;
    }
    src__crisis__crisis_list_home_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__crisis__crisis_list_home_component.CrisisListHomeComponent), src__crisis__crisis_list_home_component$46template.CrisisListHomeComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__crisis__crisis_list_home_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/crisis_list_home_component.template.ddc", {
    "package:router_example/src/crisis/crisis_list_home_component.template.dart": src__crisis__crisis_list_home_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["crisis_list_home_component.template.dart"],"names":[],"mappings":";;;;QAiCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;MAPP,iFAA8B;YAAG;;;;;;;AAYjD,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,UAAa,UAFH,AAEa,AAAI,IAFV,SAEsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;kGAf6B,UAA2B,EAAE,WAAe;IAFzD,WAAK;AAEwD,6GAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC7K,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,uGAAW;gBAAX,2FAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,iFAA8B;AAChH,2BAAkB,CAAC,2FAAW;EAChC;;;;;;;;4BAKY,IAAO;;;MAVQ,2FAAW;;;;;qGAmBsC,UAA2B,EAAE,WAAe;AACxH,UAAO,KAAI,mFAA4B,CAAC,UAAU,EAAE,WAAW;EACjE;;;MAEoB,qFAAkC;YAAG;;;;;;;AAQrD,uBAAW,GAAG,IAAI,mFAA4B,CAAC,MAAM;AACrD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,wCAA4B,GAAG,IAAI,mEAA+B;AAClE,uBAAW,OAAO,CAAC,kCAA4B,EAAE,qBAAgB;AACjE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,6CAA6C,CAAC,GAAG,MAAM,WAAM,EAAE,kCAA4B;IACxG;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;uGAnBkC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,kCAA4B;AACsB,kHAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;yGAsBjI,UAA2B,EAAE,WAAe;AAC3F,UAAO,KAAI,wFAAiC,CAAC,UAAU,EAAE,WAAW;EACtE;;;MAEwD,mFAAgC;YAAG,gBAAM,iDAAiD,CAAC,eAAe,2FAAwC,EAAE,mFAAgC;;MACtO,mFAAgC;YAAG;;MACrC,2DAAQ;YAAG;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAO,oCAAiB,CAAC,8EAAuB,EAAE,mFAAgC;AAClF,IAAM,gCAAa;EACrB","file":"crisis_list_home_component.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_list_home_component$46template: src__crisis__crisis_list_home_component$46template
  };
});

//# sourceMappingURL=crisis_list_home_component.template.ddc.js.map
