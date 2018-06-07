import 'package:angular_router/angular_router.dart';

import 'crisis_component.template.dart' as cct;
import 'crisis_list_home_component.template.dart' as clhct;
import 'route_paths.dart' as paths;

class Routes {
  RoutePath get crisis => paths.crisis;
  RoutePath get home => paths.home;

  final List<RouteDefinition> all = [
    new RouteDefinition(
      routePath: paths.crisis,
      component: cct.CrisisComponentNgFactory,
    ),
    new RouteDefinition(
      routePath: paths.home,
      component: clhct.CrisisListHomeComponentNgFactory,
      useAsDefault: true,
    ),
  ];
}
