const categories = {
  Development: [
    "Web Development",
    "Mobile apps",
    "Programming Languages",
    "Game Development",
    "Databases",
    "Software Engineering",
    "Software Testing",
    "E-Commerce",
    "Data Science",

    "Development Tools",
  ],
  Business: [
    "Finance",
    "Entrepreneurship",
    "Communications",
    "Management",
    "Sales",
    "Strategy",
    "Operations",
    "Project Management",
    "Business Law",
    "Data & Analytics",
    "Home Business",
    "Human Resources",
    "Industry ",
    "Media",
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
    "Social Media Marketing",
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
    "Dieting",
    "Self Defence",
    "Safety & Fist Aid",
    "Dance",
    "Meditation",
  ],
  Music: [
    "Instruments",
    "Production",
    "Music Fundamentals",
    "Vocal",
    "Music Techniques",
    "Music Software",
  ],
  Photography: [
    "Digital Photography",
    "Photography Fundamentals",
    "Portraits",
    "Photography Tools",
    "Commercial Photography",
    "Video Design",
  ],
  "Finance & Accounting": [
    "Accounting & Bookkeeping",
    "Compliance",
    "Cryptocurrency & Blockchain",
    "Economics",
    "Finance",
    "Taxes",
    "Finance Cert & Exam Prep",
    "Financial Modeling & Analysis",
    "Investing & Trading",
    "Money Management Tools",
  ],
};

//////////////////////////////////////////////////
const headPop = document.querySelector(".head-pop");
const headElements = document.querySelectorAll(".heads");

function RenderHeadPop(event) {
  headPop.innerHTML = "";

  const hoverText = event.target.textContent;
  const subCategory = categories[hoverText];
  for (let i = 0; i <= 5; i++) {
    if (subCategory[i] !== undefined) {
      const div = document.createElement("div");
      div.textContent = subCategory[i];
      div.className = "headpop-el";
      headPop.append(div);
    }
  }
}

