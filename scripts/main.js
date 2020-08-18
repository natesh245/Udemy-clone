const categories = {
  Development: [
    "Web Development",
    "Mobile apps",
    "Programming Languages",
    "Game Development",
    "Databases",
    "Software Testing",
  ],
  Business: [
    "Finance",
    "Entrepreneurship",
    "Communications",
    "Management",
    "Sales",
    "Strategy",
  ],
  "IT & Software": [
    "IT Certification",
    "Network Security",
    "Hardware",
    "Operating Systems",
    "Others",
  ],
  "Office Productivity": [
    "Microsoft",
    "Apple",
    "Google",
    "SAP",
    "Oracle",
    "Other",
  ],
  "Personal Development": [
    "Personal Transformation",
    "Productivity",
    "Leadership",
    "Personal Finance",
    "Career Development",
    "Parenting & Relationships",
  ],
  Design: [
    "Web Design",
    "Graphic Design",
    "Design Tools",
    "User Experience",
    "Game Design",
    "Design Thinking",
  ],
  Marketing: [
    "Digital Marketing",
    "Search Engine Optimization",
    "Branding",
    "Marketing Fundamentals",
    "Analytics & Automation",
  ],
  "Health & Fitness": [
    "Fitness",
    "General Health",
    "Sports",
    "Nutrition",
    "Yoga",
    "Mental Health",
  ],
  Music: [
    "Instruments",
    "Production",
    "Music Fundamentals",
    "Vocal",
    "Music Techniques",
    "Music Software",
  ],
};
const headElements = document.querySelectorAll(".head > div");
const headArray = [];

const divPopUp = document.createElement("div");
const head = document.querySelector(".head");

function RenderHeadPopUp(event) {
  divPopUp.innerHTML = "";
  for (var headItem of headElements) {
    headArray.push(headItem.textContent);
  }
  event.target.append(divPopUp);

  head.append(divPopUp);
  divPopUp.classList.add("div-pop");
  divPopUp.classList.add("visible");

  const hoverText = event.target.textContent;
  let catArr;

  catArr = categories[hoverText];

  catArr.forEach((catEl) => {
    const popElement = document.createElement("div");
    popElement.innerHTML = catEl;
    popElement.style.marginLeft = "30px";
    divPopUp.append(popElement);
  });
}

function NoHeadPopUp() {
  head.removeChild(divPopUp);
  // divPopUp.classList.remove("visible");
  // divPopUp.innerHTML = "";
}

//RenderHeadPopUp();

for (var element of headElements) {
  element.addEventListener("mouseover", RenderHeadPopUp);
  element.addEventListener("mouseout", NoHeadPopUp);
}

const headItem_1 = document.querySelectorAll(".header__item--1");

const header = document.querySelector(".header");
const div = document.createElement("div");

function RenderHeadItem1(event) {
  div.innerHTML = "";
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  div.className = "divHead";
  div.style.display = "block";
  div.style.top = "70px";
  div.style.left = mouseX - 100 + "px";
  const classList = event.target.classList;
  console.log(classList);
  const h = document.createElement("h2");
  const divbtn = document.createElement("div");
  if (classList.contains("item-1")) {
    h.innerHTML =
      "Get your team access to over 4,000 top Udemy courses, anytime, anywhere.";
    divbtn.innerHTML = "Try Udemy for Business";
  } else {
    h.innerHTML =
      "Turn what you know into an opportunity and reach millions around the world.";
    divbtn.innerHTML = "Learn more";
  }

  div.append(h);
  div.append(divbtn);
  div.style.padding = "15px";
  div.style.textAlign = "center";
  h.style.marginBottom = "20px";
  h.style.fontSize = "1.5rem";
  divbtn.style.width = "80%";
  divbtn.style.padding = "0.5rem";
  divbtn.style.margin = "auto";
  divbtn.style.backgroundColor = "#2f8deb";
  divbtn.style.color = "white";
  divbtn.style.fontSize = "1rem";

  header.append(div);
}

function DisableHeadItem1(event) {
  div.innerHTML = "";
  div.style.display = "none";
}

for (var headItem of headItem_1) {
  headItem.addEventListener("mouseover", RenderHeadItem1);
  headItem.addEventListener("mouseout", DisableHeadItem1);
  // window.addEventListener("mouseover", DisableHeadItem1);
}

////////////////////////////////////////////////////
const avatarPop = document.querySelector(".avatar-pop");
const avatar = document.querySelector(".avatar");
function RenderAvatarPop() {
  avatarPop.classList.toggle("none");
}

avatar.addEventListener("mouseenter", RenderAvatarPop);
// avatar.addEventListener("mouseleave", RenderAvatarPop);
