let current = 0;

const slides = [

  // 🌸 START
  { text: "heyyy babyyyyyy… ready for something special?? ><", yes: 1 },
  { text: "do you trust me… like fully??", yes: 2 },
  { text: "promise you won’t leave this in between??", yes: 3 },
  { text: "are you smiling right now… or acting serious huhh", yes: 4 },
  { text: "do you even realize how important today is…", yes: 5 },
  { text: "today isn’t just a normal day… right??", yes: 6 },
  { text: "can i make this day a little more special for you…?", yes: 7 },

  // 💌 PARAGRAPH
  { text: "you know… it still feels unreal sometimes… how someone so far away can feel so close to my heart… and today… today isn’t just your birthday… it’s the day my world got its most beautiful reason to smile…", yes: 8 },

  // 💫 MEMORIES
  { text: "do you remember how we started…?", yes: 9 },
  { text: "that little moment… which turned into everything…", yes: 10 },
  { text: "did you ever think we’d come this far…?", yes: 11 },
  { text: "2 years huhhh… feels like a lifetime with you…", yes: 12 },
  { text: "were those late night talks your favorite too…?", yes: 13 },
  { text: "missing me a little extra today…?", yes: 14 },
  { text: "if i were there… would you hug me tight…?", yes: 15 },

  // 💌 PARAGRAPH
  { text: "these two years… weren’t just time passing… they were moments stitched together with love… every call every wait every smile… everything became you…", yes: 16 },

  // 💖 LOVE
  { text: "am i your favorite person…?", yes: 17 },
  { text: "do you love me more than food…?", yes: 18 },
  { text: "who’s more cute… me or you??", yes: 19 },
  { text: "if i annoy you… you’ll still stay right??", yes: 20 },
  { text: "would you choose me again…?", yes: 21 },

  // 💌 PARAGRAPH
  { text: "loving you never felt like a choice… it just happened… like breathing… like something my heart already knew…", yes: 22 },

  // 💔 DEEP
  { text: "do you know how much you matter to me…?", yes: 23 },
  { text: "you’re not just someone… you’re my peace…", yes: 24 },
  { text: "even on your worst days… i’ll stay…", yes: 25 },
  { text: "even if everything goes wrong… i won’t leave…", yes: 26 },

  // 💌 PARAGRAPH
  { text: "you became more than love… you became home… where my heart rests without fear…", yes: 27 },

  // 🎂 BUILD
  { text: "so today is special right…?", yes: 28 },
  { text: "because someone really important was born…", yes: 29 },
  { text: "yeahhh YOUUU ><", yes: 30 },
  { text: "do you know how lucky i feel…?", yes: 31 },

  // 💌 PARAGRAPH
  { text: "today i’m not just wishing you… i’m celebrating the most beautiful soul i’ve ever known…", yes: 32 },

  // 💞 FINAL
  { text: "can i say something important…?", yes: 33 },
  { text: "i love you…", yes: 34 },
  { text: "not just sometimes… but always…", yes: 35 },
  { text: "even when we’re far… you’re right here…", yes: 36 },
  { text: "right inside me…", yes: 37 },
  { text: "will you stay with me… always…?", yes: 38 },
  { text: "no matter what happens…?", yes: 39 },

  // 🎁 END
  { text: "happy birthday my love… thank you for existing… thank you for being mine… ❤️", yes: 0 }

];

function typeText(text, element) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 25);
    }
  }

  typing();
}

function loadSlide(index) {
  current = index;
  const slide = slides[index];

  const textEl = document.getElementById("text");
  typeText(slide.text, textEl);

  const buttons = document.getElementById("buttons");
  buttons.innerHTML = "";

  let yesBtn = document.createElement("button");
  yesBtn.innerText = "yes";
  yesBtn.className = "yes";
  yesBtn.onclick = () => loadSlide(slide.yes);

  let noBtn = document.createElement("button");
  noBtn.innerText = "no";
  noBtn.className = "no";

  noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  };

  buttons.appendChild(yesBtn);
  buttons.appendChild(noBtn);
}

loadSlide(0);
