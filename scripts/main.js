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

/////Lets Start Learning, Natesh

const myLearning = [
  {
    imageUrl:
      "data:image/jpeg;base64,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",
    heading: "166.Useful Resources and Links",
    course: "Understanding Typescript-2020 Edition",
    type: "Article",
    duration: "1m",
  },
  {
    imageUrl:
      "data:image/png;base64,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",
    heading: "1.Introduction",
    course: "NodeJs - The Complete Guide(MVC, Rest APis, GraphQl)",
    type: "Lecture",
    duration: "1m",
  },
  {
    imageUrl:
      "data:image/jpeg;base64,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",
    heading: "1. Welcome to the class!",
    course: "The Complete Nodejs Developer Course",
    type: "Lecture",
    duration: "6m",
  },
  {
    imageUrl:
      "data:image/png;base64,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",
    heading: "55. AWS RDS Hands On",
    course: "Ultimate AWS Developer Associate 2020",
    type: "Lecture",
    duration: "2m",
  },

  {
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAPEBAPDxAPDRAPDRAPDw8QDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFyszODMsNygtLisBCgoKDg0OFxAQFysdHR0tLS0tKystLSsrLS0rLS0rLS0tLS0tKy4tLS4tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLf/AABEIAKgBKwMBEQACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAgMBBAUHBgj/xAA9EAACAQICBwQIBQMDBQAAAAAAAQIDEQQhBRITMVFhgRQiQXEGBzKRobHB0UJScoKSI2LhVNLwFjM0ovH/xAAbAQEBAQEAAwEAAAAAAAAAAAAAAQIDBAUGB//EADQRAQABAwMDAQUIAQQDAAAAAAABAgMRBBIxBSFRQQYTcaHRIjJSYYGRscEUIzNT4RVi8P/aAAwDAQACEQMRAD8A9jtXM91ter3DtXMbTcO1cxtNw7VzG03DtXMbTcO1cxtNw7VzG03NWJJtNx1iRtTc1YkbTcZYkbTcZYkm03NWJG1NxliRtNze0jabmrEDam4doJtXc3tA2puHaBtNw7QNpuZ2gbTcO0DabmdoLtXcx4kbTcx4kbTcR4ou03EeLG03EeK5l2ruL2rmNq7h2rmNpuHauY2m4dq5jabh2rmNpuHauY2m4dq5jabh2rmNpuHauY2m4dq5jabnj7c77XLI242mRtxtMjbjaZG3G0yNuTaZMqwwZMqw2pk6rEwZMqowmTqqMGTKqTBkyqjCbmqqMGTbUmDLdqMGRtRgy3ajCbhtRg3DajBuG1GFyzajBlm1GDJXWLtTcnKuXabiOsXaZI6wwuSOsMLkjrja1lm3LtMjbjaZG3G0yNuNpkbcbTI242mRtxtMjbjaZG3G0y4NqdMMZG1GDI2owZG1GDI2owZaqgwmTqoMGTxmTCZOpkwZOpjCZMpkwZMpjCZOpjBkymTBlqkMJk2sMGWqQwZGsTBlusMGWawwZGsXBkrqDDM1kczWE3JuZcGSuYwuSOYwuSOoMNZTlUGFyR1C4ayxSbGDJtYYMldQYMhTGFyNoMGWbUYMjajBkbUYMjajBly65tga4BrgGuAa4DqQwZPGREypGRMB0wmTpkTJ0wZOmTCZOmDJkyYTJkwZMmDLbkwZFwZFwmRcuGZueCtmsMTVkjYMlbGFyRyKuSOQw1lOUhhcpuRWss1W+QXLdVLmRcslIGQoN8vMZaDilzJlUpSLgym5lwM1yoNcA1wDXAjrGkGsAawBrAamQUTCKRZEOmQUiwiiIh0A6CHRA6ImTIGTEGTmoq7aSW9t2RJmKYzM4bt267lW2imap8RGXBiNNUo+zeb/ALd3vZ4V3qFmjj7XwfRaL2U1+o71xFuP/bn9ocMfSJqXep93w1Zd5e/f8Dx6OqTn7VPZ7TU+xMRTHur07vzjt8uPm9LDaUo1N00m/wAM+6/jv6Hn2tZZucVY+PZ8trOg6/S967czHmnvDrZ5UPT8EkVcpthckbK0m2FgbN+RMtw1QSIpWFPDDSfJcX9iTVENxTMqKhGPN8WZ3TLcREEqMsDmqM1CZctSoaiEylrGgawBrAGsAawE7lQXALgFwHiyCkSIpEIrFEZmTogpECiIh0BREQyJM4WImZxHdy4jSlGH4tZ8IZ/HceHd11m365n8nvdF7NdQ1OJ2bI81dvly8zEadm8oRUFxfel9j193qVyr7kY/l9bovY3TW8Vaiqa58cR9Z+Tza1aU3eUpSfN3/wDh4FdyuvvVMy+p02jsaanbZoimPyhM5vJX0hoyrSp0K046sMTCc6L/ADKE9V/R+TRuI7PB/wAii5cropnvRjLhK26sNj6tP2Zu35XnH3Pcd7epu2/u1PWazo+i1f8Au24z5jtP7w9PD6f8KkOsPs/uewtdU/5Kf2fKaz2LmMzprn6VfWPo9KhjKdT2JJvhul7mextam1c+7U+V1fSdZpP923MR55j919lxO254UUt1UjLcFaKq1LAzlm+6ue/3GJriHSmiZdMMLGO5XfF7znNUy6RTEFqFhXNWklm3Y1CTLgrYjh72dIpYmpxzk3vN4RORRO5VFwC4Dwpt/dkZmuIWVBcX8A5e9/JyXK7i4BcDUA8SItGIZmVoojMyoiJBokaUiEUiiCkUEZOtFeOfBDCPz2lK8pVJJt6uVo3yWS8D53qFVfvqqZmcP1j2X0+n/wAC3dpoiKpzmcd8xMxy4jwX0wAAO7QejZYvE0cNDJ1aii3+WO+UukU30ERmcPG1eojT2ars+kfP0fZPWD6ORr6MdOlC0sHBVMNFb9WnG0oLzhfLikd6qe3Z8N03WVW9Vvrn7/P6+v7vgxzfbgAAATET2l+m9HJzlCetKUrSUY3bdsty96Pc9Orqqpq3TmIfnPtbZs2r9uLdEUzMTM4jnu9+jo6cs33Fz3+48+bkQ+XptTPLtp4SENyz4vNnKa5l2iiKTSiQmqHJXmoq7aRuImeCZiOXm18b+VdX9jtTR5c5r8OCpJvNu50iMMZRkUTZVSkWFTYVSFFvl5hzquRC8KSXN8yONVyZUDAA88081gGgNGJGZlaCIzMqxCKIiGRFiFIhVIkQs8VFbu8+W73lwmEJ4mUuS4Iu2BkWVmXm6TXf84r5s+c6pTi/nzEP1P2NubunzT+Gqf6lxnrn1gAAPqXqb0J/3cdNb/6FDyydSS+C6M6Wo9XyXtHq8zTYj07z/T6gzs+Wfzt6d6E7Fj6tFK1OT21Dhspt2ivJ60f2nGYxL7zpuq/yNPTVPMdp+MfV+fI88AAH0D0Fw6WF17d6dabv42SjG3wZ7TR/7f6vzv2or3a2I/DTHz7v0LgeW+bmuISrSjDOTS+bNREzw5V3Mcy8rG6Qe6Ctfxe/3Hem35cabuZ7PKqSbd223zOsdmszKMjQlIKnIqptFMhYd+OXzGWJuxHB1TS3Lr4hymuZ5aGQ5W3giJnhCeJ4K/NjDrTa8pOtLiV193T4TK0ZRIkyZIJk0QiiZEOmFweJBRMglUxkVu7z9yLtXa5qmIlLe8uCyRrGFw2LDMqRZGVYsJLi0qs4Pk17rfc9F1en7VE/F+h+w9zNq/R4mJ+TgPUPuwBbCYadWpClTWtOpOMILjKTsg53blNuia6uIjL+jdEYCng8LSoRaUKFJJyeV2leU35u76nkxGIw/NNReq1F6q5PNU//AEPwnoH6XvEaUxlOcu5i3tcKn4bNaqilxdNJv9BiirMy911TpvuNNbqiO9MYq/X/AL7Oz1v6D2+DjioK9TCSvK290JWUvc9V+SZa47ZcOiar3d73c8V/z6PihzfYgAA+k+j2JpYfA0NpJJyhKervk9acnkup7nR26pt04flXtDe3a+7meJx+0Hjpp1dbUjqJNJN5yf0R50WdvL525en0c1SXi31Z0hw71S5KzuzTyaKcQhINpyRVT1blJmIaqHEOVV3w3VS3BymqZ5LIojUklvdhDUUzPDmniOC6s1h2pteUZSb35ldoiI4YAAUSIzkBA2FwxSC4UiBWJEbVnqxuuNhEEQ5Jzb3u5prBQBAUgyMytFkZUiwjm0l7Mf1fT/B6nq9ObdM+JfaexFzGpvUeaY+UvOPQv0gBX0H1QaE2uJni5LuYZatPg601a/SN/wCSN24zOXzftFq9lqLMc1d5+Ef9v2PrS0z2fASpxdqmKexjxVO16j92X7jpcnEPS9D0vv8AVRM8Ud/o+J6Px08NiKWIp+3RqRqR52ecXyauupxh9jq7UXqKrdXEw/pGhVpYvDxkkp0cTQTs90qdSOafR2PJ5h+dVU1WbkxxNM/w/nL0h0VLB4qthpXeyqNRb/FTecJdYtM4Yw+/0moi/ZpuR6/z6vODyAB7tFqMI3e6EV8D6zT07bVMflD8U6jVN7WXqo9aqv5epoereM7fmXyNVvDm1jl1zMtxEQlIKTVb3FSaojkbHiHKbvhrRXOZmeU2URqzS3hummZ4clWu/DL5mnem1EcuSZXaO3BSgAAAB2yM4K5FXDArYkFohJViRGYn2f3L5MQQ5DTQAAGiwkrU027JNt+CzZlmXo4fR8nnLurhvf8AgzNTEyNNYWMcO3FZqUXd5vfb6nrepd7OfEw+l9kbm3qVMfipqj+/6fmj59+stir5JNt5JLNtkSZxGZf0P6HaG7FgqNB+3q69Z8ass5edt3kjyaacQ/N+oar/ACdRVc9PT4Q6NLaAwuLcZYijGs4JqGs5d1N3drPyLNMTy5WNXesRMW6ppz4cD9BtGf6Ol/7/AHJtjw7T1LVzzcl7OAwNLD040aMFTpwvqQTbUbtt2vzbNYeJcuVXKpqqnMy+b+ujQl40cfBZwtQr2/K23Tk/Jtr9yOdcer6DoGpxVVZn17x8fV8mMPqAkWIzOGa6ttM1eImXpn2MRiMPxauc1TPl7OgvYn+tfIxXy41vR1GzDlNcQNkvMOVVyZ4DDmnIqo1KiXMuG6bcy5alVvkV3ptxDmkadUpBUZlUpQAAAAAAABsSC0QkqxIhcV7K/UvkxBDlNNABqcHJ2im3yGR34fRnjN25R+5iamJq8PUoUowyikvm+piZyxM5dETKOfS0L4eqv7L/AMWn9DxdZGbFfw/h7j2fue76lYn88fvGP7fjj5t+zv1/qw0L2nHxnJXpYVKtPg53/px/kr/sNURmfg9J13V+502yOa+36ev0fXPS3S/Y8FXxF+9GGrS8b1Zd2Hxd/JHaqcRl8foNNOp1FFv0me/w9Xxb/rjSf+sqfxp/7Thuq8vt/wDw2i/4/nP1Tn6daUv/AOZU/jT/ANpqKqvLlX0jRxPa385+r0fRr0/xscZQeJxM6lB1FCtGSppKEu7rXS8LqXQsVTnvLw9X0ix7mr3VGKojtz6Ps+mNHQxWHrYefs1qcoN8G1lJc07PodZjMYfJ2btVq5TXHMS/mnHYWdGrUo1FadKpKnNf3RdnbkcX6HauU3KIrp4mMp0l3l5r5nXT07rtEfnDxeo3Pd6S7V4pn+HqQot8lzPrpl+OTciHvaEpKMJePf8AojlXy8W7cmXezDiSRVQnVS5ldKbcy5qlRsrvTREOeRW05BUpGlRkFhKRVKUAAAAAAAAbECsSIrEiFxPsrz+jELCFOm5blf5Gsrl2UcEvxO/JZIxNTM1O+nFJWSSXIywtEiKIiKxZBtelrU5x/NCS96ZzuxmiqPyl20eoi1qbVfiqP5fhj5R+8vrvq60no/BYKKqYqhGvWk6tdOecb5Rg/KNsuLZ2oqpiOXxfV7Gr1OpmabdU009o7fN4nrW9JqWKdDD4epGrSherUlB3i6j7sV0Wt/IzcqieHn9B0Fdnfcu04me0Z8er56YfSpVN5qHC5yUrm+5eh/pxhJYGgsTiadKvCGyqKpK0pOGSn1ST6nSmuMd3xeu6Zepv1e7omaZ7xh+B9aM8JVxUcVhK9KrtoWrxpyu41IWSm/ONl+3mYqmJns930aL1Fqbd2mYxxn835TR8L1Yrzy45M8rQRnUUuftLc2dMvfnER+8v09DR05Zy7i55y9x9JNcPyCaoelRoRpxsr77tt72Ymcsd5LOrwzI6Ran1c9SbZp2poiOEZFbTkBKRVSkVUpFVKRVhKQUpQAAAAAAAAICsSJKsSIpqp788wLQIikWRFYkRWJEleFN+ORHKq5EcLxSRHCq5M8tdR+BrDlu8PJx2iac7yX9OXFey3zR4Oo6fbu96fsz8n1fSPa7WaPFu7/q0eJ5j4T/Uvz+Kwk6b7yy8JLOL6npL+muWfvR28+j9O6b1rSdQpzZr7/hntMfp9ETx3tWFVKpvNQ4XOSlcwB7OjfR6rVtKf9KHGS77XKP3PMsaKu53q7R8/wBny3VParS6TNFr/Ur/AC4j4z9H6fBaPpUF3I2fjOWc31+iPb2dPbtR9mH551Dq+r6hVm7V2/DHEKzqcDyHgU2vKE5FdopiOEmwqcmVU5MqpSKqcgJTZWkpFEpMqpSKrAAAAAAAAAACkWQViyMqxIKxYRWBGZnDop0uJHKq7Ho6qcOCI8eq55WUQ4zX4DyKzGZSnU4DDrFvyjN3K7REQlON8nmhMRMYnu6UV1UVRVROJj1jl5eL0XF5w7r4P2f8Hq9R0umrva7T49H2vSvbK9ZxRq430/ij736+f5eXVpSg7STX18j0t2zXanFcYfoWj1+n1lG+xXFUfOPjHo56m8zDrc5dmj9EVa1nFasPzyyXTieTY0ty7x2jy9F1Lruk0MTFdW6r8Mc/r4fq9H6Go0LO2vNfjlZtP+1eHzPb2NHRa74zPl+cdS9odZ1DNOdlH4Y/ufX+HdKrwPLeli15RlIrrEYJJhU5MonJhU5MqpyZROTKqUmFc1WWYahjkaE5FWEmUAAAAAAAAAAA0WQViwi1NN7jLM1RHLrp0ePuRHCq74ddKnysR49Vf6uiEEg5TXKmskGYpmWbTgMNxb8kYdIIytEYVORVLGm5bs+fgSZhuIlZYCDXf7y4eByuRTcjbVGYeTptTe01cXLVU01R6wjQ0JQjNz1XP8sZu8Y9PHrc8OjQWqas8/F7zVe1Gv1FqLc1RT5mO0z9P0elrHmYfOz35Y5AK2UK2FTbKEbCkkyicmVU5MKnJlEpyKrjqvMkukNRpCSZQhQAAAAALrGctYGsMmDGmQA9Om3uXXwIzVXEcuylQXjm/gTLhVdn07OyFPjZcjLx5qdFNLwsHOZn1NPERjk9/IhTbqq7sjiNbdl8yunuscniwp0wyGwpWAjQy3FMyyaSTvv8DOXWmgYSa3e4y6VQ6bhhHE1GkrO2Yaphz7eXFhrEDby4sGIdMJ91eRWZDYQjZVI2BOc0t4VJ1Vx+DKuJLVuhlqKUXV5DLW0szUI5Km8S1Db5GoROTKMAAAAAAJmG2oQLwot8lxZtxquRC0KUVzZnLlVXVLppxT8ehMuNWXVCKW4OUzlyzrXfFmXkU25wyNVrdkG9kHrPPoJSnhiYV10K19/grhyqpVjWjx+ZWdktlVXmGqbcyTXI6xREB1Et5GsErTTjdZ2ZGojuXDe10BU69YMI4qWS8yNUua4aZcDrpy7q8isTySWIXn5BYplPtK4MLtMp33Z/MphKvTd88stxJlumlK1txG8NqO8V5sqOabKqamahmU6jzLKxwxs1CEKAAAAAAAmYbWw0e9fhYOd2cQ6pPPqHjxHYIyMdVeGZWook1Oq3ZXy4FhZoiCojR0yItVefQssU8FuRcGp1kr2z7rC+7meUlUd+pHSKYWWI5fEZTaZYjl8QbWVKt7ZWsRYjBk+4/wBQT1Nhnn0EFSnaVwfwCbRiZZLz+gKXPcNMuFPVllHyDMJBpSNHiTKxSolbdkZbwfFvPogOSc0jUQJ1KvdXhmzWGM93M2ULcqlqPMskcFuagBUAAAAK2SZXDUxkwQy06qOSV8s7h49f2p7MnXzduIWm327k1m94dMRHBkRFKTzRYZq4aiBtawTDa1fPLgJKKO3dJzb3kdIjClJ7/JlhJYmZU6YG3CGuBRPuP9QT1Phnn0CSlcjS9d5L/ngVmOULkaFwLShlG/AZIpbGyMttuRS1KiW/3eJcGUsXiG3lll1N7WInLlbKok+6vMqeqTYUtxCkm8yykMbKQExErMNuXKYFxkwXWJlcCQnkhqEBSK293mITGG+IkMmEOgh4TSauIZmMpyrcA1FJNa4awpJiUgJkFab3+TEJITIrUwhkyBkwKJ91/qDPqbDvPoIJTuFWrvJf88AzCSDeDpmVVnLKP6QsJuokMGUp1n5FiEyk2aRtZ59CpCTZFEnkvMvoRyk2Gi3LAWW8skCXgJIYRQAAAGyLPKQ1BH//2Q==",
    heading: "1. Course Introduction",
    course: "Angular The Complete Guide 2020 Edition",
    type: "Lecture",
    duration: "0m",
  },

  {
    imageUrl:
      "data:image/jpeg;base64,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",
    heading: "1. Welcome to the class!",
    course: "The Complete Nodejs Developer Course",
    type: "Lecture",
    duration: "6m",
  },
  {
    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAACvCAMAAABqzPMLAAAA2FBMVEX////2jREAAAAQDw32iwb2iQD2iAD4qVP3nzv2hgD1hAD2jAD5+fkMCwn706r82bX948ja2tpgX17//vr+9elEREP+7Njy8vLHx8fn5+f6+vooKCX6v4P++vGcnJwUEhBYV1YyMjDQ0NCwsK+hoaHs7Oz5uHf+8OD3oEf6xpP7yJj5sW6NjYzW1tYhIB90dHP4qFu8vLtqaWk8PDv2kyn838KAgH9BQUD5uX/5rmT81K33mTL3nkBNTUy3t7f95NH5u4r2lRn7x435tWv82rH817v6yJ/3myskK18UAAAZP0lEQVR4nOVdB3eiTBdWwqCIHYMVY8USY4klMZasm2/N//9H33QGC5ZY896zZwNS5+HO7TPj8VyXEsbw37Jhffl8vmnd5xtb1t+Pf1GjduXXugHSa5/hr/rAqwFFAQDIhOAW3Nc076BuhT9r+rXf8kpk1sJWfQFUCIt3C0GsVGVRfw7XzGu/7aVJj+bqigq0rdiIMAFV9T+HE9d+58uR+THWIOPsgY0DpOnyPyGU9KFPVcEh4HCQFNX/6/nIyA3AUegwjLxf0d8rtPVIV1NcepbMyeUcAOrh3ymy9fB0S9eSkZLX0NbA7/cPvAO4hRX/ZqA09bv5+yDSlwt1Q3uBogbA99cyMjQSQqPNmjGMLC0/CKjKBlBlVWv8Loj08Ia+pSmq1m1GXFVTItIce9UNvKSAxi+SRcPpKjxQbWvdhqHv00jdaDwP1s0CZfLxSyAyxkTAiB1r0A0f5EIkhtZkVf3Jii96tpe+IDU0Z8NkoNUjR5gzZnS82k+Bat09Exl+daVNi+bRBnFi+R1woq14I6d828tTw9m7gNr9YYOiz86eJqvjO9ZntbqjMQB0TyA0jGdnnwWDu5VEYa/YEqCdSqbWLMeNZW15l5JIfxctQ1mtn/BDGz6H1XmX3SwxFaWzujixMB06hD9YGKe9/fnJEAUFAH9P/4Sw+AQZ3Jk2+xBjhYrvLN+3Nhasaxk0z/GMc1FDfHWteS4Z+rEQmEjJ3Y+otgT5oJxTPNTqwpPU5/M96LQ0tt9aVp/P+11zgjpTfWd91KlIf7bx0bSPcz8uInQzpXsHvUzEBww+z//AWl2xEboDg0iQP8B/kRyEObYROneP/jm92/iovku9rPBRVOtCzzyScsKrvl/usY3rPPZw+hBetHHJB4eFB9+wxRjVroSPAyHlZr2O2oLbJEru0g9vcG0v36rnqtvhsWsIAlv8gcltKvtnrm2vo0psSa10r/H8XRTm+Cjj6xgjtrZXblBQ17iABv4rcbjus/v4zYkhWwDJ2tVqeEyuJTT/rVnUTVtEDq/3FgaPQ6kXV6Pu9Mk72HW7/wfvZMoVv9M62R1MuXLUigtqbXpLur7JBdDkykWE5pR/qhvqZAnewdSrZzkN3sm02ymKHd/SV+PqAtxMBDYaYB1scO1XQeRnnytwI3Lats+uqeFtMliHl6emmajVDEi1WiJxNcsownn6RvIuOf7B6tPJYqFB8i4Gk/rYagwT5sVx0uv0i8mLG5GK5oSZi0LJtSxrACiquuj+iVwWI85A6vKiz3WhiLOqzUEyAKpab15O2+p+mfX4m3F/BK91M2mK4s1dICWFKMLeRb2hSOenCwsxTlK0+kWGxviZBPJf4GF7U3efETOausidHaIol0A3xEBQ1QdcoRHYyDqzZnmmn0r+Pu9zDiUrIOMhnWj0KyK4sXl4I1Ctc3KRyW2gm2IgSMtvVVvUx+9/Gk1Ef/48+741ddNAR3C+Aibo+NBAtDy5GRXGyExAo1B8K900P8NWfcNoUHDKAlMH6VP6rFuMkm8msxb5mqyNaQDWeaJHtjq9ESN6P9I/c4uVwX3KecrRLfqUW/HCDqDos+JgI/kcyfIEc3quHyc7ghIN5yBIpX5ydRZlIvrmkiz7EYTIMVhicervzHqYcuFSjtNR4l0c9iFrJzZWWA8L3Fwec38yfILfdqJydL02/LfMjcff7LaL3dd85saR7ZrUaHRdjp6ZIuKYhp8mHHXjnzVFg07xbDas7+7oYWY0N9Hg+d7xpiHOutEgR33hK9kKibGgz36S2DOj73XvhulsgJtsS0StKbXLoGe0OpgXYseOQtQXvqVxFUZaCm06urbJyE22TNmiuVz0vAiI5oYMAqDOXZ+a9R1waFo0Ec5VpgyICursqF6mh+vqtmk33PJPuhH5sl1EFBOuN6Pc3IDCzFrwozJQA/5G9DqpWXMiFFsfrJQTOVXVNoKD77dtuEGCdj0j/LxQFaACX2NImCdhoDmWyNHah4WPKvU/VFCb15jgRR8fXSibyHnd4nPbkxnDwCRHGQJK4hxtvl778Hm7uicRmFhDdrT5/kE5pxYZL65SgaULNfDKARaj2Vhs6VtkJhuXketRVVa0yVdESNmZxt+6F2rAMcQ9gIT2+EM4qtca3QU8eqXCjL+q/dH37ugR/4ZJW2SAp7NZDCB9bTcScTgWSpbFuIFPMiPvU4D7KgHIa8/h4UFTU+XqGp7GRK5fySYSCmX3HEZhjtfgQYL22/oYRmvmrmbweDWUvhbsPHY8jwNE7hiAPc60A1lXA0gs1N1LUA9X5xNB33u5d/+MCgN/nh2BdAdAcBcBJIzCuxpAwljAPeoM9L9Os0dTvc8HOQSrAAm7ToC0mwHI5ClHebDrJRJd2zJAbQL15YEmigjQ130AJAynADuq4Y2BI1QCfMODjZM75CDxpd2jgFGHg6BOjwkl3SVA9ogGeeJy1oeY3Fb9xxVG3SdAHi6GXMpVlkL30rRjp1PbG6Db0WKIal5mbmw1Fz8E9QUmR5eJ3CkHeRpMO6lbphwZihMn/GCg9b0CZE45C210M4XiGln5ycQA9wqQ/eIby5p5F0Ti50d5kLsFiKdrZO+6FDLtgZVg8LNsxbFCWrs6QDXuRa5HhixuP4PpD4PoUTsI6QQIoMh4wj7q5CCg+q4NkM1Ca+HkDxufH49L0Y3cN819CAABoHX/oVsbjQkgGAkAAWizHzMN5Ympxm2hFRMwwfHRBid5TaP5jaL2DCCgal+Cw2ss/aqi8S4GVDC+AXQQseEnSBiIJAys3Nm/9Khb7Fj/jFIgjMZUUXG4Q108rxVx15o+gGb5MAOqNv64et9ixEcIqo4PZs9fsCsckohaE03zW5uTEOZnbqppQsw5B/WlsSV7qtf+WhAg323NV8/GD6hh4cfEYr9kqRl5nmDhIgMwef7fSsP0oeXHyUAZKINxmMScdfxvG+ke18PXIMYrQJy06Z1JILdUVy3sWPQBRZXHS24PJFCKx3nU17zH2gbOLMIgbnsckZuAjja7GpKsTJgrEIIGDxYZy7EWsKdZhwCBemM9lBSsptPBo148mU5Xj7rwUGIFzkIf6+4eVUBTW9GGD3ER5g/WfJP3Egihlx6t5yK6cCGhWOvxISSFHmb5NP+pDCkFm1+ZZbPxHjutXeykhAuDqU4xBK9sx+cc3VLeQZUk/T3Z6/SzxUIrxq8uoWfA3Wp+li3G57sAYiNibD3GJ7dZVW0C/fU1yTo7eiJiTacWzXnptbAP2pyRadOgR4dW3f9MCxX02kfXjl9WOw+SFEIkSe0W/TEuQWpX0310SJI6GY+n8gS34a8djkVqRi+EP78x4B4lJ9Hfe/BO+FahEWM4fHjmeSmSA/Gkx5VMNsaCT5XCGUjZ3sFQDrqeowrcZPyUq3tVlCeJQFU9tYb0KNNgf7sL1Z7jMF2EvMMoJI0YQHAnG+tL5Hf4c5mexk+BvwhXciRm0oNI9Oe8JPFHPFI+DcGrpUKVPyPu3sd1hodGRWiC+x8u1Q1oMJ8MAguLaWw9Yn2rKIuI9B7iSpwoZBpbH+agnaiJZbBFibw2bazUswEqdiS7nU+hlTaXyBUSvVIKZbYDVGYPwT/1kzZAry37GT1XgHiRPKs9eOfuh4u1Rkc7omWt/NDTj9btyo2G0G1V9RuKsZpP4UcZQHnyzsXRqE224hygh6cQxw22/4Fj2EFnBDESIakwilOEyvjKN9a36HUl+FsMnwH7U59svHKAQn3h28TdAWK+NsrIoI/NJJBrRWZOKKOBQicseOQNx0g/NIVQVDhKAQpiBpIqaPsVt7id5gCh7hDPSqxr9AtPBMMZ4pUSORvJ3BjmLoKb56WCqUw4ifyIOVGaQcbBjBjCqGGAHuA3eOwUHZy1jXTaGjrQi4XpXVW8CBBYOmYOWwEIvK+FOxClUQ+BkhI3jbCEAJBUCXqqBYpVORhMY3khPaKGtPCVhGtwN5EKGeHFKNMUqwzA0ANGBXMsgS1EGK8V9CQLwrfZTt+0bomkEJl35j43gACQcgxAyVH8rfhEVGyyHXICJL2hzRLBCovmOfkZAVR6LfSzfdKkMuEQQcgGHwnaWAJVCH4UOPw7wvIhxNkxheAk7OhCfKgXktJ8dgnN1ex14aDmPgARZOhfAlDMBggr/QzhBdzUFyxY39gFQQpJbw2gloCqB/MH3RbuRgDCvTtdRI9+2gEQC/3gGszwmlm0C6BVDtofIIRRutSrPK1y0Jzj9iBh6wV3FtLFGFVjqXlnFaAUgSFLMMmGbBnuITt5DtALRhox3E6AhqxT/fPYRtDWero1gFY4SNkboGBq9NZ+ouraAVBKACi5AaB0OV5sP1CNJQBUxVI3FCINThMZTpV4gQshAlB6f4CY64WkBx+W4qbjTwNQ71GiBvGDG0DBNYAyrax4pQDQK0EsT/ZiD3YfpcewRj8YoAR7eaiRP7cE0E4PUB5zDjRGntqHAQRVD7FuQm3CIhygOTnAtBoWXKsAZY4ASKcvr3UFq3HH7AnbZdAOgJgvVqbSolJKp9e0mBtAGaKapfg8VnVqsSrpqyHW3JMB5BlQPV+3E/a7hqX8FKC0ZNt4mYMAqhB8sGSZOwAihpPE3fOYQwYRgJAtfThAVO4gS3HARNCOS47uYhSgPLHQ8Pa6HeQCEDF0iCHgtIMqgglt35fqc+qrYZ1/OEBs1o2Jp8basWvSpp9ykGDveNIPBwAUC9k+A7UEZ/Yp8FCsWmXK7lESEHvgOv94gAY8FLRz8LJlV72ucFAAARSwjzoBouGO5Mx2xaDxgj99aS+AiCsWwlYM9bX66BQimpCj+5B9HJUxRiPBkq6Sh6SPAogVMSw8/5jNuGvEnZHj8WgQ5gCh2CGa4iHxlw9dEQBCR79IDU3yUTByqexoHQAQQTNJ3XnUvjKP+6BQgBRqJWlghDaf9Ma+5yiAGAd9cyW2T7FCNPeNMVIoQCgA9M6vMxp+fJQBhI5aPIXEYhZc6jKXcQ+AeOAiSJkG79ghJHI33LNmXDCniSE9Pw6gCZdBLBW93/B3Pfo+AUDFAAFlYrGgNA0wGmgIGBp1FQ3Ao87K4Q4NB5V7HSlEwzKFfQAiLYWtTpXfpAdqY5aZjWgTvluPGkbzfNFmoB+oeb+nS7e8+yanzKg1QDJoYbHw62duOhV2Jggg7Wu4EjtJ0Y9PTWK83a7uo+Y79pUPEhHMiFsgQLhvSeSWNApGvwP1Zkjg4wiAaCGQ7PPUWeRjT3wwCrDtCRp3Hr77VQWlMb4tPqYHzQKxflXBjnhKPfT5pSJ6/d0AxeyAtNQvoXAkDue/QhSyr/lUqZTKvyJXpICuI7KOPYe6rQcDZDKFM/ZMyJZr4es2SkSehWEWKI344dJRkzhvgVyN9gtyMqVZleBmZyQwlxCAXvAmifyleC7kNQg7kUSke0fqlOy7l0Y0jhqMM19YemL5D8JlBKA+3t4BUI2NLHn30PHL8vRgeDz/q4PVQZeq322+mcoMvXWhgjyn6ttrhv5YKBTiJBw2gpsFEkZOdtA2zQ1VR0XELgSQXpvwRXAli5hkDlrqFfe8fp67tPi+HfK8Ft7ekYGMsnDH0jOgSqy+E4910s1Ijs45g/hnaoV3TOmYSUKijiV/+wykXdsedCFPDO58sWQsVaqKqZ2t991CETsedCxAwwZJDZq1j6+Jpk3GYZY4DIfdrzwfxXaJ3r1JMH6O7WLhAKg3aJWQGeUFQc2uFjhuYYR5q3zUdcIduFD+MXVt4+dYIQ0NRVlBZVFcm5s4VQiwoXgEhaTicTUNnF6pIjsBsdzzgDsdB8/mS10NoIBpA+n1sE9jRYnHAZQlHtYPqHcyDmJluEjwHGwoUrKdVTnwBzmrdgnxtQDypHdku/YmFptAiTDuahxYBeeeF9ufMgwVDFAw6QTJqW8yawgGmU7EeSGu5zyOy4Li3k4FhugPy2MMPQc5qyIdClArTmyaThyrmmrnFbUmNZrNOiQgmJXePJXH4lvLNlHm0H7plFmTSqMCOzedqnpirVEs2S/SEpl0v1jqPZG8ZDX/Whix8oRk5XUWz9N7pvNwpyWYl5uJT1KLBmzsHe5YoUMBmhFLFhrIOJxVkaBfn3klJu5jFQPUp7tUWaeLZDfLIkH2uW2pkMIG9ZNEsl0oIZCG90TZjR45sYCRS1FfrUwfiqnjcacaF0G6YDMeOL+QC0AbM9gV8pKwIThbGpcePRnoFMzKc9hyFCHMQleiWE7BvSz+3kEI6WslD88pImQheLNKmZ5blLJt6LHMUdqe5GQfoQIjACEfpZOfEY2GYZzn4ck9vPPUqqAMUmvTG9rEBkXhluwdct0foI0cFJNwlCYuhdA3T2dhW8pULbcwdtkQQaZD3/+FXICOVnAJFU6tkz1UjTeL4VgRyeqnETYEoEfyJTrIv0u+ES8vBr3cDMQ4hHYgZz65ehq6j9UBI7Gj7xu03x+gjRwEvewQ/B+FJSr4Y5ZgU0i+JojK4xBAc4ok9uFTpMN4MiNUzzhznAsByhLZk5VwLDaPOiYGiOEae4I9CZqOJITZQkD1cXgF3rnjXj9l8HnWsfnLyqYDh41fORQgzwi1oYRqBGdopx2MhWA3wxSX2jHY1CL5rvADIywgcxRf2MUr5xa5xTMiMMYRI2GAIFRzeuIrqn8kErmE2LIA4drHksixHkZcgsaeicP9Afqz8YIeev2W9NhB37EvxVGK66mIqY0iztwOeiWtSuICslmrR9gp1BbOLUqswAe2vI1y8ggmDNCIhjUw9aUQuaqI4o09VBma7VR2aDGT9Sk6mmXf1PNPAapC3odieQS7TiqGYqZl6cGuUBUA6tDoUIyW2D3lPc5zUxAgZlRm3hBjlrHqwwB1JIlbQ8miHXJEfJunm/2XDe/HiZW+yAs649Fgv+KFnwKUKUjtl7Y0T7elVg9JFNiq+EuJ0EvGARD5xsHy62MbFZflHeeWMgJARGrHERttAkgK9dhViK9irQKOl2XdTG4Wr+ftYAVmh00sfjBA6Pth/p9Jbx3pEYcGX4XDWVY4GJd4rt2TTKegHMlmUs5zBYCgUC5AnYgUH+tihD9iqTTsYtKqvqq+VKA6cNHzrDTIzsXvWUC1QtsBUv5svqIEuwlKPeeRoO5gwdunRyoxBNADwYUGWoMpXg4tvaQfpCI9F1XMCwBB7ShVCM9VqK7HyUnIPW9ISJObBMupjCc9J18g5ur186Ue+Ez9dgneIXosag9cEQFCkcVthVhIxY/QNw+RIP2MKhyouqHSztK68TJVzTPWV+KIJ9i5GSiUkyJAsI9BOYORxgClqcGEdUKPQQE74pwZ8Z6kG0ARPreRPSpsvyLOVdKjOTqukgOEcxvbZ0LpSLjwIgl1C7bUkFbpJTOxAlbVECCpVU32nqgags19KyU9yXIIMQ8515Mm54oAoYpZ0mWIoQiV4KiaKWXRbZA13klDfwyaDAhWqQVvnX6VWMHVhlatM9C+ZcAbCA+eA7KCAcIDyKJugn4ukVwqFBNx7IGi+t7+rI2TFdC/gr8X+8xv8gSRZ/Y2Qz/M6blv7FwRoOCbRPPSBKAqPKf4GCI9LQZ3sugeKMFRekI7MwjdbGtYe8nHzQv9wOSF5IevQGNG3wdkrMZgLVW4SmnaFeb8C1baOOnXQq19e0zO0W6WBb2CrSeilIndW8F7oRFqW1uMPuZZdihPnJQYHuTSJmUSaTLi5REj+DIjav51q6dRYyrdudgMH4pwaNQMkz78RFP87WEk9Mr4PYPlMnvDZG8+7xGdiwI6wVQvJdi66Og85Vk/N2X/Cn+fz4lZkMZDniCV4ImcR0rzsn32C7qHS2ifryfnVOnMvb/j2aFPQ2F73KWTVex11G5qdO2lqcYXKFFX5r2xB9RdZS3rGyGdrwC4DoM9JPMmluK7DtmTTa57XXwwvXyjC7ZfgGxnQNmQG+bDwpXDnPrfQ0N7SeZNECT41EGnmfz+7uiTz6ywxV62nc+fTa10p1Qb2Ay0RQzbk5ucZvKXuyJzwhPD26Z3s6de8oLbWdPxQpSw8XHJ7kTsk64+UdZlyRDwcdPi7/YUVNefKeuCNLTnrpUXbkN6xEne/kM89GGvgCh73RWUYZ8Kpv8RSS1O+L97qm1hosnTLyh1k2RMBHz2WIRdmKpU3rVuz2+gpqYJDd7HDw2Lk936fnk3M+rCzOuadz8/XZwuGQxubQnVU5KZ0xxt3VekCAkvr6yO72oNzEMoPBBnFlcm+zd0KC6oAdT336jwzaXmWDZEHR/iPBiOBX2AlvttXFRreB1r8miHRjBqzmUjlIV7vuu+KDEcryxZhCeMOoz0nGPhERmo9UbtN3iwetRaXUtOBketGT4UJTy6jaJO/1xvtcaTkLF0zIRJpc/iyCj8+uJHMpqf7GsZiSbMu2Im0zSikeb4W9mwojrQfhA/jYhWOAcJr57l9Q7890F4tJemKcqmNRpB4PlHprDZ8G5e+pEuwHYntLEFCB7Q/bG7WbNcl/C7ZwKa7yQpwEQObFsi844JqpzxyeYp1pvbFlm9U5KVwDR8Wn0cfYcYab8BJDKH8xk8AzOa8y02LGV8R4TncJ6Mw7WzGXO1oTUdQO9VAeDaiukg0gBQFM07mH59GGcPcOlG9F8zZ/nuibpWY/kveizj/B/pRYU5E79GdQAAAABJRU5ErkJggg==",
    heading: "55. AWS RDS Hands On",
    course: "Ultimate AWS Developer Associate 2020",
    type: "Lecture",
    duration: "2m",
  },
];

