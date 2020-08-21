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

/////////////wishlist///////////

const wishList = [
  {
    name: "Ultimate AWS Certified SysOps Administrator",
    createdBy:
      "Stephane Marek | AWS certified Solution Architect and developer",
    price: "Rs 360",
    imageUrl:
      "https://images.youracclaim.com/size/340x340/images/ee0a9da0-1627-4031-a455-8ced6b866cc7/AWS-SysOpAdmin-Associate.png",
  },
  {
    name: "MongoDB- The Complete  Developers Guide 2020",
    createdBy: "Academind By Maximillian Swarsmuller",
    price: "Rs 399",
    imageUrl:
      "https://www.openlogic.com/sites/openlogic/files/image/2019-07/image-blog-big-data-on-demand-with-mongodb.jpg",
  },
  {
    name: "The Modern GraphQL Bootcamp",
    createdBy: "Andrew Mead",
    price: "Rs 360",
    imageUrl: "https://miro.medium.com/max/480/1*ZvmbMEmtGR15Xj-eb3osXA.png",
  },
  {
    name: "VueJs The Complete Guide",
    createdBy: "Academind By Maximillian Swarsmuller",
    price: "Rs 360",
    imageUrl: "https://hackernoon.com/hn-images/1*ACR0gj0wbx91V_xgURifWg.png",
  },
  {
    name: "Docker Mastery with Kubernetes and Swarm",
    createdBy: "Bret Fisher, Docker Captain program",
    price: "Rs 360",
    imageUrl: "https://miro.medium.com/proxy/1*9hGvYE5jegHm1r_97gH-jQ.png",
  },
  {
    name: "Docker and Kubernetes the complete guide",
    createdBy: "Stephen Grider",
    price: "Rs 360",
    imageUrl: "https://miro.medium.com/max/700/1*y320p_dXJmr5PMGRiXioyw.png",
  },
];

const listBlock = document.querySelector(".wish-list");
const listContainer = document.querySelector(".wish-list__container");
const listContent = document.querySelector(".list-content");
function RenderWishList() {
  listContent.innerHTML = "";

  wishList.forEach((list) => {
    const listElement = document.createElement("div");
    listElement.className = "list-element";

    listElement.innerHTML = `
                       <div>   
                            <div>
                              <img src=${list.imageUrl} alt=${list.name}/>
                            </div>
                            
                            <div class="list-desc">
                              <h2>
                                ${list.name}
                              </h2>
                              <p>${list.createdBy}</p>
                              <h2 class="price">${list.price} </h2>
                            </div>
                        </div>
                        <div class="list-elementBtn">
                              <a href="#" >Add to cart</a>
                        </div>

    `;

    listContent.append(listElement);

    // const progressElement = (courseElement.lastElementChild.lastElementChild.childNodes[1].style.width = `${course.progress}`);
  });
}

listBlock.addEventListener("mouseenter", RenderWishList);
