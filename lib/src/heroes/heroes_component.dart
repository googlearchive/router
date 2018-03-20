import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import '../app_route_paths.dart' as paths;
import 'hero.dart';
import 'hero_service.dart';

@Component(
  selector: 'my-heroes',
  templateUrl: 'heroes_component.html',
  styleUrls: const ['heroes_component.css'],
  directives: const [coreDirectives],
)
class HeroesComponent implements OnActivate {
  final HeroService _heroService;
  final Router _router;
  List<Hero> heroes;
  Hero selectedHero;

  HeroesComponent(this._heroService, this._router);

  Future<void> getHeroes() async {
    heroes = await _heroService.getHeroes();
  }

  @override
  Future<void> onActivate(_, RouterState current) async {
    await getHeroes();
    await _selectHero(current);
  }

  Future<Null> _selectHero(RouterState routerState) async {
    var _id = routerState.queryParameters[paths.idParam];
    var id = int.parse(_id ?? '', onError: (_) => null);
    if (id == null) return;
    selectedHero =
        heroes.firstWhere((hero) => hero.id == id, orElse: () => null);
  }

  void onSelect(Hero hero) {
    selectedHero = hero;
    gotoDetail();
  }

  Future<NavigationResult> gotoDetail() => _router.navigate(paths.heroDetail
      .toUrl(parameters: {paths.idParam: selectedHero.id.toString()}));
}
