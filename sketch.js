import WaveSurfer from '<script src="https://unpkg.com/wavesurfer.js@7"></script>'

const wavesurfer = WaveSurfer.create({
  container: document.body,
  waveColor: 'rgb(200, 0, 200)',
  progressColor: 'rgb(100, 0, 100)',
  url: 'https://raw.githubusercontent.com/mbmotorcyclesproject/wavesurfer/main/07020209.wav',
})

wavesurfer.on('click', () => wavesurfer.playPause())

wavesurfer.once('play', () => {
})
