// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'crisis_center_home_component.dart';
export 'crisis_center_home_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'crisis_center_home_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$CrisisCenterHomeComponent = const [];

class ViewCrisisCenterHomeComponent0 extends AppView<import1.CrisisCenterHomeComponent> {
  import2.Element _el_0;
  static RenderComponentType _renderType;
  ViewCrisisCenterHomeComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('crisis-center-home');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$CrisisCenterHomeComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.CrisisCenterHomeComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Welcome to the Crisis Center');
    _el_0.append(_text_1);
    init(const [], null);
    return null;
  }
}

AppView<import1.CrisisCenterHomeComponent> viewFactory_CrisisCenterHomeComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewCrisisCenterHomeComponent0(parentView, parentIndex);
}

const List<dynamic> styles$CrisisCenterHomeComponentHost = const [];

class _ViewCrisisCenterHomeComponentHost0 extends AppView<dynamic> {
  ViewCrisisCenterHomeComponent0 _compView_0;
  import1.CrisisCenterHomeComponent _CrisisCenterHomeComponent_0_4;
  _ViewCrisisCenterHomeComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewCrisisCenterHomeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _CrisisCenterHomeComponent_0_4 = new import1.CrisisCenterHomeComponent();
    _compView_0.create(_CrisisCenterHomeComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.CrisisCenterHomeComponent>(0, this, rootEl, _CrisisCenterHomeComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.CrisisCenterHomeComponent) && (0 == nodeIndex))) {
      return _CrisisCenterHomeComponent_0_4;
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

AppView viewFactory_CrisisCenterHomeComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewCrisisCenterHomeComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.CrisisCenterHomeComponent> CrisisCenterHomeComponentNgFactory = const ComponentFactory<import1.CrisisCenterHomeComponent>('crisis-center-home', viewFactory_CrisisCenterHomeComponentHost0, _CrisisCenterHomeComponentMetadata);
const _CrisisCenterHomeComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CrisisCenterHomeComponent, CrisisCenterHomeComponentNgFactory);
  _ref0.initReflector();
}
