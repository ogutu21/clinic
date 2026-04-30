const images = [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787"
];

let i = 0;

function rotateHero() {
    const hero = document.querySelector(".hero-slider");

    hero.style.backgroundImage =
        `linear-gradient(rgba(5,10,20,0.75), rgba(5,10,20,0.75)), url('${images[i]}')`;

    i = (i + 1) % images.length;
}

rotateHero();
setInterval(rotateHero, 3500);
