import 'package:angular_router/angular_router.dart';

final crisis = new RoutePath(path: 'crisis-center');
final idParam = 'id';
final heroDetail = new RoutePath(path: 'detail/:$idParam');
final heroes = new RoutePath(path: 'heroes');
