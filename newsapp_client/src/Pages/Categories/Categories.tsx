import axios from 'axios'
import React, { useEffect } from 'react'
import CardBoxWithImg from '../../Components/CardBoxWithImg/CardBoxWithImg'
import { H2Center } from '../../Css/styledComponents'

function Categories() {
    const sampleHighlightnewsdata = {
        "status": "ok",
        "totalResults": 38,
        "articles": [
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "Times of India",
                "title": "Women may have unique diabetes symptoms: Expert tips to handle them - Times of India",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMiugFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9saWZlLXN0eWxlL2hlYWx0aC1maXRuZXNzL2hlYWx0aC1uZXdzL3RoaXMtaXMtaG93LWRpYWJldGVzLXN5bXB0b21zLWRpZmZlci1pbi13b21lbi13aXRoLWRvcy1hbmQtZG9udHMtb2YtZGlhYmV0ZXMtbWFuYWdlbWVudC9hcnRpY2xlc2hvdy85ODMyOTMxNS5jbXPSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2023-03-01T08:30:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "NDTV Movies",
                "title": "Sona Mohapatra's Tweets On Shehnaaz Gill Continue - What She Posted About \"Opportunistic\" Women - NDTV Movies",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vd3d3Lm5kdHYuY29tL2VudGVydGFpbm1lbnQvc3RvcC10aGlzLXZpY3RpbWhvb2Qtc29uYS1tb2hhcGF0cmEtY2FsbHMtb3V0LXNoZWhuYWF6LWdpbGwtZm9yLWJlaW5nLW9wcG9ydHVuaXN0aWMtMzgyNDAwNdIBhAFodHRwczovL3d3dy5uZHR2LmNvbS9lbnRlcnRhaW5tZW50L3N0b3AtdGhpcy12aWN0aW1ob29kLXNvbmEtbW9oYXBhdHJhLWNhbGxzLW91dC1zaGVobmFhei1naWxsLWZvci1iZWluZy1vcHBvcnR1bmlzdGljLTM4MjQwMDUvYW1wLzE?oc=5",
                "urlToImage": null,
                "publishedAt": "2023-03-01T07:35:43Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "The Indian Express",
                "title": "What time is it on moon? Europe pushing for lunar time zone - The Indian Express",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS90ZWNobm9sb2d5L3NjaWVuY2Uvd2hhdC10aW1lLWlzLWl0LW9uLXRoZS1tb29uLWx1bmFyLXRpbWUtem9uZS04NDczMDI4L9IBbmh0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS90ZWNobm9sb2d5L3NjaWVuY2Uvd2hhdC10aW1lLWlzLWl0LW9uLXRoZS1tb29uLWx1bmFyLXRpbWUtem9uZS04NDczMDI4L2xpdGUv?oc=5",
                "urlToImage": null,
                "publishedAt": "2023-03-01T07:35:27Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "NDTV",
                "title": "\"Only One Shiv Sena\": Team Shinde's Move Ahead Of Supreme Court Hearing - NDTV",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL21hbnktdGVhbS10aGFja2VyYXktbWxhcy1pbi10b3VjaC13YW50LXRvLWpvaW4tdXMtc2F5cy1zaGl2LXNlbmEtY2hpZWYtd2hpcC1iaGFyYXQtZ29nYXdhbGUtMzgyMzY1ONIBiQFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL21hbnktdGVhbS10aGFja2VyYXktbWxhcy1pbi10b3VjaC13YW50LXRvLWpvaW4tdXMtc2F5cy1zaGl2LXNlbmEtY2hpZWYtd2hpcC1iaGFyYXQtZ29nYXdhbGUtMzgyMzY1OC9hbXAvMQ?oc=5",
                "urlToImage": null,
                "publishedAt": "2023-03-01T07:24:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "Hindustan Times",
                "title": "Billi Billi teaser: Salman Khan shows his bhangra moves alongside Pooja Hegde - Hindustan Times",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMingFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2QvYmlsbGktYmlsbGktdGVhc2VyLXNhbG1hbi1raGFuLXNob3dzLWhpcy1iaGFuZ3JhLW1vdmVzLWFsb25nc2lkZS1wb29qYS1oZWdkZS13YXRjaC0xMDE2Nzc2NTA3NjM1NTQuaHRtbNIBogFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2QvYmlsbGktYmlsbGktdGVhc2VyLXNhbG1hbi1raGFuLXNob3dzLWhpcy1iaGFuZ3JhLW1vdmVzLWFsb25nc2lkZS1wb29qYS1oZWdkZS13YXRjaC0xMDE2Nzc2NTA3NjM1NTQtYW1wLmh0bWw?oc=5",
                "urlToImage": null,
                "publishedAt": "2023-03-01T07:09:35Z",
                "content": null
            }
        ]
    }
    var categories = ["general","sports","business","technology","health","science"]
    // var genralNewsData,sportsNewsData,businessNewsData,HealthNewsData,techNewsData,scienceNewsData;
  

    // var cardBoxWithImg ;
    // useEffect(()=>{
    //     cardBoxWithImg = categories.map((categorie:any,index:any)=>{
    //         axios.get(`https://newsapi.org/v2/top-headlines?pageSize=5&country=${country}&apiKey=${apiKey}&category=${categorie}`).then((res: any) => {
    //         <CardBoxWithImg data={res.data} title={categorie} key={index} />
            
    //       })
    //     })
    // },[])
    return (
        <div>
            <H2Center>Categories</H2Center>
            <CardBoxWithImg title="general" />
            <CardBoxWithImg title="sports" />
            <CardBoxWithImg title="business" />
            <CardBoxWithImg title="technology" />
            <CardBoxWithImg title="health" />
            <CardBoxWithImg title="science" />
        </div>
    )
}

export default Categories