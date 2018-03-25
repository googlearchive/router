define(['dart_sdk', 'packages/router_example/src/hero/hero_list_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/router_example/src/hero/hero_list_component', 'packages/router_example/src/hero/hero', 'packages/router_example/src/hero/hero_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/di/reflector', 'packages/router_example/src/route_paths.template', 'packages/router_example/src/hero/hero.template', 'packages/router_example/src/hero/hero_service.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template'], function(dart_sdk, hero_list_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, hero_list_component, hero, hero_service, router_outlet_directive, reflector, route_paths, hero$, hero_service$, angular, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero__hero_list_component$46css$46shim = hero_list_component$46css.src__hero__hero_list_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__hero__hero_list_component = hero_list_component.src__hero__hero_list_component;
  const src__hero__hero = hero.src__hero__hero;
  const src__hero__hero_service = hero_service.src__hero__hero_service;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__di__reflector = reflector.src__di__reflector;
  const src__route_paths$46template = route_paths.src__route_paths$46template;
  const src__hero__hero$46template = hero$.src__hero__hero$46template;
  const src__hero__hero_service$46template = hero_service$.src__hero__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const src__hero__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero__hero_list_component$46template, {
    /*src__hero__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList([src__hero__hero_list_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__hero__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__hero__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Heroes');
      this[_el_0][$append](_text_1);
      this[_el_2] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this[_el_2].className = 'items';
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__hero__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_3_9].ngDoCheck();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__hero__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_0] = null;
    src__hero__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-heroes'));
    let t = src__hero__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__hero__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__hero__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__hero__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__hero__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__hero__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__hero__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__hero__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.UListElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__hero__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__hero__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  src__hero__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__hero__hero_list_component.HeroListComponent) {
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
      let local_hero = src__hero__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_hero == _ctx.selectedHero;
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero__hero.Hero._check(this.locals[$_get]('$implicit'));
      this.ctx.onSelect(local_hero);
    }
  };
  (src__hero__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__hero__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__hero__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__hero__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__hero__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__hero__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__hero__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__hero__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__hero__hero_list_component$46template, {
    /*src__hero__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroListComponent_0_5 = Symbol('_HeroListComponent_0_5');
  src__hero__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroListComponent_0_5] = new src__hero__hero_list_component.HeroListComponent.new(src__hero__hero_service.HeroService._check(this.injectorGet(dart.wrapType(src__hero__hero_service.HeroService), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HeroListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroListComponent_0_5] = null;
    src__hero__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__hero__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__hero__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__hero__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroListComponent_0_5]: dart.fieldType(src__hero__hero_list_component.HeroListComponent)
  }));
  src__hero__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__hero__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero__hero_list_component$46template, {
    /*src__hero__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('my-heroes', src__hero__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__hero__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__hero__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__hero__hero_list_component$46template._visited)) {
      return;
    }
    src__hero__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero__hero_list_component.HeroListComponent), src__hero__hero_list_component$46template.HeroListComponentNgFactory);
    src__route_paths$46template.initReflector();
    src__hero__hero$46template.initReflector();
    src__hero__hero_service$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.fn(src__hero__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/router_example/src/hero/hero_list_component.template.ddc", {
    "package:router_example/src/hero/hero_list_component.template.dart": src__hero__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":"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","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero__hero_list_component$46template: src__hero__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
