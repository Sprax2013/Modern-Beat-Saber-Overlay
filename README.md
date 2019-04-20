# Modern Beat Saber Overlay
A web-based overlay for [Beat Saber](http://beatsaber.com/)

![preview](https://i.imgur.com/4s8A9En.png)


## Installation (OBS)
1. Download and install the [Beat Saber HTTP Status plugin](https://github.com/opl-/beatsaber-http-status/releases)
2. Create a Browser source

![image](https://i.imgur.com/8YpUqlC.png)

3. Set the URL as `https://sprax2013.github.io/Modern-Beat-Saber-Overlay/` and the size equal to your canvas size (1280x720, etc.)

![image](https://i.imgur.com/56D9ZCJ.png)

4. (Optional) For 1080p canvases, add the `scale` modifier (ex. `https://sprax2013.github.io/Modern-Beat-Saber-Overlay/?modifiers=scale`) to scale the overlay by 1.5x


## Options
Options are added to the URL query as such:

```
https://sprax2013.github.io/Modern-Beat-Saber-Overlay/?modifiers=top
https://sprax2013.github.io/Modern-Beat-Saber-Overlay/?modifiers=top,scale
https://sprax2013.github.io/Modern-Beat-Saber-Overlay/?modifiers=top&lang=de
https://sprax2013.github.io/Modern-Beat-Saber-Overlay/?port=5562
```
etc.


### `modifiers`
Multiple modifiers can be seperated with commas.

- `top`
	* Moves the overlay to the top and reverses the layout vertically
- `rtl`
	* Moves the overlay to the right and uses right-to-left text
- `scale`
	* Scales the overlay by 1.5x, for use on 1080p canvases
- `test`
	* Makes the background black, for testing purposes


### `ip` and `port`
Listen to events from another IP and/or port.


### `lang`
Sets the language to use (Default is `en`).

Currently supported:
* `en` - English / English
* `de` - German / Deutsch