const learningContainer = document.querySelector(".course-container");
function RenderLearningCourse() {
  myLearning.map((content) => {
    const courseContainer = document.createElement("div");
    courseContainer.className = "course";
    courseContainer.innerHTML = `
                    <img src="${content.imageUrl}" alt="${
      content.heading
    }" class="course__image"/>
                    <div class="course__desc">
                      <h3>${
                        content.heading.length > 33
                          ? content.heading.substring(0, 36).concat("...")
                          : content.heading
                      }</h3>
                     <p>${
                       content.course.length > 33
                         ? content.course.substring(0, 36).concat("...")
                         : content.course
                     }</p>
                     <p class="bottom">
                      ${content.type} .<span class="duration">${
      content.duration
    }</span>
                     </p>
                    </div>
    `;

    learningContainer.append(courseContainer);
  });
}

RenderLearningCourse();

const leftSpan = document.querySelector("span.left");
const RightSpan = document.querySelector("span.right");

let scrollLeft = 0;
const courseContainer = document.querySelector(".course-container");
function ArrowClickHandler(event) {
  const width = courseContainer.offsetWidth;

  if (
    event.target.classList.contains("fa-chevron-left") ||
    event.target.classList.contains("left")
  ) {
    // console.log("left");
    learningContainer.style.left = "0";
    scrollLeft = scrollLeft == 0 ? 0 : scrollLeft + 870;
    if (scrollLeft == 0) {
      leftSpan.style.display = "none";
      RightSpan.style.display = "flex";
    }
    learningContainer.style.left = `${scrollLeft}px`;
  } else {
    console.log(scrollLeft);
    // console.log("right");
    // learningContainer.style.left = "-870px";
    scrollLeft = scrollLeft <= -width + 870 * 2 ? 0 : scrollLeft - 870;
    learningContainer.style.left = `${scrollLeft}px`;
    if (scrollLeft < 0) {
      leftSpan.style.display = "flex";
    }
    if (scrollLeft === -1740) {
      RightSpan.style.display = "none";
    }
  }
}

leftSpan.addEventListener("click", ArrowClickHandler);
RightSpan.addEventListener("click", ArrowClickHandler);
