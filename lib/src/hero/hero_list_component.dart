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
  Hero selected;

  HeroListComponent(this._heroService, this._router);

  Future<void> _getHeroes() async {
    heroes = await _heroService.getAll();
  }

  @override
  Future<void> onActivate(_, RouterState current) async {
    await _getHeroes();
    selected = _select(current);
  }

  Hero _select(RouterState routerState) {
    final id = _getId(routerState);
    return id == null
        ? null
        : heroes.firstWhere((e) => e.id == id, orElse: () => null);
  }

  int _getId(RouterState routerState) =>
      int.parse(routerState.queryParameters[paths.idParam] ?? '',
          onError: (_) => null);

  void onSelect(Hero hero) => _gotoDetail(hero.id);

  String _heroUrl(int id) =>
      paths.hero.toUrl(parameters: {paths.idParam: id.toString()});

  Future<NavigationResult> _gotoDetail(int id) =>
      _router.navigate(_heroUrl(id));
}
