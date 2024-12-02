left = document.querySelector('.lel');
right = document.querySelector('.rofl');
path = document.querySelector('.path');
text = document.querySelector('p');
dysto = document.querySelector('.dysto');
plains = document.querySelector('.plains');
prison = document.querySelector('.prison')
path.style.display="none";
plains.style.display="none";
prison.style.display="none";

left.addEventListener ('click', function() {
    left.style.display="none";
    right.style.display="none";
    dysto.style.display="none";
    path.style.display="block";
    text.innerHTML="Instead of continuing to live with chains dragging you down, you decide to take on the sole ambition of freedom. The task is nearly impossible alone, but the thought of someone dying for you is a deterrent, what do you do? <br><br> DBL Click to go alone, or search the screen to get a team anyway.";
});


path.addEventListener ('dblclick', function() {
    text.innerHTML="Being solo, it was easier to hide as you progressed. However you couldn't hide for long, nor could you cover the bases needed to make it out with your limited skill set. You were found and imprisoned for your attempt to escape.";
    path.style.display="none";
    prison.style.display="block";
});

path.addEventListener ('mouseenter', function() {
    text.innerHTML="Where in the—";
    path.style.display="none";
    prison.style.display="block";
});