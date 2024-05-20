// Create a new Liquid engine
const engine = new liquidjs.Liquid();

// Define a simple template with dynamic title and content
const template = `
<div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
</div>
`;

// Render the template with dynamic data
engine.parseAndRender(template, { 
    title: 'Dynamic Title', 
    content: 'This is dynamic content rendered using Liquid JS.'
})
.then(rendered => {
    // Append the rendered HTML to the div with id "dynamicContent"
    document.getElementById('dynamicContent').innerHTML = rendered;
})
.catch(err => console.error(err));
