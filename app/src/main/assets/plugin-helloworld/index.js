
module.exports = function(plugin){
    const runtime = plugin.runtime;
    const scope = plugin.topLevelScope;

    function helloworld(){
    }

    helloworld.stringFromJava = plugin.getStringFromJava();

    helloworld.say = function(message){
        plugin.say(message);
    }

    helloworld.remoteAdd = function (a, b) {
        return plugin.waitForConnection().call('add', {
          a: a,
          b: b
        }, null).get('sum');
    }

    return helloworld;
}