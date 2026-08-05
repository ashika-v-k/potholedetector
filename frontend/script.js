const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", () => {

    if(imageInput.files.length>0){

        preview.src = URL.createObjectURL(imageInput.files[0]);

        preview.style.display="block";

    }

});

document.getElementById("detectBtn").addEventListener("click", uploadImage);

async function uploadImage(){

    if(imageInput.files.length==0){

        alert("Please select an image.");

        return;

    }

    document.getElementById("loading").innerHTML="Detecting...";

    document.getElementById("result").innerHTML="";

    const formData=new FormData();

    formData.append("file",imageInput.files[0]);

    try{

        const response=await fetch("http://127.0.0.1:8000/detect",{

            method:"POST",

            body:formData

        });

        const data=await response.json();

        document.getElementById("loading").innerHTML="";

        document.getElementById("result").innerHTML=
        "Potholes Detected : "+data.potholes;

    }

    catch(error){

        document.getElementById("loading").innerHTML="";

        alert(error);

        console.log(error);

    }

}