import React, { useEffect, useState } from 'react'
import { Avatar, Grid, useForkRef, Typography } from '@material-ui/core'
import {ArrowDownward, ArrowUpward, ContactlessOutlined, LocalConvenienceStoreOutlined, SettingsPhoneTwoTone} from '@material-ui/icons'
import './featureditem.css'
import * as d3 from 'd3'
import { set } from 'mongoose'
import { BarChart } from '../BarChart'


export const MostFollowedTD = ({data}) => {



    const [TDData, setTDData] = useState(null)

    useEffect(() => {

        setTDData(data)

    }, [])

    
    
    if(!TDData) return null;

    const leo = TDData.filter(d => d.name === 'Leo Varadkar')[0]


    return (
    <div className="featuredItem">
        <span className="featuredSub">Most Followed TD</span>
        <Grid container xs={12} alignItems="center">
        <Grid item>
        <Avatar  src="https://www.finegael.ie/app/uploads/2016/09/leo_varadkar_thumbnail.jpg"/>
        </Grid>
        <Grid item >
        <span className="featuredTitle">Leo Varadkar</span><span class="party-dot-fg"/>
        </Grid>
        </Grid>
        <div className="featuredFollowerContainer">
            <span className="featuredFollowers">{leo.followerData[2].followers.toLocaleString()}</span>
                <span className="featuredFollowerChange">+100% <ArrowUpward style={{fill: "green"}}/></span>
        </div>
        
    </div>
    )
}


export const MostFollowedParty = ({data}) => {



    const [TDData, setTDData] = useState(null)


    useEffect(() => {

        setTDData(data)
        console.log(TDData)

    }, [data])


    

    if(!TDData) return null;
    const justFG = TDData.filter(d => d.party !== 'Fine Gael').map(d => d.followerData[2].followers).reduce(function(a, b) {return a + b})
    
    console.log(justFG)

    return(


        <div className="featuredItem">
            <span className="featuredSub">Most Followed Party</span>
        <Grid container xs={12} alignItems="center">
        <Grid item>
        <Avatar  src="https://www.finegael.ie/app/themes/finegael/dist/images/FG-Logo-white-text-col-star.png"/>
        </Grid>
        <Grid item >
        <span className="featuredTitle">Fine Gael</span><span class="party-dot-fg"/>
        </Grid>
        </Grid>


        <div className="featuredFollowerContainer">
            <span className="featuredFollowers">{justFG.toLocaleString()}</span>
            <span className="featuredFollowerChange">+100% <ArrowUpward style={{fill: "green"}}/></span>
        </div>
        
    </div>




)
}

export const MostRetweetedTD = ({data}) => {


    const [TDData, setTDData] = useState(null)


    useEffect(() => {

        setTDData(data)

    }, [data])


    if(!TDData) return null;
    const mostRetweetsTD = TDData.sort(function(a, b) {

        return   d3.descending(a.retweetData[2].retweets, b.retweetData[2].retweets)

       })

    return (


        <div className="featuredItem">
            <span className="featuredSub">Most Retweets this week</span>
        <Grid container xs={12} alignItems="center">
        <Grid item>
        <Avatar  src="https://data.oireachtas.ie/ie/oireachtas/member/id/John-Brady.D.2016-10-03/image/large"/>
        </Grid>
        <Grid item >
        <span className="featuredTitle">{mostRetweetsTD[0].name}</span><span class="party-dot-sf"/>
        </Grid>
        </Grid>


        <div className="featuredFollowerContainer">
            <span className="featuredFollowers">{mostRetweetsTD[0].retweetData[2].retweets}</span>
            <span className="featuredFollowerChange">+100% <ArrowUpward style={{fill: "green"}}/></span>
        </div>
        
    </div>

    )

}

export const MostActiveTD = ({data}) => {


    const [TDData, setTDData] = useState(null)


    useEffect(() => {

        setTDData(data)

    }, [data])


    if(!TDData) return null;
    const mostRetweetsTD = TDData.sort(function(a, b) {

        return   d3.descending(a.retweetData[2].original_tweets, b.retweetData[2].original_tweets)

       })

    return (


        <div className="featuredItem">
            <span className="featuredSub">Most Active this week (Original Tweets)</span>
        <Grid container xs={12} alignItems="center">
        <Grid item>
        <Avatar  src="https://data.oireachtas.ie/ie/oireachtas/member/id/Ciaran-Cannon.S.2007-07-23/image/large"/>
        </Grid>
        <Grid item >
        <span className="featuredTitle">{mostRetweetsTD[0].name}</span><span class="party-dot-fg"/>
        </Grid>
        </Grid>


        <div className="featuredFollowerContainer">
            <span className="featuredFollowers">{mostRetweetsTD[0].retweetData[2].original_tweets}</span>
            <span className="featuredFollowerChange">+100% <ArrowUpward style={{fill: "green"}}/></span>
        </div>
        
    </div>

    )

}

