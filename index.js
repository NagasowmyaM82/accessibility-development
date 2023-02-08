// import { axeHtmlReporter } from 'axe-html-reporter';

// (() => {
//     const results = { violations: {}, passes: {}, incomplete: {}, inapplicable: {}, url: 'http://example.com' }; 
//     // creates html report with the default name `accessibilityReport.html` file
//     axeHtmlReporter({
//         violations: results.violations,
//         passes: results.passes,
//         incomplete: results.incomplete,
//     });
//     // creates html report with the default name `accessibilityReport.html` file and adds url and projectKey
//     axeHtmlReporter({
//         violations: results.violations,
//         passes: results.passes,
//         incomplete: results.incomplete,
//         projectKey: 'JIRA_PROJECT_KEY',
//         url: results.url,
//     });
//     // creates html report with the name `exampleReport.html` in 'axe-reports' directory and adds url and projectKey to the header
//     axeHtmlReporter({
//         violations: results.violations,
//         passes: results.passes,
//         incomplete: results.incomplete,
//         projectKey: 'JIRA_PROJECT_KEY',
//         outputDir: 'axe-reports',
//         url: results.url,
//         fileName: 'exampleReport.html',
//     });
// })();

// import { runAxe } from '@testcafe-community/axe';
// import { createHtmlReport } from 'axe-html-reporter';
 
// fixture('TestCafe tests with Axe').page('http://example.com');
 
// test('Automated accessibility testing', async (t) => {
//     const axeContext = { exclude: [['select']] };
//     const axeOptions = {
//         rules: {
//             'object-alt': { enabled: true },
//             'role-img-alt': { enabled: true },
//             'input-image-alt': { enabled: true },
//             'image-alt': { enabled: true },
//         },
//     };
//     const { error, results } = await runAxe(axeContext, axeOptions);
//     await t.expect(error).notOk(`axe check failed with an error: ${error.message}`);
//     // creates html report with the default file name `accessibilityReport.html`
//     createHtmlReport({
//         results,
//         options: {
//             projectKey: 'EXAMPLE',
//         },
//     });
// });

import { runAxe } from '@testcafe-community/axe';
import { createHtmlReport } from 'axe-html-reporter';

fixture('TestCafe tests with Axe').page('https://www.microsoft.com/en-in/');

test('Automated accessibility testing', async (t) => {
    const axeContext = { exclude: [['select']] };
    const axeOptions = {
        rules: {
            'object-alt': { enabled: true },
            'role-img-alt': { enabled: true },
            'input-image-alt': { enabled: true },
            'image-alt': { enabled: true },
        },
    };
    const { error, results } = await runAxe(axeContext, axeOptions);
    await t.expect(error).notOk(`axe check failed with an error: ${error}`);
    // creates html report with the default file name `accessibilityReport.html`
    createHtmlReport({
        results,
        options: {
            projectKey: 'EXAMPLE',
        },
    });
});
