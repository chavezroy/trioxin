var ap4 = new APlayer({
    element: document.getElementById('triox-player'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    mini: false,
    // lrcType: 3,
    theme: '#32cd32',
   // preload: 'metadata',
    mode: 'circulation',
    music: {
        title: 'The Return of the Triox Theme',
        author: 'Extrapolate',
        url: './audio/The%20Return%20of%20the%20Trioxin%20Theme.mp3',
        // pic: './img/Trioxin-Theme----cover-art-.png'
    },

});

// ap4.on('play', function () {
//     console.log('play');
// });
// ap4.on('pause', function () {
//     console.log('pause');
// });