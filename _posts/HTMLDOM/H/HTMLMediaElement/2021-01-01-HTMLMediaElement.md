---
title: HTMLMediaElement
permalink: /HTMLDOM/HTMLMediaElement/
excerpt: "El HTMLMediaElement controla la reproducción de audio y video en la web."
date: 2025-02-09
last_modified_at: 2025-02-10
key: HTMLDOM.H.HTMLMediaElement
category: HTMLDOM
tags: [interface htmldom,dom level 2]
image: "/assets/images/htmldom.png"
sidebar:
  nav: htmldom
---

## Descripción


El elemento `HTMLMediaElement` del HTML DOM API es una interfaz que proporciona los métodos y propiedades necesarios para controlar la reproducción de elementos multimedia como audio y video. Esta interfaz es heredada por los elementos `HTMLAudioElement` y `HTMLVideoElement`. Mediante `HTMLMediaElement` podemos reproducir, pausar, cargar y controlar todo tipo de contenido multimedia en una página web.


## Sintaxis


```javascript
HTMLMediaElement
```


## Constructores

- N/A

## Propiedades

- [audioTracks](https://www.w3api.com/HTMLDOM/HTMLMediaElement/audioTracks/)
- [autoplay](https://www.w3api.com/HTMLDOM/HTMLMediaElement/autoplay/)
- [buffered](https://www.w3api.com/HTMLDOM/HTMLMediaElement/buffered/)
- [controls](https://www.w3api.com/HTMLDOM/HTMLMediaElement/controls/)
- [controlsList](https://www.w3api.com/HTMLDOM/HTMLMediaElement/controlsList/)
- [crossOrigin](https://www.w3api.com/HTMLDOM/HTMLMediaElement/crossOrigin/)
- [currentSrc](https://www.w3api.com/HTMLDOM/HTMLMediaElement/currentSrc/)
- [currentTime](https://www.w3api.com/HTMLDOM/HTMLMediaElement/currentTime/)
- [defaultMuted](https://www.w3api.com/HTMLDOM/HTMLMediaElement/defaultMuted/)
- [defaultPlaybackRate](https://www.w3api.com/HTMLDOM/HTMLMediaElement/defaultPlaybackRate/)
- [disableRemotePlayback](https://www.w3api.com/HTMLDOM/HTMLMediaElement/disableRemotePlayback/)
- [duration](https://www.w3api.com/HTMLDOM/HTMLMediaElement/duration/)
- [ended](https://www.w3api.com/HTMLDOM/HTMLMediaElement/ended/)
- [error](https://www.w3api.com/HTMLDOM/HTMLMediaElement/error/)
- [loop](https://www.w3api.com/HTMLDOM/HTMLMediaElement/loop/)
- [mediaKeys](https://www.w3api.com/HTMLDOM/HTMLMediaElement/mediaKeys/)
- [muted](https://www.w3api.com/HTMLDOM/HTMLMediaElement/muted/)
- [networkState](https://www.w3api.com/HTMLDOM/HTMLMediaElement/networkState/)
- [paused](https://www.w3api.com/HTMLDOM/HTMLMediaElement/paused/)
- [playbackRate](https://www.w3api.com/HTMLDOM/HTMLMediaElement/playbackRate/)
- [played](https://www.w3api.com/HTMLDOM/HTMLMediaElement/played/)
- [preload](https://www.w3api.com/HTMLDOM/HTMLMediaElement/preload/)
- [preservesPitch](https://www.w3api.com/HTMLDOM/HTMLMediaElement/preservesPitch/)
- [readyState](https://www.w3api.com/HTMLDOM/HTMLMediaElement/readyState/)
- [remote](https://www.w3api.com/HTMLDOM/HTMLMediaElement/remote/)
- [seekable](https://www.w3api.com/HTMLDOM/HTMLMediaElement/seekable/)
- [seeking](https://www.w3api.com/HTMLDOM/HTMLMediaElement/seeking/)
- [sinkId](https://www.w3api.com/HTMLDOM/HTMLMediaElement/sinkId/)
- [src](https://www.w3api.com/HTMLDOM/HTMLMediaElement/src/)
- [srcObject](https://www.w3api.com/HTMLDOM/HTMLMediaElement/srcObject/)
- [textTracks](https://www.w3api.com/HTMLDOM/HTMLMediaElement/textTracks/)
- [videoTracks](https://www.w3api.com/HTMLDOM/HTMLMediaElement/videoTracks/)
- [volume](https://www.w3api.com/HTMLDOM/HTMLMediaElement/volume/)

## Métodos

- [addTextTrack()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/addTextTrack/)
- [captureStream()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/captureStream/)
- [canPlayType()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/canPlayType/)
- [fastSeek()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/fastSeek/)
- [load()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/load/)
- [pause()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/pause/)
- [play()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/play/)
- [seekToNextFrame()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/seekToNextFrame/)
- [setMediaKeys()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/setMediaKeys/)
- [setSinkId()](https://www.w3api.com/HTMLDOM/HTMLMediaElement/setSinkId/)

## Eventos

- [abort](https://www.w3api.com/HTMLDOM/HTMLMediaElement/abort/)
- [canplay](https://www.w3api.com/HTMLDOM/HTMLMediaElement/canplay/)
- [canplaythrough](https://www.w3api.com/HTMLDOM/HTMLMediaElement/canplaythrough/)
- [durationchange](https://www.w3api.com/HTMLDOM/HTMLMediaElement/durationchange/)
- [emptied](https://www.w3api.com/HTMLDOM/HTMLMediaElement/emptied/)
- [encrypted](https://www.w3api.com/HTMLDOM/HTMLMediaElement/encrypted/)
- [ended](https://www.w3api.com/HTMLDOM/HTMLMediaElement/ended/)
- [error](https://www.w3api.com/HTMLDOM/HTMLMediaElement/error/)
- [loadeddata](https://www.w3api.com/HTMLDOM/HTMLMediaElement/loadeddata/)
- [loadedmetadata](https://www.w3api.com/HTMLDOM/HTMLMediaElement/loadedmetadata/)
- [loadstart](https://www.w3api.com/HTMLDOM/HTMLMediaElement/loadstart/)
- [pause](https://www.w3api.com/HTMLDOM/HTMLMediaElement/pause/)
- [play](https://www.w3api.com/HTMLDOM/HTMLMediaElement/play/)
- [playing](https://www.w3api.com/HTMLDOM/HTMLMediaElement/playing/)
- [progress](https://www.w3api.com/HTMLDOM/HTMLMediaElement/progress/)
- [ratechange](https://www.w3api.com/HTMLDOM/HTMLMediaElement/ratechange/)
- [seeked](https://www.w3api.com/HTMLDOM/HTMLMediaElement/seeked/)
- [seeking](https://www.w3api.com/HTMLDOM/HTMLMediaElement/seeking/)
- [stalled](https://www.w3api.com/HTMLDOM/HTMLMediaElement/stalled/)
- [suspend](https://www.w3api.com/HTMLDOM/HTMLMediaElement/suspend/)
- [timeupdate](https://www.w3api.com/HTMLDOM/HTMLMediaElement/timeupdate/)
- [volumechange](https://www.w3api.com/HTMLDOM/HTMLMediaElement/volumechange/)
- [waiting](https://www.w3api.com/HTMLDOM/HTMLMediaElement/waiting/)
- [waitingforkey](https://www.w3api.com/HTMLDOM/HTMLMediaElement/waitingforkey/)

## Ejemplo


Un ejemplo de uso del elemento `HTMLMediaElement` sería la creación de un reproductor de audio personalizado:


```javascript
// Crear una instancia de audio
const audio = new Audio('music.mp3');

// Configurar propiedades
audio.volume = 0.5;
audio.loop = true;

// Añadir controles de reproducción
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Escuchar eventos
audio.addEventListener('ended', () => {
    console.log('La reproducción ha terminado');
});
```


## Artículos

- [Buscar por un vídeo en HTML5](https://lineadecodigo.com/html5/buscar-por-un-video-en-html5/)
