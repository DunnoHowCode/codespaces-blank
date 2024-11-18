left = document.querySelector('.lel');
right = document.querySelector('.rofl');
path = document.querySelector('.path');
inside = document.querySelector('.inside');
text = document.querySelector('p');
inside.style.display="none";

left.addEventListener ('click', function() {
    left.style.display="none";
    right.style.display="none";
    path.style.display="none";
    inside.style.display="block";
    text.innerHTML="skedadle";
});

inside.addEventListener ('dblclick', function() {
    text.innerHTML="that's an awfully hot coffee pot"

});