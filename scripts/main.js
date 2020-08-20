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

//renders popup when hovered over the head elements
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
