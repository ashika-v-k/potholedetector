const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");
const loading = document.getElementById("loading");
const detectButton = document.getElementById("detectButton");


// -----------------------------------
// Show selected image
// -----------------------------------

imageInput.addEventListener("change", function () {

    if (this.files.length === 0) {
        return;
    }

    const file = this.files[0];

    console.log("Selected file:", file.name);
    console.log("File type:", file.type);
    console.log("File size:", file.size);


    // Check whether it is an image

    if (!file.type.startsWith("image/")) {

        alert("Please select a valid image file.");

        return;
    }


    // Show preview

    preview.src = URL.createObjectURL(file);

    preview.style.display = "block";


    // Clear old result

    result.innerText = "";

});


// -----------------------------------
// Upload image and detect potholes
// -----------------------------------

async function uploadImage() {

    const file = imageInput.files[0];


    // Check if image was selected

    if (!file) {

        alert("Please select an image first.");

        return;
    }


    // Check image type

    if (!file.type.startsWith("image/")) {

        alert("Please select a valid image.");

        return;
    }


    // Show loading

    loading.innerText = "Detecting potholes...";

    result.innerText = "";

    detectButton.disabled = true;


    // Create FormData

    const formData = new FormData();

    formData.append("file", file);


    try {

        console.log("Sending image to FastAPI...");


        // Send image to backend

        const response = await fetch("/detect", {

            method: "POST",

            body: formData

        });


        console.log("Response status:", response.status);


        // Check server response

        if (!response.ok) {

            throw new Error(
                "Server returned status " + response.status
            );

        }


        // Convert response to JSON

        const data = await response.json();


        console.log("Backend response:", data);


        // Display result

        result.innerText =
            "Potholes Detected: " + data.potholes;


    } catch (error) {

        console.error("Detection error:", error);

        result.innerText =
            "Unable to fetch detection result.";

    }


    // Remove loading

    loading.innerText = "";

    detectButton.disabled = false;

}