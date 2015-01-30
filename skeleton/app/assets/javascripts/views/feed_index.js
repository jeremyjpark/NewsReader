NewsReader.Views.FeedIndex = Backbone.View.extend({

  template: JST['feed_index'],

  initialize: function() {
    this.collection = new NewsReader.Collections.Feeds()
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    $('.content').empty();
    var content = this.template({ feeds: this.collection });
    this.$el.html(content);
    $('.content').html(this.$el);
  }
})
