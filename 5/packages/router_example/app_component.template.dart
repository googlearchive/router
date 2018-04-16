// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'src/routes.dart';
import 'src/hero/hero_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'src/hero/hero_service.template.dart' as _ref2;
import 'src/routes.template.dart' as _ref3;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import3;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular_router/src/directives/router_link_directive.dart' as import12;
import 'package:angular_router/src/router/router.dart' as import13;
import 'package:angular_router/src/location/location.dart' as import14;
import 'package:angular_router/src/router/router_outlet_token.dart' as import15;
import 'package:angular_router/src/router_hook.dart' as import16;
import 'src/routes.dart' as import17;
import 'src/hero/hero_service.dart' as import18;

const List<dynamic> styles$AppComponent = const ['.active-route._ngcontent-%COMP% { color:#039be5; }'];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.AnchorElement _el_3;
  import3.RouterLinkNgCd _RouterLink_3_5;
  import4.RouterLinkActive _RouterLinkActive_3_6;
  bool _query_RouterLink_3_0_isDirty = true;
  import2.AnchorElement _el_5;
  import3.RouterLinkNgCd _RouterLink_5_5;
  import4.RouterLinkActive _RouterLinkActive_5_6;
  bool _query_RouterLink_5_0_isDirty = true;
  import2.Element _el_7;
  ViewContainer _appEl_7;
  import6.RouterOutlet _RouterOutlet_7_8;
  String _expr_0;
  String _expr_2;
  var _expr_4;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import2.Text _text_1 = new import2.Text('Angular Router');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'nav', parentRenderNode);
    addShimE(_el_2);
    _el_3 = createAndAppend(doc, 'a', _el_2);
    createAttr(_el_3, 'routerLinkActive', 'active-route');
    addShimC(_el_3);
    _RouterLink_3_5 = new import3.RouterLinkNgCd(new import12.RouterLink(parentView.injectorGet(import13.Router, viewData.parentIndex), parentView.injectorGet(import14.Location, viewData.parentIndex), null, _el_3));
    _RouterLinkActive_3_6 = new import4.RouterLinkActive(_el_3, parentView.injectorGet(import13.Router, viewData.parentIndex));
    import2.Text _text_4 = new import2.Text('Crisis Center');
    _el_3.append(_text_4);
    _RouterLinkActive_3_6.links = [_RouterLink_3_5.instance];
    _el_5 = createAndAppend(doc, 'a', _el_2);
    createAttr(_el_5, 'routerLinkActive', 'active-route');
    addShimC(_el_5);
    _RouterLink_5_5 = new import3.RouterLinkNgCd(new import12.RouterLink(parentView.injectorGet(import13.Router, viewData.parentIndex), parentView.injectorGet(import14.Location, viewData.parentIndex), null, _el_5));
    _RouterLinkActive_5_6 = new import4.RouterLinkActive(_el_5, parentView.injectorGet(import13.Router, viewData.parentIndex));
    import2.Text _text_6 = new import2.Text('Heroes');
    _el_5.append(_text_6);
    _RouterLinkActive_5_6.links = [_RouterLink_5_5.instance];
    _el_7 = createAndAppend(doc, 'router-outlet', parentRenderNode);
    addShimE(_el_7);
    _appEl_7 = new ViewContainer(7, null, this, _el_7);
    _RouterOutlet_7_8 = new import6.RouterOutlet(parentView.injectorGet(import15.RouterOutletToken, viewData.parentIndex, null), _appEl_7, parentView.injectorGet(import13.Router, viewData.parentIndex), parentView.injectorGet(import16.RouterHook, viewData.parentIndex, null));
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_5.instance.onClick));
    _el_5.addEventListener('click', eventHandler1(_RouterLink_5_5.instance.onClick));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.routes.crises.path;
    if (!identical(_expr_0, currVal_0)) {
      _RouterLink_3_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_RouterLinkActive_3_6.routerLinkActive = 'active-route');
    }
    final currVal_2 = _ctx.routes.heroes.path;
    if (!identical(_expr_2, currVal_2)) {
      _RouterLink_5_5.instance.routerLink = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      (_RouterLinkActive_5_6.routerLinkActive = 'active-route');
    }
    final currVal_4 = _ctx.routes.all;
    if (!identical(_expr_4, currVal_4)) {
      _RouterOutlet_7_8.routes = currVal_4;
      _expr_4 = currVal_4;
    }
    if (firstCheck) {
      _RouterOutlet_7_8.ngOnInit();
    }
    _appEl_7.detectChangesInNestedViews();
    _RouterLink_3_5.detectHostChanges(this, _el_3);
    _RouterLink_5_5.detectHostChanges(this, _el_5);
    if (firstCheck) {
      _RouterLinkActive_3_6.ngAfterViewInit();
    }
    if (firstCheck) {
      _RouterLinkActive_5_6.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_7?.destroyNestedViews();
    _RouterLink_3_5.instance.ngOnDestroy();
    _RouterLinkActive_3_6.ngOnDestroy();
    _RouterLink_5_5.instance.ngOnDestroy();
    _RouterLinkActive_5_6.ngOnDestroy();
    _RouterOutlet_7_8.ngOnDestroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import17.Routes _Routes_0_5;
  import1.AppComponent _AppComponent_0_6;
  import18.HeroService __HeroService_0_7;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import18.HeroService get _HeroService_0_7 {
    if ((this.__HeroService_0_7 == null)) {
      (__HeroService_0_7 = new import18.HeroService());
    }
    return this.__HeroService_0_7;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Routes_0_5 = new import17.Routes();
    _AppComponent_0_6 = new import1.AppComponent(_Routes_0_5);
    _compView_0.create(_AppComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.Routes) && (0 == nodeIndex))) {
      return _Routes_0_5;
    }
    if ((identical(token, import18.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_7;
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

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
