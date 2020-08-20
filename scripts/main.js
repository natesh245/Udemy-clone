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

/////////////////////////////////////////////mycourse and wishlist///////////

const myCourse = [
  {
    name: "Javascript - The Complete guide 2020 ",
    imgUrl: "https://miro.medium.com/max/700/1*LjR0UrFB2a__5h1DWqzstA.png",
    progress: "80%",
  },
  {
    name: "Ultimate AWS Certified Developer Associate 2020",
    imgUrl:
      "https://d1nzzttg89jj6.cloudfront.net/assets/articles/1575354413/klarna-signs-deal-with-aws-1575354413.png",
    progress: "1%",
  },
  {
    name: "Understanding Typescript - 2020 edition",
    imgUrl:
      "https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg",
    progress: "75%",
  },
  {
    name: "Advanced Css and sass",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/220px-Sass_Logo_Color.svg.png",
    progress: "100%",
  },
];

const myCourseBlock = document.querySelector(".my-course");
const myCourseContainer = document.querySelector(".my-course__container");
const myCourseContent = document.querySelector(".course-content");
function RenderMyCourses() {
  myCourseContent.innerHTML = "";

  myCourse.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.className = "course-element";

    courseElement.innerHTML = `
                            <div>
                              <img src=${course.imgUrl} alt=${course.name}/>
                            </div>
                            <div class="course-desc">
                              <h2>${course.name} </h2>
                              <div class ="progress">
                                <span></span>
                              </div>

                            </div>

    `;

    myCourseContent.append(courseElement);

    const progressElement = (courseElement.lastElementChild.lastElementChild.childNodes[1].style.width = `${course.progress}`);
  });
}

myCourseBlock.addEventListener("mouseenter", RenderMyCourses);
