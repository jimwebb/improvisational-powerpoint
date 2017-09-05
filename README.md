# Improvisational Powerpoint, or Speech-To-Pictogram

Uses [Web Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) to create a generated-on-the-fly presentation. Talk about whatever you want, and the presentation will follow you!

A [demo](https://jimwebb.com/pictogram/) for [Hack and Tell DC](http://dc.hackandtell.org/), August 2017

- Creates a closed-captioning-style transcript of the words spoken
- A [Natural Language Processing library](http://compromise.cool/) plucks out interesting topics or nouns
- A background image is created from those nouns via a call to the [Flickr API](https://www.flickr.com/services/api/)

## Live Demo
[https://jimwebb.com/pictogram/](https://jimwebb.com/pictogram/) 

Requires [desktop Chrome]((http://caniuse.com/#feat=speech-recognition)). If you decide to try it for realsies, make sure you're close to the mic (a lavalier microphone works best) and speak clearly and not too fast.

## Installation
It's simple HTML/JavaScript, nothing fancy. Dependencies are pulled from CDNs for ease of use; the NLP is installed via `npm` or `yarn` but only to keep it up to date, there's no node involved otherwise.

This must be run on a SSL-enabled web server (e.g., using HTTPS and not directly from a file); those are Chrome's restrictions.

Unpack to the desired directory, then `npm install` to load the dependencies.

## Todo
This was a one-off prototype and isn't under active development. Still, it would be neat to:
- Build it out as a plug-in for [reveal.js](http://lab.hakim.se/reveal-js/#/)
- Talk with accessibility specialists; could something like this be a good-enough solution for deaf audience members when a real interpreter isn't possible? (Talking about the transcription here, not the silly background images.)
- Include credits/links to original Flickr contributors for the generated background images
- SpeechRecognition API occasionally hangs/craps out and it's not clear why

## Sources
JavaScript cribbed heavily from [Google's transcription demo](https://www.google.com/intl/en/chrome/demos/speech.html) with inspiration from the delightfully named [Annyang](https://github.com/TalAter/annyang).