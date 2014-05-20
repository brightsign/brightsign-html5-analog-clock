Tightrope Analog Clock
======================

## API
&lt;analog-clock x=&quot;450&quot; y=&quot;450&quot; r=&quot;400&quot; w=&quot;900&quot; h=&quot;900&quot; show-seconds=&quot;true&quot; show-clock-face=&quot;false&quot;&gt; &lt;/analog-clock&gt;

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

