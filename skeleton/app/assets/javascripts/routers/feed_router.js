NewsReader.Routers.FeedRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    'feeds/:id': 'show'
  },

  // initialize: function(options) {
  //   this.$rootEl = options.$rootEl;
  // }

  index: function() {
    var feedIndex = new NewsReader.Views.FeedIndex();
    feedIndex.collection.fetch()
    // return feedIndex.collection;
  },

  show: function (id) {
    // alert("FUCK THIS SHIT" + id)
    var feed = new NewsReader.Models.Feed({ id: id });
    var feedShow = new NewsReader.Views.FeedShow({ model: feed });
    feed.fetch({
      success: function() {
        feedShow.render();
      }
    })

  },

  _swapView: function (newView) {
    this.currentView && this.currentView.remove();
    $("body").html(newView.render().$el);

    this.currentView = newView;
  }

});
