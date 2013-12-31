# backbone-local-storage

Simple localStorage adapter for Backbone models

## Usage

```javascript
var MyModel = Backbone.Model.extend(Backbone.LocalStorage, {
  id: 'myModel',
  
  defaults: {
    foo: 'bar'
  }
});

var model = new MyModel();
model.set('baz', 'bat');
model.save();
```
