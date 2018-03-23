import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import '../route_paths.dart' as paths;
import 'hero.dart';
import 'hero_service.dart';

@Component(
  selector: 'my-heroes',
  templateUrl: 'hero_list_component.html',
  styleUrls: ['hero_list_component.css'],
  directives: [coreDirectives],
)
class HeroListComponent implements OnActivate {
  final HeroService _heroService;
  final Router _router;
  List<Hero> heroes;
  Hero selectedHero;

  HeroListComponent(this._heroService, this._router);

  Future<void> _getHeroes() async {
    heroes = await _heroService.getAll();
  }

  @override
  Future<void> onActivate(_, RouterState current) async {
    await _getHeroes();
    await _selectHero(current);
  }

  Future<void> _selectHero(RouterState routerState) async {
    var id = _getId(routerState);
    if (id != null)
      selectedHero =
          heroes.firstWhere((hero) => hero.id == id, orElse: () => null);
  }

  int _getId(RouterState routerState) =>
      int.parse(routerState.queryParameters[paths.idParam] ?? '',
          onError: (_) => null);

  void onSelect(Hero hero) {
    selectedHero = hero;
    gotoDetail();
  }

  Future<NavigationResult> gotoDetail() => _router.navigate(paths.hero
      .toUrl(parameters: {paths.idParam: selectedHero.id.toString()}));
}
