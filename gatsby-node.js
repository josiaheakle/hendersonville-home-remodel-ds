const path = require('path');
const servicesData = require('./src/content/Services.json');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const PageTemplate = path.resolve('src/components/templates/ServicePageTemplate.tsx');
    servicesData.services.forEach(service => {
        createPage({
            path: `services/${service.slug}`,
            component: PageTemplate,
            context: {
                service: service
            }
        })
    })

}