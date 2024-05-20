const { Liquid } = require('liquidjs');

// Create a new Liquid engine
const engine = new Liquid();

// Define a simple template
const template = `
Hello, {{ name }}! Welcome to our chatbot.
`;

// Render the template with data
engine.parseAndRender(template, { name: 'John' })
    .then(rendered => console.log(rendered))
    .catch(err => console.error(err));
