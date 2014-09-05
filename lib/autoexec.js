var path = require('path');

var open  = require('open');
var debug = require('debug')('csgo:autoexec');

var File = require('./file');

module.exports = AutoExec;

function AutoExec(opt) {
    if(!(this instanceof AutoExec)) {
        return new AutoExec(opt);
    }

    if(!(opt && opt.path)) {
        throw new Error('invalid init params');
    }

    this.commands = null;

    this.path = path.join(opt.path, 'csgo/cfg/autoexec.cfg');

    this.file = File({
        path: this.path
    });
}

AutoExec.prototype.open = function() {
    open(this.path);
};

/**
 * remove the host_writeconfig
 * @param  {Array} commands
 * @return {Array}
 */
AutoExec.prototype._filter = function(commands) {
    var index = commands.indexOf('host_writeconfig');

    if(index > -1) {
        commands.splice(index, 1);
    }

    return commands;
};

/**
 * get user auto commands
 * @param  {Function} callback
 * @return {Array} commands
 */
AutoExec.prototype.get = function(callback) {
    var self = this;

    debug('#get');

    self.file.read(function(err, lines) {
        if(err) {
            debug('#get error', err);

            return callback(err);
        }

        self.commands = self._filter(lines);

        debug('#get success');

        callback(null, self.commands);
    });
};

AutoExec.prototype.set = function(commands, callback) {
    var self = this;

    debug('#set');

    commands = self._filter(commands);
    commands.push('host_writeconfig');

    self.file.write(commands, function(err) {
        if(err) {
            return callback(err);
        }

        self.commands = commands;

        debug('#set success');

        callback(null);
    });
};