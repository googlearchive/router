// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_list_component.dart';
export 'hero_list_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import '../route_paths.dart' as paths;
import 'hero.dart';
import 'hero_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../route_paths.template.dart' as _ref0;
import 'hero.template.dart' as _ref1;
import 'hero_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;
import 'package:router_example/src/hero/hero_list_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_list_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'hero.dart' as import12;
import 'hero_service.dart' as import13;
import 'package:angular_router/src/router/router.dart' as import14;

const List<dynamic> styles$HeroListComponent = const [import0.styles];

class ViewHeroListComponent0 extends AppView<import2.HeroListComponent> {
  import3.Element _el_0;
  import3.UListElement _el_2;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHeroListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-heroes');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HeroListComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Heroes');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'ul', parentRenderNode);
    _el_2.className = 'items';
    addShimC(_el_2);
    var _anchor_3 = ngAnchor.clone(false);
    _el_2.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_HeroListComponent1);
    _NgFor_3_9 = new import5.NgFor(_appEl_3, _TemplateRef_3_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroListComponent _ctx = ctx;
    final currVal_0 = _ctx.heroes;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_3_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_3_9.ngDoCheck();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
  }
}

AppView<import2.HeroListComponent> viewFactory_HeroListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroListComponent0(parentView, parentIndex);
}

class _ViewHeroListComponent1 extends AppView<import2.HeroListComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Text _text_4;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewHeroListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroListComponent0._renderType;
  }
  @override
  ComponentRef<import2.HeroListComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _el_1 = createSpanAndAppend(doc, _el_0);
    _el_1.className = 'badge';
    addShimE(_el_1);
    _text_2 = new import3.Text('');
    _el_1.append(_text_2);
    import3.Text _text_3 = new import3.Text(' ');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroListComponent _ctx = ctx;
    final import12.Hero local_hero = locals['\$implicit'];
    final currVal_0 = identical(local_hero, _ctx.selectedHero);
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(local_hero.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import9.interpolate0(local_hero.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_click_0_0($event) {
    final import12.Hero local_hero = locals['\$implicit'];
    ctx.onSelect(local_hero);
  }
}

AppView<import2.HeroListComponent> viewFactory_HeroListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroListComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroListComponentHost = const [];

class _ViewHeroListComponentHost0 extends AppView<dynamic> {
  ViewHeroListComponent0 _compView_0;
  import2.HeroListComponent _HeroListComponent_0_5;
  _ViewHeroListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroListComponent_0_5 = new import2.HeroListComponent(this.injectorGet(import13.HeroService, viewData.parentIndex), this.injectorGet(import14.Router, viewData.parentIndex));
    _compView_0.create(_HeroListComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HeroListComponent>(0, this, rootEl, _HeroListComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HeroListComponent> HeroListComponentNgFactory = const ComponentFactory<import2.HeroListComponent>('my-heroes', viewFactory_HeroListComponentHost0, _HeroListComponentMetadata);
const _HeroListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroListComponent, HeroListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
