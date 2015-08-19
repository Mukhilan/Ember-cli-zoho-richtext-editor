import Ember from 'ember';

export default Ember.Controller.extend({

  textAreaValue: "",

  textCount: 0,

  BasicToolbarOptions : {
    toolbar: [
      ["bold"],
      ["italic"],
      ["underline"],
      ["link"],
      ["fontsize"],
      ["justifyleft"],
      ["justifyright"],
      ["justifyfull"],
      ["justifycenter"],
      ["insertunorderedlist"],
      ["insertorderedlist"]
    ]
  }
});
