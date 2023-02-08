# accessibility-development Aduit Tool
1.First install testcafe globally npm i -g testcafe
2.Install npm i -D axe-html-reporter
3.Install npm i -D testcafe axe-core @testcafe-community/axe
4.create .testcaferc.json file in that include {
    "clientScripts": [{ "module": "axe-core/axe.min.js" }]
}
5.Create index.js file and include the following code:
import { runAxe } from '@testcafe-community/axe';
import { createHtmlReport } from 'axe-html-reporter';

fixture('TestCafe tests with Axe').page('https://paytm.com/');

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

6.Run npx testcafe chrome index.js
7.Results:
image.png
image.png
