import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'app_route_paths.dart' as paths;
import 'crisis_center_component_1.template.dart' as ctc;
import 'heroes_component_1.template.dart' as htc;

@Injectable()
class AppRoutes {
  static final _crisis = new RouteDefinition(
    routePath: paths.crisis,
    component: ctc.CrisisCenterComponentNgFactory,
  );

  static final _heroes = new RouteDefinition(
    routePath: paths.heroes,
    component: htc.HeroesComponentNgFactory,
  );

  final crisis = _crisis;
  final heroes = _heroes;

  final List<RouteDefinition> all = [
    _crisis,
    _heroes,
  ];
}
