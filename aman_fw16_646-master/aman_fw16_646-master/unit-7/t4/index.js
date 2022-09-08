const imgarr=[{
    "img": "https://robohash.org/veniamquisunt.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/molestiaequibusdamdignissimos.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/sedoccaecatidolorem.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/iustodoloribusab.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/rerumautdoloribus.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/doloremquenumquamofficia.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/ducimusmagnamnesciunt.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/omnisvoluptatemet.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/sedinet.png?size=50x50&set=set1"
  }, {
    "img": "https://robohash.org/fugiatetminus.png?size=50x50&set=set1"
  }]
      let container= document.getElementById("container");
      let topten= document.getElementById('topten');
      let latestten= document.getElementById('latestten');
      let pagebox=document.getElementById('pagebox');
      let totalData=[];
      const getData= async ()=>{
          let res= await fetch('https://jsonmock.hackerrank.com/api/articles?page=1')
          let data= await res.json();
          console.log(data)
          display(data.data)
      }
      getData()
  
      const display= (data)=>{
          container.innerHTML="";
          data.map((el,index)=>{
             let  box= document.createElement('div');
             let tbox= document.createElement('div');
             let img= document.createElement('img');
             img.setAttribute('src',imgarr[index].img )
             let author= document.createElement('h3');
             author.innerText=el.author;
             tbox.append(img,author)
             let title=document.createElement('h4');
             title.innerText=el.title;
             let bdiv= document.createElement('div');
             let combox= document.createElement('div');
             let cimg= document.createElement('i');
             cimg.setAttribute('class','fa-solid fa-comment');
             let ccount= document.createElement('h4');
             ccount.innerText= el.num_comments;
             combox.append(cimg,ccount)
             let link= document.createElement('a');
             link.innerText="Go To Article"
             link.setAttribute('href',el.url);
             bdiv.append(combox,link)
             box.append(tbox,title,bdiv);
             container.append(box)
          })
      }
  
  
      topten.addEventListener('click',async ()=>{
          let arr=JSON.parse(localStorage.getItem('data'))
           arr.sort((a,b)=>{
              return b.num_comments- a.num_comments;
           })
           let newarr=[]
           for(let i=0;i<10;i++){
              newarr.push(arr[i])
           }
          display(newarr)
      })
  
  
    latestten.addEventListener("click",async ()=>{
       let arr=JSON.parse(localStorage.getItem('data'))
  
           arr.sort((a,b)=>{
              return a.created_at- b.created_at;
           })
           let newarr=[]
           for(let i=0;i<10;i++){
              newarr.push(arr[i])
           }
          display(newarr)
    })
  
  
  
  const getAllData= async ()=>{
     
      for(let i=0;i<5;i++){
              let res= await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${i+1}`)
              let data= await res.json();
              totalData.push(...data.data);
       }
      localStorage.setItem("data",JSON.stringify(totalData))
  }
  getAllData();
  
  
  
  const setpage=()=>{
      const total= new Array(5).fill(0);
    total.map((el,index)=>{
       let span= document.createElement('span')
       span.innerText= index+1;
       span.addEventListener('click',async()=>{
          let res= await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${index+1}`)
          let data= await res.json();
          display(data.data)
       })
       pagebox.append(span)
    })
  }
  setpage()