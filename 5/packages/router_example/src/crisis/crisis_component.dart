import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

import 'route_paths.dart' as paths;
import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';

@Component(
  selector: 'my-crisis',
  templateUrl: 'crisis_component.html',
  styleUrls: ['crisis_component.css'],
  directives: [coreDirectives, formDirectives],
)
class CrisisComponent // extends Object with CanReuse
    implements
        CanDeactivate,
        OnActivate,
        OnDeactivate {
  static int _instanceCount = 0; // FIXME: temporary
  final instanceId = _instanceCount++; // FIXME: temporary
  Crisis crisis;
  // String name; // FIXME: temporarily splitting into getter/setter
  String _name;
  void set name(String n) {
    _name = n;
    print('>> [$instanceId] Crisis name changed to $_name');
  }

  String get name => _name;

  final CrisisService _crisisService;
  final Router _router;
  final DialogService _dialogService;

  CrisisComponent(this._crisisService, this._router, this._dialogService) {
    print('[$instanceId] CrisisComponent created');
  }

  int _getId(RouterState routerState) => int
      .parse(routerState.parameters[paths.idParam] ?? '', onError: (_) => null);

  @override
  Future<void> onActivate(_, RouterState current) async {
    print(
        '>> [$instanceId] Crisis onActivate ${_?.toUrl()} ($name) -> ${current?.toUrl()} ...');
    final id = _getId(current);
    if (id == null) return null;
    crisis = await (_crisisService.get(id));
    name = crisis?.name;
    print('>> [$instanceId] Crisis onActivate name = $name');
  }

  @override
  void onDeactivate(RouterState prev, RouterState current) {
    print(
        '>> [$instanceId] Crisis onDeactivate ${prev?.toUrl()} ($name) -> ${current?.toUrl()}');
  }

  Future<void> save() async {
    print('>> [$instanceId] Crisis save $name (was ${crisis?.name}');
    crisis?.name = name;
    goBack();
  }

  Future<NavigationResult> goBack() => _router.navigate(paths.home.toUrl());

  @override
  Future<bool> canDeactivate(RouterState prev, RouterState next) async {
    print(
        '>> [$instanceId] Crisis canDeactivate ${prev?.toUrl()} -> ${next?.toUrl()}; ${crisis?.name} == $name');
    return crisis == null || crisis?.name == name
        ? true
        : _dialogService.confirm('Discard changes?');
  }

  //  @override
  //  Future<bool> canReuse(_, __) async => true;
}
