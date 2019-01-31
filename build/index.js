'use strict';

var ping = require('net-ping');
var tcpp = require('tcp-ping');
var DNS = require('dns');
var readLine = require('readline');
var session = ping.createSession();
var pingT = ping.RequestTimedOutError;
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter: ", function (answer) {
    DNS.lookup(answer, function (err, address, family) {
        console.log('Address of syte : ' + address + ', family is IPv-' + family);
        session.pingHost(address, function (err, target) {
            if (err) {
                if (error instanceof pingT) console.log(target + ' : Not Alive');else console.log(target + ' : ' + error.toString());
            } else {
                tcpp.probe(answer, 80, function (err, available) {
                    console.log(available);
                });
                tcpp.ping({ address: answer }, function (err, data) {
                    console.log(data);
                });
                console.log(target + ': Alive');
            }
        });
    });
    rl.close();
});