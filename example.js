var CSGO = require('./');

var csgo = CSGO();

// csgo.test();
// csgo.checkDir();

// csgo.autobuy.open();

// csgo.autobuy.get(function(err, weapons) {
//     console.log(err);
//     console.log(weapons);
// });

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

// csgo.autobuy.set(weapons, function(err){
//     console.log(err);
// });

// csgo.autoexec.open();

// csgo.autoexec.get(function(err, commands) {
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

// csgo.autoexec.set(commands, function(err){
//     console.log(err);
// });

// csgo.config.open();

csgo.config.get(function(err, configs) {
    console.log(err);
    console.log(configs);
});

// var config = [];

// csgo.config.set(config, function(err){
//     console.log(err);
// });