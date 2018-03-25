define(['dart_sdk', 'packages/router_example/src/hero/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero__hero = hero.src__hero__hero;
  const _root = Object.create(null);
  const src__hero__mock_heroes = Object.create(_root);
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero__hero.Hero)))();
  dart.defineLazy(src__hero__mock_heroes, {
    /*src__hero__mock_heroes.mockHeroes*/get mockHeroes() {
      return JSArrayOfHero().of([new src__hero__hero.Hero.new(11, 'Mr. Nice'), new src__hero__hero.Hero.new(12, 'Narco'), new src__hero__hero.Hero.new(13, 'Bombasto'), new src__hero__hero.Hero.new(14, 'Celeritas'), new src__hero__hero.Hero.new(15, 'Magneta'), new src__hero__hero.Hero.new(16, 'RubberMan'), new src__hero__hero.Hero.new(17, 'Dynama'), new src__hero__hero.Hero.new(18, 'Dr IQ'), new src__hero__hero.Hero.new(19, 'Magma'), new src__hero__hero.Hero.new(20, 'Tornado')]);
    }
  });
  dart.trackLibraries("packages/router_example/src/hero/mock_heroes.ddc", {
    "package:router_example/src/hero/mock_heroes.dart": src__hero__mock_heroes
  }, '{"version":3,"sourceRoot":"","sources":["mock_heroes.dart"],"names":[],"mappings":";;;;;;;;;;;MAEiB,iCAAU;YAAG,qBAC5B,IAAI,wBAAI,CAAC,IAAI,aACb,IAAI,wBAAI,CAAC,IAAI,UACb,IAAI,wBAAI,CAAC,IAAI,aACb,IAAI,wBAAI,CAAC,IAAI,cACb,IAAI,wBAAI,CAAC,IAAI,YACb,IAAI,wBAAI,CAAC,IAAI,cACb,IAAI,wBAAI,CAAC,IAAI,WACb,IAAI,wBAAI,CAAC,IAAI,UACb,IAAI,wBAAI,CAAC,IAAI,UACb,IAAI,wBAAI,CAAC,IAAI","file":"mock_heroes.ddc.js"}');
  // Exports:
  return {
    src__hero__mock_heroes: src__hero__mock_heroes
  };
});

//# sourceMappingURL=mock_heroes.ddc.js.map
