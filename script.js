document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".gallery");
    const imagePool = [
        "img/gallery1.jpg",
        "img/gallery2.jpg",
        "img/gallery3.jpg",
        "img/gallery4.jpg",
        "img/gallery5.jpg",
        "img/gallery6.jpg",
        "img/gallery7.jpg",
        "img/gallery8.jpg",
        "img/gallery9.jpg",
        "img/gallery10.jpg",
        "img/gallery11.jpg"
    ];

    const selectedImages = imagePool
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    galleryContainer.innerHTML = "";
    selectedImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Galeria zdjęcie";
        img.classList.add("gallery-image");
        galleryContainer.appendChild(img);
    });
});