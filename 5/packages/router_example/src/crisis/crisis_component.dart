import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';

@Component(
  selector: 'my-crisis',
  templateUrl: 'crisis_component.html',
  styleUrls: ['crisis_component.css'],
  directives: [coreDirectives, formDirectives],
)
class CrisisComponent
/* implements
        CanDeactivate,
        CanReuse,
        OnActivate,
        OnDeactivate,
        OnInit
        // FIXME: OnReuse
        */
{
  Crisis crisis;
  String name;
  final CrisisService _crisisService;
  final Router _router;
  // final RouteParams _routeParams;
  final DialogService _dialogService;

  CrisisComponent(this._crisisService, this._router, this._dialogService);

  Future<void> ngOnInit() =>
      _setCrisis(null /* FIXME: _routeParams.get('id')*/);

  Future<void> _setCrisis(String idAsString) async {
    var id = int.parse(idAsString ?? '', onError: (_) => null);
    if (id != null) crisis = await (_crisisService.get(id));
    if (crisis != null) name = crisis.name;
  }

  Future<void> save() async {
    crisis.name = name;
    goBack();
  }

  Future goBack() => _router.navigate(
      null /* FIXME: [
        'CrisesHome',
        crisis == null ? {} : {'id': crisis.id.toString()}
      ]*/
      );

  // TODO: remove cast of true once there is a fix for https://github.com/dart-lang/sdk/issues/25368
  FutureOr<bool> routerCanDeactivate(next, prev) =>
      crisis == null || crisis.name == name
          ? true as FutureOr<bool>
          : _dialogService.confirm('Discard changes?');

  FutureOr<bool> routerCanReuse(next, prev) => true;

  // FIXME:
  //  @override
  //  Future<void> routerOnReuse(ComponentInstruction next, prev) =>
  //      _setCrisis(next.params['id']);

  void routerOnActivate(next, prev) {
    print('Activating ${next.routeName} ${next.urlPath}');
  }

  void routerOnDeactivate(next, prev) {
    print('Deactivating ${prev.routeName} ${prev.urlPath}');
  }
}
