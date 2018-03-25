define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero__hero = Object.create(_root);
  src__hero__hero.Hero = class Hero extends core.Object {
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
  (src__hero__hero.Hero.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__hero__hero.Hero.prototype;
  dart.addTypeTests(src__hero__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  dart.setFieldSignature(src__hero__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/router_example/src/hero/hero.ddc", {
    "package:router_example/src/hero/hero.dart": src__hero__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;IACY;;;;;;IACH;;;;;;;uCAEF,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero__hero: src__hero__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
