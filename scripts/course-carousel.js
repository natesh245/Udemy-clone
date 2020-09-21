class CourseCarousel extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    let courseArray = "";
    if (this.hasAttribute("courseArray")) {
      courseArray = JSON.parse(this.getAttribute("courseArray"));
    }

    shadow.innerHTML = `
       <div class="container">
            <div class="carousel-container">
                <div class="carousel">
                    
                </div>
            </div>
            <div class="arrow arrow--left"><span class="arl">&lt</span></div>
            <div class="arrow arrow--right"><span class="arr">&gt</span></div>
        </div>
         
            

        <style>
            course-card:not(:last-child){
                margin-right:15px;
            }
            .container{
                width:100%;
                height:300px;
                margin:1rem auto;
                margin-top:0;
                
                position:relative;

            }
            .carousel-container{
                width:100%;
                height:inherit;
                overflow-y:hidden;
                overflow-x:scroll;
                position:relative;
                z-index:4000;
                top:0;
                left:0;
                scroll-behavior: smooth;
            }
            .carousel-container::-webkit-scrollbar {
                display: none;
              }

            .carousel{
                min-width:100%;
                height:inherit;
                margin: 0;
                    
                position:absolute;
                top:0;
                left:0;
                z-index:5000;
                display:flex;
                justify-content:start;

            }

            .arrow{
                position:absolute;
                width:5rem;
                height:5rem;
                border-radius:50%;
                background-color:white;
                top:30%;
                transform:translateY(-50%);
                z-index:10000;
                display:flex;
                justify-content:center;
                align-items:center;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1),
                    -2px -2px 2px 2px rgba(0, 0, 0, 0.1);
                   
                }

                

            .arrow--left{
                left:0rem ;
                transform:translateX(-50%) ;
                
                }
            .arrow--right{
                right:0rem ;
                transform:translateX(50%) ;
                }
               
                .arl,.arr{
                    color:rgb(24, 100, 136);;
                    font-size:3rem;
                    font-weight:400;
                }
        </style>
    `;

    //////////////////////////////////Carousel behaviour
    const arrowLeft = shadow.querySelector(".arrow--left");
    const arrowRight = shadow.querySelector(".arrow--right");

    const learningCarousel = function (event) {
      const carouselContainer = shadow.querySelector(".carousel-container");
      const carouselWidth = carouselContainer.offsetWidth;
      const courseCard = shadow.querySelector("course-card");
      const courseWidth = carouselWidth - courseCard.offsetWidth - 20;
      console.log(event.target.classList);

      if (
        event.target.classList.contains("arrow--left") ||
        event.target.classList.contains("arl")
      ) {
        carouselContainer.scrollLeft -= courseWidth;
      } else {
        carouselContainer.scrollLeft += courseWidth;
      }
    };

    arrowLeft.addEventListener("click", learningCarousel);
    arrowRight.addEventListener("click", learningCarousel);

    ////////////////////////Render Course Card inside Carousel
    const carousel = shadow.querySelector(".carousel");

    courseArray.map((course) => {
      console.log(course);
      const courseCard = document.createElement("course-card");
      courseCard.setAttribute("imgUrl", `${course.imgageUrl}`);
      courseCard.setAttribute("heading", `${course.heading}`);
      courseCard.setAttribute("creater", `${course.creater}`);
      courseCard.setAttribute("rating", `${course.rating}`);
      courseCard.setAttribute("price", `${course.price}`);

      carousel.insertAdjacentElement("beforeend", courseCard);
    });
  }
}

customElements.define("course-carousel", CourseCarousel);
