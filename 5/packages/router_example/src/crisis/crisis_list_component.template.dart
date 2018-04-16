// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'crisis_list_component.dart';
export 'crisis_list_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import '../instance_logger.dart';
import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';
import 'route_paths.dart' as paths;
import 'routes.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../instance_logger.template.dart' as _ref0;
import 'crisis.template.dart' as _ref1;
import 'crisis_service.template.dart' as _ref2;
import 'dialog_service.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'route_paths.template.dart' as _ref6;
import 'routes.template.dart' as _ref7;
import 'package:router_example/src/crisis/crisis_list_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'crisis_list_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_router/src/router/router_outlet_token.dart' as import13;
import 'package:angular_router/src/router/router.dart' as import14;
import 'package:angular_router/src/router_hook.dart' as import15;
import 'crisis.dart' as import16;
import 'crisis_service.dart' as import17;
import 'routes.dart' as import18;
import 'dialog_service.dart' as import19;

const List<dynamic> styles$CrisisListComponent = const [import0.styles];

class ViewCrisisListComponent0 extends AppView<import2.CrisisListComponent> {
  import3.Element _el_0;
  import3.UListElement _el_2;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_9;
  import3.Element _el_4;
  ViewContainer _appEl_4;
  import6.RouterOutlet _RouterOutlet_4_8;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewCrisisListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-crises');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$CrisisListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.CrisisListComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Crisis Center');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'ul', parentRenderNode);
    _el_2.className = 'items';
    addShimC(_el_2);
    final _anchor_3 = createViewContainerAnchor();
    _el_2.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_CrisisListComponent1);
    _NgFor_3_9 = new import5.NgFor(_appEl_3, _TemplateRef_3_8);
    _el_4 = createAndAppend(doc, 'router-outlet', parentRenderNode);
    addShimE(_el_4);
    _appEl_4 = new ViewContainer(4, null, this, _el_4);
    _RouterOutlet_4_8 = new import6.RouterOutlet(parentView.injectorGet(import13.RouterOutletToken, viewData.parentIndex, null), _appEl_4, parentView.injectorGet(import14.Router, viewData.parentIndex), parentView.injectorGet(import15.RouterHook, viewData.parentIndex, null));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.CrisisListComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.crises;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_3_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_3_9.ngDoCheck();
    final currVal_1 = _ctx.routes.all;
    if (!identical(_expr_1, currVal_1)) {
      _RouterOutlet_4_8.routes = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      _RouterOutlet_4_8.ngOnInit();
    }
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _appEl_4?.destroyNestedViews();
    _RouterOutlet_4_8.ngOnDestroy();
  }
}

AppView<import2.CrisisListComponent> viewFactory_CrisisListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewCrisisListComponent0(parentView, parentIndex);
}

class _ViewCrisisListComponent1 extends AppView<import2.CrisisListComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Text _text_4;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewCrisisListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewCrisisListComponent0._renderType;
  }
  @override
  ComponentRef<import2.CrisisListComponent> build() {
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
    final import2.CrisisListComponent _ctx = ctx;
    final import16.Crisis local_crisis = locals['\$implicit'];
    final currVal_0 = identical(local_crisis, _ctx.selected);
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(local_crisis.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import10.interpolate0(local_crisis.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_click_0_0($event) {
    final import16.Crisis local_crisis = locals['\$implicit'];
    ctx.onSelect(local_crisis);
  }
}

AppView<import2.CrisisListComponent> viewFactory_CrisisListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCrisisListComponent1(parentView, parentIndex);
}

const List<dynamic> styles$CrisisListComponentHost = const [];

class _ViewCrisisListComponentHost0 extends AppView<dynamic> {
  ViewCrisisListComponent0 _compView_0;
  import17.CrisisService _CrisisService_0_5;
  import18.Routes _Routes_0_6;
  import2.CrisisListComponent _CrisisListComponent_0_7;
  import19.DialogService __DialogService_0_8;
  _ViewCrisisListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import19.DialogService get _DialogService_0_8 {
    if ((this.__DialogService_0_8 == null)) {
      (__DialogService_0_8 = new import19.DialogService());
    }
    return this.__DialogService_0_8;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewCrisisListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _CrisisService_0_5 = new import17.CrisisService();
    _Routes_0_6 = new import18.Routes();
    _CrisisListComponent_0_7 = new import2.CrisisListComponent(_CrisisService_0_5, this.injectorGet(import14.Router, viewData.parentIndex), _Routes_0_6);
    _compView_0.create(_CrisisListComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.CrisisListComponent>(0, this, rootEl, _CrisisListComponent_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.CrisisService) && (0 == nodeIndex))) {
      return _CrisisService_0_5;
    }
    if ((identical(token, import18.Routes) && (0 == nodeIndex))) {
      return _Routes_0_6;
    }
    if ((identical(token, import19.DialogService) && (0 == nodeIndex))) {
      return _DialogService_0_8;
    }
    return notFoundResult;
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

AppView viewFactory_CrisisListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCrisisListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.CrisisListComponent> CrisisListComponentNgFactory = const ComponentFactory<import2.CrisisListComponent>('my-crises', viewFactory_CrisisListComponentHost0, _CrisisListComponentMetadata);
const _CrisisListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CrisisListComponent, CrisisListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