headElements.forEach((headElement) => {
  headElement.addEventListener("mouseenter", RenderHeadPop);
});

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
    price: "360",
    imageUrl:
      "https://images.youracclaim.com/size/340x340/images/ee0a9da0-1627-4031-a455-8ced6b866cc7/AWS-SysOpAdmin-Associate.png",
  },
  {
    name: "MongoDB- The Complete  Developers Guide 2020",
    createdBy: "Academind By Maximillian Swarsmuller",
    price: "399",
    imageUrl:
      "https://www.openlogic.com/sites/openlogic/files/image/2019-07/image-blog-big-data-on-demand-with-mongodb.jpg",
  },
  {
    name: "The Modern GraphQL Bootcamp",
    createdBy: "Andrew Mead",
    price: "360",
    imageUrl: "https://miro.medium.com/max/480/1*ZvmbMEmtGR15Xj-eb3osXA.png",
  },
  {
    name: "VueJs The Complete Guide",
    createdBy: "Academind By Maximillian Swarsmuller",
    price: "360",
    imageUrl: "https://hackernoon.com/hn-images/1*ACR0gj0wbx91V_xgURifWg.png",
  },
  {
    name: "Docker Mastery with Kubernetes and Swarm",
    createdBy: "Bret Fisher, Docker Captain program",
    price: "360",
    imageUrl: "https://miro.medium.com/proxy/1*9hGvYE5jegHm1r_97gH-jQ.png",
  },
  {
    name: "Docker and Kubernetes the complete guide",
    createdBy: "Stephen Grider",
    price: "360",
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
                                ${
                                  list.name.length > 40
                                    ? list.name.substring(0, 38).concat("....")
                                    : list.name
                                }
                              </h2>
                              <p>${
                                list.createdBy.length > 20
                                  ? list.createdBy
                                      .substring(0, 25)
                                      .concat("....")
                                  : list.createdBy
                              }</p>
                              <h2 class="price">Rs ${list.price} </h2>
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

///Category menu

const categoriesElement = document.querySelector(".category__container");

function RenderCategories() {
  categoriesElement.innerHTML = "";
  // console.log(Object.keys(categories));
  const categoryKey = Object.keys(categories);
  const ul = document.createElement("ul");
  ul.className = "sub-category";
  categoryKey.forEach((key) => {
    const li = document.createElement("li");
    li.className = "category-list";
    li.innerHTML = `<span>${key}</span> <i class="fa fa-chevron-right" aria-hidden="true"></i>`;
    categoriesElement.append(li);
  });
  categoriesElement.append(ul);
}
RenderCategories();
// categoriesElement.addEventListener("mouseenter", RenderCategories);

//category Submenu
const liElement = document.querySelectorAll(".category-list");
const subCategory = document.querySelector(".sub-category");
function RenderSubCategoryMenu(event) {
  subCategory.innerHTML = "";
  // const liElement = document.querySelector(".category-list");
  const liTextContent = event.target.childNodes[0].textContent;
  // console.log(liTextContent);
  console.log(categories[liTextContent]);
  const subCategoryArray = categories[liTextContent];

  subCategoryArray.forEach((elements) => {
    const li = document.createElement("li");
    li.className = "subcategory-list";
    li.innerHTML = `<span>${elements}</span> <i class="fa fa-chevron-right" aria-hidden="true"></i>`;
    subCategory.append(li);
  });
  const liBegin = document.createElement("li");
  const liEnd = document.createElement("li");
  liBegin.innerHTML = `<span>All ${liTextContent}</span> `;
  liEnd.innerHTML = `<span>Other ${liTextContent}</span> <i class="fa fa-chevron-right" aria-hidden="true"></i>`;
  subCategory.insertAdjacentElement("afterbegin", liBegin);
  subCategory.insertAdjacentElement("beforeend", liEnd);
}

liElement.forEach((li) => {
  li.addEventListener("mouseenter", RenderSubCategoryMenu);
});

//////////////
const hamBtn = document.querySelector(".ham-burger-menu__logo ");

const sideNav = document.querySelector(".overlay");
const sideNavClose = document.querySelector(".side-nav-close");

function RenderSideNav() {
  sideNav.classList.toggle("none");
}

hamBtn.addEventListener("click", RenderSideNav);
sideNavClose.addEventListener("click", RenderSideNav);

//////Add to cart

const myCart = [];
const cartPop = document.querySelector(".cart-pop");

const wishListElement = document.querySelector(".wish-list");

const cartNo = document.querySelector(".cart-no");
// const cartPop = document.querySelector(".cart-pop");
const noInCart = document.querySelector(".no-of-items");
const cartPopTop = document.querySelector(".cart-pop-top");
const cartPopBottom = document.querySelector(".cart-pop-bottom");
const emptyCart = document.querySelector(".empty-cart");
const noemptyCart = document.querySelector(".no-cart-empty");

if (myCart.length === 0) {
  noemptyCart.style.display = "none";
}
wishListElement.addEventListener("mouseenter", () => {
  const listBtns = document.querySelectorAll(".list-elementBtn");
  listBtns.forEach((Btn) => {
    Btn.addEventListener("click", RenderCart);
    function RenderCart(event) {
      const listElement = event.target.parentNode.parentNode;
      const listDescription = listElement.querySelector(".list-desc");

      const listHeading = listDescription
        .querySelector("h2")
        .textContent.trim();

      const courseInCart = wishList.filter((li) => {
        return li.name.substring(0, 30) === listHeading.substring(0, 30);
      });
      wishList.forEach((el, index) => {
        if (el.name.substring(0, 30) === listHeading.substring(0, 30)) {
          wishList.splice(index, 1);
          return;
        }
      });

      listElement.remove();

      myCart.push(...courseInCart);

      if (myCart.length > 0) {
        noemptyCart.style.display = "block";

        noInCart.textContent = myCart.length;
        cartNo.style.display = "flex";
        cartPopTop.innerHTML = "";

        let totalPrice = 0;
        myCart.forEach((el) => {
          totalPrice += parseInt(el.price);
          console.log(totalPrice);
          const cartElement = document.createElement("div");
          cartElement.className = "cart-element";
          cartElement.innerHTML = `
         
               <div>
                 <img src=${el.imageUrl} alt=${el.name}/>
               </div>

               <div class="list-desc">
                 <h2>
                   ${
                     el.name.length > 40
                       ? el.name.substring(0, 31).concat("....")
                       : el.name
                   }
                 </h2>
                 <p>${
                   el.createdBy.length > 20
                     ? el.createdBy.substring(0, 21).concat("...")
                     : el.createdBy
                 }</p>
                 <h2 class="price">Rs ${el.price} </h2>
               </div>
           

`;
          cartPopTop.append(cartElement);
        });
        cartPopBottom.children[0].querySelector(
          "span"
        ).textContent = totalPrice;
      }
    }
  });
});
