import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'crisis.dart';
import 'crisis_service.dart';
import 'route_paths.dart' as paths;
import 'routes.dart';

@Component(
  selector: 'my-crises',
  templateUrl: 'crisis_list_component.html',
  styleUrls: ['crisis_list_component.css'],
  directives: [coreDirectives, RouterOutlet],
  providers: [
    const ClassProvider(CrisisService),
    const ClassProvider(Routes),
  ],
)
class CrisisListComponent implements OnActivate {
  final CrisisService _crisisService;
  final Routes routes;
  final Router _router;
  List<Crisis> crises;
  Crisis selectedCrisis;

  CrisisListComponent(this._crisisService, this._router, this.routes);

  Future<void> _getCrises() async {
    crises = await _crisisService.getAll();
  }

  @override
  Future<void> onActivate(_, RouterState current) async {
    await _getCrises();
    await _selectHero(current);
  }

  Future<void> _selectHero(RouterState routerState) async {
    var id = _getId(routerState);
    if (id != null)
      selectedCrisis =
          crises.firstWhere((hero) => hero.id == id, orElse: () => null);
  }

  int _getId(RouterState routerState) =>
      int.parse(routerState.queryParameters[paths.idParam] ?? '',
          onError: (_) => null);

  void onSelect(Crisis crisis) {
    selectedCrisis = crisis;
    gotoDetail();
  }

  Future<NavigationResult> gotoDetail() => _router.navigate(paths.crisis
      .toUrl(parameters: {paths.idParam: selectedCrisis.id.toString()}));
}
