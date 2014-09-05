var path = require('path');

var open  = require('open');
var debug = require('debug')('csgo:autobuy');

var File = require('./file');

module.exports = AutoBuy;

function AutoBuy(opt) {
    if(!(this instanceof AutoBuy)) {
        return new AutoBuy(opt);
    }

    if(!(opt && opt.path)) {
        throw new Error('invalid init params');
    }

    this.weapons = null;

    this.path = path.join(opt.path, 'csgo/autobuy.txt');

    this.file = File({
        new_line: '\r\n',
        path: this.path
    });
}

AutoBuy.prototype.open = function() {
    open(this.path);
};

/**
 * get user weapons list
 * @param  {Function} callback
 * @return {Array} weapon array
 */
AutoBuy.prototype.get = function(callback) {
    var self = this;

    debug('#get');

    self.file.read(function(err, lines) {
        if(err) {
            debug('#get error', err);

            return callback(err);
        }

        self.weapons = lines;

        debug('#get success');

        callback(null, self.weapons);
    });
};

/**
 * set auto buy weapon [f1], sort by priority
 * @param {Array}   weapons
 * @param {Function} callback
 */
AutoBuy.prototype.set = function(weapons, callback) {
    var self = this;

    debug('#set');

    self.file.write(weapons, function(err) {
        if(err) {
            return callback(err);
        }

        self.weapons = weapons;

        debug('#set success');

        callback(null);
    });
};