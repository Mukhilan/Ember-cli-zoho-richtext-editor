import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  defaultRichTextOptions: {},

  editorMode: "richtext",

  textContent: "",

  count: 0,

  richTextEditorId:null,

  value:"",

  defaultContent: "",

  editor: null,

  toolbarOptions:[],

  "id": Ember.computed.alias('richTextEditorId'),

  attributeBindings:    ['id'],

  didInsertElement: function() {
    var editorProps = this._getEditorProperties(),
        editor = null,
        self = this;

    Ember.run.later(function() {
      editor = ZE.create(editorProps);
      self.set("editor", editor);

      $(editor.doc)
        .on("mouseleave", function() {
          self.doUpdate();
        })
        .bind("DOMSubtreeModified", function() {
          self.doUpdate();
        })
    }, 800);

    this._super();
  },

  _getEditorProperties: function() {
    var defaultContent = this.get("defaultContent"),
        richTextElement = this.get("richTextEditorId"),
        toolbarOptions = this.get("toolbarOptions"),
        editorMode = this.get("editorMode"),
        editorProps= {};

    $.extend(editorProps, {
        "id": richTextElement,
        "content": defaultContent,
        "mode" : editorMode
    });

    $.each(toolbarOptions, function(){
      Object.keys(toolbarOptions).forEach(function(toolbarOption) {
        editorProps[toolbarOption] = toolbarOptions[toolbarOption]
      });

    });

    return editorProps;
  },

  doUpdate: function() {
    var editor = this.get("editor"),
        editorContent = editor.getContent(),
        textContent = $("<p>").html(editorContent).text();


    this.set("value", editorContent);
    this.set("textContent" , textContent);
    this.set("count" , textContent.length);
  }
});
