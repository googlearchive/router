// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'compose_message_component.dart';
export 'compose_message_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;

import 'package:angular/src/core/linker/app_view.dart';
import 'compose_message_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import13;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import14;
import 'package:angular_forms/src/directives/ng_control.dart' as import15;
import 'package:angular_router/src/router/router.dart' as import16;

const List<dynamic> styles$ComposeMessageComponent = const ['._nghost-%COMP% { position:relative; bottom:10%; }'];

class ViewComposeMessageComponent0 extends AppView<import1.ComposeMessageComponent> {
  import2.Element _el_0;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  import2.DivElement _el_3;
  import2.DivElement _el_4;
  import2.Element _el_5;
  import2.DivElement _el_7;
  import2.TextAreaElement _el_8;
  import5.DefaultValueAccessor _DefaultValueAccessor_8_4;
  List<dynamic> _NgValueAccessor_8_5;
  import6.NgModel _NgModel_8_6;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_7;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewComposeMessageComponent0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('crisis-center');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ComposeMessageComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ComposeMessageComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_0);
    import2.Text _text_1 = new import2.Text('Contact Crisis Center');
    _el_0.append(_text_1);
    var _anchor_2 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_ComposeMessageComponent1);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    _el_3 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_3);
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'label', _el_4);
    addShimE(_el_5);
    import2.Text _text_6 = new import2.Text('Message:');
    _el_5.append(_text_6);
    _el_7 = createDivAndAppend(doc, _el_3);
    addShimC(_el_7);
    _el_8 = createAndAppend(doc, 'textarea', _el_7);
    createAttr(_el_8, 'cols', '35');
    createAttr(_el_8, 'rows', '10');
    addShimC(_el_8);
    _DefaultValueAccessor_8_4 = new import5.DefaultValueAccessor(_el_8);
    _NgValueAccessor_8_5 = [_DefaultValueAccessor_8_4];
    _NgModel_8_6 = new import6.NgModel(null, _NgValueAccessor_8_5);
    var _anchor_9 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_6 = new TemplateRef(_appEl_9, viewFactory_ComposeMessageComponent2);
    _NgIf_9_7 = new NgIf(_appEl_9, _TemplateRef_9_6);
    _el_8.addEventListener('input', eventHandler1(_handle_input_8_1));
    _el_8.addEventListener('blur', eventHandler0(_DefaultValueAccessor_8_4.touchHandler));
    final subscription_0 = _NgModel_8_6.update.listen(eventHandler1(_handle_ngModelChange_8_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.DefaultValueAccessor) && (8 == nodeIndex))) {
      return _DefaultValueAccessor_8_4;
    }
    if ((identical(token, const import13.OpaqueToken<import14.ControlValueAccessor<dynamic>>('NgValueAccessor')) && (8 == nodeIndex))) {
      return _NgValueAccessor_8_5;
    }
    if (((identical(token, import6.NgModel) || identical(token, import15.NgControl)) && (8 == nodeIndex))) {
      return _NgModel_8_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.ComposeMessageComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_2_7.ngIf = (_ctx.details != null);
    changed = false;
    _NgModel_8_6.model = _ctx.message;
    _NgModel_8_6.ngAfterChanges();
    if (firstCheck) {
      _NgModel_8_6.ngOnInit();
    }
    _NgIf_9_7.ngIf = !_ctx.sending;
    _appEl_2.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    final currVal_1 = _ctx.sending;
    if (!identical(_expr_1, currVal_1)) {
      setProp(_el_8, 'disabled', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _appEl_9?.destroyNestedViews();
  }

  void _handle_ngModelChange_8_0($event) {
    ctx.message = $event;
  }

  void _handle_input_8_1($event) {
    _DefaultValueAccessor_8_4.onChange($event.target.value);
  }
}

AppView<import1.ComposeMessageComponent> viewFactory_ComposeMessageComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewComposeMessageComponent0(parentView, parentIndex);
}

class _ViewComposeMessageComponent1 extends AppView<import1.ComposeMessageComponent> {
  import2.DivElement _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewComposeMessageComponent1(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewComposeMessageComponent0._renderType;
  }
  @override
  ComponentRef<import1.ComposeMessageComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ComposeMessageComponent _ctx = ctx;
    final currVal_0 = import10.interpolate0(_ctx.details);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ComposeMessageComponent> viewFactory_ComposeMessageComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewComposeMessageComponent1(parentView, parentIndex);
}

class _ViewComposeMessageComponent2 extends AppView<import1.ComposeMessageComponent> {
  import2.Element _el_0;
  import2.ButtonElement _el_1;
  import2.ButtonElement _el_3;
  _ViewComposeMessageComponent2(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewComposeMessageComponent0._renderType;
  }
  @override
  ComponentRef<import1.ComposeMessageComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('p');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_1);
    import2.Text _text_2 = new import2.Text('Send');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_3);
    import2.Text _text_4 = new import2.Text('Cancel');
    _el_3.append(_text_4);
    _el_1.addEventListener('click', eventHandler0(ctx.send));
    _el_3.addEventListener('click', eventHandler0(ctx.cancel));
    init0(_el_0);
    return null;
  }
}

AppView<import1.ComposeMessageComponent> viewFactory_ComposeMessageComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewComposeMessageComponent2(parentView, parentIndex);
}

const List<dynamic> styles$ComposeMessageComponentHost = const [];

class _ViewComposeMessageComponentHost0 extends AppView<dynamic> {
  ViewComposeMessageComponent0 _compView_0;
  import1.ComposeMessageComponent _ComposeMessageComponent_0_4;
  _ViewComposeMessageComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewComposeMessageComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ComposeMessageComponent_0_4 = new import1.ComposeMessageComponent(this.injectorGet(import16.Router, viewData.parentIndex));
    _compView_0.create(_ComposeMessageComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ComposeMessageComponent>(0, this, rootEl, _ComposeMessageComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.ComposeMessageComponent) && (0 == nodeIndex))) {
      return _ComposeMessageComponent_0_4;
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

AppView viewFactory_ComposeMessageComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewComposeMessageComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ComposeMessageComponent> ComposeMessageComponentNgFactory = const ComponentFactory<import1.ComposeMessageComponent>('crisis-center', viewFactory_ComposeMessageComponentHost0, _ComposeMessageComponentMetadata);
const _ComposeMessageComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerComponent(
    ComposeMessageComponent,
    ComposeMessageComponentNgFactory,
  );
}
