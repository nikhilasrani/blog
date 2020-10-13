import React from 'react'


const messages = [
    {
        title:"No stop",
        body:"This is just a test button to see if stuff on my site is working as expected. No touch only look."
    },
    {
        title:"Haha come on",
        body:"No really this doesn't do anything it's just for looks. A very pretty button but nothing else."
    },
    {
        title:"Um why",
        body:"The internet has so much interesting content to offer out there, go explore! Why are you still pressing this button?"
    },
    {
        title:"Button is confused",
        body:"Why do you keep pressing me, I am a simple button trying to do my job no one else presses me please be normal"
    },
    {
        title:"Why do this",
        body:"My name is Rakesh the Button, we can be frients. I took this job voluntarily and it's been pretty chill until now but now you keep poking me in the belly button."
    },
    {
        title:"No friend?",
        body:"You don't want to be my friend? That hurts, It can get lonely on this page. Lots of space, though."
    },
    {
        title:"What's your story?",
        body:"I feel like I'm talking about me too much, to be fair, life as a button is pretty fantastic so I understand your interest"
    },
    {
        title:"Argh there I go",
        body:"See, still talking about me. But then again you're still pressing. So what's up with you? If you talk into the mic I'll try my best to answer, say something like 'I'm doing well, Rakesh'"
    },
    {
        title:"lol",
        body:"I can't actually hear you that would be creepy, but I totally bet you said something. The browser would make me ask for microphone permissions, so don't go putting a tinfoil hat on, we the Button People have more things to focus on than your boring affairs."
    },
    {
        title:"Yawn",
        body:" OK it's time to stop.",
    },
    {
        title:"Tired",
        body:"I'm starting to get tired, not enough coffee today I think. I don't have a mouth, so I just sit on it until it absorbs into me through my thick button coating"
    },
    {

    },
    {

    },
    {

    },
    {
        title:"OK Goodnight",
        body:"I'm going to sleep now please. don't wake me up. Zzzzzzzz"
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },{
        title:"*rolls over*",
        body:" No stop I'm sleeping, try again in like 40 hours I only sleep once a week"
    }

]



class boop extends React.Component {
    state = {
        count:0
    }

  
    onClick = () => {
        const {count} = this.state;
        this.setState({count:count+1})
        let obj = {}
         if(count<messages.length) obj = messages[count]
            obj.title && obj.body && alert(`${obj.title}\n\n${obj.body}`)
    }
    render()
    {
    return <div style={{display:'flex',flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#f5f5f5', height:'100vh'}}>
        <button style={{backgroundColor:"#4070F4", height:60, width:280, borderRadius:4, border:"0px", color:"#F2F3F7"}} onClick={() => this.onClick()}>Button</button>
    </div>
    }
}

export default boop