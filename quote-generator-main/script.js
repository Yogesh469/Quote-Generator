const quotes = {
    motivational: [
      { text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
      { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" }
    ],
    science: [
      { text: "Science is magic that works.", author: "Kurt Vonnegut" },
      { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" }
    ],
    Mindfulness: [
      { text: "Be happy in the moment, that’s enough.Each moment is all we need.", author: "Mother Teresa" },
      { text: "Realize deeply that the present moment is all you ever have.", author: "Eckhart Tolle" },
      { text: "Don't let your mind bully your body into believing it must carry the burden of its worries.", author: "Astrid Alauda" }
    ],
    Developer_Humor:[
      { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
      { text: "Code never lies, comments sometimes do.", author: " Ron Jeffries" },
      { text: "Software and cathedrals are much the same — first we build them, then we pray.", author: " Sam Redwine" }

    ],
    Famous_Authors:[
      { text: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare" },
      { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { text: "When you want something, all the universe conspires in helping you to achieve it", author: "Saharuk khan" }

    ],
    Sarcastic_Quotes:[
      { text: "People say nothing is impossible, but I do nothing every day.", author: "A.A. Milne" },
      { text: "I never forget a face, but in your case I’ll be glad to make an exception.", author: "Groucho Marx" },
      { text: "Your secrets are safe with me. I never even listen when you tell me them.", author: " Anonymous" }
    
    ]
  };
  
  let currentCategory = "motivational";
  let currentIndex = 0;
  
  const textArea = document.querySelector(".text-area");
  const authorArea = document.querySelector(".person");
  
  function displayQuote() {
    const quote = quotes[currentCategory][currentIndex];
    textArea.textContent = quote.text;
    authorArea.textContent = quote.author;
  }
  
  function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
    displayQuote();
  }
  
  function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote();
  }
  
  function randomQuote() {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
  }
  
  function changeFontSize(action) {
    const style = window.getComputedStyle(textArea);
    let size = parseFloat(style.fontSize);
  
    if (action === "increase" && size < 40) {
      textArea.style.fontSize = (size + 2) + "px";
    } else if (action === "decrease" && size > 14) {
      textArea.style.fontSize = (size - 2) + "px";
    }
  }
  
  document.getElementById("categorySelect").addEventListener("change", function () {
    currentCategory = this.value;
    currentIndex = 0;
    displayQuote();
  });
  
  document.getElementById("themeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
  
  // Load first quote
  displayQuote();
  
  