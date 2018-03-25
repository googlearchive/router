define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__crisis__dialog_service = Object.create(_root);
  src__crisis__dialog_service.DialogService = class DialogService extends core.Object {
    confirm(message) {
      return async.async(core.bool, function* confirm() {
        return html.window.confirm(message != null ? message : 'Ok?');
      });
    }
  };
  (src__crisis__dialog_service.DialogService.new = function() {
  }).prototype = src__crisis__dialog_service.DialogService.prototype;
  dart.addTypeTests(src__crisis__dialog_service.DialogService);
  dart.setMethodSignature(src__crisis__dialog_service.DialogService, () => ({
    __proto__: dart.getMethods(src__crisis__dialog_service.DialogService.__proto__),
    confirm: dart.fnType(async.Future$(core.bool), [core.String])
  }));
  dart.trackLibraries("packages/router_example/src/crisis/dialog_service.ddc", {
    "package:router_example/src/crisis/dialog_service.dart": src__crisis__dialog_service
  }, '{"version":3,"sourceRoot":"","sources":["dialog_service.dart"],"names":[],"mappings":";;;;;;;;;;YAOuB,OAAc;AAAE;cACjC,YAAM,QAAQ,CAAC,OAAO,WAAP,OAAO,GAAI;MAAM;;;;EACtC","file":"dialog_service.ddc.js"}');
  // Exports:
  return {
    src__crisis__dialog_service: src__crisis__dialog_service
  };
});

//# sourceMappingURL=dialog_service.ddc.js.map
