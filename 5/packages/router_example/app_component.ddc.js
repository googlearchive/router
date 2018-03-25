define(['dart_sdk', 'packages/router_example/src/routes'], function(dart_sdk, routes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__routes = routes.src__routes;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  app_component.AppComponent = class AppComponent extends core.Object {
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
  };
  (app_component.AppComponent.new = function(routes) {
    this[routes$] = routes;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const routes$ = Symbol("AppComponent.routes");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    routes: dart.finalFieldType(src__routes.Routes)
  }));
  dart.trackLibraries("packages/router_example/app_component.ddc", {
    "package:router_example/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;IAuBe;;;;;;;6CAEA,MAAW;IAAN,aAAM,GAAN,MAAM;EAAC","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
