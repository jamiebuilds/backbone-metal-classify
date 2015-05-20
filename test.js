var classify = require('./');
var Metal = require('backbone-metal');

function MyClass() {}
MyClass.staticProp = 'foo';
MyClass.extend = 'extend';
MyClass.prototype.protoProp = 'bar';
MyClass.prototype.on = 'on';

var ClassifiedMyClass = classify(MyClass);

if (!(new ClassifiedMyClass() instanceof Metal.Class)) {
  throw 'Classified classes should be instance of Metal.Class by default';
}

if (ClassifiedMyClass.extend !== Metal.Class.extend) {
  throw 'Classified classes should not override built-in static props';
}

if (!ClassifiedMyClass.staticProp) {
  throw 'Classified classes should include its previous static props';
}

if (ClassifiedMyClass.prototype.on !== Metal.Class.prototype.on) {
  throw 'Classified classes should not override built-in proto props';
}

if (!ClassifiedMyClass.prototype.protoProp) {
  throw 'Classified classes should include its previous proto props';
}

if (ClassifiedMyClass.prototype.constructor !== MyClass) {
  throw 'Classified classes should have correct constructor';
}
