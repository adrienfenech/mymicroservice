/**
 * Created at 03/06/2018
 * By Adrien
 */
'use strict';

/**
 * Load configuration file and initialize Hydra.
 */
const MM = require('ms-manager');
const DM = require('./demoManager');
let config = require(`./config/config.json`) || {};
config['hydra']['redis']['url'] = process.env.REDIS_PORT + '/0';

MM.init(config, (err, serviceInfo) => {
    if (err) {
        console.error(err);
    } else {
        /**
         * Our micro-service is now up.
         * We can start to register our message listeners
         */
        console.log('#Micro-service UP#');

        /**
         * We subscribe to "demo-message-sync".
         * When we will receive this message, we will process it (synchronously)
         * and send back the answer
         */
        MM.subscribe('demo-message-sync', (bdy, msg) => {


            const result = DM.requestSyncMsg(bdy);




            if (result instanceof Error) {
                return msg.replyErr(result);
            } else {
                return msg.reply(result);
            }
        });

        /**
         * We subscribe to "demo-message-async".
         * When we will receive this message, we will process it (asynchronously)
         * and send back the answer
         */
        MM.subscribe('demo-message-async', (bdy, msg) => {
            const result = DM.requestAsyncMsg(bdy, (err, result) => {
                if (err) {
                    return msg.replyErr(err);
                } else {
                    return msg.reply(result);
                }
            });
        });
    }
});