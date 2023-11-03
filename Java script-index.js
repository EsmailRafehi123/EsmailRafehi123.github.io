/* document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector("searchForm"); // Om du vill välja det första formuläret på sidan
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Förhindra standardformulärskickning
  
      const searchQuery = document.getElementById("searchQuery").value;
      const searchUrl = 'search.html?q=${encodeURIComponent(searchQuery)}';
  
      // Omdirigera användaren till sökresultatsidan
      window.location.href = searchUrl;
    });
  });



 */