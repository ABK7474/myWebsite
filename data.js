// Site content you update yourself. Both the page (script.js) and the AI
// assistant (api/profile.js) read from here, so edit only this file.
//
// - photo:    path to your photo, e.g. 'images/profile.jpg' (null shows "ABK")
// - cv:       path to your CV PDF, e.g. 'cv.pdf' (null hides the CV button)
// - now:      the "Currently" card; set to null to hide it
// - projects: newest first; the section is hidden while the list is empty
//
// Project fields: title, desc ({ tr, en }), tags [..], github, demo, image
// (github/demo/image are optional; leave out or set to null).
const SITE_DATA = {
    photo: null,
    cv: null,

    now: null,
    // now: {
    //     tr: 'STM32 üzerinde FreeRTOS öğreniyorum ve ESP32 ile bir sensör ağı kuruyorum.',
    //     en: 'Learning FreeRTOS on STM32 and building a sensor network with ESP32.'
    // },

    projects: [
        // {
        //     title: 'Akıllı Sera İzleme',
        //     desc: {
        //         tr: 'ESP32 ve nem/sıcaklık sensörleriyle seranın durumunu ölçen, verileri MQTT ile panele gönderen sistem.',
        //         en: 'ESP32-based system that reads humidity/temperature sensors and publishes data to a dashboard over MQTT.'
        //     },
        //     tags: ['ESP32', 'C++', 'MQTT'],
        //     github: 'https://github.com/kullanici/proje',
        //     demo: null,
        //     image: 'images/sera.jpg'
        // },
    ]
};

if (typeof module !== 'undefined') module.exports = SITE_DATA;
