import 'package:angular_router/angular_router.dart';

import 'crisis_component.template.dart' as crisis_template;
import 'crisis_list_home_component.template.dart' as crisis_list_home_template;
import 'route_paths.dart';

export 'route_paths.dart';

class Routes {
  static final crisis = RouteDefinition(
    routePath: RoutePaths.crisis,
    component: crisis_template.CrisisComponentNgFactory,
  );
  static final home = RouteDefinition(
    routePath: RoutePaths.home,
    component: crisis_list_home_template.CrisisListHomeComponentNgFactory,
    useAsDefault: true,
  );

  static final all = <RouteDefinition>[
    crisis,
    home,
  ];
}
