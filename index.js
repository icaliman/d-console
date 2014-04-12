module.exports = Console

function Console() {}

Console.prototype.view = __dirname;

Console.prototype.create = function(model, dom) {
//  TODO: save commands list to localStorage
  model.set('commands', []);
};

Console.prototype.newCommand = function() {
  var model = this.model;
  var command = model.del('command');
  var index = model.push('commands', {text: command});

  model.set("waitingResult", true);

  this.emit('newCommand', command, function(err, result) {
    if (err) {
      model.set("commands." + (index - 1) + ".error", true);
      model.set("commands." + (index - 1) + ".result", err);
    } else {
      model.set("commands." + (index - 1) + ".result", result);
    }
    model.set("waitingResult", false);
  });
};

Console.prototype.stringify = function(e) {
  if (typeof e === 'object') {
    return JSON.stringify(e);
  }
  return e && e + '';
};

Console.prototype.selectConsoleInput = function() {
  this.consoleInput.focus();
};