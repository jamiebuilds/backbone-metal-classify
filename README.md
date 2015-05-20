# Backbone Metal Classify

```js
import classify from 'backbone-metal-classify';
import Backbone from 'backbone';

const Model = classify(Backbone.Model);

const MyModel = Model.extend({
  constructor(attrs, options) {
    this._super(attrs, options);
  }
})
```
