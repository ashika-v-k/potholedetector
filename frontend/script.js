// =========================================
// GET ELEMENTS
// =========================================

const imageInput =
    document.getElementById("imageInput");

const preview =
    document.getElementById("preview");

const previewPlaceholder =
    document.getElementById("previewPlaceholder");

const resultCard =
    document.getElementById("resultCard");

const result =
    document.getElementById("result");

const loading =
    document.getElementById("loading");

const detectButton =
    document.getElementById("detectButton");

const count =
    document.getElementById("count");


// =========================================
// IMAGE SELECTED
// =========================================

imageInput.addEventListener(
    "change",
    function () {

        if (this.files.length === 0) {
            return;
        }


        const file = this.files[0];


        // Check file type

        if (!file.type.startsWith("image/")) {

            alert(
                "Please select a valid image file."
            );

            return;
        }


        // Create preview URL

        const imageURL =
            URL.createObjectURL(file);


        // Show image

        preview.src = imageURL;

        preview.style.display = "block";


        // Hide placeholder

        previewPlaceholder.style.display =
            "none";


        // Hide old result

        resultCard.classList.add("hidden");


        // Reset result

        count.innerText = "0";

        result.innerText = "";

        loading.innerText = "";

    }
);


// =========================================
// DETECTION
// =========================================

async function uploadImage() {


    const file =
        imageInput.files[0];


    // Check if image exists

    if (!file) {

        alert(
            "Please select an image first."
        );

        return;
    }


    // Check image type

    if (!file.type.startsWith("image/")) {

        alert(
            "Please select a valid image."
        );

        return;
    }


    // Hide previous result

    resultCard.classList.add(
        "hidden"
    );


    // Show loading

    loading.innerText =
        "Detecting potholes...";


    detectButton.disabled = true;


    // Create FormData

    const formData =
        new FormData();


    formData.append(
        "file",
        file
    );


    try {

        // Send image to FastAPI

        const response =
            await fetch(
                "/detect",
                {
                    method: "POST",
                    body: formData
                }
            );


        // Check response

        if (!response.ok) {

            throw new Error(
                "Server returned status " +
                response.status
            );

        }


        // Read JSON

        const data =
            await response.json();


        console.log(
            "Backend response:",
            data
        );


        // =====================================
        // SHOW DETECTED IMAGE
        // =====================================

        if (data.image_url) {

            preview.src =
                data.image_url +
                "?t=" +
                Date.now();

            preview.style.display =
                "block";

            previewPlaceholder.style.display =
                "none";
        }


        // =====================================
        // SHOW COUNT
        // =====================================

        count.innerText =
            data.potholes;


        // =====================================
        // RESULT MESSAGE
        // =====================================

        if (data.potholes === 0) {

            result.innerText =
                "No potholes were detected in this image.";

        }

        else if (data.potholes === 1) {

            result.innerText =
                "1 pothole was detected in this image.";

        }

        else {

            result.innerText =
                data.potholes +
                " potholes were detected in this image.";

        }


        // =====================================
        // SHOW RESULT CARD
        // =====================================

        resultCard.classList.remove(
            "hidden"
        );

    }


    catch (error) {

        console.error(
            "Detection error:",
            error
        );


        resultCard.classList.add(
            "hidden"
        );


        loading.innerText =
            "Unable to fetch detection result.";

    }


    finally {

        // Remove loading message

        loading.innerText = "";


        // Enable button again

        detectButton.disabled = false;

    }

}