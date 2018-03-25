define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__crisis__crisis = Object.create(_root);
  src__crisis__crisis.Crisis = class Crisis extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
  };
  (src__crisis__crisis.Crisis.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__crisis__crisis.Crisis.prototype;
  dart.addTypeTests(src__crisis__crisis.Crisis);
  const id$ = Symbol("Crisis.id");
  const name$ = Symbol("Crisis.name");
  dart.setFieldSignature(src__crisis__crisis.Crisis, () => ({
    __proto__: dart.getFields(src__crisis__crisis.Crisis.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/router_example/src/crisis/crisis.ddc", {
    "package:router_example/src/crisis/crisis.dart": src__crisis__crisis
  }, '{"version":3,"sourceRoot":"","sources":["crisis.dart"],"names":[],"mappings":";;;;;;;;IACY;;;;;;IACH;;;;;;;6CAEA,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC","file":"crisis.ddc.js"}');
  // Exports:
  return {
    src__crisis__crisis: src__crisis__crisis
  };
});

//# sourceMappingURL=crisis.ddc.js.map
