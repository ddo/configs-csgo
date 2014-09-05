var fs = require('fs');
var os = require('os');

var home = require('home');
var open = require('open');

var AutoBuy  = require('./autobuy');
var AutoExec = require('./autoexec');
var Config   = require('./config');

module.exports = CSGO;

function CSGO(opt) {
    if(!(this instanceof CSGO)) {
        return new CSGO(opt);
    }

    opt = opt || {};

    this.os  = os.platform();

    switch(this.os) {
        case 'darwin':
            this.path = home.resolve('~/Library/Application Support/Steam/SteamApps/common/Counter-Strike Global Offensive');
            break;
        default:
            this.path = 'C:/Steam/steamapps/common/Counter-Strike Global Offensive';
            break;
    }
}

CSGO.prototype.init = function() {
    this.autobuy = AutoBuy({
        path: this.path
    });

    this.autoexec = AutoExec({
        path: this.path
    });

    this.config = Config({
        path: this.path
    });
};

CSGO.prototype.run = function() {
    open('steam://run/730');
};

CSGO.prototype.checkDir = function(callback) {
    fs.exists(this.path, callback);
};