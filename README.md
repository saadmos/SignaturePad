## Custom Widget for Wakanda 8 BUILD : 8.158756 (http://wakanda.org)

The SignaturePad allows you drawing smooth signatures. It's HTML5 canvas based and uses variable width Bezier curve interpolation
This widget is an integration of JQUERY PLUGIN from : https://github.com/szimek/signature_pad


![Example](https://f.cloud.github.com/assets/9873/268046/9ced3454-8efc-11e2-816e-a9b170a51004.png)


**It works in all modern desktop and mobile browsers and doesn't depend on any external libraries.**

### Properties and Events

This widget has the following properties:
* __dotSize__
(float or function) Radius of a single dot.
* __minWidth__
(float) Minimum width of a line. Defaults to 0.5.
* __maxWidth__
(float) Maximum width of a line. Defaults to 2.5.
* __backgroundColor__
(string) Color used to clear the background. Can be any color format accepted by context.fillStyle. Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
* __penColor__
(string) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
* __velocityFilterWeight__
(float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.


#### Events :
* __onBegin__
(function) Callback when stroke begin.
* __onEnd__
(function) Callback when stroke end.

####Methods :

* __clear__ 
* (function) clear the widget
* __isEmpty__ 
* (function) return true if there is not signature in the widget




### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
