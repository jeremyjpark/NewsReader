NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feed_show"],

  render: function() {
    var content = this.template({ feed: this.model });
    $('.content').append(this.$el);
    var $feed = $('.display_feed')
    if (!$feed[0]) {
      $feed = $("<div>");
      $feed.addClass("display_feed");
      $feed.append(content);
    } else {
      $feed = $('.display_feed').html(content)
    }
      $('.content').append($feed);

  }
})
