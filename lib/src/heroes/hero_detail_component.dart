import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

import '../app_route_paths.dart' as paths;
import 'hero.dart';
import 'hero_service.dart';

@Component(
  selector: 'hero-detail',
  templateUrl: 'hero_detail_component.html',
  styleUrls: const ['hero_detail_component.css'],
  directives: const [coreDirectives, formDirectives],
)
class HeroDetailComponent implements OnActivate {
  Hero hero;
  final HeroService _heroService;
  final Router _router;

  HeroDetailComponent(this._heroService, this._router);

  @override
  void onActivate(_, RouterState current) {
    updateHero(current);
  }

  Future<void> updateHero(RouterState routerState) async {
    var _id = routerState.parameters[paths.idParam];
    var id = int.parse(_id ?? '', onError: (_) => null);
    if (id != null) hero = await (_heroService.getHero(id));
  }

  Future<NavigationResult> goBack() => _router.navigate(
      paths.heroes.toUrl(queryParameters: {paths.idParam: hero.id.toString()}));
}
