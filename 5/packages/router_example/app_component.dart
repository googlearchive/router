// This is a copy of app_component_4.dart
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'src/hero/hero_service.dart';

@Component(
  selector: 'my-app',
  template: '''
    <h1>Angular Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <!--
      <a [routerLink]="['CrisisCenter', 'Crises', 'CrisisDetail', {'id': '1'}]">Dragon Crisis</a>
      -->
    </nav>
    <router-outlet></router-outlet>
    <!-- Note: the named outlet is not yet used:
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    -->
  ''',
  styles: ['.router-link-active {color: #039be5;}'],
  directives: [routerDirectives],
  providers: [HeroService],
)
// FIXME: WIP
//@RouteConfig(const [
//  const Redirect(path: '/', redirectTo: ['Heroes']),
//  const Route(
//      path: '/crises/...',
//      name: 'CrisisCenter',
//      component: CrisisListComponent),
//  const Route(path: '/heroes', name: 'Heroes', component: HeroListComponent),
//  const Route(
//      path: '/hero/:id', name: 'HeroDetail', component: HeroComponent),
//  // Not yet used: AuxRoute(path: '/contact', name: 'Contact', component: ComposeMessageComponent),
//  const Route(path: '/**', name: 'NotFound', component: NotFoundComponent)
//])
class AppComponent {}
