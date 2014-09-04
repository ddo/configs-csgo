var fs = require('fs');

var home  = require('home');
var debug = require('debug')('csgo:file');

module.exports = File;

function File(opt) {
    if(!(this instanceof File)) {
        return new File(opt);
    }

    opt = opt || {};

    this.new_line = opt.new_line || '\n';
    this.path     = opt.path;
}

/**
 * read file
 * @param  {Function} callback
 * @return {String} file text
 */
File.prototype.read = function(callback) {
    var self = this;

    debug('#read');

    fs.readFile(self.path, {
        encoding: 'utf8'
    }, function(err, text) {
        if(err) {
            debug('#read error', err);

            return callback(err);
        }

        debug('#read success');
        callback(null, self._filter(text));
    });
};

/**
 * write file
 * @param  {Function} callback
 */
File.prototype.write = function(data, callback) {
    var self = this;

    debug('#write');

    fs.writeFile(self.path, data.join(self.new_line), function(err) {
        if(err) {
            debug('#write error', err);

            return callback(err);
        }

        debug('#write success');
        callback(null);
    });
};

/**
 * remove comment/empty lines
 * push line into array
 * 
 * @param  {Function} callback
 * @return {Array} line array
 */
File.prototype._filter = function(text) {
    debug('#_filter');

    var lines = text.split(this.new_line);
    var line_arr = [];

    for(var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();

        if(line.indexOf('//') === 0 || line.length == 0) {
            continue;
        }

        line_arr.push(line);
    };

    debug('#_filter success');
    return line_arr;
};