const membersList = document.getElementById("membersList");

const imageLists = ["images/members/SharkPool-SP.png", "images/members/yuri-kiss.png", "images/members/fath11.png", "images/members/BludIsAnLemon.jfif", "images/members/Gen1x-ALT.png", "images/members/theplayer3.png", "images/members/CodeFoxy-GitHub.png", "images/members/vernacular7.png", "images/members/PuzzlingGGG.png", "images/members/baqirbeard.gif", "images/members/cicerorph.png"] // add file locations of the images from images/members into this array


imageLists.forEach(element => {
    const img = document.createElement("img");
    const fileName = ((element.replace("images", "")).replace("members", "")).replace("/", "");
    img.src = element;
    img.id = "memberImg";
    img.alt = fileName
    membersList.appendChild(img);
})