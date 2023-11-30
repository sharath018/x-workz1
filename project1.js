const handleNews = async () => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=banglore`)
    let result = response.json();
    console.log(result);
    result.then(res => {
        console.log(res.hits);
        for(let i=0;i<1;i++)
        {
            // console.log(res.hits[1].title)
            document.getElementById("title1").innerHTML=res.hits[17].story_title
            // document.getElementById("p1").innerHTML=res.hits[17].story_text
            document.getElementById("author1").innerHTML="Author: "+res.hits[17].author
            document.getElementById("c1").innerHTML="Created At: "+res.hits[17].created_at
            document.getElementById("u1").innerHTML="Updated At: "+res.hits[17].updated_at

            document.getElementById("title2").innerHTML=res.hits[10].story_title
            // document.getElementById("p2").innerHTML=res.hits[10].story_text
            document.getElementById("author2").innerHTML="Author: "+res.hits[10].author
            document.getElementById("c2").innerHTML="Created At: "+res.hits[10].created_at
            document.getElementById("u2").innerHTML="Updated At: "+res.hits[10].updated_at

            document.getElementById("title3").innerHTML=res.hits[2].title
            // document.getElementById("p3").innerHTML=res.hits[2].story_text
            document.getElementById("author3").innerHTML="Author: "+res.hits[2].author
            document.getElementById("c3").innerHTML="Created At: "+res.hits[2].created_at
            document.getElementById("u3").innerHTML="Updated At: "+res.hits[2].updated_at

            document.getElementById("title4").innerHTML=res.hits[3].title
            // document.getElementById("p4").innerHTML=res.hits[3].story_text
            document.getElementById("author4").innerHTML="Author: "+res.hits[3].author
            document.getElementById("c4").innerHTML="Created At: "+res.hits[3].created_at
            document.getElementById("u4").innerHTML="Updated At: "+res.hits[3].updated_at

            document.getElementById("title5").innerHTML=res.hits[4].title
            // document.getElementById("p5").innerHTML=res.hits[4].story_text
            document.getElementById("author5").innerHTML="Author: "+res.hits[4].author
            document.getElementById("c5").innerHTML="Created At: "+res.hits[4].created_at
            document.getElementById("u5").innerHTML="Updated At: "+res.hits[4].updated_at

            document.getElementById("title6").innerHTML=res.hits[5].title
            // document.getElementById("p6").innerHTML=res.hits[5].story_text
            document.getElementById("author6").innerHTML="Author: "+res.hits[5].author
            document.getElementById("c6").innerHTML="Created At: "+res.hits[5].created_at
            document.getElementById("u6").innerHTML="Updated At: "+res.hits[5].updated_at

            document.getElementById("title7").innerHTML=res.hits[6].story_title
            // document.getElementById("p7").innerHTML=res.hits[6].story_text
            document.getElementById("author7").innerHTML="Author: "+res.hits[6].author
            document.getElementById("c7").innerHTML="Created At: "+res.hits[6].created_at
            document.getElementById("u7").innerHTML="Updated At: "+res.hits[6].updated_at

            document.getElementById("title8").innerHTML=res.hits[7].story_title
            // document.getElementById("p8").innerHTML=res.hits[7].story_text
            document.getElementById("author8").innerHTML="Author: "+res.hits[7].author
            document.getElementById("c8").innerHTML="Created At: "+res.hits[7].created_at
            document.getElementById("u8").innerHTML="Updated At: "+res.hits[7].updated_at

           
        }
    })
}
handleNews()

let hello=document.getElementById("hello");
let submitResult = () =>{
    console.log(hello.value)

    let save=sessionStorage.setItem("details",hello.value);
    window.location.href="./search.html";
}
let cityName =sessionStorage.getItem("details");
    console.log(cityName)
   
const searchCity=()=>{
    const handleNew = async () => {
        const responses = await fetch(`https://hn.algolia.com/api/v1/search?query=${cityName}`)
        let results= responses.json();
        console.log(results);
        results.then(resu => {
            console.log(resu.hits);
            for(let i=0;i<1;i++)
            {
                // console.log("KKKKK")
                console.log(resu.hits[1].title)
                document.getElementById("title01").innerHTML=resu.hits[1].title
                // document.getElementById("p01").innerHTML=res.hits[17].story_text
                document.getElementById("author01").innerHTML="Author: "+resu.hits[1].author
                document.getElementById("c01").innerHTML="Created At: "+resu.hits[1].created_at
                document.getElementById("u01").innerHTML="Updated At: "+resu.hits[1].updated_at

                document.getElementById("title02").innerHTML=resu.hits[11].title
            // document.getElementById("p2").innerHTML=res.hits[10].story_text
            document.getElementById("author02").innerHTML="Author: "+resu.hits[11].author
            document.getElementById("c02").innerHTML="Created At: "+resu.hits[11].created_at
            document.getElementById("u02").innerHTML="Updated At: "+resu.hits[11].updated_at

            document.getElementById("title03").innerHTML=resu.hits[2].title
            // document.getElementById("p3").innerHTML=res.hits[2].story_text
            document.getElementById("author03").innerHTML="Author: "+resu.hits[2].author
            document.getElementById("c03").innerHTML="Created At: "+resu.hits[2].created_at
            document.getElementById("u03").innerHTML="Updated At: "+resu.hits[2].updated_at

            document.getElementById("title04").innerHTML=resu.hits[3].title
            // document.getElementById("p4").innerHTML=res.hits[3].story_text
            document.getElementById("author04").innerHTML="Author: "+resu.hits[3].author
            document.getElementById("c04").innerHTML="Created At: "+resu.hits[3].created_at
            document.getElementById("u04").innerHTML="Updated At: "+resu.hits[3].updated_at

            document.getElementById("title05").innerHTML=resu.hits[4].title
            // document.getElementById("p5").innerHTML=res.hits[4].story_text
            document.getElementById("author05").innerHTML="Author: "+resu.hits[4].author
            document.getElementById("c05").innerHTML="Created At: "+resu.hits[4].created_at
            document.getElementById("u05").innerHTML="Updated At: "+resu.hits[4].updated_at

            document.getElementById("title06").innerHTML=resu.hits[5].title
            // document.getElementById("p6").innerHTML=res.hits[5].story_text
            document.getElementById("author06").innerHTML="Author: "+resu.hits[5].author
            document.getElementById("c06").innerHTML="Created At: "+resu.hits[5].created_at
            document.getElementById("u06").innerHTML="Updated At: "+resu.hits[5].updated_at

            document.getElementById("title07").innerHTML=resu.hits[6].title
            // document.getElementById("p6").innerHTML=res.hits[5].story_text
            document.getElementById("author07").innerHTML="Author: "+resu.hits[6].author
            document.getElementById("c07").innerHTML="Created At: "+resu.hits[6].created_at
            document.getElementById("u07").innerHTML="Updated At: "+resu.hits[6].updated_at

            document.getElementById("title08").innerHTML=resu.hits[7].title
            // document.getElementById("p6").innerHTML=res.hits[5].story_text
            document.getElementById("author08").innerHTML="Author: "+resu.hits[7].author
            document.getElementById("c08").innerHTML="Created At: "+resu.hits[7].created_at
            document.getElementById("u08").innerHTML="Updated At: "+resu.hits[7].updated_at
            }})
}
handleNew()
}
searchCity()


