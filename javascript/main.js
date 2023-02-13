var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var siteContainer;
var addBtn = document.getElementById('addBtn');

if (localStorage.getItem("siteSave") == null) {
    siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem("siteSave"));
    displaySite();
}

function addSite () {
    var site = {
        sName: siteName.value,
        sUrl: siteUrl.value
    }
    siteContainer.push(site);
    localStorage.setItem("siteSave", JSON.stringify(siteContainer));
    displaySite();
    clareForm();
}

function displaySite() {
    var cartona = ``;
    for (var i = 0; i < siteContainer.length; i++) {
        cartona += `
                <div class="cartona rounded-3 my-3 py-3 px-4 d-flex justify-content-between align-items-center">
                    <div class="siteName">
                        <p class="fw-bold fs-4">${siteContainer[i].sName}</p>
                    </div>
                    <div class="siteControl">
                        <a href="${siteContainer[i].sUrl}" target="_blank" class="btn btn-danger">Visit</a>
                        <button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        
                    </div>
                </div>
        `
    }
    document.getElementById("theSiteSave").innerHTML = cartona;
    siteName.classList.remove('is-valid');
    siteUrl.classList.remove('is-valid');
    addBtn.disabled='true';
}

function clareForm() {
    siteName.value = '';
    siteUrl.value = '';
}

function deleteSite(a){
    siteContainer.splice(a,1);
    localStorage.setItem("siteSave", JSON.stringify(siteContainer));
    displaySite();
}


// regular expression(rejex) 


var nameAlert=document.getElementById('nameAlert');

siteName.onkeyup=function() {
    var nameRejex=/^[a-z]{2,12}$/;
    if (nameRejex.test(siteName.value))    // valid
    {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    }
    else                                          // not valid
    {
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
    }
}

var nameAlert=document.getElementById('nameAlert');

siteName.onkeyup=function() {
    var nameRejex=/^[a-z{3,12} A-Z{3,12} \s]{3,15}$/;
    if (nameRejex.test(siteName.value))    // valid
    {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    }
    else                                          // not valid
    {
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
    }
}


var urlAlert=document.getElementById('urlAlert');

siteUrl.onkeyup=function() {
    var urlRejex=/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
    if (urlRejex.test(siteUrl.value))    // valid
    {
        siteUrl.classList.add('is-valid');
        siteUrl.classList.remove('is-invalid');
        urlAlert.classList.add('d-none');
        addBtn.removeAttribute('disabled');
    }
    else                                          // not valid
    {
        siteUrl.classList.add('is-invalid');
        siteUrl.classList.remove('is-valid');
        urlAlert.classList.remove('d-none');
        addBtn.disabled='true';
    }
}