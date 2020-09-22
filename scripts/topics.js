class TopicCarousel extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
                    <div class="container">
                        <div class="topic-carousel">
                            <div class="carousel">
                                
                            </div>
                        </div>
                        <div class="arrow arrow--left"><span class="arl">&lt</span></div>
                        <div class="arrow arrow--right"><span class="arr">&gt</span></div>
                    </div>

                    <style>
                  
                        .container{
                            width:100%;
                            height:120px;
                            margin:1rem auto;
                            margin-top:2rem;
                           
                            position:relative;
                        }
                        .topic-carousel{
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
                        .carousel{
                            min-width:100%;
                            height:inherit;
                            margin: 0;
                                
                            position:absolute;
                            top:0;
                            left:0;
                            z-index:5000;
                            display:grid;
                            grid-template-columns:repeat(6,260px);
                            align-content:space-between;
                        }
                        .topic-carousel::-webkit-scrollbar{
                            display:none;
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
                            display:none;
                            }
                        .arrow--right{
                            right:0rem ;
                            transform:translateX(50%) ;
                            }

                            .topic-div{
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                color:rgb(24, 100, 136);
                                font-weight:700;
                                font-size:1.5rem;
                                padding:1rem;
                                border:1px solid gray;
                                margin-right:20px;
                                text-align:center;
                                border-radius:5px;
                            }

                            .arl,.arr{
                                color:rgb(24, 100, 136);;
                                font-size:3rem;
                                font-weight:400;
                            }
                           
                    </style>
    `;

    const carousel = shadow.querySelector(".carousel");
    const topics = [
      "AWS Certification",
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AWS Certified Solutions Architect Professional",
      "AWS Databases",
      "DevOps",
      "AWS Certified Solutions Architect Associate",
      "AWS Certified Developer Associate",
      "Cloud Computing",
      "AWS Certified SysOps Admin Associate",
      "Microsoft Certifications ",
      "Security Certifications",
    ];

    if (this.hasAttribute("topics")) {
      topics = JSON.parse(this.getAttribute("topics"));
    }

    topics.map((topic) => {
      const div = document.createElement("div");
      div.className = "topic-div";
      div.textContent = topic;
      carousel.append(div);
    });

    const arrowLeft = shadow.querySelector(".arrow--left");
    const arrowRight = shadow.querySelector(".arrow--right");

    const learningCarousel = function (event) {
      const topicCarousel = shadow.querySelector(".topic-carousel");
      const carouselWidth = topicCarousel.offsetWidth;
      const topicDiv = shadow.querySelector(".topic-div");
      const topicDivWidth = topicDiv.offsetWidth + 20;

      if (
        event.target.classList.contains("arrow--left") ||
        event.target.classList.contains("arl")
      ) {
        topicCarousel.scrollLeft -= topicDivWidth;
        arrowLeft.style.display = "none";
        arrowRight.style.display = "flex";
      } else {
        topicCarousel.scrollLeft += topicDivWidth;
        arrowLeft.style.display = "flex";
        arrowRight.style.display = "none";
      }
    };

    arrowLeft.addEventListener("click", learningCarousel);
    arrowRight.addEventListener("click", learningCarousel);
  }
}

customElements.define("topic-carousel", TopicCarousel);
