
// Calculte Letters In Textarea [-- 2 --]
    // text area
let $textarea = document.getElementById("textarea-message"),
    // span it contain the number 
    $spanCounter = document.querySelector(".count-letters"),

    $textareaMaxLength = $textarea.getAttribute("maxlength");

$textarea.oninput = () => {

  $spanCounter.textContent = $textareaMaxLength  - $textarea.value.length;

  $spanCounter.style.transform = `rotate(${$textarea.value.length}deg)`;
  
};

