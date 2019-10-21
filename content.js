var DownloadIcon = `<span class="dijit dijitReset dijitInline dijitToggleButton dijitToggleButtonActive dijitActive" role="presentation" dir="ltr" widgetid="webmap-measure" id="image-download">
<span class="dijitReset dijitInline dijitButtonNode" role="presentation">
<span class="dijitReset dijitStretch dijitButtonContents" role="button" aria-labelledby="webmap-measure_label" tabindex="-1" id="webmap-download" title="Download Image" style="user-select: none;">
<span class="dijitReset dijitInline dijitIcon esriMeasureIcon" data-dojo-attach-point="iconNode"></span><span class="dijitReset dijitToggleButtonIconChar">●</span><span class="dijitReset dijitInline dijitButtonText" id="webmap-download-image_label">Ambil Gambar</span></span></span><input type="button" value="" class="dijitOffScreen" data-dojo-attach-event="onclick:_onClick" tabindex="-1" aria-hidden="true" data-dojo-attach-point="valueNode"></span>`

$("#webmap-toolbar-left").append(DownloadIcon)

$("#image-download").click(function(e){
  alert("hello world")
})
