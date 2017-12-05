'use strict';
class Question {
  constructor(question){
    this.content = question;
    this.save();
  }

  static All() {
    return this._All;
  }

  save() {
    return this.constructor._All.push(this);
  }

  static Find(questionIndex) {
    return this.All()[questionIndex - 1];
  }
}

Question._All = [];
