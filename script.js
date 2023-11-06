function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
       else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  function leftScroll() {
    var reveals = document.querySelectorAll(".roll-in-left");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("roll-in-active");
      } else {
        reveals[i].classList.remove("roll-in-active");
      }
    }
  }

  leftScroll();

  window.addEventListener("scroll", leftScroll);
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function generateLanguageProgressHTML(languages) {
    let html = '';
    console.log("it works")
    for (const language of languages) {
      const progressBarStyle = `width: ${languages.progress}%`;
  
      html += `
        <div class="language-card">
          <div class="language-name">${languages.name}</div>
          <div class="progress-bar">
            <div class="progress" style="${progressBarStyle}"></div>
          </div>
          <div class="language-image">${languages.imageSvg}</div>
        </div>
      `;
    }
    return html;
  }
  
  // Example data
  const languages = [
    {
      name: 'English',
      progress: 80,
      imageSvg: 'SVG code for English',
    }
  ];
  
  const languageProgressHTML = generateLanguageProgressHTML(languages);
  document.getElementById("language-container").innerHTML = languageProgressHTML;
  