
class Profiles{
    async fetchUserInfo(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users/6')
        const profiles = await response.json()
        return profiles
    }
    async render(){
        let profiles = await this.fetchUserInfo()
        
        console.log(profiles)
        let html =   `
        
           <header class="hd">
               <div class="arrow">
                   <ion-icon name="arrow-back-outline" style='color: white;'></ion-icon>
               </div>
               <div class="username">
                   <h2>${profiles.name}<span> <ion-icon name="checkmark-circle"></ion-icon></span> <span> <ion-icon name="logo-amplify"></ion-icon></span></h2>
                   <p>32.7k Tweets</p>
               </div>
               <!-- <div class="tweets">
   
               </div> -->
           </header>
           <div class="mid">
               <img src="./images/background.png" alt="">
   
           </div>
           <div class="pic">
               <div class="file"><img src="./images/fashion.jpg" alt=""></div>
               
               <div class="tags">
                  
                   <div class="following">
                           
                       <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                       <ion-icon name="mail-outline"></ion-icon>
                       <ion-icon name="notifications-outline"></ion>
                       <button style="border:white 1px solid">Following</button>
                   </div>
               </div>
           </div>
           <div class="profile">
               <h2>Vitto Rivabella <span><img src="" alt=""></span> <span><img src="" alt=""></span></h2>
               <p>${profiles.username}</p>
               <p style="text-align: left;"> </p>
               <p>Lead Dev Rel <a href="" style="color: rgb(14, 105, 209);">@${profiles.company.name} </a> <span></span>Created <span></span><a href="" style="color: rgb(14, 105, 209);">@AlchemyLearn</a> |npx create-web3- <br>dapp | Developing: Pot <span>icon</span> |Helping devs break into web3</p>
               <p><span><ion-icon name="briefcase-outline"></ion-icon></span> Science & Technology <span><ion-icon name="information-circle-outline"></ion-icon></span>  <ion-icon name="location-outline"></ion-icon> ${profiles.address.city}  <span><ion-icon name="link-outline"></ion-icon></span> <a href="" style="color: rgb(14, 105, 209);">vitto.cc</a> <br> <span><ion-icon name="calendar-outline"></ion-icon></span> Joined August 2020 </p>
               <div class="followers">
                   <p><span style="font-weight: 900;">322</span>Following</p>
                   <p><span style="font-weight: 900;">110.7</span>Followers</p>
               </div>
               <div class="details">
                   <div class="smallpics">
                       <img src="./images/fashion.jpg" alt="">
                       <!-- <img src="./images/background.png" alt="">
                       <img src="./images/fashion.jpg" alt=""> -->
                   </div>
                   <div class="followedby">
                       <p>Followed by Langford Kwabena, Rohit || (<span><ion-icon name="heart"></ion-icon>,<ion-icon name="attach-outline"></ion-icon></span>) and 29 others you follow </p>
                   </div>
               </div>
           </div>
           <div class="navbar">
               <p style="color:white; font-weight: 700; border-bottom: rgb(21, 156, 219) solid; ">Tweets</p>
               <p>Replies</p>
               <p>Media</p>
               <p>Likes</p>
           </div>
           <div class="bottom">
               <div class="pin">
                   <ion-icon name="pin" id="pin" style="padding-top:10%";></ion-icon>
                   <p style="font-weight:500" >Pinned Tweet</p>
                   
               </div>
               <div class="pinnedTweet">
                   <div class="smallImg"><img src="./images/fashion.jpg" alt="" style="width:50px;height:50px;border-radius: 50%;"></div>
                   
                   <div class="below"> 
                       <p>Vitto  Rivabella <span><ion-icon name="checkmark-circle"></ion-icon></span> <span style="color:gray">@VittoStack . March 31</span></p>
                       <h3>We're officially Alchemy verified!</h3>
                       <br>
                       <p>One blue tick wasn't enough</p>
                   </div>
                   <div class="threedots">
                       <ion-icon name="ellipsis-horizontal"></ion-icon>
                   </div>
                  
               </div>
               
           </div>
           
       `
        return html
    }
    
async fetchUserTweet(){
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const post = await posts.json()
        return post
    }

async render1(){
    let tweeHtml=''
        let postTweet = await this.fetchUserTweet()
        postTweet.forEach(postT=>{
            //  for (let postT of postTweet){
                if(postT.userId==6){
                    let html1 =  `
                    <div class="bottom">
                   <div class="pinnedTweet">
                       <div class="smallImg"><img src="./images/fashion.jpg" alt="" style="width:50px;height:50px;border-radius: 50%;"></div>
                       
                       <div class="below"> 
                           <div class="beloRiva">
                           <p>Vitto  Rivabella <span><ion-icon name="checkmark-circle"></ion-icon></span> <span style="color:gray">@VittoStack . March 31</span></p>
                           </div>
                           <div>
                           <h4 style="font-size:21px">${postT.title}</h4>
                           <p style="font-weight:100">${postT.body}</p>
                           </div>
                       </div>
                       <div class="threedots">
                           <ion-icon name="ellipsis-horizontal"></ion-icon>
                       </div>
                      
                   </div>
                   
               </div>
                    `
                    tweeHtml+=html1

                }
                
            // }
        })
        return tweeHtml
    }
}

class Twitter{
    static async Init(){
        let profileS = new Profiles()
        let overallHtml =  await profileS.render()
        let tweetHT =await profileS.render1()
        // console.log(overallHtml)

        let container = document.querySelector('.container')
        container.innerHTML=overallHtml+tweetHT
    }
     
}
Twitter.Init()
