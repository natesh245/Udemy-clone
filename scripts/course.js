class CourseCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    let imageUrl = this.getAttribute("imgUrl");
    let courseHeading = this.getAttribute("heading");
    let courseCreater = this.getAttribute("creater");
    let courseRating = this.getAttribute("rating");
    let coursePrice = this.getAttribute("price");

    shadow.innerHTML = `

                 <div class="card">
                    <div class="image-wrapper">
                      <img src=${imageUrl} alt=${courseHeading}/>
                    </div>
                      <h2>${courseHeading}</h2>
                      <p>${
                        courseCreater.length > 35
                          ? courseCreater.substring(0, 38).concat("...")
                          : courseCreater
                      }</p>
                      <div class="rating">${courseRating} </div>
                      <h3>${coursePrice} <strike>$1900</strike></h3>
                  </div>
                 <style>
                     
                    .card{
                      background-color:white;
                      width:240px;
                      height:100px;
                      margin:20px 0px;
                    }
                    .image-wrapper{
                      width:inherit;
                      height:150px;
                      border-radius: 5px;
                      border: 1px solid #dcdacb;
                      overflow: hidden;
                      position:relative;
                      background-color:black;
                    }

                    .image-wrapper img{
                      width:inherit;
                      heght:135px;
                      object-fit: cover;
                      position:absolute;
                      top:-1rem;
                   
                     
                    }

                    h2{
                      margin:5px 0;
                      font-size:1.5rem;
                    }

                    p{
                      margin:5px 0;
                      font-size:1.2rem;
                      color:gray;
                    }

                    .rating{
                      color:#be5a0e;
                      font-size:1.5rem;
                      font-weight: 700;
                      line-height: 1.2;
                      letter-spacing: -.02rem;
                      font-size: 1.4rem;
                    }

                   
                    h3{
                      margin:5px 0;
                      font-size:1.5rem;
                    }

                    h3 strike{
                      color:grey;
                      font-size:1.2rem;
                    }

                  
                 </style>
    
    `;
  }
}

customElements.define("course-card", CourseCard);
