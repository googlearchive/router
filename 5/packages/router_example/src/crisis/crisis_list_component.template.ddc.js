define(['dart_sdk', 'packages/router_example/src/crisis/crisis_list_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/router_hook', 'packages/router_example/src/crisis/crisis_list_component', 'packages/router_example/src/crisis/crisis', 'packages/router_example/src/crisis/dialog_service', 'packages/router_example/src/crisis/crisis_service', 'packages/router_example/src/crisis/routes', 'packages/angular/src/di/reflector', 'packages/router_example/src/crisis/crisis.template', 'packages/router_example/src/crisis/crisis_service.template', 'packages/router_example/src/crisis/dialog_service.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/router_example/src/crisis/route_paths.template', 'packages/router_example/src/crisis/routes.template'], function(dart_sdk, crisis_list_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, router_outlet_directive, router_hook, crisis_list_component, crisis, dialog_service, crisis_service, routes, reflector, crisis$, crisis_service$, dialog_service$, angular, angular_router, route_paths, routes$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__crisis_list_component$46css$46shim = crisis_list_component$46css.src__crisis__crisis_list_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__router_hook = router_hook.src__router_hook;
  const src__crisis__crisis_list_component = crisis_list_component.src__crisis__crisis_list_component;
  const src__crisis__crisis = crisis.src__crisis__crisis;
  const src__crisis__dialog_service = dialog_service.src__crisis__dialog_service;
  const src__crisis__crisis_service = crisis_service.src__crisis__crisis_service;
  const src__crisis__routes = routes.src__crisis__routes;
  const src__di__reflector = reflector.src__di__reflector;
  const src__crisis__crisis$46template = crisis$.src__crisis__crisis$46template;
  const src__crisis__crisis_service$46template = crisis_service$.src__crisis__crisis_service$46template;
  const src__crisis__dialog_service$46template = dialog_service$.src__crisis__dialog_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__crisis__route_paths$46template = route_paths.src__crisis__route_paths$46template;
  const src__crisis__routes$46template = routes$.src__crisis__routes$46template;
  const _root = Object.create(null);
  const src__crisis__crisis_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfCrisisListComponent = () => (AppViewOfCrisisListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__crisis__crisis_list_component.CrisisListComponent)))();
  let AppViewAndintToAppViewOfCrisisListComponent = () => (AppViewAndintToAppViewOfCrisisListComponent = dart.constFn(dart.fnType(AppViewOfCrisisListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfCrisisListComponent = () => (ComponentRefOfCrisisListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_list_component.CrisisListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfCrisisListComponent = () => (ComponentFactoryOfCrisisListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__crisis__crisis_list_component.CrisisListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__crisis_list_component$46template, {
    /*src__crisis__crisis_list_component$46template.styles$CrisisListComponent*/get styles$CrisisListComponent() {
      return dart.constList([src__crisis__crisis_list_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_2 = Symbol('_text_2');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _el_6 = Symbol('_el_6');
  const _appEl_6 = Symbol('_appEl_6');
  const _RouterOutlet_6_8 = Symbol('_RouterOutlet_6_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  src__crisis__crisis_list_component$46template.ViewCrisisListComponent0 = class ViewCrisisListComponent0 extends src__core__linker__app_view.AppView$(src__crisis__crisis_list_component.CrisisListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Crisis Center (');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new(core.String._check(src__core__linker__app_view_utils.interpolate0(this.ctx.instanceId)));
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new(')');
      this[_el_0][$append](_text_3);
      this[_el_4] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this[_el_4].className = 'items';
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_4][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponent1);
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'router-outlet', parentRenderNode);
      this.addShimE(this[_el_6]);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, this[_el_6]);
      this[_RouterOutlet_6_8] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_6], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.crises;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_5_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_5_9].ngDoCheck();
      let currVal_1 = _ctx.routes.all;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_RouterOutlet_6_8].routes = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        this[_RouterOutlet_6_8].ngOnInit();
      }
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
      this[_RouterOutlet_6_8].ngOnDestroy();
    }
  };
  (src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_el_6] = null;
    this[_appEl_6] = null;
    this[_RouterOutlet_6_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-crises'));
    let t = src__crisis__crisis_list_component$46template.ViewCrisisListComponent0._renderType;
    t == null ? src__crisis__crisis_list_component$46template.ViewCrisisListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__crisis__crisis_list_component$46template.styles$CrisisListComponent) : t;
    this.setupComponentType(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0._renderType);
  }).prototype = src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.prototype;
  dart.addTypeTests(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0);
  dart.setMethodSignature(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_list_component.CrisisListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0, () => ({
    __proto__: dart.getFields(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.UListElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_6]: dart.fieldType(html.Element),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_6_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0, {
    /*src__crisis__crisis_list_component$46template.ViewCrisisListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponent0 = function(parentView, parentIndex) {
    return new src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponent0, AppViewAndintToAppViewOfCrisisListComponent());
  const _el_1 = Symbol('_el_1');
  const _text_4 = Symbol('_text_4');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  src__crisis__crisis_list_component$46template._ViewCrisisListComponent1 = class _ViewCrisisListComponent1 extends src__core__linker__app_view.AppView$(src__crisis__crisis_list_component.CrisisListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'badge';
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' ');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_crisis = src__crisis__crisis.Crisis._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_crisis == _ctx.selectedCrisis;
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_crisis.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_crisis.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_0_0]($event) {
      let local_crisis = src__crisis__crisis.Crisis._check(this.locals[$_get]('$implicit'));
      this.ctx.onSelect(local_crisis);
    }
  };
  (src__crisis__crisis_list_component$46template._ViewCrisisListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__crisis__crisis_list_component$46template._ViewCrisisListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__crisis__crisis_list_component$46template.ViewCrisisListComponent0._renderType;
  }).prototype = src__crisis__crisis_list_component$46template._ViewCrisisListComponent1.prototype;
  dart.addTypeTests(src__crisis__crisis_list_component$46template._ViewCrisisListComponent1);
  dart.setMethodSignature(src__crisis__crisis_list_component$46template._ViewCrisisListComponent1, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_list_component$46template._ViewCrisisListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_list_component.CrisisListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__crisis__crisis_list_component$46template._ViewCrisisListComponent1, () => ({
    __proto__: dart.getFields(src__crisis__crisis_list_component$46template._ViewCrisisListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponent1 = function(parentView, parentIndex) {
    return new src__crisis__crisis_list_component$46template._ViewCrisisListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponent1, AppViewAndintToAppViewOfCrisisListComponent());
  dart.defineLazy(src__crisis__crisis_list_component$46template, {
    /*src__crisis__crisis_list_component$46template.styles$CrisisListComponentHost*/get styles$CrisisListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _CrisisService_0_5 = Symbol('_CrisisService_0_5');
  const _Routes_0_6 = Symbol('_Routes_0_6');
  const _CrisisListComponent_0_7 = Symbol('_CrisisListComponent_0_7');
  const __DialogService_0_8 = Symbol('__DialogService_0_8');
  const _DialogService_0_8 = Symbol('_DialogService_0_8');
  src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0 = class _ViewCrisisListComponentHost0 extends src__core__linker__app_view.AppView {
    get [_DialogService_0_8]() {
      if (this[__DialogService_0_8] == null) {
        this[__DialogService_0_8] = new src__crisis__dialog_service.DialogService.new();
      }
      return this[__DialogService_0_8];
    }
    build() {
      this[_compView_0] = new src__crisis__crisis_list_component$46template.ViewCrisisListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_CrisisService_0_5] = new src__crisis__crisis_service.CrisisService.new();
      this[_Routes_0_6] = new src__crisis__routes.Routes.new();
      this[_CrisisListComponent_0_7] = new src__crisis__crisis_list_component.CrisisListComponent.new(this[_CrisisService_0_5], src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), this[_Routes_0_6]);
      this[_compView_0].create(this[_CrisisListComponent_0_7], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfCrisisListComponent()).new(0, this, this.rootEl, this[_CrisisListComponent_0_7]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__crisis__crisis_service.CrisisService) && 0 === nodeIndex) {
        return this[_CrisisService_0_5];
      }
      if (token === dart.wrapType(src__crisis__routes.Routes) && 0 === nodeIndex) {
        return this[_Routes_0_6];
      }
      if (token === dart.wrapType(src__crisis__dialog_service.DialogService) && 0 === nodeIndex) {
        return this[_DialogService_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_CrisisService_0_5] = null;
    this[_Routes_0_6] = null;
    this[_CrisisListComponent_0_7] = null;
    this[__DialogService_0_8] = null;
    src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.prototype;
  dart.addTypeTests(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0);
  dart.setMethodSignature(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0, () => ({
    __proto__: dart.getGetters(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.__proto__),
    [_DialogService_0_8]: dart.fnType(src__crisis__dialog_service.DialogService, [])
  }));
  dart.setFieldSignature(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0, () => ({
    __proto__: dart.getFields(src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__crisis__crisis_list_component$46template.ViewCrisisListComponent0),
    [_CrisisService_0_5]: dart.fieldType(src__crisis__crisis_service.CrisisService),
    [_Routes_0_6]: dart.fieldType(src__crisis__routes.Routes),
    [_CrisisListComponent_0_7]: dart.fieldType(src__crisis__crisis_list_component.CrisisListComponent),
    [__DialogService_0_8]: dart.fieldType(src__crisis__dialog_service.DialogService)
  }));
  src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponentHost0 = function(parentView, parentIndex) {
    return new src__crisis__crisis_list_component$46template._ViewCrisisListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__crisis__crisis_list_component$46template, {
    /*src__crisis__crisis_list_component$46template.CrisisListComponentNgFactory*/get CrisisListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfCrisisListComponent()).new('my-crises', src__crisis__crisis_list_component$46template.viewFactory_CrisisListComponentHost0, src__crisis__crisis_list_component$46template._CrisisListComponentMetadata));
    },
    /*src__crisis__crisis_list_component$46template._CrisisListComponentMetadata*/get _CrisisListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__crisis__crisis_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__crisis_list_component$46template.initReflector = function() {
    if (dart.test(src__crisis__crisis_list_component$46template._visited)) {
      return;
    }
    src__crisis__crisis_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__crisis__crisis_list_component.CrisisListComponent), src__crisis__crisis_list_component$46template.CrisisListComponentNgFactory);
    src__crisis__crisis$46template.initReflector();
    src__crisis__crisis_service$46template.initReflector();
    src__crisis__dialog_service$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__crisis__route_paths$46template.initReflector();
    src__crisis__routes$46template.initReflector();
  };
  dart.fn(src__crisis__crisis_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/crisis_list_component.template.ddc", {
    "package:router_example/src/crisis/crisis_list_component.template.dart": src__crisis__crisis_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["crisis_list_component.template.dart"],"names":[],"mappings":"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","file":"crisis_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_list_component$46template: src__crisis__crisis_list_component$46template
  };
});

//# sourceMappingURL=crisis_list_component.template.ddc.js.map
