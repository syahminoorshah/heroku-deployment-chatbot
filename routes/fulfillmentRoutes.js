const {WebhookClient} = require('dialogflow-fulfillment');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function roro(agent) {
            agent.add(`Welcome to my Roro fulfillment!`);
        }

        function Option1Tracking(agent) {
            agent.add(`testing`);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('roro', roro);
        intentMap.set('testing',Option1Tracking)

        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });

} 