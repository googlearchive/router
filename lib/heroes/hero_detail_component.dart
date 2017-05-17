import 'dart:async';

import 'package:angular2/angular2.dart';
import 'package:angular2/router.dart';

import 'hero.dart';
import 'hero_service.dart';

@Component(
  selector: 'my-hero-detail',
  templateUrl: 'hero_detail_component.html',
  styleUrls: const ['hero_detail_component.css'],
  directives: const [COMMON_DIRECTIVES],
)
class HeroDetailComponent implements OnInit {
  Hero hero;
  final HeroService _heroService;
  final Router _router;
  final RouteParams _routeParams;

  HeroDetailComponent(this._heroService, this._router, this._routeParams);

  Future<Null> ngOnInit() async {
    var _id = _routeParams.get('id');
    var id = int.parse(_id ?? '', onError: (_) => null);
    if (id != null) hero = await (_heroService.getHero(id));
  }

  Future goBack() => _router.navigate([
        'Heroes',
        hero == null ? {} : {'id': hero.id.toString()}
      ]);
}
