const SiteName = document.querySelector("#Sitename");
const SiteURL = document.querySelector("#SiteURL");
const form = document.querySelector("#myForm");
const BookmarksResults = document.querySelector("#BookmarksResults")

form.addEventListener('Submit', function(e){
        e.preventDefault();
        let name = SiteName.value.trim().
           url = SiteURL.value.trim();
           let bookmark = {
            name: name,
            url: url
           }

           let bookmarks =JSON.parse(localStorage.getItem('bookmark'));

           if (bookmarks === null) {
               bookmarks = [];
           }else{
            bookmark = JSON.parse(bookmarks);
           }

           bookmarks.push(bookmark);

           localStorage.setItem('bookmark', JSON.stringify(bookmark));

           datareload();

      });

      document.addEventListener('DOMContentLoaded', datareload);

      function datareload() {
        let bookmarks =JSON.parse(localStorage.getItem('bookmark'))

        if(Array.isArray(bookmarks) && bookmarks.length) {
            BookmarksResults.innerHTML = '';
            bookmarks.forEach(function(bookmarks){
                BookmarksResults.innerHTML += "<div class='list-group-item'><h3>" + bookmark.name +"</h3><a hraf='"+bookmarks.url+"'>Visit</a> <button class='btn btn-danger' onclick='deleteBookmark(this)' data-url='"+bookmark.url+"'>Delete</button></div>";



            });
        }


      }



if(localStorage.getItem('bookmark') == null){
    var bookmarks =[];
    bookmarks.push(bookmarks);
    // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}else {
    var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmarks);
    var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
}

// e.preventDefauit();


function fetchBookmarks(){
    var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));

    var BookmarksResults = document.getElementById('BookmarksResults')

    BookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++)
    var name = bookmarks [i].name;
    var name = bookmarks [i].url;

    BookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  '</h3>'+
                                  '</div>';

}


// document .getElementById('demo').innerHTML=cartona

var NameInput = document.getElementById("NameInput");
var UrlInput = document.getElementById("UrlInput");
var ProdactContainer = [];

function addProduct() {
  var ProdactObj = {
    name: ProdactNameInput.value,
    category: ProdactcategoryInput.value,
    Price: ProdactPriceeInput.value,
    Describtion: ProdactDescribtionInput.value,
  };

  ProdactContainer.push(ProdactObj);
  displayProdact();
}



function displayProdact() {
  var cartona = ``;
  for (var i = 0; i < ProdactContainer.length; i++) {
    cartona += `
        <tr>
        <td>${ProdactContainer[i].name}</td>
        <td>${ProdactContainer[i].category}</td>
        <td>${ProdactContainer[i].Price}</td>
        <td>${ProdactContainer[i].Describtion}</td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
        <td><button class="btn btn-Success btn-sm">Update</button></td>
       </tr>
        `;
  }

  // document.getElementById("demo").innerHTML = cartona;
}

function deleteProduct(index) {
  ProdactContainer.splice(index, 1);
  localStorage.setItem("Prodcuts", JSON.stringify(ProdactContainer));
  displayProdact();
}

var ProdactContainer = [];
if (localStorage.getItem("Prodcuts") != null) {
  ProdactContainer = JSON.parse(localStorage.getItem("Prodcuts"));
  displayProdact();
}

function addProduct() {
  var ProdactObj = {
    name: ProdactNameInput.value,
    category: ProdactcategoryInput.value,
    Price: ProdactPriceeInput.value,
    Describtion: ProdactDescribtionInput.value,
  };
  ProdactContainer.push(ProdactObj);
  localStorage.setItem("Prodcuts", JSON.stringify(ProdactContainer));
  displayProdact();
}














