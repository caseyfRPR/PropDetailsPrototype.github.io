const SEGMENTED_CONTROL_BASE_SELECTOR=".segmented-control-2",SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR=".segmented-control-2 .option input",SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR=".segmented-control-2 .selection";function setup(){forEachElement(".segmented-control-2",(e=>{e.addEventListener("change",updatePillPosition)})),window.addEventListener("resize",updatePillPosition)}function updatePillPosition(){forEachElement(".segmented-control-2 .option input",((e,t)=>{e.checked&&moveBackgroundPillToElement(e,t)}))}function moveBackgroundPillToElement(e,t){document.querySelector(".segmented-control-2 .selection").style.transform="translateX("+e.offsetWidth*t+"px)"}function forEachElement(e,t){Array.from(document.querySelectorAll(e)).forEach(t)}document.addEventListener("DOMContentLoaded",setup);