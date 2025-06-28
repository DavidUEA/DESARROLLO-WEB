
document.getElementById("addImageBtn").addEventListener("click", function() {
    const url = document.getElementById("imageUrl").value;
    if (url) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen agregada";
        img.addEventListener("click", function() {
            document.querySelectorAll(".gallery img").forEach(i => i.classList.remove("selected"));
            img.classList.add("selected");
        });
        document.getElementById("gallery").appendChild(img);
        document.getElementById("imageUrl").value = "";
    }
});
