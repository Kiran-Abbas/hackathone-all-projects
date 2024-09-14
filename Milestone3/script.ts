document.addEventListener("DOMContentLoaded", ()=>{
    function validateForm() {
    const form = document.getElementById("resumeform") as HTMLFormElement;
    if(!form.checkValidity){
        alert("Please fill all required fields correctly.")
            return false;
        }
        return true;
    }

function generateResume(){
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const picture = (document.getElementById('picture') as HTMLInputElement).files?.[0];

    //populate resume//

    (document.getElementById("displayName") as HTMLElement).innerText = name;
    (document.getElementById("displayName") as HTMLElement).innerText = email;
    (document.getElementById("displayName") as HTMLElement).innerText = phone;
    (document.getElementById("displayName") as HTMLElement).innerText = address;
    (document.getElementById("displayName") as HTMLElement).innerText = skills;
    (document.getElementById("displayName") as HTMLElement).innerText = education;
    (document.getElementById("displayName") as HTMLElement).innerText = experience;

    if(picture){
        const reader = new FileReader();
        reader.onload = function (e){
            (document.getElementById("displayPicture") as HTMLImageElement).src = e.target?.result as string
        };
       reader.readAsDataURL(picture);
    
    }
};

document.getElementById("resumeform")?.addEventListener("submit",function(event){
    event.preventDefault();
    if (validateForm()){
        generateResume();
    }

})

//generate resume//
document.getElementById("name")?.addEventListener("input" , generateResume);
document.getElementById("picture")?.addEventListener("input" , generateResume);
document.getElementById("email")?.addEventListener("input" , generateResume);
document.getElementById("address")?.addEventListener("input" , generateResume);
document.getElementById("phone")?.addEventListener("input" , generateResume);
document.getElementById("skills")?.addEventListener("input" , generateResume);
document.getElementById("education")?.addEventListener("input" , generateResume);
document.getElementById("experience")?.addEventListener("input" , generateResume);
})

