// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'crisis_component.dart';
export 'crisis_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'route_paths.dart' as paths;
import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'crisis.template.dart' as _ref0;
import 'crisis_service.template.dart' as _ref1;
import 'dialog_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_forms/angular_forms.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'route_paths.template.dart' as _ref6;
import 'package:router_example/src/crisis/crisis_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'crisis_component.dart' as import2;
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
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import13;
import 'package:angular_forms/src/directives/ng_model.dart' as import14;
import 'package:angular/src/core/di/opaque_token.dart' as import15;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import16;
import 'package:angular_forms/src/directives/ng_control.dart' as import17;
import 'crisis_service.dart' as import18;
import 'package:angular_router/src/router/router.dart' as import19;
import 'dialog_service.dart' as import20;

const List<dynamic> styles$CrisisComponent = const [import0.styles];

class ViewCrisisComponent0 extends AppView<import2.CrisisComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static RenderComponentType _renderType;
  ViewCrisisComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import8.document.createElement('my-crisis');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$CrisisComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.CrisisComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var _anchor_0 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_CrisisComponent1);
    _NgIf_0_9 = new NgIf(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.CrisisComponent _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.crisis != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import2.CrisisComponent> viewFactory_CrisisComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewCrisisComponent0(parentView, parentIndex);
}

class _ViewCrisisComponent1 extends AppView<import2.CrisisComponent> {
  import8.DivElement _el_0;
  import8.Element _el_1;
  import8.Text _text_2;
  import8.Text _text_4;
  import8.DivElement _el_6;
  import8.Element _el_7;
  import8.Text _text_9;
  import8.DivElement _el_10;
  import8.Element _el_11;
  import8.InputElement _el_13;
  import12.DefaultValueAccessor _DefaultValueAccessor_13_5;
  List<import13.ControlValueAccessor<dynamic>> _NgValueAccessor_13_6;
  import14.NgModel _NgModel_13_7;
  import8.ButtonElement _el_14;
  import8.ButtonElement _el_17;
  var _expr_0;
  var _expr_1;
  _ViewCrisisComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewCrisisComponent0._renderType;
  }
  @override
  ComponentRef<import2.CrisisComponent> build() {
    var doc = import8.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    _text_2 = new import8.Text('');
    _el_1.append(_text_2);
    import8.Text _text_3 = new import8.Text(' details! (');
    _el_1.append(_text_3);
    _text_4 = new import8.Text(import9.interpolate0(ctx.instanceId));
    _el_1.append(_text_4);
    import8.Text _text_5 = new import8.Text(')');
    _el_1.append(_text_5);
    _el_6 = createDivAndAppend(doc, _el_0);
    addShimC(_el_6);
    _el_7 = createAndAppend(doc, 'label', _el_6);
    addShimE(_el_7);
    import8.Text _text_8 = new import8.Text('id:');
    _el_7.append(_text_8);
    _text_9 = new import8.Text('');
    _el_6.append(_text_9);
    _el_10 = createDivAndAppend(doc, _el_0);
    addShimC(_el_10);
    _el_11 = createAndAppend(doc, 'label', _el_10);
    addShimE(_el_11);
    import8.Text _text_12 = new import8.Text('name:');
    _el_11.append(_text_12);
    _el_13 = createAndAppend(doc, 'input', _el_10);
    createAttr(_el_13, 'placeholder', 'name');
    addShimC(_el_13);
    _DefaultValueAccessor_13_5 = new import12.DefaultValueAccessor(_el_13);
    _NgValueAccessor_13_6 = [_DefaultValueAccessor_13_5];
    _NgModel_13_7 = new import14.NgModel(null, _NgValueAccessor_13_6);
    _el_14 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_14);
    import8.Text _text_15 = new import8.Text('Cancel');
    _el_14.append(_text_15);
    import8.Text _text_16 = new import8.Text(' \n  ');
    _el_0.append(_text_16);
    _el_17 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_17);
    import8.Text _text_18 = new import8.Text('Save');
    _el_17.append(_text_18);
    _el_13.addEventListener('input', eventHandler1(_handle_input_13_1));
    _el_13.addEventListener('blur', eventHandler0(_DefaultValueAccessor_13_5.touchHandler));
    final subscription_0 = _NgModel_13_7.update.listen(eventHandler1(_handle_ngModelChange_13_0));
    _el_14.addEventListener('click', eventHandler0(ctx.goBack));
    _el_17.addEventListener('click', eventHandler0(ctx.save));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import12.DefaultValueAccessor) && (13 == nodeIndex))) {
      return _DefaultValueAccessor_13_5;
    }
    if ((identical(token, const import15.MultiToken<import16.ControlValueAccessor>('NgValueAccessor')) && (13 == nodeIndex))) {
      return _NgValueAccessor_13_6;
    }
    if (((identical(token, import14.NgModel) || identical(token, import17.NgControl)) && (13 == nodeIndex))) {
      return _NgModel_13_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.CrisisComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_13_7.model = _ctx.name;
    _NgModel_13_7.ngAfterChanges();
    if (firstCheck) {
      _NgModel_13_7.ngOnInit();
    }
    final currVal_0 = import9.interpolate0(_ctx.crisis.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(_ctx.crisis.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_9.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_ngModelChange_13_0($event) {
    ctx.name = $event;
  }

  void _handle_input_13_1($event) {
    _DefaultValueAccessor_13_5.onChange($event.target.value);
  }
}

AppView<import2.CrisisComponent> viewFactory_CrisisComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCrisisComponent1(parentView, parentIndex);
}

const List<dynamic> styles$CrisisComponentHost = const [];

class _ViewCrisisComponentHost0 extends AppView<dynamic> {
  ViewCrisisComponent0 _compView_0;
  import2.CrisisComponent _CrisisComponent_0_5;
  _ViewCrisisComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewCrisisComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _CrisisComponent_0_5 = new import2.CrisisComponent(this.injectorGet(import18.CrisisService, viewData.parentIndex), this.injectorGet(import19.Router, viewData.parentIndex), this.injectorGet(import20.DialogService, viewData.parentIndex));
    _compView_0.create(_CrisisComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.CrisisComponent>(0, this, rootEl, _CrisisComponent_0_5);
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

AppView viewFactory_CrisisComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCrisisComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.CrisisComponent> CrisisComponentNgFactory = const ComponentFactory<import2.CrisisComponent>('my-crisis', viewFactory_CrisisComponentHost0, _CrisisComponentMetadata);
const _CrisisComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CrisisComponent, CrisisComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
