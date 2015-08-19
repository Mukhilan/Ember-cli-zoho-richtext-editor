import Ember from 'ember';

export default Ember.Component.extend({
  defaultRichTextOptions: {},

  richTextElement: function() {
    return this.$("#rich-text-editor");
  }.property(),

  didInsertElement: function() {
    var richTextElement = this.get("richTextElement");

    ZE_Init.init()
  },
});