export const MostNegativeTD = ({data}) => {



    const [TDData, setTDData] = useState(null)


    useEffect(() => {

        setTDData(data)
        console.log(TDData)

    }, [data])


    

    if(!TDData) return null;
    const mostNegativeTD = TDData.sort(function(a, b) {

        return   d3.ascending(a.sentimentData[2].polarity, b.sentimentData[2].polarity)

       })



    return(


        <div className="featuredItem">
            <span className="featuredSub">Most Negative TD this Week</span>
        <Grid container xs={12} alignItems="center">
        <Grid item>
        <Avatar  src="https://www.sinnfein.ie/files/images/orig/2014/paul-donnelly.jpg"/>
        </Grid>
        <Grid item >
        <span className="featuredTitle">{mostNegativeTD[0].name}</span><span class="party-dot-sf"/>
        </Grid>
        </Grid>


        <div className="featuredFollowerContainer">
            <span className="featuredFollowers">{mostNegativeTD[0].sentimentData[2].polarity.toLocaleString()}</span>
            <span className="featuredFollowerChange">+100% <ArrowUpward style={{fill: "green"}}/></span>
        </div>
        
    </div>




)
}

export const MostPositiveTD = ({data}) => {



    const [TDData, setTDData] = useState(null)


    useEffect(() => {

        setTDData(data)
        console.log(TDData)

    }, [data])


    

    if(!TDData) return null;
    const mostPositiveTD = TDData.sort(function(a, b) {

        return   d3.descending(a.sentimentData[2].polarity, b.sentimentData[2].polarity)

       })



    return(


        <div className="featuredItem">
            <span className="featuredSub">Most Positive TD this Week</span>
        <Grid container xs={12} alignItems="center">
        <Grid item>
        <Avatar  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Miche%C3%A1l_Martin_TD_%28cropped%29.jpg/1200px-Miche%C3%A1l_Martin_TD_%28cropped%29.jpg"/>
        </Grid>
        <Grid item >
        <span className="featuredTitle">{mostPositiveTD[0].name}</span><span class="party-dot-ff"/>
        </Grid>
        </Grid>


        <div className="featuredFollowerContainer">
            <span className="featuredFollowers">{mostPositiveTD[0].sentimentData[2].polarity.toLocaleString()}</span>
            <span className="featuredFollowerChange">+100% <ArrowUpward style={{fill: "green"}}/></span>
        </div>
        
    </div>




)
}






export const DailTotal = ({data}) => {

    const [TDData, setTDData] = useState(null)
    const [total, setTotal] = useState(null)
    const [tenTot, setTenTot] = useState(null)
    const [percTopTot, setPercTopTot] = useState(null)
    const [avg, setAvg] = useState(null)

    useEffect(() => {

        setTDData(data)
        console.log(TDData)

    }, [data])


    

    useEffect(() => {

        if(!TDData) return null;


        const holder = TDData.map(d => d.followerData[2].followers)
        const total = holder.reduce(function(a, b) {
            return a + b
        })

        setTotal(total)
        console.log(total)




        
     // return d3.descending(a.totalFollowers, b.totalFollowers)
            
                 
        
        
        const TDDataHolder = TDData;

        const topFive = TDDataHolder.sort(function (a, b) {


            return d3.descending(a.followerData[2].followers, b.followerData[2].followers)



        })




        

        const testtf = topFive.map(d => d.followerData[2].followers)


        testtf.length = 10


        const tenTott = testtf.reduce(function(a,b) {

            return a + b

        })

        setTenTot(tenTott)


        setPercTopTot(tenTott / total)

        setAvg(Math.round(total / TDData.length))


        console.log(percTopTot)
        

    }, [TDData])



    console.log(TDData)


    
    if(!TDData || !total) return null;


    
    

    return (


        <div className="featuredItem" >
        <Grid container xs={12} alignItems="center" style={{justifyContent: "center"}}>
        <Grid item >
        <Avatar  src="https://img2.thejournal.ie/inline/2163335/original/?width=630&version=2163335"/>
        </Grid>
        <Grid item >
        <Typography variant="h6" style={{justifyContent: "center", marginLeft: 10}}>Dáil Eireann</Typography>
        </Grid>
        </Grid>

        <div className="featuredFollowerContainer" style={{justifyContent: "center"}}>
            <span style={{fontSize: 14}}>Of the <span style={{fontWeight: "bold"}}>161</span> TDs in the Dáil, <span style={{fontWeight: "bold"}}>{TDData.length}</span> have Twitter.</span>
        </div>
        
        <div className="featuredFollowerContainer" style={{justifyContent: "center"}}>
            <span style={{fontSize: 14}}>They have a combined following of <span style={{fontWeight: "bold"}}>{total.toLocaleString()}</span>.</span>
        </div>

     
        <div className="featuredFollowerContainer" style={{justifyContent: "center"}}>
            <span style={{fontSize: 14}}>The 10 most followed TDs account for <span style={{fontWeight: "bold"}}>{tenTot.toLocaleString()}</span>, or <span style={{fontWeight: "bold"}}>{percTopTot.toLocaleString("en", {style: "percent"})} </span>of the total.</span>
        </div>        
        <div className="featuredFollowerContainer" style={{justifyContent: "center"}}>
            <span style={{fontSize: 14}}>The average TD has just <span style={{fontWeight: "bold"}}>{avg.toLocaleString()}</span>.</span>
        </div>   
        <BarChart data={TDData}/>
    </div>







    )

}



