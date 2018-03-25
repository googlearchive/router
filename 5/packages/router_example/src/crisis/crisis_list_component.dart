import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';
import 'route_paths.dart' as paths;
import 'routes.dart';

int _instanceCount = 0; // FIXME: temporary

@Component(
  selector: 'my-crises',
  templateUrl: 'crisis_list_component.html',
  styleUrls: ['crisis_list_component.css'],
  directives: [coreDirectives, RouterOutlet],
  providers: [
    const ClassProvider(CrisisService),
    const ClassProvider(DialogService),
    const ClassProvider(Routes),
  ],
)
class CrisisListComponent implements OnActivate, OnDeactivate {
  final CrisisService _crisisService;
  final Routes routes;
  final Router _router;
  List<Crisis> crises;
  Crisis selectedCrisis;
  final instanceId = _instanceCount++; // FIXME: temporary

  CrisisListComponent(this._crisisService, this._router, this.routes) {
    print('[$instanceId] CrisisListComponent created');
  }

  Future<void> _getCrises() async {
    crises = await _crisisService.getAll();
  }

  @override
  Future<void> onActivate(_, RouterState current) async {
    print(
        '>> [$instanceId] CrisisList onActivate ${_?.toUrl()} (${selectedCrisis?.id}) -> ${current?.toUrl()} ...');
    await _getCrises();
    await _selectHero(current);
    print(
        '>> [$instanceId] CrisisList onActivate selected ${selectedCrisis?.id}');
  }

  void onDeactivate(RouterState current, RouterState next) {
    print(
        '>> [$instanceId] CrisisList onDeactivate ${current?.toUrl()} -> ${next?.toUrl()}');
  }

  Future<void> _selectHero(RouterState routerState) async {
    var id = _getId(routerState);
    print('>> [$instanceId] CrisisList _selectHero $id');
    if (id != null)
      selectedCrisis =
          crises.firstWhere((hero) => hero.id == id, orElse: () => null);
  }

  int _getId(RouterState routerState) => int
      .parse(routerState.parameters[paths.idParam] ?? '', onError: (_) => null);

  void onSelect(Crisis crisis) async {
    selectedCrisis = crisis;
    print(
        '>> [$instanceId] CrisisList onSelect selected ${selectedCrisis?.id}');
    await gotoDetail();
    print(
        '>> [$instanceId] CrisisList onSelect selected ${selectedCrisis?.id}, after gotoDetail');
  }

  Future<NavigationResult> gotoDetail() => _router.navigate(paths.crisis
      .toUrl(parameters: {paths.idParam: selectedCrisis.id.toString()}));
}
