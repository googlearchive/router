import 'package:angular_router/angular_router.dart';

import '../route_paths.dart';

export '../route_paths.dart' show idParam, getId;

final crisis = RoutePath(
  path: ':$idParam',
  parent: crises,
);

final home = RoutePath(
  path: '',
  parent: crises,
  useAsDefault: true,
);
