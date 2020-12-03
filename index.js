/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
module.exports = {};

function drawString(text, x, y, shadow = true) {
    if (shadow) Renderer.drawStringWithShadow(text, x, y);
    else Renderer.drawString(text, x, y);
}

register("renderOverlay", onRender);

function onRender() {
    drawString("test", 100, 100);
}
