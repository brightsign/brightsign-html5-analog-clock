BrightSign HTML5 Analog Clock
======================

## API
&lt;analog-clock x=&quot;{{x}}&quot; y=&quot;{{y}}&quot; r=&quot;{{r}}&quot; w=&quot;{{w}}&quot; h=&quot;{{h}}&quot; seconds=&quot;{{seconds}}&quot; draw-face=&quot;{{drawFace}}&quot;
              face=&quot;face&quot; background=&quot;background&quot;
              h-hand=&quot;hHand&quot;
              m-hand=&quot;mHand&quot; s-hand=&quot;sHand&quot; tz-offset=&quot;{{tzOffset}}&quot;&gt;&lt;/analog-clock&gt;


All of the parameters, namely x, y, r, w, h, seconds, drawFace, face, background, hHand, mHand, sHand, tzOffset are typically supplied as a querystring, for example:

http://localhost/index.html#?format=style%3Dround%3Bw%3D900%3Bh%3D900%3Btimezone%3D320%3Bopacity%3D0.8%3Bcolor%3Dblue%3Br%3D90%25%3BhColor%3D%23333%3BmColor%3D%23888%3BfColor%3D%23159%3Bseconds%3Dfalse

## Parameters
- w, h: Optional. Width and height in pixels. Must match the clock background image, if supplied (see 'face'). Default: 900
- x, y: Optional. Offset in pixels from center. Moves the hands from the center position by x, y. Default: 0
- r: Optional. Radius, can be pixels or %. Default: 100%
- face: Optional. Clock face background image, can be specified using 'path', 'face' or 'backgroundImage'. Default: draw a face
- fColor: Optional. Face color (if drawn). Default: black
- color: Optional. Hand color (individual hand colors can override this). Default: see individual hand colors
- hColor: Optional. Hour hand color. Default: #333
- mColor: Optional. Minute hand color. Default: #888
- sColor: Optional. Second hand color. Default: #bb0000
- seconds: Optional. Show second hand. Default: true
- style: Optional. Hand style: 'round', 'square' or 'butt'. Can also be specified using 'strokeLinecap'. Default: round
- opacity: Optional. Range: 0-1.0. Opacity of text or hands. Default: 1.0.
- timezone: Optional. In minutes relative to UTC. This overrides the time on the BS player. Default: same as the player's timezone.

