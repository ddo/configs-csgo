var path = require('path');

var open  = require('open');
var debug = require('debug')('csgo:config');

var File = require('./file');

module.exports = Config;

function Config(opt) {
    if(!(this instanceof Config)) {
        return new Config(opt);
    }

    if(!(opt && opt.path)) {
        throw new Error('invalid init params');
    }

    this.configs = null;

    this.path = path.join(opt.path, 'csgo/cfg/config.cfg');

    this.file = File({
        path: this.path
    });
}

Config.prototype.open = function() {
    open(this.path);
};

/**
 * get user config list
 * @param  {Function} callback
 * @return {Array} config array
 */
Config.prototype.get = function(callback) {
    var self = this;

    debug('#get');

    self.file.read(function(err, lines) {
        if(err) {
            debug('#get error', err);

            return callback(err);
        }

        self.configs = lines;

        debug('#get success');

        callback(null, self.configs);
    });
};

Config.prototype.set = function(configs, callback) {
    var self = this;

    debug('#set');

    self.file.write(configs, function(err) {
        if(err) {
            return callback(err);
        }

        self.configs = configs;

        debug('#set success');

        callback(null);
    });
};