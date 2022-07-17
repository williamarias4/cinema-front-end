var isMouseOverElement = false;

let style_on_hover = (img) => {

    return function () {
        isMouseOverElement = true;
        if (isMouseOverElement === true) {
            img.style.width = "100%";
            img.style.opacity = "20%";
        }
    };
}

let style_mouseout = (img) => {

    return function () {
        isMouseOverElement = false;
        if (isMouseOverElement === false) {
            if (window.matchMedia('(max-device-width: 700px)').matches) {
                img.style.width = "95%";
                img.style.opacity = "100%";
                return;
            }
            img.style.width = "90%";
            img.style.opacity = "100%";
        }
    }
}

function style_outside_element_onhover(element_to_hover, element_to_style) {
    element_to_hover.addEventListener('mouseover', style_on_hover(element_to_style));
    element_to_hover.addEventListener('mouseout', style_mouseout(element_to_style));

}

export { style_outside_element_onhover, style_on_hover, style_mouseout };