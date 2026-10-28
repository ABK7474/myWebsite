const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    const cvPath = path.resolve(__dirname, '../cv-source/cv.html');
    await page.goto(`file://${cvPath}`, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: path.resolve(__dirname, '../Ahmet_Burak_Kaynak_CV.pdf'),
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log('CV PDF generated.');
})();
