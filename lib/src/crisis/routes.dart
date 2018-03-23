import 'package:angular_router/angular_router.dart';

import 'crisis_component_4.template.dart' as cct;
import 'crisis_list_home_component.template.dart' as clhct;
import 'route_paths.dart' as paths;

class Routes {
  static final _crisis = new RouteDefinition(
    routePath: paths.crisis,
    component: cct.CrisisComponentNgFactory,
  );

  final crisis = _crisis;

  static final _home = new RouteDefinition(
    routePath: paths.home,
    component: clhct.CrisisListHomeComponentNgFactory,
    useAsDefault: true,
  );

  final home = _home;

  final List<RouteDefinition> all = [
    _crisis,
    _home,
  ];
}
