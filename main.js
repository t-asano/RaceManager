const MAX_CAMS = 3;

var osc = require('node-osc');
var client = new osc.Client('127.0.0.1', 4000);

var elmById = function (id) {
  return document.getElementById(id);
}

var sendOsc = function (addr, arg1) {
  console.log('sendOSc: ' + addr + ' ' + arg1);
  client.send(addr, arg1);
}

var sendPilotName = function (camid, name) {
  sendOsc('/v1/camera/' + camid + '/label', name);
}

var sendPilotNames = function (heat) {
  for (var i = 1; i <= MAX_CAMS; i++) {
    var id = 'h' + heat + '-p' + i + '-name';
    sendPilotName(i, elmById(id).value);
  }
}

var sendHeat = function (heat) {
  sendPilotNames(heat);
}