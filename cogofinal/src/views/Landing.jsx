import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination';
// import Cta from '../components/Cta';
import Carousel from '../components/Carousel';
import Lib from '../components/Lib';
import Newsletter from '../components/NewsLetter';
import axios from 'axios';
import Profile from './Profile';
import LineMid from '../components/LineMid';
import Pricing from './Pricing';

// let infoArray =  [{
//   Category_name:'Design',
// title:'My favourite design articles 2015', 
// thumbnail:'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DVYgF7d99CDWizH9SxrCfg.jpeg', 
// text:'One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed. Two themes stood out for me: designing products vs. designing processes and describing the world in stories vs. systems. Design Through the Lens of the Human Condition — Dmitry Fadeyev For the modern designer, the essence of a product no longer resides in the thing itself, in the object, but in the nature of the audience, the subject, for whom it is built.The Impossibility of Permanence in a Consumer Society by Dmitry FadeyevIn order to create timeless work, the designer must first disconnect themselves from the market, for as long as the work attempts to satisfy the transient desires of the consumer market it will itself be transient. Second, the work must find its core in a thing of a more permanent nature.Good Design is About Process, not Product by Jared Sinclair The point is not to solve the problem (though that will eventually happen), but merely to explore it. The urge to find a decision and pass judgement will destroy the fragile creative process. Instead, postpone judgement until the allotted time for creative work has lapsed. Only then should you return to a “closed” mode, in which you are judging and implementing the plans that your creativity has inspired. Repeat the cycle of open and closed modes with regularity.Prototyping Risks when Design is Disappearing by Cameron Tonkinwise Ideally, designers are equal parts fantasists and realists. They can imagine the most far-fetched unreal things; but then they can also focus on questions of practicability, how to make those imagined things real. Designing should be a dialectic between to these two different kinds of possibility. Designers have tools and skills to manage this dialectic, techniques that give the expertise of designing its distinctiveness. All of these are ways of making futural possibilities partially real in the present so that they can be evaluated and detailed — chief among these are: prototypes.',
// short_description:"One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed"
// },
// {
//   Category_name:'Design',
// title:'My favourite design articles 2015', 
// thumbnail:'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DVYgF7d99CDWizH9SxrCfg.jpeg', 
// text:'One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed. Two themes stood out for me: designing products vs. designing processes and describing the world in stories vs. systems. Design Through the Lens of the Human Condition — Dmitry Fadeyev For the modern designer, the essence of a product no longer resides in the thing itself, in the object, but in the nature of the audience, the subject, for whom it is built.The Impossibility of Permanence in a Consumer Society by Dmitry FadeyevIn order to create timeless work, the designer must first disconnect themselves from the market, for as long as the work attempts to satisfy the transient desires of the consumer market it will itself be transient. Second, the work must find its core in a thing of a more permanent nature.Good Design is About Process, not Product by Jared Sinclair The point is not to solve the problem (though that will eventually happen), but merely to explore it. The urge to find a decision and pass judgement will destroy the fragile creative process. Instead, postpone judgement until the allotted time for creative work has lapsed. Only then should you return to a “closed” mode, in which you are judging and implementing the plans that your creativity has inspired. Repeat the cycle of open and closed modes with regularity.Prototyping Risks when Design is Disappearing by Cameron Tonkinwise Ideally, designers are equal parts fantasists and realists. They can imagine the most far-fetched unreal things; but then they can also focus on questions of practicability, how to make those imagined things real. Designing should be a dialectic between to these two different kinds of possibility. Designers have tools and skills to manage this dialectic, techniques that give the expertise of designing its distinctiveness. All of these are ways of making futural possibilities partially real in the present so that they can be evaluated and detailed — chief among these are: prototypes.',
// short_description:"One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed"
// },
// {
//   Category_name:'Design',
// title:'My favourite design articles 2015', 
// thumbnail:'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DVYgF7d99CDWizH9SxrCfg.jpeg', 
// text:'One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed. Two themes stood out for me: designing products vs. designing processes and describing the world in stories vs. systems. Design Through the Lens of the Human Condition — Dmitry Fadeyev For the modern designer, the essence of a product no longer resides in the thing itself, in the object, but in the nature of the audience, the subject, for whom it is built.The Impossibility of Permanence in a Consumer Society by Dmitry FadeyevIn order to create timeless work, the designer must first disconnect themselves from the market, for as long as the work attempts to satisfy the transient desires of the consumer market it will itself be transient. Second, the work must find its core in a thing of a more permanent nature.Good Design is About Process, not Product by Jared Sinclair The point is not to solve the problem (though that will eventually happen), but merely to explore it. The urge to find a decision and pass judgement will destroy the fragile creative process. Instead, postpone judgement until the allotted time for creative work has lapsed. Only then should you return to a “closed” mode, in which you are judging and implementing the plans that your creativity has inspired. Repeat the cycle of open and closed modes with regularity.Prototyping Risks when Design is Disappearing by Cameron Tonkinwise Ideally, designers are equal parts fantasists and realists. They can imagine the most far-fetched unreal things; but then they can also focus on questions of practicability, how to make those imagined things real. Designing should be a dialectic between to these two different kinds of possibility. Designers have tools and skills to manage this dialectic, techniques that give the expertise of designing its distinctiveness. All of these are ways of making futural possibilities partially real in the present so that they can be evaluated and detailed — chief among these are: prototypes.',
// short_description:"One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed"
// },
// {
//   Category_name:'Design',
// title:'My favourite design articles 2015', 
// thumbnail:'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DVYgF7d99CDWizH9SxrCfg.jpeg', 
// text:'One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed. Two themes stood out for me: designing products vs. designing processes and describing the world in stories vs. systems. Design Through the Lens of the Human Condition — Dmitry Fadeyev For the modern designer, the essence of a product no longer resides in the thing itself, in the object, but in the nature of the audience, the subject, for whom it is built.The Impossibility of Permanence in a Consumer Society by Dmitry FadeyevIn order to create timeless work, the designer must first disconnect themselves from the market, for as long as the work attempts to satisfy the transient desires of the consumer market it will itself be transient. Second, the work must find its core in a thing of a more permanent nature.Good Design is About Process, not Product by Jared Sinclair The point is not to solve the problem (though that will eventually happen), but merely to explore it. The urge to find a decision and pass judgement will destroy the fragile creative process. Instead, postpone judgement until the allotted time for creative work has lapsed. Only then should you return to a “closed” mode, in which you are judging and implementing the plans that your creativity has inspired. Repeat the cycle of open and closed modes with regularity.Prototyping Risks when Design is Disappearing by Cameron Tonkinwise Ideally, designers are equal parts fantasists and realists. They can imagine the most far-fetched unreal things; but then they can also focus on questions of practicability, how to make those imagined things real. Designing should be a dialectic between to these two different kinds of possibility. Designers have tools and skills to manage this dialectic, techniques that give the expertise of designing its distinctiveness. All of these are ways of making futural possibilities partially real in the present so that they can be evaluated and detailed — chief among these are: prototypes.',
// short_description:"One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed"
// },
// {
//   Category_name:'Design',
// title:'My favourite design articles 2015', 
// thumbnail:'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DVYgF7d99CDWizH9SxrCfg.jpeg', 
// text:'One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed. Two themes stood out for me: designing products vs. designing processes and describing the world in stories vs. systems. Design Through the Lens of the Human Condition — Dmitry Fadeyev For the modern designer, the essence of a product no longer resides in the thing itself, in the object, but in the nature of the audience, the subject, for whom it is built.The Impossibility of Permanence in a Consumer Society by Dmitry FadeyevIn order to create timeless work, the designer must first disconnect themselves from the market, for as long as the work attempts to satisfy the transient desires of the consumer market it will itself be transient. Second, the work must find its core in a thing of a more permanent nature.Good Design is About Process, not Product by Jared Sinclair The point is not to solve the problem (though that will eventually happen), but merely to explore it. The urge to find a decision and pass judgement will destroy the fragile creative process. Instead, postpone judgement until the allotted time for creative work has lapsed. Only then should you return to a “closed” mode, in which you are judging and implementing the plans that your creativity has inspired. Repeat the cycle of open and closed modes with regularity.Prototyping Risks when Design is Disappearing by Cameron Tonkinwise Ideally, designers are equal parts fantasists and realists. They can imagine the most far-fetched unreal things; but then they can also focus on questions of practicability, how to make those imagined things real. Designing should be a dialectic between to these two different kinds of possibility. Designers have tools and skills to manage this dialectic, techniques that give the expertise of designing its distinctiveness. All of these are ways of making futural possibilities partially real in the present so that they can be evaluated and detailed — chief among these are: prototypes.',
// short_description:"One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed"
// },
// {
//   Category_name:'Design',
// title:'My favourite design articles 2015', 
// thumbnail:'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DVYgF7d99CDWizH9SxrCfg.jpeg', 
// text:'One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed. Two themes stood out for me: designing products vs. designing processes and describing the world in stories vs. systems. Design Through the Lens of the Human Condition — Dmitry Fadeyev For the modern designer, the essence of a product no longer resides in the thing itself, in the object, but in the nature of the audience, the subject, for whom it is built.The Impossibility of Permanence in a Consumer Society by Dmitry FadeyevIn order to create timeless work, the designer must first disconnect themselves from the market, for as long as the work attempts to satisfy the transient desires of the consumer market it will itself be transient. Second, the work must find its core in a thing of a more permanent nature.Good Design is About Process, not Product by Jared Sinclair The point is not to solve the problem (though that will eventually happen), but merely to explore it. The urge to find a decision and pass judgement will destroy the fragile creative process. Instead, postpone judgement until the allotted time for creative work has lapsed. Only then should you return to a “closed” mode, in which you are judging and implementing the plans that your creativity has inspired. Repeat the cycle of open and closed modes with regularity.Prototyping Risks when Design is Disappearing by Cameron Tonkinwise Ideally, designers are equal parts fantasists and realists. They can imagine the most far-fetched unreal things; but then they can also focus on questions of practicability, how to make those imagined things real. Designing should be a dialectic between to these two different kinds of possibility. Designers have tools and skills to manage this dialectic, techniques that give the expertise of designing its distinctiveness. All of these are ways of making futural possibilities partially real in the present so that they can be evaluated and detailed — chief among these are: prototypes.',
// short_description:"One of the great joys about compiling lists is not just the list itself, but the process of reflection. Taking the time to go through the hundreds of items I collected gave me to opportunity to spot patterns that might otherwise have gone unnoticed"
// },
// ]
function Landing() {

  const [blog,setBlog] = useState([])


  useEffect(() => {
    gg()
  },[])
  const gg = async() => {
    const ff = await axios.get('http://127.0.0.1:8000/articles/')
      console.log(ff.data)
      setBlog(...blog,ff.data)
  }

  
  return (

    
    <>
    {/* <button onClick={gg}>Hello</button> */}
    <LineMid />

      <Carousel/>
      {/* <BlogCard/> */}
      <div class="flex flex-row flex-wrap justify-center items-center">
      {blog.map((r,i) => {
        // console.log(blog)
        console.log(r)
        if(i<6) {
          return ( <div class="mx-8 my-4 ">
          <BlogCard info={r} k={r.id}/>
          </div>)
        }
        
       else return 
        
      })}
      </div>
      <Pagination/>

      {/* <Lib/> */}

      


      {/* <Profile /> */}


      

    </>
  )
}

export default Landing