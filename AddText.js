
//These values will be used to make the new post.
var title = "What's In My Pencil Case";
// var image = "placeholder2.jpg";
//Use the ` character to make a string on multiple lines.
//I recommend including the <p> tags in the post text variable
//because different posts may have different numbers of paragraphs.
var postText = `
<p></p>
<p></p>
`

//Using the ${variableName} notation will insert the contents of those
//variables into a string.

function postingString() {
var postRawHtml = `
<div class="post">
  <h2>${title}</h2>
  ${postText}
</div>`;
// <img src="${image}"></img>

//Check the console to verify that this string is what we want.
//(You don't want to do this in the final version, it's just to test.)
console.log(postRawHtml);

//Now I have a text variable with the HTML I want. I need to turn into
//an actual HTML element.
var postHtmlObject = document.createRange().createContextualFragment(postRawHtml);
//The postHtmlObject variable is an actual HTML object (called a document
//fragment), not just a string.

//We can append it directly to an object already in the document.
var blogContainer = document.getElementById("blog-post");
blogContainer.appendChild(postHtmlObject);

}

var xmlRequest = new XMLHttpRequest();
xmlRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     postText = this.responseText;
    console.log(this.responseText);
    postString();
  }
};
xmlRequest.open("GET", "SampleBlogPost.rtf", true);
xmlRequest.send();
