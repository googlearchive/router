// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'routes.dart';
export 'routes.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'route_paths.dart' as paths;
import 'crisis/crisis_list_component.template.dart' as clct;
import 'hero/hero_list_component.template.dart' as hlct;
import 'hero/hero_component.template.dart' as hct;
import 'not_found_component.template.dart' as nfct;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'crisis/crisis_list_component.template.dart' as _ref0;
import 'hero/hero_component.template.dart' as _ref1;
import 'hero/hero_list_component.template.dart' as _ref2;
import 'not_found_component.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'route_paths.template.dart' as _ref6;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(Routes, () => new Routes());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
