define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/router_example/src/not_found_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, not_found_component, reflector, angular) {
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
  const src__not_found_component = not_found_component.src__not_found_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__not_found_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfNotFoundComponent = () => (AppViewOfNotFoundComponent = dart.constFn(src__core__linker__app_view.AppView$(src__not_found_component.NotFoundComponent)))();
  let AppViewAndintToAppViewOfNotFoundComponent = () => (AppViewAndintToAppViewOfNotFoundComponent = dart.constFn(dart.fnType(AppViewOfNotFoundComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfNotFoundComponent = () => (ComponentRefOfNotFoundComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__not_found_component.NotFoundComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfNotFoundComponent = () => (ComponentFactoryOfNotFoundComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__not_found_component.NotFoundComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__not_found_component$46template, {
    /*src__not_found_component$46template.styles$NotFoundComponent*/get styles$NotFoundComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  let const$;
  src__not_found_component$46template.ViewNotFoundComponent0 = class ViewNotFoundComponent0 extends src__core__linker__app_view.AppView$(src__not_found_component.NotFoundComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Page not found');
      this[_el_0][$append](_text_1);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__not_found_component$46template.ViewNotFoundComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    src__not_found_component$46template.ViewNotFoundComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-not-found'));
    let t = src__not_found_component$46template.ViewNotFoundComponent0._renderType;
    t == null ? src__not_found_component$46template.ViewNotFoundComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__not_found_component$46template.styles$NotFoundComponent) : t;
    this.setupComponentType(src__not_found_component$46template.ViewNotFoundComponent0._renderType);
  }).prototype = src__not_found_component$46template.ViewNotFoundComponent0.prototype;
  dart.addTypeTests(src__not_found_component$46template.ViewNotFoundComponent0);
  dart.setMethodSignature(src__not_found_component$46template.ViewNotFoundComponent0, () => ({
    __proto__: dart.getMethods(src__not_found_component$46template.ViewNotFoundComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__not_found_component.NotFoundComponent), [])
  }));
  dart.setFieldSignature(src__not_found_component$46template.ViewNotFoundComponent0, () => ({
    __proto__: dart.getFields(src__not_found_component$46template.ViewNotFoundComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__not_found_component$46template.ViewNotFoundComponent0, {
    /*src__not_found_component$46template.ViewNotFoundComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__not_found_component$46template.viewFactory_NotFoundComponent0 = function(parentView, parentIndex) {
    return new src__not_found_component$46template.ViewNotFoundComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__not_found_component$46template.viewFactory_NotFoundComponent0, AppViewAndintToAppViewOfNotFoundComponent());
  dart.defineLazy(src__not_found_component$46template, {
    /*src__not_found_component$46template.styles$NotFoundComponentHost*/get styles$NotFoundComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _NotFoundComponent_0_5 = Symbol('_NotFoundComponent_0_5');
  src__not_found_component$46template._ViewNotFoundComponentHost0 = class _ViewNotFoundComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__not_found_component$46template.ViewNotFoundComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_NotFoundComponent_0_5] = new src__not_found_component.NotFoundComponent.new();
      this[_compView_0].create(this[_NotFoundComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfNotFoundComponent()).new(0, this, this.rootEl, this[_NotFoundComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__not_found_component$46template._ViewNotFoundComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NotFoundComponent_0_5] = null;
    src__not_found_component$46template._ViewNotFoundComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__not_found_component$46template._ViewNotFoundComponentHost0.prototype;
  dart.addTypeTests(src__not_found_component$46template._ViewNotFoundComponentHost0);
  dart.setMethodSignature(src__not_found_component$46template._ViewNotFoundComponentHost0, () => ({
    __proto__: dart.getMethods(src__not_found_component$46template._ViewNotFoundComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__not_found_component$46template._ViewNotFoundComponentHost0, () => ({
    __proto__: dart.getFields(src__not_found_component$46template._ViewNotFoundComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__not_found_component$46template.ViewNotFoundComponent0),
    [_NotFoundComponent_0_5]: dart.fieldType(src__not_found_component.NotFoundComponent)
  }));
  src__not_found_component$46template.viewFactory_NotFoundComponentHost0 = function(parentView, parentIndex) {
    return new src__not_found_component$46template._ViewNotFoundComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__not_found_component$46template.viewFactory_NotFoundComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__not_found_component$46template, {
    /*src__not_found_component$46template.NotFoundComponentNgFactory*/get NotFoundComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfNotFoundComponent()).new('my-not-found', src__not_found_component$46template.viewFactory_NotFoundComponentHost0, src__not_found_component$46template._NotFoundComponentMetadata));
    },
    /*src__not_found_component$46template._NotFoundComponentMetadata*/get _NotFoundComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__not_found_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__not_found_component$46template.initReflector = function() {
    if (dart.test(src__not_found_component$46template._visited)) {
      return;
    }
    src__not_found_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__not_found_component.NotFoundComponent), src__not_found_component$46template.NotFoundComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__not_found_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/not_found_component.template.ddc", {
    "package:router_example/src/not_found_component.template.dart": src__not_found_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["not_found_component.template.dart"],"names":[],"mappings":";;;;QAiCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;MAPP,4DAAwB;YAAG;;;;;;;AAY3C,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,UAAa,UAFH,AAEa,AAAI,IAFV,SAEsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;6EAfuB,UAA2B,EAAE,WAAe;IAFnD,WAAK;AAEkD,wFAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACvK,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,kFAAW;gBAAX,sEAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,KAAK,EAAE,4DAAwB;AAC1G,2BAAkB,CAAC,sEAAW;EAChC;;;;;;;;4BAKY,IAAO;;;MAVQ,sEAAW;;;;;gFAmB0B,UAA2B,EAAE,WAAe;AAC5G,UAAO,KAAI,8DAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;;MAEoB,gEAA4B;YAAG;;;;;;;AAQ/C,uBAAW,GAAG,IAAI,8DAAsB,CAAC,MAAM;AAC/C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,kCAAsB,GAAG,IAAI,8CAAyB;AACtD,uBAAW,OAAO,CAAC,4BAAsB,EAAE,qBAAgB;AAC3D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,uCAAuC,CAAC,GAAG,MAAM,WAAM,EAAE,4BAAsB;IAC5F;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;kFAnB4B,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,4BAAsB;AAC4B,6FAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;oFAsBjI,UAA2B,EAAE,WAAe;AACrF,UAAO,KAAI,mEAA2B,CAAC,UAAU,EAAE,WAAW;EAChE;;;MAEkD,8DAA0B;YAAG,gBAAM,2CAA2C,CAAC,gBAAgB,sEAAkC,EAAE,8DAA0B;;MACzM,8DAA0B;YAAG;;MAC/B,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,oCAAiB,CAAC,yDAAiB,EAAE,8DAA0B;AACtE,IAAM,gCAAa;EACrB","file":"not_found_component.template.ddc.js"}');
  // Exports:
  return {
    src__not_found_component$46template: src__not_found_component$46template
  };
});

//# sourceMappingURL=not_found_component.template.ddc.js.map
