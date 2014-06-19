BrightSign HTML5 Analog Clock
======================

# API
&lt;analog-clock x=&quot;{{x}}&quot; y=&quot;{{y}}&quot; r=&quot;{{r}}&quot; w=&quot;{{w}}&quot; h=&quot;{{h}}&quot; seconds=&quot;{{seconds}}&quot; draw-face=&quot;{{drawFace}}&quot;
              face-style=&quot;faceStyle&quot; background-style=&quot;backgroundStyle&quot;
              h-hand-style=&quot;hHandStyle&quot;
              m-hand-style=&quot;mHandStyle&quot; s-hand-style=&quot;sHandStyle&quot; tz-offset=&quot;{{tzOffset}}&quot;&gt;&lt;/analog-clock&gt;


All of the parameters, namely x, y, r, w, h, seconds, drawFace, face, backgroundStyle, hHandStyle, mHandStyle, sHandStyle, tzOffset are typically supplied as a querystring, for example:

http://localhost/index.html#?format=lineCap%3Dround%3Bw%3D900%3Bh%3D900%3BtzOffset%3D320%3Bopacity%3D0.8%3Bcolor%3Dblue%3Br%3D90%25%3BhColor%3D%23333%3BmColor%3D%23888%3BfColor%3D%23159%3Bseconds%3Dfalse

# Parameters
There are two types of parameters: those supplied to the &lt;analog-clock&gt; tag, and those provided via a query string.
They are mostly the same, but can be different because in some cases tag parameters are calculated from query string
parameters (eg drawFace), and in some cases one tag parameter can be a combination of several query string
parameters (eg mHandStyle).

## Common Parameters

- w, h: Optional. Width and height in pixels. Must match the clock background image, if supplied (see 'face'). Default: 900
- x, y: Optional. Offset in pixels from center. Moves the hands from the center position by x, y. Default: 0
- r: Optional. Radius of second hand, can be pixels or %. Default: 100%. Hour hand is 80% of second hand length, and minute hand is 60% of second hand length
- tzOffset: Optional. In minutes relative to UTC. This overrides the time on the BS player. Default: same as the player's tzOffset.
- seconds: Optional. Show second hand. Default: true

## API Parameters

- drawFace: Optional. True or false. Determines if the clock face is drawn. Default: automatic if using query string parameters.
- backgroundStyle: JSON-formatted CSS for background of entire clock face. See 'face' below.
- hHandStyle: JSON-formatted CSS for hour hand. See 'lineCap', 'color', 'hColor', 'opacity' below.
- mHandStyle: JSON-formatted CSS for minute hand. See 'lineCap', 'color', 'mColor', 'opacity' below.
- sHandStyle: JSON-formatted CSS for second hand. See 'lineCap', 'color', 'sColor', 'opacity' below.

## Query String Parameters

- face: Optional. Clock face background image, can be specified using 'path', 'face' or 'backgroundImage'. Clock image is scaled to match w, h. Default: draw a face.
- fColor: Optional. Face color (if drawn). Default: black
- color: Optional. Hand color (individual hand colors can override this). Default: see individual hand colors
- hColor: Optional. Hour hand color. Default: #333
- mColor: Optional. Minute hand color. Default: #888
- sColor: Optional. Second hand color. Default: #bb0000
- hWidth, mWidth, sWidth: Optional. Hour, Minute, Second hand width. Integer interpreted as pixels. Defaults: 24, 14, 10 pixels
- lineCap: Optional. Hand style: 'round', 'square' or 'butt'. Default: round
- opacity: Optional. Range: 0-1.0. Opacity of text or hands. Default: 1.0.

