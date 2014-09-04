var open = require('open');

var AutoBuy = require('./autobuy');
var AutoExec = require('./autoexec');
var Config = require('./config');

module.exports = CSGO;

function CSGO(opt) {
    if(!(this instanceof CSGO)) {
        return new CSGO(opt);
    }

    opt = opt || {};

    this.autobuy = AutoBuy();
    this.autoexec = AutoExec();
    this.config = Config();
}

CSGO.prototype.run = function() {
    open('steam://run/730');
}

CSGO.prototype.test = function() {
    // this.autobuy.open();

    // this.autobuy.get(function(err, weapons) {
    //     console.log(err);
    //     console.log(weapons);
    // });
    // 
    // var weapons = [
    //     'awp',
    //     'm4a1',
    //     'ak47',
    //     'p90',
    //     'primammo',
    //     'secammo',
    //     'vesthelm',
    //     'vest',
    //     'defuser',
    //     'hegrenade',
    //     'flashbang',
    //     'smokegrenade',
    //     'molotov',
    //     'incgrenade'
    // ];

    // this.autobuy.set(weapons, function(err){
    //     console.log(err);
    // });

    // this.autoexec.open();
    
    // this.autoexec.get(function(err, commands) {
    //     console.log(err);
    //     console.log(commands);
    // });

    // var commands = [
    //     'developer "1";',
    //     'con_filter_text "Damage";',
    //     'con_filter_text_out "Player:";',
    //     'con_filter_enable "2";'
    // ];
    // var commands = [];
    
    // this.autoexec.set(commands, function(err){
    //     console.log(err);
    // });

    // this.config.open();
    
    // this.config.get(function(err, configs) {
    //     console.log(err);
    //     console.log(configs);
    // });

    // var config = [];
    
    // this.config.set(config, function(err){
    //     console.log(err);
    // });
};