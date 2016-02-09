#is-pwa
> Detects if a given URL is a PWA.


__What is a Progressive Webapp?__

As there is no formal defination yet, let us assume that an URL is a PWA if it statisfies the below:

* Offline supprot with ServiceWorkers.

* Add to home screen.

* Splash screen.


__How could we detect it?__

Well, I am yet to find a soild way for this, has of now thinking to use an headless browser and detect:

* ServiceWorkers.

* `manifest.json`

P.S: Simulating offline in a headless browser and checking if there is any meaniful response seems to be a nice challenge to solve.

