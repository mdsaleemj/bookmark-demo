var app = app || {};

var BookMarkList = Backbone.Collection.extend({
    model : Bookmark,
    url   : /api/bookmark
});
