Backbone.LocalStorage = {
  initialize: function() {
    // populate the model using stored and default attributes
    Backbone.Model.prototype.initialize.call(this, this.fetch());
  },
  
  fetch: function() {
    var attrs = JSON.parse(localStorage.getItem(this.id));
    this.set(attrs);
  },
  
  save: function() {
    localStorage.setItem(this.id, JSON.stringify(this.attributes));
  }
};
