define(['dart_sdk', 'packages/router_example/src/route_paths', 'packages/angular_router/src/route_definition'], function(dart_sdk, route_paths, route_definition) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__route_path = route_definition.src__route_path;
  const _root = Object.create(null);
  const src__crisis__route_paths = Object.create(_root);
  dart.defineLazy(src__crisis__route_paths, {
    /*src__crisis__route_paths.crisis*/get crisis() {
      return new src__route_path.RoutePath.new({path: dart.str`:${src__route_paths.idParam}`, parent: src__route_paths.crises});
    },
    /*src__crisis__route_paths.home*/get home() {
      return new src__route_path.RoutePath.new({path: '', parent: src__route_paths.crises, useAsDefault: true});
    }
  });
  dart.trackLibraries("packages/router_example/src/crisis/route_paths.ddc", {
    "package:router_example/src/crisis/route_paths.dart": src__crisis__route_paths
  }, '{"version":3,"sourceRoot":"","sources":["route_paths.dart"],"names":[],"mappings":";;;;;;;;;;MAMM,+BAAM;YAAG,KAAI,6BAAS,QACpB,YAAG,wBAAO,YACR,uBAAM;;MAGV,6BAAI;YAAG,KAAI,6BAAS,QAClB,YACE,uBAAM,gBACA","file":"route_paths.ddc.js"}');
  // Exports:
  return {
    src__crisis__route_paths: src__crisis__route_paths
  };
});

//# sourceMappingURL=route_paths.ddc.js.map
