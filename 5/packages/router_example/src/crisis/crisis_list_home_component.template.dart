// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'crisis_list_home_component.dart';
export 'crisis_list_home_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'crisis_list_home_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$CrisisListHomeComponent = const [];

class ViewCrisisListHomeComponent0 extends AppView<import1.CrisisListHomeComponent> {
  import2.Element _el_0;
  static RenderComponentType _renderType;
  ViewCrisisListHomeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('crises-home');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$CrisisListHomeComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.CrisisListHomeComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Welcome to the Crisis Center');
    _el_0.append(_text_1);
    init(const [], null);
    return null;
  }
}

AppView<import1.CrisisListHomeComponent> viewFactory_CrisisListHomeComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewCrisisListHomeComponent0(parentView, parentIndex);
}

const List<dynamic> styles$CrisisListHomeComponentHost = const [];

class _ViewCrisisListHomeComponentHost0 extends AppView<dynamic> {
  ViewCrisisListHomeComponent0 _compView_0;
  import1.CrisisListHomeComponent _CrisisListHomeComponent_0_5;
  _ViewCrisisListHomeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewCrisisListHomeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _CrisisListHomeComponent_0_5 = new import1.CrisisListHomeComponent();
    _compView_0.create(_CrisisListHomeComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.CrisisListHomeComponent>(0, this, rootEl, _CrisisListHomeComponent_0_5);
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

AppView viewFactory_CrisisListHomeComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCrisisListHomeComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.CrisisListHomeComponent> CrisisListHomeComponentNgFactory = const ComponentFactory<import1.CrisisListHomeComponent>('crises-home', viewFactory_CrisisListHomeComponentHost0, _CrisisListHomeComponentMetadata);
const _CrisisListHomeComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CrisisListHomeComponent, CrisisListHomeComponentNgFactory);
  _ref0.initReflector();
}
