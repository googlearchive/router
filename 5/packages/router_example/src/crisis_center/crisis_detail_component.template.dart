// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'crisis_detail_component.dart';
export 'crisis_detail_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'crisis.template.dart' as _ref0;
import 'crisis_service.template.dart' as _ref1;
import 'dialog_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_forms/angular_forms.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;

import 'package:router_example/src/crisis_center/crisis_detail_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'crisis_detail_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import12;
import 'package:angular_forms/src/directives/ng_model.dart' as import13;
import 'package:angular/src/core/di/opaque_token.dart' as import14;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import15;
import 'package:angular_forms/src/directives/ng_control.dart' as import16;
import 'crisis_service.dart' as import17;
import 'package:angular_router/src/router/router.dart' as import18;
import 'dialog_service.dart' as import19;

const List<dynamic> styles$CrisisDetailComponent = const [import0.styles];

class ViewCrisisDetailComponent0 extends AppView<import2.CrisisDetailComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_7;
  static RenderComponentType _renderType;
  ViewCrisisDetailComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('crisis-detail');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$CrisisDetailComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.CrisisDetailComponent> build() {
    final import8.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_6 = new TemplateRef(_appEl_0, viewFactory_CrisisDetailComponent1);
    _NgIf_0_7 = new NgIf(_appEl_0, _TemplateRef_0_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.CrisisDetailComponent _ctx = ctx;
    _NgIf_0_7.ngIf = (_ctx.crisis != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.CrisisDetailComponent> viewFactory_CrisisDetailComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewCrisisDetailComponent0(parentView, parentIndex);
}

class _ViewCrisisDetailComponent1 extends AppView<import2.CrisisDetailComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import8.Text _text_2;
  import8.DivElement _el_4;
  import8.Element _el_5;
  import8.Text _text_7;
  import8.DivElement _el_8;
  import8.Element _el_9;
  import8.InputElement _el_11;
  import12.DefaultValueAccessor _DefaultValueAccessor_11_4;
  List<dynamic> _NgValueAccessor_11_5;
  import13.NgModel _NgModel_11_6;
  import8.ButtonElement _el_12;
  import8.ButtonElement _el_14;
  var _expr_0;
  var _expr_1;
  _ViewCrisisDetailComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewCrisisDetailComponent0._renderType;
  }
  @override
  ComponentRef<import2.CrisisDetailComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    _text_2 = new import8.Text('');
    _el_1.append(_text_2);
    import8.Text _text_3 = new import8.Text(' details!');
    _el_1.append(_text_3);
    _el_4 = createDivAndAppend(doc, _el_0);
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'label', _el_4);
    addShimE(_el_5);
    import8.Text _text_6 = new import8.Text('id:');
    _el_5.append(_text_6);
    _text_7 = new import8.Text('');
    _el_4.append(_text_7);
    _el_8 = createDivAndAppend(doc, _el_0);
    addShimC(_el_8);
    _el_9 = createAndAppend(doc, 'label', _el_8);
    addShimE(_el_9);
    import8.Text _text_10 = new import8.Text('name:');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'input', _el_8);
    createAttr(_el_11, 'placeholder', 'name');
    addShimC(_el_11);
    _DefaultValueAccessor_11_4 = new import12.DefaultValueAccessor(_el_11);
    _NgValueAccessor_11_5 = [_DefaultValueAccessor_11_4];
    _NgModel_11_6 = new import13.NgModel(null, _NgValueAccessor_11_5);
    _el_12 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_12);
    import8.Text _text_13 = new import8.Text('Cancel');
    _el_12.append(_text_13);
    _el_14 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_14);
    import8.Text _text_15 = new import8.Text('Save');
    _el_14.append(_text_15);
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_1));
    _el_11.addEventListener('blur', eventHandler0(_DefaultValueAccessor_11_4.touchHandler));
    final subscription_0 = _NgModel_11_6.update.listen(eventHandler1(_handle_ngModelChange_11_0));
    _el_12.addEventListener('click', eventHandler0(ctx.goBack));
    _el_14.addEventListener('click', eventHandler0(ctx.save));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import12.DefaultValueAccessor) && (11 == nodeIndex))) {
      return _DefaultValueAccessor_11_4;
    }
    if ((identical(token, const import14.OpaqueToken<import15.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_5;
    }
    if (((identical(token, import13.NgModel) || identical(token, import16.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.CrisisDetailComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_11_6.model = _ctx.name;
    _NgModel_11_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_11_6.ngOnInit();
    }
    final currVal_0 = import9.interpolate0(_ctx.crisis.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(_ctx.crisis.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_7.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_ngModelChange_11_0($event) {
    ctx.name = $event;
  }

  void _handle_input_11_1($event) {
    _DefaultValueAccessor_11_4.onChange($event.target.value);
  }
}

AppView<import2.CrisisDetailComponent> viewFactory_CrisisDetailComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewCrisisDetailComponent1(parentView, parentIndex);
}

const List<dynamic> styles$CrisisDetailComponentHost = const [];

class _ViewCrisisDetailComponentHost0 extends AppView<dynamic> {
  ViewCrisisDetailComponent0 _compView_0;
  import2.CrisisDetailComponent _CrisisDetailComponent_0_4;
  _ViewCrisisDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewCrisisDetailComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _CrisisDetailComponent_0_4 = new import2.CrisisDetailComponent(this.injectorGet(import17.CrisisService, viewData.parentIndex), this.injectorGet(import18.Router, viewData.parentIndex), this.injectorGet(dynamic, viewData.parentIndex), this.injectorGet(import19.DialogService, viewData.parentIndex));
    _compView_0.create(_CrisisDetailComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.CrisisDetailComponent>(0, this, rootEl, _CrisisDetailComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.CrisisDetailComponent) && (0 == nodeIndex))) {
      return _CrisisDetailComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _CrisisDetailComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_CrisisDetailComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewCrisisDetailComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.CrisisDetailComponent> CrisisDetailComponentNgFactory = const ComponentFactory<import2.CrisisDetailComponent>('crisis-detail', viewFactory_CrisisDetailComponentHost0, _CrisisDetailComponentMetadata);
const _CrisisDetailComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ngRef.registerComponent(
    CrisisDetailComponent,
    CrisisDetailComponentNgFactory,
  );
}
