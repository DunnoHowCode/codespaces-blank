left = document.querySelector('.lel');
right = document.querySelector('.rofl');
dolo = document.querySelector('.dolo');
text = document.querySelector('p');
dysto = document.querySelector('.dysto');
minecraft = document.querySelector('.minecraft');
prison = document.querySelector('.prison');
block = document.querySelector('.block');
groupie = document.querySelector('.groupie');
escape = document.querySelector('.outtie');
injured = document.querySelector('.injured');
bottles = document.querySelector('.bottles');

block.style.display="none";
dolo.style.display="none";
minecraft.style.display="none";
prison.style.display="none";
groupie.style.display="none";
escape.style.display="none";
injured.style.display="none";
bottles.style.display="none";

left.addEventListener ('click', function() {
    left.style.display="none";
    right.style.display="none";
    dysto.style.display="none";
    dolo.style.display="inline";
    groupie.style.display="inline";
    text.innerHTML="Instead of continuing to live with chains dragging you down, you decide to take on the sole ambition of freedom. The task is nearly impossible alone, but the thought of someone dying for you is a deterrent, what do you do? <br><br> DBL Click to go alone, or hover over the image to get a team anyway.";
});


dolo.addEventListener ('dblclick', function() {
    text.innerHTML="Being solo, it was easier to hide as you progressed. However you couldn't hide for long, nor could you cover the bases needed to make it out with your limited skill set. You were found and imprisoned for your attempt to escape.";
    dolo.style.display="none";
    groupie.style.display="none";
    prison.style.display="block";
    
});

groupie.addEventListener ('mouseenter', function() {
    text.innerHTML="You made it out! Somehow.";
    dolo.style.display="none";
    groupie.style.display="none";
    escape.style.display="block";
    
});

right.addEventListener ('click', function() {
    left.style.display="none";
    right.style.display="none";
    dysto.style.display="none";
    injured.style.display="inline";
    block.style.display="inline";
    text.innerHTML="The only feasible option in your mind is to try to make it through this ragged world one day at a time. We can leave the courageous ideals to courageous people. Still, that stale, unchanging suffering wouldn’t last long as you’d stumble upon one of the well-known leaders of this skewed world in terrible condition. In his hand held a weird looking block of grass. <br><br> Press W to pick him up, or (do smth) to take the block.";
});

document.addEventListener ('keydown', function(event) {
    //87 = W, press W
    if(event.keyCode == 87) {
        injured.style.display="none";
        block.style.display="none";
        bottles.style.display="block";
        text.innerHTML="After taking the man in and nurturing him to health, he persauded you into companionship. Now you have become one of them, one of the high hands that controlled the suffering below. What can I say? Game is game.";
    }
});

block.addEventListener ('click', function() {
    text.innerHTML="Where in the—";
    injured.style.display="none";
    minecraft.style.display="block";
    block.style.display="none";
});

