define(['dart_sdk', 'packages/router_example/src/crisis/crisis_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_if', 'packages/router_example/src/crisis/crisis_component', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/router_example/src/crisis/crisis_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/router_example/src/crisis/dialog_service', 'packages/angular/src/di/reflector', 'packages/router_example/src/crisis/crisis.template', 'packages/router_example/src/crisis/crisis_service.template', 'packages/router_example/src/crisis/dialog_service.template', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_router/angular_router.template', 'packages/router_example/src/crisis/route_paths.template'], function(dart_sdk, crisis_component$46css, view_type, constants, view, app_view_utils, app_view, ng_if, crisis_component, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, crisis_service, router_outlet_directive, dialog_service, reflector, crisis, crisis_service$, dialog_service$, angular, angular_forms, angular_router, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__crisis__crisis_component$46css$46shim = crisis_component$46css.src__crisis__crisis_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__crisis__crisis_component = crisis_component.src__crisis__crisis_component;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__crisis__crisis_service = crisis_service.src__crisis__crisis_service;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__crisis__dialog_service = dialog_service.src__crisis__dialog_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__crisis__crisis$46template = crisis.src__crisis__crisis$46template;
  const src__crisis__crisis_service$46template = crisis_service$.src__crisis__crisis_service$46template;
  const src__crisis__dialog_service$46template = dialog_service$.src__crisis__dialog_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__crisis__route_paths$46template = route_paths.src__crisis__route_paths$46template;
  const _root = Object.create(null);
  const src__crisis__crisis_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfCrisisComponent = () => (AppViewOfCrisisComponent = dart.constFn(src__core__linker__app_view.AppView$(src__crisis__crisis_component.CrisisComponent)))();
  let AppViewAndintToAppViewOfCrisisComponent = () => (AppViewAndintToAppViewOfCrisisComponent = dart.constFn(dart.fnType(AppViewOfCrisisComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfCrisisComponent = () => (ComponentRefOfCrisisComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_component.CrisisComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfCrisisComponent = () => (ComponentFactoryOfCrisisComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__crisis__crisis_component.CrisisComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__crisis__crisis_component$46template, {
    /*src__crisis__crisis_component$46template.styles$CrisisComponent*/get styles$CrisisComponent() {
      return dart.constList([src__crisis__crisis_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  src__crisis__crisis_component$46template.ViewCrisisComponent0 = class ViewCrisisComponent0 extends src__core__linker__app_view.AppView$(src__crisis__crisis_component.CrisisComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__crisis__crisis_component$46template.viewFactory_CrisisComponent1);
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.crisis != null;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__crisis__crisis_component$46template.ViewCrisisComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    src__crisis__crisis_component$46template.ViewCrisisComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-crisis'));
    let t = src__crisis__crisis_component$46template.ViewCrisisComponent0._renderType;
    t == null ? src__crisis__crisis_component$46template.ViewCrisisComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__crisis__crisis_component$46template.styles$CrisisComponent) : t;
    this.setupComponentType(src__crisis__crisis_component$46template.ViewCrisisComponent0._renderType);
  }).prototype = src__crisis__crisis_component$46template.ViewCrisisComponent0.prototype;
  dart.addTypeTests(src__crisis__crisis_component$46template.ViewCrisisComponent0);
  dart.setMethodSignature(src__crisis__crisis_component$46template.ViewCrisisComponent0, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_component$46template.ViewCrisisComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_component.CrisisComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__crisis__crisis_component$46template.ViewCrisisComponent0, () => ({
    __proto__: dart.getFields(src__crisis__crisis_component$46template.ViewCrisisComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__crisis__crisis_component$46template.ViewCrisisComponent0, {
    /*src__crisis__crisis_component$46template.ViewCrisisComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__crisis__crisis_component$46template.viewFactory_CrisisComponent0 = function(parentView, parentIndex) {
    return new src__crisis__crisis_component$46template.ViewCrisisComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_component$46template.viewFactory_CrisisComponent0, AppViewAndintToAppViewOfCrisisComponent());
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _el_6 = Symbol('_el_6');
  const _el_7 = Symbol('_el_7');
  const _text_9 = Symbol('_text_9');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _DefaultValueAccessor_13_5 = Symbol('_DefaultValueAccessor_13_5');
  const _NgValueAccessor_13_6 = Symbol('_NgValueAccessor_13_6');
  const _NgModel_13_7 = Symbol('_NgModel_13_7');
  const _el_14 = Symbol('_el_14');
  const _el_17 = Symbol('_el_17');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _handle_input_13_1 = Symbol('_handle_input_13_1');
  const _handle_ngModelChange_13_0 = Symbol('_handle_ngModelChange_13_0');
  let const$0;
  src__crisis__crisis_component$46template._ViewCrisisComponent1 = class _ViewCrisisComponent1 extends src__core__linker__app_view.AppView$(src__crisis__crisis_component.CrisisComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' details! (');
      this[_el_1][$append](_text_3);
      this[_text_4] = html.Text.new(core.String._check(src__core__linker__app_view_utils.interpolate0(this.ctx.instanceId)));
      this[_el_1][$append](this[_text_4]);
      let _text_5 = html.Text.new(')');
      this[_el_1][$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_6]);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_6]);
      this.addShimE(this[_el_7]);
      let _text_8 = html.Text.new('id:');
      this[_el_7][$append](_text_8);
      this[_text_9] = html.Text.new('');
      this[_el_6][$append](this[_text_9]);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_10]);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_10]);
      this.addShimE(this[_el_11]);
      let _text_12 = html.Text.new('name:');
      this[_el_11][$append](_text_12);
      this[_el_13] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_10]));
      this.createAttr(this[_el_13], 'placeholder', 'name');
      this.addShimC(this[_el_13]);
      this[_DefaultValueAccessor_13_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_13]);
      this[_NgValueAccessor_13_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_13_5]]);
      this[_NgModel_13_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_13_6]);
      this[_el_14] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_14]);
      let _text_15 = html.Text.new('Cancel');
      this[_el_14][$append](_text_15);
      let _text_16 = html.Text.new(' \n  ');
      this[_el_0][$append](_text_16);
      this[_el_17] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_17]);
      let _text_18 = html.Text.new('Save');
      this[_el_17][$append](_text_18);
      this[_el_13][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_13_1)));
      this[_el_13][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_13_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_13_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_13_0)));
      this[_el_14][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'goBack')));
      this[_el_17][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'save')));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 13 === nodeIndex) {
        return this[_DefaultValueAccessor_13_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 13 === nodeIndex) {
        return this[_NgValueAccessor_13_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 13 === nodeIndex) {
        return this[_NgModel_13_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_13_7].model = _ctx.name;
      this[_NgModel_13_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_13_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.crisis.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.crisis.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_9][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_ngModelChange_13_0]($event) {
      this.ctx.name = core.String._check($event);
    }
    [_handle_input_13_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_13_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (src__crisis__crisis_component$46template._ViewCrisisComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_text_9] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_DefaultValueAccessor_13_5] = null;
    this[_NgValueAccessor_13_6] = null;
    this[_NgModel_13_7] = null;
    this[_el_14] = null;
    this[_el_17] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__crisis__crisis_component$46template._ViewCrisisComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__crisis__crisis_component$46template.ViewCrisisComponent0._renderType;
  }).prototype = src__crisis__crisis_component$46template._ViewCrisisComponent1.prototype;
  dart.addTypeTests(src__crisis__crisis_component$46template._ViewCrisisComponent1);
  dart.setMethodSignature(src__crisis__crisis_component$46template._ViewCrisisComponent1, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_component$46template._ViewCrisisComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__crisis__crisis_component.CrisisComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_13_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_13_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__crisis__crisis_component$46template._ViewCrisisComponent1, () => ({
    __proto__: dart.getFields(src__crisis__crisis_component$46template._ViewCrisisComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.DivElement),
    [_el_7]: dart.fieldType(html.Element),
    [_text_9]: dart.fieldType(html.Text),
    [_el_10]: dart.fieldType(html.DivElement),
    [_el_11]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_13_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_13_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_13_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_14]: dart.fieldType(html.ButtonElement),
    [_el_17]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__crisis__crisis_component$46template.viewFactory_CrisisComponent1 = function(parentView, parentIndex) {
    return new src__crisis__crisis_component$46template._ViewCrisisComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_component$46template.viewFactory_CrisisComponent1, AppViewAndintToAppViewOfCrisisComponent());
  dart.defineLazy(src__crisis__crisis_component$46template, {
    /*src__crisis__crisis_component$46template.styles$CrisisComponentHost*/get styles$CrisisComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _CrisisComponent_0_5 = Symbol('_CrisisComponent_0_5');
  src__crisis__crisis_component$46template._ViewCrisisComponentHost0 = class _ViewCrisisComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__crisis__crisis_component$46template.ViewCrisisComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_CrisisComponent_0_5] = new src__crisis__crisis_component.CrisisComponent.new(src__crisis__crisis_service.CrisisService._check(this.injectorGet(dart.wrapType(src__crisis__crisis_service.CrisisService), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__crisis__dialog_service.DialogService._check(this.injectorGet(dart.wrapType(src__crisis__dialog_service.DialogService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_CrisisComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfCrisisComponent()).new(0, this, this.rootEl, this[_CrisisComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__crisis__crisis_component$46template._ViewCrisisComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_CrisisComponent_0_5] = null;
    src__crisis__crisis_component$46template._ViewCrisisComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__crisis__crisis_component$46template._ViewCrisisComponentHost0.prototype;
  dart.addTypeTests(src__crisis__crisis_component$46template._ViewCrisisComponentHost0);
  dart.setMethodSignature(src__crisis__crisis_component$46template._ViewCrisisComponentHost0, () => ({
    __proto__: dart.getMethods(src__crisis__crisis_component$46template._ViewCrisisComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__crisis__crisis_component$46template._ViewCrisisComponentHost0, () => ({
    __proto__: dart.getFields(src__crisis__crisis_component$46template._ViewCrisisComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__crisis__crisis_component$46template.ViewCrisisComponent0),
    [_CrisisComponent_0_5]: dart.fieldType(src__crisis__crisis_component.CrisisComponent)
  }));
  src__crisis__crisis_component$46template.viewFactory_CrisisComponentHost0 = function(parentView, parentIndex) {
    return new src__crisis__crisis_component$46template._ViewCrisisComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__crisis__crisis_component$46template.viewFactory_CrisisComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__crisis__crisis_component$46template, {
    /*src__crisis__crisis_component$46template.CrisisComponentNgFactory*/get CrisisComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfCrisisComponent()).new('my-crisis', src__crisis__crisis_component$46template.viewFactory_CrisisComponentHost0, src__crisis__crisis_component$46template._CrisisComponentMetadata));
    },
    /*src__crisis__crisis_component$46template._CrisisComponentMetadata*/get _CrisisComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__crisis__crisis_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__crisis__crisis_component$46template.initReflector = function() {
    if (dart.test(src__crisis__crisis_component$46template._visited)) {
      return;
    }
    src__crisis__crisis_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__crisis__crisis_component.CrisisComponent), src__crisis__crisis_component$46template.CrisisComponentNgFactory);
    src__crisis__crisis$46template.initReflector();
    src__crisis__crisis_service$46template.initReflector();
    src__crisis__dialog_service$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_router$46template.initReflector();
    src__crisis__route_paths$46template.initReflector();
  };
  dart.fn(src__crisis__crisis_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/crisis/crisis_component.template.ddc", {
    "package:router_example/src/crisis/crisis_component.template.dart": src__crisis__crisis_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["crisis_component.template.dart"],"names":[],"mappings":"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","file":"crisis_component.template.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis_component$46template: src__crisis__crisis_component$46template
  };
});

//# sourceMappingURL=crisis_component.template.ddc.js.map
