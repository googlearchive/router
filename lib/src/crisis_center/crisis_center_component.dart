import 'package:angular2/angular2.dart';
import 'package:angular2/router.dart';

import 'crisis_service.dart';
import 'crises_component.dart';
import 'dialog_service.dart';

@Component(
    selector: 'crisis-center',
    template: '''
      <router-outlet></router-outlet>
    ''',
    directives: const [ROUTER_DIRECTIVES],
    providers: const [CrisisService, DialogService])
@RouteConfig(const [
  const Route(
      path: '/...',
      name: 'Crises',
      component: CrisesComponent,
      useAsDefault: true)
])
class CrisisCenterComponent {}
