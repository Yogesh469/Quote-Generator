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
    Motivational:[
      { text: "The successful warrior is the average man, with laser-like focus", author: "Bruce Lee" },
      { text: "My success, part of it certainly, is that I have focused in on a few things.", author: " Bill Gates" },
      { text: "You can't depend on your eyes when your imagination is out of focus.", author: " Mark Twain" }

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
  
  