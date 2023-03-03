import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardBox from '../../Components/CardBox/CardBox'
import List from '../../Components/List/List'
import { H3Center, HighlightBox, H2Center, ListBox } from '../../Css/styledComponents'

function Home() {
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
    var sampleGeneralNewsData = {
        "status": "ok",
        "totalResults": 22615,
        "articles": [
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Indian Railways: Delhi police arrest two in railway job scam",
                "description": "The accused allegedly tricked people into counting trains in Delhi, having promised them work.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64534348",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10057/production/_128532656_gettyimages-1246740040.jpg",
                "publishedAt": "2023-02-06T07:27:38Z",
                "content": "Indian police have arrested two men for allegedly duping dozens of applicants seeking jobs with Indian Railways out of thousands of rupees.\r\nThe suspects are accused of falsely offering jobs to 28 pe… [+2052 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India's Ashok Leyland beats quarterly profit estimates on easing ... - Reuters India",
                "description": "Ashok Leyland <a href=\"https://www.reuters.com/companies/ASOK.NS\" target=\"_blank\">(ASOK.NS)</a> reported a bigger-than-expected jump in third-quarter profit on Wednesday, benefiting from higher demand for its vehicles including trucks and buses as well as eas…",
                "url": "https://www.reuters.com/world/india/indias-ashok-leyland-beats-quarterly-profit-estimates-easing-costs-truck-demand-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/YWsGq4ZmboG8tNwyyVcWAOfBZgg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZQFU267XTVNRXKYU2DLRDEQIMQ.jpg",
                "publishedAt": "2023-02-01T15:04:00Z",
                "content": "CHENNAI, Feb 1 (Reuters) - Ashok Leyland (ASOK.NS) reported a bigger-than-expected jump in third-quarter profit on Wednesday, benefiting from higher demand for its vehicles including trucks and buses… [+1931 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Hannah Ellis-Petersen in Delhi",
                "title": "India urges citizens to ‘hug a cow’ on Valentine’s Day",
                "description": "Campaign seeks to boost traditional Indian values and offset ‘dazzle of western civilisation’The Indian government has urged people to set aside the “western” traditions of Valentine’s Day and instead celebrate the occasion by cuddling up with the country’s s…",
                "url": "https://www.theguardian.com/world/2023/feb/09/india-urges-citizens-to-hug-a-cow-on-valentines-day",
                "urlToImage": "https://i.guim.co.uk/img/media/9122febaacfa5743ee266ab8e94c5dcb27e67ba6/0_463_6960_4177/master/6960.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=50731ea1ab1b04976a9aa79e64203281",
                "publishedAt": "2023-02-09T13:05:49Z",
                "content": "The Indian government has urged people to set aside the western traditions of Valentines Day and instead celebrate the occasion by cuddling up with the countrys sacred cows.\r\nIn a new appeal by the I… [+2204 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Analysis: Adani's adversity raises the stakes for India and investors - Reuters India",
                "description": "As Indian tycoon <a href=\"/world/india/gautam-adani-one-indias-most-powerful-men-suffers-rare-defeat-2023-02-01/\">Gautam Adani's</a> woes deepen and force him to drop a share sale, foreign investors and Indian regulators are abandoning any pretence that the c…",
                "url": "https://www.reuters.com/world/india/adanis-adversity-raises-stakes-india-investors-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/hEn0DOx_YfDcaXggCSab4jY1K54=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NQG6HV4W7ZNVXK7OUVJ6KOMRI4.jpg",
                "publishedAt": "2023-02-02T09:15:00Z",
                "content": "SINGAPORE, Feb 2 (Reuters) - As Indian tycoon Gautam Adani's woes deepen and force him to drop a share sale, foreign investors and Indian regulators are abandoning any pretence that the conglomerate'… [+4632 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Fatima Bhutto",
                "title": "Bollywood is obsessed with Pakistan. We’d be flattered if it weren’t so nasty",
                "description": "Try as the industry might, Modi’s quasi-fascist politics cannot be set to jaunty music and helicopter stuntsIf recent Bollywood films are any indication, it is fair to say that India’s film industry is obsessed with Pakistan. Obsessed. Like standing outside y…",
                "url": "https://www.theguardian.com/film/2023/feb/03/bollywood-pakistan-muslims-narendra-modi-india",
                "urlToImage": "https://i.guim.co.uk/img/media/94ff656dbe432835c84a56a3df98075ede328a64/0_190_5795_3477/master/5795.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=5cb81db429398a62a6bf9fe9407fbf7d",
                "publishedAt": "2023-02-03T07:00:05Z",
                "content": "If recent Bollywood films are any indication, it is fair to say that Indias film industry is obsessed with Pakistan. Obsessed. Like standing outside your apartment and trying to peek through your win… [+9930 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Toyah Cordingley: Australia flies man from India over beach murder",
                "description": "Rajwinder Singh is accused of murdering Toyah Cordingley, found dead in Queensland in 2018.",
                "url": "https://www.bbc.co.uk/news/world-australia-64803339",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7BEE/production/_127562713_toyah.jpg",
                "publishedAt": "2023-02-28T16:31:28Z",
                "content": "Australian police are extraditing a man from India over the murder of a young woman found dead on a Queensland tropical beach in 2018.\r\nRajwinder Singh is being flown from Delhi to Melbourne accompan… [+1886 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "India paper leaks: Cheating plagues India jobs coveted by millions",
                "description": "Cheating in exams is common in India, where students go to great lengths to land a government job.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64495673",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6851/production/_128550762_gettyimages-940585086-594x594.jpg",
                "publishedAt": "2023-02-08T00:25:53Z",
                "content": "On a chilly December morning, police in the western state of Rajasthan saw a bus heading towards Udaipur city and followed it. \r\nThe night before, they had received a tip-off - the question paper for… [+6810 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India could see some risks to FY26 fiscal deficit target of 4.5% of ... - Reuters India",
                "description": "The Indian federal government's aim to achieve a fiscal deficit target of 4.5% of gross domestic product (GDP) by 2025/26 could see some risks, an analyst at Moody's Investors Service said on Wednesday.",
                "url": "https://www.reuters.com/world/india/india-could-see-some-risks-fy26-fiscal-deficit-target-45-gdp-moodys-analyst-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/9Qk8HSg2-3_a-8A4aD8WbfFCkdo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UJD5K76QZ5N3JKUA4DN6LSAYYU.jpg",
                "publishedAt": "2023-02-01T10:00:00Z",
                "content": "MUMBAI, Feb 1 (Reuters) - The Indian federal government's aim to achieve a fiscal deficit target of 4.5% of gross domestic product (GDP) by 2025/26 could see some risks, an analyst at Moody's Investo… [+1082 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India 2023/24 budget pushes for increase in municipal bond issues - Reuters India",
                "description": "India's government will provide incentives to urban civic bodies to improve their finances and credit worthiness and help them raise funds through municipal bonds, its finance minister said on Wednesday.",
                "url": "https://www.reuters.com/world/india/india-202324-budget-pushes-increase-municipal-bond-issues-2023-02-01/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=129",
                "publishedAt": "2023-02-01T06:56:33Z",
                "content": "MUMBAI, Feb 1 (Reuters) - India's government will provide incentives to urban civic bodies to improve their finances and credit worthiness and help them raise funds through municipal bonds, its finan… [+1412 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "The young Anglo-Indians retracing their European roots",
                "description": "Members of the dwindling community are on a quest to reconnect to help preserve their culture.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64495467",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E13C/production/_128506675_whatsappimage2023-02-02at10.07.22pm.jpg",
                "publishedAt": "2023-02-20T00:13:35Z",
                "content": "Ruchelle Barrie remembers feeling out of place in school. \r\nHer name was frequently spelt and pronounced incorrectly and her fluent English made her stick out among her classmates - who were more com… [+7040 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Indian shares set to open lower on Q3 growth slowdown, weak ... - Reuters India",
                "description": "Indian shares set to open lower on Q3 growth slowdown, weak ...  Reuters India",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhbi1zaGFyZXMtc2V0LW9wZW4tbG93ZXItcTMtZ3Jvd3RoLXNsb3dkb3duLXdlYWstZ2xvYmFsLWN1ZXMtMjAyMy0wMy0wMS_SAQA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-03-01T02:26:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": null,
                "title": "Women's T20 World Cup: India stroll to comfortable six-wicket win over West Indies",
                "description": "India beat West Indies comfortably by six wickets to remain unbeaten in the Women's T20 World Cup in South Africa.",
                "url": "https://www.bbc.co.uk/sport/cricket/64653368",
                "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/019E/production/_128641400_gettyimages-1247158415.jpg",
                "publishedAt": "2023-02-15T16:23:20Z",
                "content": "<table><tr><th>Women's T20 World Cup, Group 2: West Indies v India</th></tr>\r\n<tr><td>West Indies 118-6 (20 overs): Taylor 42 (40); Sharma 3-15</td></tr><tr><td>India 119-4 (20 overs): Ghosh 44* (32)… [+1147 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Indian shares fall as IT drags amid U.S. rate fears - Reuters India",
                "description": "Indian shares fall as IT drags amid U.S. rate fears  Reuters India",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhbi1zaGFyZXMtc2V0LXN1YmR1ZWQtc3RhcnQtdXMtcmF0ZS1oaWtlLWZlYXJzLTIwMjMtMDItMjcv0gEA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-02-27T04:21:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Indian shares set for muted start on U.S. rate fears ahead of ... - Reuters India",
                "description": "Indian shares set for muted start on U.S. rate fears ahead of ...  Reuters India",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhbi1zaGFyZXMtc2V0LW11dGVkLXN0YXJ0LXVzLXJhdGUtZmVhcnMtYWhlYWQtZG9tZXN0aWMtZ2RwLWRhdGEtMjAyMy0wMi0yOC_SAQA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-02-28T02:24:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Indian security forces battle Kashmir militants after killing of Hindu - Reuters India",
                "description": "Indian security forces battle Kashmir militants after killing of Hindu  Reuters India",
                "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhbi1zZWN1cml0eS1mb3JjZXMtYmF0dGxlLWthc2htaXItbWlsaXRhbnRzLWFmdGVyLWtpbGxpbmctaGluZHUtMjAyMy0wMi0yOC_SAQA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
                "urlToImage": null,
                "publishedAt": "2023-02-28T10:37:00Z",
                "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Can Sri Lanka trade its way back to prosperity?",
                "description": "Ben Chu, Newsnight's economic editor, takes a closer look at the country's economic woes.",
                "url": "https://www.bbc.co.uk/news/business-64464220",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/63A3/production/_128470552_teapickersms.jpg",
                "publishedAt": "2023-02-02T00:13:20Z",
                "content": "Sri Lanka is, in the words of its own president, \"bankrupt\".\r\nThe Indian Ocean nation defaulted on its sovereign debt in May 2022, plunging the country into economic and political chaos.\r\nThe Colombo… [+7288 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "A dozen South African cheetahs arrive in India",
                "description": "Twelve cheetahs from South Africa have been flown to India on Saturday.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64690210",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D563/production/_128672645_fadb501f-114c-49f8-81c7-4cf2036fea6b.jpg",
                "publishedAt": "2023-02-18T13:36:03Z",
                "content": "Twelve cheetahs from South Africa have been flown to India as part of an agreement to introduce dozens of the mammals there over the next decade.\r\nAsiatic cheetahs became extinct in India in the late… [+1242 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "BBC India: Search of offices in New Delhi and Mumbai ends after three days",
                "description": "Some staff faced lengthy questioning from tax officials, or were required to stay overnight.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64669147",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11B2E/production/_128649427_bbcindiasearches.png",
                "publishedAt": "2023-02-16T17:15:00Z",
                "content": "The search of BBC offices in India by tax officials has ended after three days.\r\nThe authorities entered the offices in New Delhi and Mumbai on Tuesday, with staff facing lengthy questioning or told … [+2167 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India rupee expected to fare better in 2023 – chief economic adviser - Reuters India",
                "description": "The Indian rupee is expected to be under far less pressure than it was in 2022, as a global economic slowdown will mean a potentially weaker dollar and lower commodity prices which would lead to lower imports, the country's chief economic adviser said on Thur…",
                "url": "https://www.reuters.com/world/india/india-rupee-expected-fare-better-2023-chief-economic-adviser-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/vRP7q83rBTN4pUnB_mbvyXrm3jA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GKP55GQLQBPYJMVJEMROZT4JHY.jpg",
                "publishedAt": "2023-02-02T14:27:00Z",
                "content": "NEW DELHI, Feb 2 (Reuters) - The Indian rupee is expected to be under far less pressure than it was in 2022, as a global economic slowdown will mean a potentially weaker dollar and lower commodity pr… [+1675 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India govt in touch with market regulator on Adani Group - source - Reuters India",
                "description": "The Indian government is in touch with the market regulator SEBI regarding th allegations made by a U.S. <a href=\"/markets/asia/hindenburg-says-holds-short-positions-indias-adani-flags-risks-2023-01-25/\">short seller last week</a>that cast doubts on Adani Gro…",
                "url": "https://www.reuters.com/world/india/india-govt-touch-with-market-regulator-adani-group-source-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/zzGACheeVG6yMhsvxVh0U74q8o0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7M4ND6WFJBPGHMBR7QQYVC63II.jpg",
                "publishedAt": "2023-02-01T14:01:00Z",
                "content": "NEW DELHI, Feb 1 (Reuters) - The Indian government is in touch with the market regulator SEBI regarding th allegations made by a U.S. short seller last weekthat cast doubts on Adani Group's business … [+492 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "ivanhagen@insider.com (Isobel van Hagen)",
                "title": "Indian government cancels 'Cow Hug Day' anti-Valentine's celebration after it was widely mocked",
                "description": "A campaign encouraging Indian citizens to 'hug a cow' instead of celebrating Valentine's Day was called off on Friday.",
                "url": "https://www.businessinsider.com/cow-hug-day-cancelled-india-valentines-day-replacement-mocked-2023-2",
                "urlToImage": "https://i.insider.com/63e67ce996242f0019e85da5?width=1200&format=jpeg",
                "publishedAt": "2023-02-10T17:38:07Z",
                "content": "A campaign encouraging Indian citizens to \"hug a cow\" instead of celebrating the 'western' Valentine's Day was called off on Friday after the announcement was ridiculed online. \r\nIn a statement on We… [+2522 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "G20 meeting deadlocked over calling out Ukraine war",
                "description": "Russia and China refused to condemn Moscow's invasion at a meeting of finance ministers in India.",
                "url": "https://www.bbc.co.uk/news/world-asia-64773618",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15A3B/production/_128753688_ee1be69fb8a9e8e62545fb2dd88b306eb5a2931c0_0_5006_33381000x667.jpg",
                "publishedAt": "2023-02-25T18:51:30Z",
                "content": "Finance ministers of the world's largest economies have failed to agree on a closing statement following talks in India due to differences over the war in Ukraine. \r\nRussia and China refused to conde… [+2139 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Nouriel Roubini",
                "title": "India is a big global player – but there are problems it must tackle | Nouriel Roubini",
                "description": "Now Modi’s government has modernised it must make growth sustainable, inclusive and fairIndia is poised to become the world’s most important country in the medium term. It has the largest population (which is still growing), and with a per-capita GDP that is …",
                "url": "https://www.theguardian.com/business/2023/feb/22/india-modi-government-economic-growth-nouriel-roubini",
                "urlToImage": "https://i.guim.co.uk/img/media/3654d4691a0867adeb53f68a1b0269c1621e5f07/0_330_4944_2966/master/4944.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=2f4d89f90daa44e87e7276b9061be41e",
                "publishedAt": "2023-02-22T06:00:18Z",
                "content": "India is poised to become the worlds most important country in the medium term. It has the largest population (which is still growing), and with a per-capita GDP that is just one-quarter that of Chin… [+6849 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "BBC India: Director-general tells staff to report without fear",
                "description": "Tim Davie says nothing is more important than reporting impartially, after officials search BBC offices.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64747641",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2E42/production/_128724811_mediaitem128724810.jpg",
                "publishedAt": "2023-02-23T14:37:38Z",
                "content": "The BBC will not be put off from reporting without fear or favour, its Director-General Tim Davie has said in an email to staff in India.\r\nIt follows searches at BBC offices in Delhi and Mumbai by ta… [+1679 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Bageshwar Dham Sarkar: The Indian guru making headlines over 'miracle' cures",
                "description": "Bageshwar Dham Sarkar's supporters claim he has divine powers, can heal the sick and read people's minds.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64480726",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/58D3/production/_128393722_bababageshwar-5.jpg",
                "publishedAt": "2023-02-05T23:56:15Z",
                "content": "India is home to thousands of religious gurus, but a controversial new \"godman\" has been making headlines for the past fortnight. \r\nSupporters of Dhirendra Krishna Shastri, popularly known as Bageshw… [+6536 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India raises custom duty on naphtha, could hit imports - Reuters India",
                "description": "India has raised its import tax on naphtha to 2.5% from 1%, budget documents showed on Wednesday, in a move that could encourage companies to source locally produced fuel instead of buying from overseas.",
                "url": "https://www.reuters.com/world/india/india-raises-custom-duty-naphtha-could-hit-imports-2023-02-01/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=129",
                "publishedAt": "2023-02-01T13:30:00Z",
                "content": "NEW DELHI, Feb 1 (Reuters) - India has raised its import tax on naphtha to 2.5% from 1%, budget documents showed on Wednesday, in a move that could encourage companies to source locally produced fuel… [+1243 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "htan@insider.com (Huileng Tan)",
                "title": "India's stock market crisis isn't just the Adani Group's problem - it's a political issue for Prime Minister Modi too",
                "description": "On Monday, hundreds of Indian opposition party members demonstrated on the streets of New Delhi, demanding an investigation into the Adani Group.",
                "url": "https://www.businessinsider.com/adani-hindenberg-india-market-crisis-political-issu-modi-protests-2023-2",
                "urlToImage": "https://i.insider.com/63e1e3e927e5db0018ee7ae2?width=1200&format=jpeg",
                "publishedAt": "2023-02-07T09:48:51Z",
                "content": "Indian tycoon Gautam Adani's troubles with his conglomerate's stock price have spilled over to his country's politics his ties to Prime Minister Narendra Modi have now come under scrutiny.\r\nEver sinc… [+3818 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India 2023/24 budget pegs divestment target at 510 billion rupees - Reuters",
                "description": "The Indian government expects to raise 510 billion rupees ($6.23 billion) from stake sales in various state-run companies, budget documents released on Wednesday showed.",
                "url": "https://www.reuters.com/world/india/india-202324-budget-pegs-divestment-target-510-billion-rupees-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/EetVNPM6JMzwgnnz4Tw-Mtbie44=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F3YF6CZC7FLH5KSRHTKMK4F43I.jpg",
                "publishedAt": "2023-02-01T08:35:00Z",
                "content": "NEW DELHI, Feb 1 (Reuters) - The Indian government expects to raise 510 billion rupees ($6.23 billion) from stake sales in various state-run companies, budget documents released on Wednesday showed.\r… [+1136 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Why India can't keep its domestic helpers safe",
                "description": "The case of a teenage maid who was allegedly tortured highlights the plight of domestic helpers.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64594779",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E833/production/_128634495_whatsappimage2023-02-09at3.24.36pm.jpg",
                "publishedAt": "2023-02-17T00:02:37Z",
                "content": "Indian police and social workers rescued a battered and bruised 14-year-old last week from the home in a Delhi suburb where she worked as a domestic helper. Experts say such workers are vulnerable to… [+7301 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Indian shares set to fall after Adani group calls off $2.5 bln share sale - Reuters India",
                "description": "Indian shares are set to open lower on Thursday after a sustained selloff in Adani group stocks as the group cancelled the secondary share sale of its flagship company Adani Enterprises.",
                "url": "https://www.reuters.com/world/india/indian-shares-set-fall-after-adani-group-calls-off-25-bln-share-sale-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/VI5m4BmdNOBclZoFhCiHK43iTG4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EBI6FKI2BZPLHMXPLIMU7ME47E.jpg",
                "publishedAt": "2023-02-02T02:41:00Z",
                "content": "BENGALURU, Feb 2 (Reuters) - Indian shares are set to open lower on Thursday after a sustained selloff in Adani group stocks as the group cancelled the secondary share sale of its flagship company Ad… [+2053 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Indian shares pare gains, yields rise as federal budget begins - Reuters India",
                "description": "Indian shares pared early gains on Wednesday, while bond yields moved higher as the country's finance minister presented the Union budget, saying the government will focus on economic growth and job creation with a global slowdown in the vicinity.",
                "url": "https://www.reuters.com/world/india/indian-shares-pare-gains-yields-rise-federal-budget-begins-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/FCcd1Tb88jDRSTWtBnD9R5Oe8fE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NPJSZ5MFQNPABLJIEMOIPTNJUQ.jpg",
                "publishedAt": "2023-02-01T06:22:00Z",
                "content": "BENGALURU, Feb 1 (Reuters) - Indian shares pared early gains on Wednesday, while bond yields moved higher as the country's finance minister presented the Union budget, saying the government will focu… [+2211 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Two foreign skiers dead after avalanche in Indian Kashmir - Reuters India",
                "description": "Two foreign skiers were killed and several more are trapped in Indian Kashmir's Gulmarg on Wednesday after an avalanche swept through the popular ski resort, a police official said.",
                "url": "https://www.reuters.com/world/india/two-foreign-skiers-dead-after-avalanche-indian-kashmir-2023-02-01/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=129",
                "publishedAt": "2023-02-01T09:37:58Z",
                "content": "SRINAGAR, Feb 1 (Reuters) - Two foreign skiers were killed and several more are trapped in Indian Kashmir's Gulmarg on Wednesday after an avalanche swept through the popular ski resort, a police offi… [+510 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Indian shares rise on personal tax boost, yields fall after govt ups ... - Reuters India",
                "description": "Indian shares surged on Wednesday after the government raised the minimum tax rebate limit and stepped up spending, while bond yields moved lower after it lifted the gross borrowing for the next financial year in the Union budget.",
                "url": "https://www.reuters.com/world/india/indian-shares-rise-personal-tax-boost-yields-fall-after-govt-ups-gross-borrowing-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/Ll7GVsf8zHpcG5ugfCXcZxN3RdI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AWBK7DQS4JKWJEUM7ND6HQ4FHU.jpg",
                "publishedAt": "2023-02-01T07:32:00Z",
                "content": "BENGALURU, Feb 1 (Reuters) - Indian shares surged on Wednesday after the government raised the minimum tax rebate limit and stepped up spending, while bond yields moved lower after it lifted the gros… [+2036 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Indian opposition lawmakers shout anti-Adani slogans in parliament - Reuters India",
                "description": "Indian opposition lawmakers shouted slogans against the Adani Group in parliament on Thursday in the wake of a U.S. short seller report that has accused it of using tax havens and flagged concerns on high debt levels.",
                "url": "https://www.reuters.com/world/india/indian-opposition-lawmakers-shout-anti-adani-slogans-parliament-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/B8GCIdt7o--BzXJNOdgrxhOP9aY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U26L4IR72BN63IEA27XNQVOKEY.jpg",
                "publishedAt": "2023-02-02T09:01:00Z",
                "content": "NEW DELHI, Feb 2 (Reuters) - Indian opposition lawmakers shouted slogans against the Adani Group in parliament on Thursday in the wake of a U.S. short seller report that has accused it of using tax h… [+538 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Domino's Pizza India franchisee Jubilant's profit slumps on higher ... - Reuters",
                "description": "Jubilant FoodWorks Ltd <a href=\"https://www.reuters.com/companies/JUBI.NS\" target=\"_blank\">(JUBI.NS)</a> on Wednesday reported a 40% slump in third-quarter profit as higher expenses outweighed a rise in orders at restaurants run by the Indian franchisee of Do…",
                "url": "https://www.reuters.com/business/retail-consumer/dominos-pizza-india-franchisee-jubilants-profit-slumps-higher-expenses-2023-02-01/",
                "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=129",
                "publishedAt": "2023-02-01T09:20:52Z",
                "content": "BENGALURU, Feb 1 (Reuters) - Jubilant FoodWorks Ltd (JUBI.NS) on Wednesday reported a 40% slump in third-quarter profit as higher expenses outweighed a rise in orders at restaurants run by the Indian… [+1804 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Hindenburg bet against India's Adani puzzles rival U.S. short sellers - Reuters India",
                "description": "When Hindenburg Research revealed a short position in Adani Group last week, some U.S. investors said they were intrigued about the actual mechanics of its trade, because Indian securities rules make it hard for foreigners bet against companies there.",
                "url": "https://www.reuters.com/world/india/hindenburg-bet-against-indias-adani-puzzles-rival-us-short-sellers-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/tHBvbqGKTr9z2zCnsRNBxRYXgpg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W3337QQCO5OPXJITEI3O2L4XZI.jpg",
                "publishedAt": "2023-02-01T23:40:00Z",
                "content": "Feb 1 (Reuters) - When Hindenburg Research revealed a short position in Adani Group last week, some U.S. investors said they were intrigued about the actual mechanics of its trade, because Indian sec… [+4343 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India 2023/24 budget raises capex spend to 10 trillion rupees - Reuters",
                "description": "The Indian government will spend 10 trillion rupees ($122.3 billion) on longer term capital expenditure in 2023/24, extending a strategy adopted to revive growth in the aftermath of the COVID crisis.",
                "url": "https://www.reuters.com/world/india/india-202324-budget-raises-capex-spend-10-trillion-rupees-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/-zn8FQsER9rt2JEHg89pTuDg7Ko=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AGGZLFDJZFKD3HWUSHYMMQYWCM.jpg",
                "publishedAt": "2023-02-01T06:09:00Z",
                "content": "MUMBAI, Feb 1 (Reuters) - The Indian government will spend 10 trillion rupees ($122.3 billion) on longer term capital expenditure in 2023/24, extending a strategy adopted to revive growth in the afte… [+658 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India cuts funding on rural jobs scheme to 600 bln rupees in 2023/24 - Reuters",
                "description": "The Indian government cut back the spending on the rural jobs guarantee scheme for the next fiscal year to 600 billion rupees ($7.34 billion), the budget document showed on Wednesday.",
                "url": "https://www.reuters.com/world/india/india-cuts-funding-rural-jobs-scheme-600-bln-rupees-202324-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/NVdH7AemYesZnXJFRdvrG3j_uWs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4AFHXKFGGRMQTL2XLZ5KZM4GWQ.jpg",
                "publishedAt": "2023-02-01T08:29:00Z",
                "content": "Feb 1 (Reuters) - The Indian government cut back the spending on the rural jobs guarantee scheme for the next fiscal year to 600 billion rupees ($7.34 billion), the budget document showed on Wednesda… [+1155 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India earmarks $3.7 bln for state oil companies' energy transition - Reuters",
                "description": "India said on Wednesday it would provide 300 billion Indian rupees ($3.66 billion) to help state-run oil refiners move towards cleaner energy, a step aimed at helping the country achieve its 2070 net-zero carbon emission target.",
                "url": "https://www.reuters.com/business/energy/india-earmarks-37-bln-state-oil-companies-energy-transition-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/mMMqHAIx8FuAaR7SITWF-JpVeZc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KWW764QYLVOJ3KBOUNMYRTLGUI.jpg",
                "publishedAt": "2023-02-01T10:47:00Z",
                "content": "NEW DELHI, Feb 1 (Reuters) - India said on Wednesday it would provide 300 billion Indian rupees ($3.66 billion) to help state-run oil refiners move towards cleaner energy, a step aimed at helping the… [+1108 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Exclusive: Adani made scheduled U.S. bond payments, to release ... - Reuters India",
                "description": "Adani Group entities made scheduled coupon payments on outstanding U.S. dollar-denominated bonds on Thursday, a bondholder and a source with direct knowledge of the Indian conglomerate's strategy told Reuters.",
                "url": "https://www.reuters.com/world/india/adani-made-scheduled-us-bond-payments-release-credit-report-friday-sources-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/qkN4YhOjgbhcXqSXg-pWJj_tuoc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/X4FSAQUFFNPGPNFNA6KW3E7N6I.jpg",
                "publishedAt": "2023-02-02T17:23:00Z",
                "content": "NEW DELHI/NEW YORK, Feb 2 (Reuters) - Adani Group entities made scheduled coupon payments on outstanding U.S. dollar-denominated bonds on Thursday, a bondholder and a source with direct knowledge of … [+2822 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Harmeet Kaur, CNN",
                "title": "LGBTQ relationships are finally getting the Bollywood rom-com treatment",
                "description": "While LGBTQ-focused plotlines might seem radical for the Hindi film industry, same-sex desire and longing aren't completely new terrain, scholars say. What's changed, rather, is how explicitly those storylines are portrayed.",
                "url": "https://www.cnn.com/style/article/bollywood-lgbtq-rom-coms-cec/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230217153312-08-lgbtq-bollywood-films-restricted-super-tease.jpg",
                "publishedAt": "2023-02-19T08:05:10Z",
                "content": "artsPublished 19th February 2023\r\nBollywood is filled with love stories about going against societal norms or familial expectations.\r\nThe 1960 epic \"Mughal-e-Azam\" tells the tale of an emperor-in-wai… [+11252 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India 'fairly' confident of cutting fiscal deficit to 4.5% of GDP in 3 ... - Reuters India",
                "description": "India is 'fairly' confident it can meet its target to cut its fiscal deficit by nearly 200 basis points to 4.5% of GDP in the next three years, assuming there is no major global economic shock, a top government official told Reuters on Thursday.",
                "url": "https://www.reuters.com/world/india/india-fairly-confident-cutting-fiscal-deficit-45-gdp-3-years-official-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/j_CkiWE7A5fHF4D-GIHdu5pBFbY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VH5MAJGMG5JDXKRMALQOIPNWQU.jpg",
                "publishedAt": "2023-02-02T16:00:00Z",
                "content": "NEW DELHI, Feb 2 (Reuters) - India is 'fairly' confident it can meet its target to cut its fiscal deficit by nearly 200 basis points to 4.5% of GDP in the next three years, assuming there is no major… [+1604 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Padayappa: The friendly India elephant whose fame is a curse",
                "description": "Padayappa has long been a fan favourite in India's Kerala state. So why is he controversial now?",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64480308",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16E7A/production/_128481839_padayappaphotobyhadleerenjithimg_2081.jpg",
                "publishedAt": "2023-02-04T02:49:19Z",
                "content": "Padayappa is an iconic figure in the southern Indian state of Kerala. \r\nThe wild elephant, who lives in the state's lush jungles, is known for his flappy ears, massive tusks and friendly ways. \r\nPada… [+6019 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "AP in Delhi",
                "title": "Crisis at Adani Group intensifies as Indian activists stage protests",
                "description": "Opposition groups push Modi to investigate allegations by US short-seller as firm suffers market routThe crisis engulfing the Adani Group has intensified as hundreds of members of India’s opposition parties took to the streets to press for an investigation in…",
                "url": "https://www.theguardian.com/business/2023/feb/06/crisis-at-adani-group-intensifies-as-indian-activists-stage-protests",
                "urlToImage": "https://i.guim.co.uk/img/media/b07fe4cdae232c67a4d373297e27cf62ff558eda/0_50_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45539a35e8de8e7d0bc2d1232954dd43",
                "publishedAt": "2023-02-06T18:26:52Z",
                "content": "The crisis engulfing the Adani Group has intensified as hundreds of members of Indias opposition parties took to the streets to press for an investigation into allegations by a US short-seller agains… [+4032 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Legendary investor Mark Mobius said he shunned embattled Adani's share sale over debt concerns but he's still bullish on India",
                "description": "The debt load at Indian conglomerate Adani Group 'sort of scared us away,' Mark Mobius told Bloomberg.",
                "url": "https://markets.businessinsider.com/news/stocks/adani-enterprises-mark-mobius-hindenburg-debt-stock-sale-india-market-2023-2",
                "urlToImage": "https://i.insider.com/63d78cec4589790018e5adc5?width=1200&format=jpeg",
                "publishedAt": "2023-02-02T19:34:21Z",
                "content": "Mark Mobius, a pioneer in emerging-markets investing, said his firm didn't take part in Adani Enterprises' stock sale before it was scrapped because it had concerns about the embattled Indian conglom… [+1561 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Citigroup wealth unit stops margin loans against India Adani's ... - Reuters",
                "description": "Citigroup's <a href=\"https://www.reuters.com/companies/C.N\" target=\"_blank\">(C.N)</a> wealth unit has stopped extending margin loans to its clients against securities of India's embattled Adani group, a source with direct knowledge of the matter said, as the …",
                "url": "https://www.reuters.com/business/finance/citigroup-wealth-unit-stops-margin-loans-against-india-adanis-securities-source-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/M4rD4H96942ZHW0wPdc_VUHv0bI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FF6IN3EZ2FOVLBVHFLVKW22MMA.jpg",
                "publishedAt": "2023-02-02T03:52:00Z",
                "content": "SINGAPORE, Feb 2 (Reuters) - Citigroup's (C.N) wealth unit has stopped extending margin loans to its clients against securities of India's embattled Adani group, a source with direct knowledge of the… [+680 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "S India ramps up spending in last budget ahead of election - Reuters India",
                "description": "India's government on Wednesday unveiled a $550 billion budget for the next fiscal year that starts on April 1, with a plan for record capital spending while reining in the fiscal deficit.",
                "url": "https://www.reuters.com/world/india/s-india-ramps-up-spending-last-budget-ahead-election-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/DQJbnQS3J_Tac9mIC4iM6_wB3uY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/54KGIHIR5ROE3HJEUC7U7PMI4A.jpg",
                "publishedAt": "2023-02-02T12:32:00Z",
                "content": "NEW DELHI, Feb 2 (Reuters) - India's government on Wednesday unveiled a $550 billion budget for the next fiscal year that starts on April 1, with a plan for record capital spending while reining in t… [+2292 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Peter Walker Political correspondent",
                "title": "Foreign Office scaling back support for UK Sikh activist held in India, Keir Starmer says",
                "description": "Sunak’s government has refused to echo assertion that Jagtar Singh Johal is being arbitrarily detainedRishi Sunak and the Foreign Office appear to be scaling back the UK’s support for Jagtar Singh Johal, the British Sikh activist held in an Indian jail for fi…",
                "url": "https://www.theguardian.com/uk-news/2023/mar/01/foreign-office-uk-sikh-activist-india-keir-starmer-jagtar-singh-johal",
                "urlToImage": "https://i.guim.co.uk/img/media/e831f359bffa86932e61c5105370ac68f5c615cf/0_309_945_567/master/945.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b997aa22506652b185b4eb40e2d91e97",
                "publishedAt": "2023-03-01T10:07:12Z",
                "content": "Rishi Sunak and the Foreign Office appear to be scaling back the UKs support for Jagtar Singh Johal, the British Sikh activist held in an Indian jail for five years, his family and Keir Starmer have … [+3663 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "Armani Syed",
                "title": "Netflix’s The Romantics Aims to Give Bollywood the Homage It Deserves",
                "description": "Smriti Mundhra's four-part documentary series 'The Romantics' traces the life and legacy of Yash Chopra—the father of Bollywood romance.",
                "url": "https://time.com/6255756/bollywood-the-romantics-netflix/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2023/02/DDLJ_07.jpg?quality=85&w=1200&h=628&crop=1",
                "publishedAt": "2023-02-15T17:55:06Z",
                "content": "Shortly after Yash Chopra’s 1976 romantic drama Kabhi Kabhie was released in India, the popular film made its way to a quaint family-run cinema in Culver City, Los Angeles. Thanks to the late filmmak… [+9900 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Guardian Staff",
                "title": "Western countries stay silent as India cracks down on democracy | Letter",
                "description": "Rajendra Kumar Kale responds to an article by Arundhati Roy on how Narendra Modi’s violent nationalism is underwritten by big businessArundhati Roy’s article (Modi’s model is at last revealed for what it is: violent Hindu nationalism underwritten by big busin…",
                "url": "https://www.theguardian.com/world/2023/feb/23/western-countries-stay-silent-as-india-cracks-down-on-democracy",
                "urlToImage": "https://i.guim.co.uk/img/media/e68750950a1c98d03affeba44e1499d2af7beea4/0_0_3796_2278/master/3796.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7aaf1a302458ab22ea603d90b4233412",
                "publishedAt": "2023-02-23T12:00:43Z",
                "content": "Arundhati Roys article (Modis model is at last revealed for what it is: violent Hindu nationalism underwritten by big business, 18 February) takes an accurate overview of the two simultaneous events … [+1243 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Jasper Jolly",
                "title": "Air India makes record breaking purchases from Airbus and Boeing",
                "description": "Tata-owned airline orders 470 planes from rivals in expectation of rapid surge in passenger demand in AsiaAir India has agreed to buy 470 planes from manufacturing rivals Airbus and Boeing, the biggest order of new passenger planes in history, as the airline …",
                "url": "https://www.theguardian.com/business/2023/feb/14/air-india-makes-record-breaking-purchases-from-airbus-and-boeing",
                "urlToImage": "https://i.guim.co.uk/img/media/85b7b2400e2e0605d2140374d74ac7e6ff22a1ca/0_70_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=333b6950cc9e9019265ed82fb8e424cb",
                "publishedAt": "2023-02-14T17:53:35Z",
                "content": "Air India has agreed to buy 470 planes from manufacturing rivals Airbus and Boeing, the biggest order of new passenger planes in history, as the airline bets on the rapid expansion of air travel in A… [+2852 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "jsor@insider.com (Jennifer Sor)",
                "title": "Fuel made from Russian oil is being funneled to New York by Indian refiners that are snapping up discounted crude",
                "description": "India is one of Russia's top oil customers, and the nation has been funneling record amounts of fuel made from sanctioned product into New York.",
                "url": "https://markets.businessinsider.com/news/commodities/russia-oil-fuel-new-york-india-trade-western-sanctions-economy-2023-2",
                "urlToImage": "https://i.insider.com/63dd37450a08ae0018a6aa1b?width=1200&format=jpeg",
                "publishedAt": "2023-02-03T16:34:15Z",
                "content": "Fuel made from Russian oil is being funneled into New York by to Indian refiners who have been snapping up discounted crude from the sanctioned nation.\r\nAccording to data from Kpler, New York has pur… [+1444 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Hannah Ellis-Petersen in Delhi",
                "title": "Indian journalists say BBC raid part of drive to intimidate media",
                "description": "Media staff targeted for criticising BJP government fear tax raid is escalation of coercion“Did BBC Take Cash From China For Propaganda?” ran the opening title on the primetime news debate. As the flashy graphics of Republic TV, India’s hardline and overwhelm…",
                "url": "https://www.theguardian.com/world/2023/feb/18/indian-journalists-bbc-raid-media",
                "urlToImage": "https://i.guim.co.uk/img/media/220c7e0d111b42014575da12c00048f53fd42e83/0_273_8192_4918/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4c728a5c9e51ac79a8ebb151e571c620",
                "publishedAt": "2023-02-18T05:00:29Z",
                "content": "Did BBC Take Cash From China For Propaganda? ran the opening title on the primetime news debate. As the flashy graphics of Republic TV, Indias hardline and overwhelmingly popular news channel, faded … [+9980 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "AP in New Delhi",
                "title": "India accuses BBC of tax evasion amid Modi documentary row",
                "description": "Country’s finance ministry claims broadcaster has not fully declared its income and profitsIndia’s finance ministry has accused the BBC of tax evasion, saying that it had not fully declared its income and profits from its operations in the country.Indian tax …",
                "url": "https://www.theguardian.com/world/2023/feb/17/india-accuses-bbc-of-tax-evasion-amid-modi-documentary-row",
                "urlToImage": "https://i.guim.co.uk/img/media/e68750950a1c98d03affeba44e1499d2af7beea4/0_0_3529_2118/master/3529.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a8967594af6f018e58c2a3bd63e5b198",
                "publishedAt": "2023-02-17T18:58:39Z",
                "content": "Indias finance ministry has accused the BBC of tax evasion, saying that it had not fully declared its income and profits from its operations in the country.\r\nIndian tax authorities ended three days o… [+3790 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Vishnu Sarangapurkar)",
                "title": "New OnePlus 9/9 Pro update fixes a major issue that was bricking some phones",
                "description": "The latest OxygenOS 13 updates break and fix issues for OnePlus 9/9 Pro users in India.",
                "url": "https://www.androidcentral.com/apps-software/oneplus-9-pro-receive-new-oxygen-os-fix",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/tQGWh2KRRaHDxnhme2ZbSK-1200-80.jpg",
                "publishedAt": "2023-02-02T18:59:16Z",
                "content": "<ul><li>OnePlus 9 and 9 Pro users in India suffered from restarting issues with the OxygenOS update.</li><li>The company has rolled out yet another update to fix the previous one.</li><li>The new upd… [+2151 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Jonathan Barrett and Hannah Ellis-Petersen",
                "title": "Adani crisis: Indian group has value cut in half after stock market rout",
                "description": "Traders sent shares down more than 25% on Friday despite attempts to restore investor confidence following fraud claimsThe beleaguered empire of the Indian billionaire Gautam Adani is spiralling into crisis, as an escalating stock rout triggered by fraud clai…",
                "url": "https://www.theguardian.com/business/2023/feb/03/adani-crisis-indian-group-has-value-cut-in-half-after-stock-market-rout",
                "urlToImage": "https://i.guim.co.uk/img/media/0f8f2b29f2dbe74c8d57c311319057ef3b8dd06a/0_68_3244_1947/master/3244.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3eeef8950a3e9de858c8039833cc7e03",
                "publishedAt": "2023-02-03T07:52:21Z",
                "content": "The beleaguered empire of the Indian billionaire Gautam Adani is spiralling into crisis, as an escalating stock rout triggered by fraud claims cuts the value of his conglomerate in half.\r\nTraders sen… [+3335 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "htan@insider.com (Huileng Tan)",
                "title": "Adani's crisis is casting a cloud over India — and it could benefit China, which is just reopening after 3 years of COVID isolation",
                "description": "The selloff in Adani companies has spilled over into the broader Indian market and is prompting concerns about corporate governance in the country.",
                "url": "https://www.businessinsider.com/india-vs-china-adani-market-rout-casts-cloud-china-reopening-2023-2",
                "urlToImage": "https://i.insider.com/63dc88d8e33c4000193acacd?width=1200&format=jpeg",
                "publishedAt": "2023-02-03T09:21:33Z",
                "content": "Until recently, India was having a moment its stock market was posting solid gains and potential investors were looking at the country as the new factory of the world to replace China.\r\nBut a major s… [+2903 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Australian Associated Press",
                "title": "Nathan Lyon and Travis Head earn edge for Australia in tight battle with India",
                "description": "<ul><li>Second Test, day two: India 262 all out; Australia 263 & 1-61</li><li>Nathan Lyon takes five wickets as tourists set up shootout</li></ul>Australia enjoyed their best day of the Border-Gavaskar series, but the drama-packed second Test against India re…",
                "url": "https://www.theguardian.com/sport/2023/feb/18/australia-india-cricket-second-test-day-two-report",
                "urlToImage": "https://i.guim.co.uk/img/media/0f54a1f5199758744891ec6e17454d5996375935/0_30_2472_1483/master/2472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95b6dd52f5c17d0bccc2ab46962c5ee7",
                "publishedAt": "2023-02-18T12:44:17Z",
                "content": "Australia enjoyed their best day of the Border-Gavaskar series, but the drama-packed second Test against India remains in the balance after a rollercoaster three sessions.\r\nThe tourists have a lead o… [+3171 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Assam: India child brides desperate after mass arrests",
                "description": "Women in Assam are protesting after thousands of men were detained in child marriage cases.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64564861",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7BA9/production/_128575613_gettyimages-1246780415-594x594.jpg",
                "publishedAt": "2023-02-10T10:44:19Z",
                "content": "Momina Khatun is convinced she is cursed.\r\nShe's one of hundreds of women in the north-eastern Indian state of Assam who married under the age of 18 - and are now stuck in limbo after their husbands … [+8245 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Ramcharitmanas: The Hindu epic poem causing a political storm in India",
                "description": "The famous 16th-Century poem Ramcharitmanas has become a battle ground over claims it's discriminatory.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64556116",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7098/production/_128342882_gettyimages-1278463414.jpg",
                "publishedAt": "2023-02-09T00:11:20Z",
                "content": "A 16th-Century epic poem based on the life of popular Hindu god Ram is at the centre of a huge political row in India.\r\nRamcharitmanas is counted by many scholars to be among the world's greatest lit… [+5323 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "IE Online",
                "title": "Ola Plans to build world’s largest electric vehicle hub in India",
                "description": "The hub, spanning 2,000 acres (809 hectares) in the southern Indian state of Tamil Nadu, will be used for manufacturing electric two-wheelers, cars and battery cells, in addition to housing vendor and supplier parks.",
                "url": "https://indianexpress.com/article/technology/tech-news-technology/ola-plans-to-build-worlds-largest-electric-vehicle-hub-in-india-8456471/",
                "urlToImage": "https://images.indianexpress.com/2023/02/Ola-Representational-image.jpg",
                "publishedAt": "2023-02-20T11:25:03Z",
                "content": "Indias Ola Electric Mobility Pvt. plans to build what it says will be the worlds largest electric vehicle hub with an investment of 76.1 billion rupees ($920 million) to localize the supply chain for… [+1634 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "sankel@businessinsider.com (Sophia Ankel)",
                "title": "India failed in its mission to stop G20 countries from referring to Russia's invasion of Ukraine as a 'war'",
                "description": "Indian officials previously tried to convince members of the G20 to refer to the Ukraine war as a \"crisis,\" but were met with pushback.",
                "url": "https://www.businessinsider.com/india-couldnt-stop-g20-calling-russian-invasion-of-ukraine-war-2023-2",
                "urlToImage": "https://i.insider.com/63fc7b4c84099d001960dccc?width=1200&format=jpeg",
                "publishedAt": "2023-02-27T12:29:47Z",
                "content": "India appears to have failed in its mission to stop G20 countries from calling Russia's invasion of Ukraine a \"war.\" \r\nWhile hosting financial ministers of the Group of 20 in Bengaluru last week, Ind… [+1432 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India's Adani ditches $2.5 bln share sale after $86 bln rout - Reuters India",
                "description": "India's Adani Enterprises Ltd <a href=\"https://www.reuters.com/companies/ADEL.NS\" target=\"_blank\">(ADEL.NS)</a> on Wednesday <a href=\"https://www.bseindia.com/xml-data/corpfiling/AttachLive/8e2c9f40-730f-444a-a65f-432194e81edc.pdf\" target=\"_blank\">withdrew</a…",
                "url": "https://www.reuters.com/world/india/indias-adani-ditches-25-bln-share-sale-after-86-bln-rout-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/xHH_-pxUu_0PEq-EZWxePOcE1wY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QAKUST2MTRJSXFUCMYJ6MZOLZQ.jpg",
                "publishedAt": "2023-02-01T18:20:00Z",
                "content": "NEW DELHI, Feb 1 (Reuters) - India's Adani Enterprises Ltd (ADEL.NS) on Wednesday withdrew its $2.5 billion secondary share sale after Adani Group shares plummeted on concerns raised by a U.S. short-… [+3401 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": null,
                "title": "Mirabai Chanu: 'I got a full diet only twice a week'",
                "description": "BBC Indian Sportswoman of the Year nominee Mirabai Chanu speaks about what drove her to successs in her career.",
                "url": "https://www.bbc.co.uk/sport/av/weightlifting/64483615",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/837A/production/_128485633_mirabaichanunominee.jpg",
                "publishedAt": "2023-02-06T09:42:43Z",
                "content": "Weightlifter Mirabai Chanu added to her impressive medal collection in 2022. \r\nAt the Commonwealth Games in Birmingham, she set Games records in two disciplines as she successfully defended her title… [+607 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": null,
                "title": "Vinesh Phogat: 'I had no picnics or holidays, it was just training, diet and sleep'",
                "description": "BBC Indian Sportswoman of the Year nominee Vinesh Phogat says her uncle's regime meant waking up at 3.30am for training",
                "url": "https://www.bbc.co.uk/sport/av/wrestling/64483624",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/13C52/production/_128487908_vineshphogatnominee.jpg",
                "publishedAt": "2023-02-06T09:43:09Z",
                "content": "Vinesh Phogat completed an impressive hat-trick of Commonwealth Games wrestling gold medals in 2022.\r\nAfter winning the title in 2014 in the 48kg division and the 2018 title in the 50kg category, she… [+670 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "zsalfiti@insider.com (Zinya Salfiti)",
                "title": "Indian buyers for Russia's oil are drowning in price-cap paperwork and that could hit Moscow's sales, report says",
                "description": "Indian buyers of Russian crude oil are drowning in paperwork demanded under the G7 price cap, and that could dent Moscow's sales, Bloomberg reported.",
                "url": "https://markets.businessinsider.com/news/commodities/russia-oil-india-exports-ukraine-sanctions-price-cap-paperwork-sales-2023-2",
                "urlToImage": "https://i.insider.com/63fe220bd5d80a0018277bdf?width=1200&format=jpeg",
                "publishedAt": "2023-02-28T16:53:56Z",
                "content": "Indian buyers for Russia's oil are drowning in sanctions-related paperwork, and that means Moscow's crude sales could take a hit, Bloomberg has reported. \r\nRefiners in India now have to present docum… [+1709 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Benjamin Brimelow)",
                "title": "A first-of-its-kind fighter jet landing shows India's big ambitions of its growing aircraft carrier fleet",
                "description": "India's navy just got its first domestically built aircraft carrier, and it plans to build more of them to counter China's increasingly active fleet.",
                "url": "https://www.businessinsider.com/first-jet-landing-on-vikrant-reflect-indian-aircraft-carrier-ambitions-2023-2",
                "urlToImage": "https://i.insider.com/627b05428f41d500187ab305?width=1200&format=jpeg",
                "publishedAt": "2023-02-23T22:43:00Z",
                "content": "On February 6, the Indian Navy announced that fixed-wing aircraft had successfully landed on and taken off from India's first domestically built aircraft carrier, INS Vikrant.\r\nThe jets involved were… [+6223 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Lauren Frayer",
                "title": "Indian authorities accuse the BBC of tax evasion after raiding their offices",
                "description": "Press freedom advocates around the world have decried this week's raids on the BBC — in which journalists and accountants alike were questioned, and had their phones and laptops searched.",
                "url": "https://www.npr.org/2023/02/17/1157939921/bbc-india-tax-evasion",
                "urlToImage": "https://media.npr.org/assets/img/2023/02/17/ap23045299362417_wide-d1fd196ab856be927daa704a4e0e6610839f9ded-s1400-c100.jpg",
                "publishedAt": "2023-02-17T19:23:55Z",
                "content": "Private security guards close the gate of a building housing BBC office in New Delhi, India.\r\nAltaf Qadri/AP\r\nMUMBAI After three days searching the BBC's offices in India, Indian tax authorities say … [+805 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Indian shares fall as insurance companies drag; Adani Group stocks ... - Reuters",
                "description": "Indian shares reversed earlier gains to trade lower on Wednesday, led by a fall in insurance companies after the country's Union budget proposed to limit tax exemptions for insurance proceeds, while Adani Group shares tumbled.",
                "url": "https://www.reuters.com/world/india/indian-shares-fall-insurance-companies-drag-adani-group-stocks-tumble-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/Ll7GVsf8zHpcG5ugfCXcZxN3RdI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AWBK7DQS4JKWJEUM7ND6HQ4FHU.jpg",
                "publishedAt": "2023-02-01T09:27:00Z",
                "content": "BENGALURU, Feb 1 (Reuters) - Indian shares reversed earlier gains to trade lower on Wednesday, led by a fall in insurance companies after the country's Union budget proposed to limit tax exemptions f… [+1341 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": null,
                "title": "Sakshee Malikkh: 'I wanted to win so I could travel in a plane'",
                "description": "BBC Indian Sportswoman of the Year nominee Sakshee Malikkh says one of her motivations was wanting to travel internationally.",
                "url": "https://www.bbc.co.uk/sport/av/wrestling/64483620",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/16DDA/production/_128485639_saksheemalikkhnominee.jpg",
                "publishedAt": "2023-02-06T09:43:19Z",
                "content": "Sakshee Malikkh made a stunning return to the wrestling world in 2022, winning Commonwealth Games gold in Birmingham.\r\nThat was her third Commonwealth medal, after a bronze in 2018 and a silver in 20… [+584 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cold weather hits India's gasoline, gasoil sales in Jan - Reuters",
                "description": "Sales of gasoline and gasoil by Indian state-run retailers declined in January from the previous month as cold weather in parts of the country hit the movement of personal and commercial vehicles, preliminary sales data showed.",
                "url": "https://www.reuters.com/markets/commodities/cold-weather-hits-indias-gasoline-gasoil-sales-jan-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/4OlpRf_k1QvzlWHdZYlFObBQfRg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QASGGHHNB5L7DJRVGRFSTI2RT4.jpg",
                "publishedAt": "2023-02-02T07:29:00Z",
                "content": "NEW DELHI, Feb 2 (Reuters) - Sales of gasoline and gasoil by Indian state-run retailers declined in January from the previous month as cold weather in parts of the country hit the movement of persona… [+1255 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Lauren Frayer",
                "title": "Indian tax inspectors are still searching BBC offices, with some staying overnight",
                "description": "Around 10 BBC employees have been sleeping in their office since Tuesday. Some of the tax agents stayed overnight too. They searched laptops and phones of some journalists and administrative staff.",
                "url": "https://www.npr.org/2023/02/16/1157428195/bbc-india-raid-modi",
                "urlToImage": "https://media.npr.org/assets/img/2023/02/16/gettyimages-1247156029_wide-1c3b098c7e74b5d1ff4ab98408c819aa2f513261-s1400-c100.jpg",
                "publishedAt": "2023-02-16T14:50:02Z",
                "content": "A Border Police officer stands guard outside the office building where Indian tax authorities raided BBC's office in New Delhi.\r\nSajjad Hussain/AFP via Getty Images\r\nMUMBAI Indian tax inspectors rema… [+895 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "Gopal B Kateshiya",
                "title": "On third day of global bird counting event, Gujarat at 8th spot among states",
                "description": "West Bengal (438 species), Uttarakhand (391), Arunachal Pradesh (384), Assam (363), Karnataka (340), Maharashtra (339) and Tamil Nadu (323) were ahead of Gujarat, showedlatest data on eBird, the online platform which is powering the event.",
                "url": "https://indianexpress.com/article/cities/rajkot/on-third-day-of-global-bird-counting-event-gujarat-at-8th-spot-among-states-8455159/",
                "urlToImage": "https://images.indianexpress.com/2023/02/bird-watching-759.jpg",
                "publishedAt": "2023-02-19T18:37:33Z",
                "content": "GUJARAT WAS trailing on the counts of bird species and checklists of birds among Indian states as compared to its performance in the previous year even as India continued to be on the second position… [+3449 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India's largest mortgage lender HDFC misses Q3 profit view on ... - Reuters India",
                "description": "Housing Development Finance Corp <a href=\"https://www.reuters.com/companies/HDFC.NS\" target=\"_blank\">(HDFC.NS)</a> (HDFC), India's largest mortgage lender, reported a 13.2% rise in third-quarter profit on Thursday, missing estimates, as higher funding costs t…",
                "url": "https://www.reuters.com/world/india/indias-largest-mortgage-lender-hdfc-misses-q3-profit-view-higher-funding-costs-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/JlyhUhdLg32LWal7nVQ0rSIthuk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NUEKFKS6ZJJYTN4T25VMAGIQ3E.jpg",
                "publishedAt": "2023-02-02T08:38:00Z",
                "content": "BENGALURU, Feb 2 (Reuters) - Housing Development Finance Corp (HDFC.NS) (HDFC), India's largest mortgage lender, reported a 13.2% rise in third-quarter profit on Thursday, missing estimates, as highe… [+1181 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Top Indian refiners are using the UAE's currency instead of the US dollar to buy Russian crude, report says",
                "description": "\"If you are asking me officially am I in the know of these payment channels, no, I'm not,\" India's oil minister told Bloomberg.",
                "url": "https://markets.businessinsider.com/news/currencies/dollar-dominance-india-refiners-uae-dirham-russia-crude-oil-sanctions-2023-2",
                "urlToImage": "https://i.insider.com/63b875f4d1c5130019f96ec5?width=1200&format=jpeg",
                "publishedAt": "2023-02-08T16:14:32Z",
                "content": "Large Indian refiners are shifting away from the US dollar in order to purchase Russian crude, sources told Bloomberg. \r\nCompanies including Reliance Industries, Bharat Petroleum, and Nayara Energy a… [+1853 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Stephen Lurie",
                "title": "Meet the Superusers Behind IMDb, the Internet’s Favorite Movie Site",
                "description": "Powered by obsessed film buffs, it’s a crowdsourced juggernaut that’s older than Google and Wikipedia. Now AI is threatening to steal the starring role.",
                "url": "https://www.wired.com/story/superusers-behind-imdb-the-internets-favorite-movie-site/",
                "urlToImage": "https://media.wired.com/photos/63efc5541b87b32b35988c9c/191:100/w_1280,c_limit/Wired%20R3.jpg",
                "publishedAt": "2023-02-21T11:00:00Z",
                "content": "Brumburghs botched book project and five-hour-a-day habit may be unique, but his explanation for what motivates him is not. Like other so-called supercontributors, he believes hes working in service … [+4395 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Hannah Ellis-Petersen South Asia correspondent",
                "title": "Indian journalist freed on bail after being jailed for two years without trial",
                "description": "Muslim reporter Siddique Kappan had been charged under draconian anti-terrorism lawsIndian journalist Siddique Kappan, who was held in jail for two years without trial, walked free on Thursday after being granted bail in a case human rights groups have allege…",
                "url": "https://www.theguardian.com/world/2023/feb/02/indian-journalist-freed-bail-siddique-kappan-jailed-two-years-without-trial",
                "urlToImage": "https://i.guim.co.uk/img/media/e019d134101050b093db8fd39a33c2ad26e8f4c4/0_100_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f9d5e5203845fd66366178f61b8d8368",
                "publishedAt": "2023-02-02T13:00:37Z",
                "content": "Indian journalist Siddique Kappan, who was held in jail for two years without trial, has walked free after being granted bail in a case human rights groups alleged was politically motivated.\r\nKappan,… [+2534 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Hannah Ellis-Petersen South Asia correspondent",
                "title": "Why is BBC report on Narendra Modi’s handling of sectarian riots in 2002 so controversial?",
                "description": "‘India: the Modi question’, is examining tensions between the prime minister and the country’s Muslim minorityA BBC documentary on Indian prime minister Narendra Modi’s actions during deadly sectarian riots in 2002 continues to cause controversy, with the Bri…",
                "url": "https://www.theguardian.com/world/2023/feb/14/why-is-bbc-report-on-narendra-modis-handling-of-sectarian-riots-in-2002-so-controversial",
                "urlToImage": "https://i.guim.co.uk/img/media/ae2984185dc9bd97afb2c4a8e34b62dba2f34906/0_127_3796_2278/master/3796.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6a9a7cdaee6b19599d2bce96d231c04d",
                "publishedAt": "2023-02-14T17:32:02Z",
                "content": "A BBC documentary on Indian prime minister Narendra Modis actions during deadly sectarian riots in 2002 continues to cause controversy, with the British broadcasters offices raided by the countrys ta… [+8202 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Jonathan Barrett",
                "title": "Adani hit with investigation by Indian regulators as shares tumble again",
                "description": "Securities and Exchange Board of India probes fraud allegations from Hindenburg Research as conglomerate tries to weather stormThe beleaguered conglomerate Adani Group is facing an investigation by Indian regulators into fraud allegations made by the US inves…",
                "url": "https://www.theguardian.com/business/2023/feb/14/adani-hit-with-investigation-by-indian-regulators-as-shares-tumble-again",
                "urlToImage": "https://i.guim.co.uk/img/media/3f786303c2c58d0fdec13f8c842be86ba041c08b/1035_903_2936_1761/master/2936.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4c695f384462c9b46bbec062394a097a",
                "publishedAt": "2023-02-14T07:57:59Z",
                "content": "The beleaguered conglomerate Adani Group is facing an investigation by Indian regulators into fraud allegations made by the US investor Hindenburg Research, as a brief reprieve in pressure on its sha… [+3027 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Women's cricket awaits birth of a superpower with game set to take ... - Reuters",
                "description": "Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the sport.",
                "url": "https://www.reuters.com/lifestyle/sports/womens-cricket-awaits-birth-superpower-with-game-set-take-off-india-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/w9j1RMJ8W83YI1bniKAZBOrx7uM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg",
                "publishedAt": "2023-02-02T04:22:00Z",
                "content": "NEW DELHI, Feb 2 (Reuters) - Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the spor… [+2981 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Angus Fontaine (now) and James Wallace (later)",
                "title": "India v Australia: first Test, day one – live",
                "description": "<ul><li>Updates from the opening match of the series at VCA Stadium</li><li>Play in the cricket starts at 9:30am in Nagpur/3pm AEDT</li><li>Any thoughts? Feel free to get in touch with an email</li></ul>And the India XI…And here are the full teams… Continue r…",
                "url": "https://www.theguardian.com/sport/live/2023/feb/09/india-vs-australia-live-updates-cricket-score-first-test-day-one-ind-v-aus-scorecard-international-latest-scores-nagpur-vca-stadium",
                "urlToImage": "https://i.guim.co.uk/img/media/d9e99418fecd7504de5e16901799f8dc70fc95b8/0_125_3763_2259/master/3763.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f8f35d72d18e4ac7e0d2f2ff48fae750",
                "publishedAt": "2023-02-09T03:52:53Z",
                "content": "And here are the full teams\r\nAustralia XI: David Warner, Usman Khawaja, Marnus Labuschagne, Steve Smith, Matthew Renshaw, Peter Handscomb, Alex Carey (wk), Pat Cummins (c), Todd Murphy, Nathan Lyon, … [+4122 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": null,
                "title": "Nikhat Zareen: 'I was questioned for wearing shorts in the ring'",
                "description": "BBC Indian Sportswoman of the Year nominee Nikhat Zareen says people raised questions about her wearing shorts while boxing.",
                "url": "https://www.bbc.co.uk/sport/av/boxing/64483617",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/F8AA/production/_128485636_nikhatzareennominee.jpg",
                "publishedAt": "2023-02-06T09:42:52Z",
                "content": "Nikhat Zareen had a golden year in 2022. \r\nThe 26-year old came through five fights to win the flyweight division at the World Boxing Championships in Istanbul.\r\nShe went on to win gold at the Common… [+588 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "abharade@insider.com (Aditi Bharade)",
                "title": "India is trying to get G20 countries to follow Putin's instruction not to refer to Russia's war in Ukraine as a 'war,' reports say",
                "description": "India has tried to convince G20 member countries to instead refer to the military conflict in Ukraine as a \"crisis\" or a \"challenge.\"",
                "url": "https://www.businessinsider.com/india-tries-stop-g20-calling-ukraine-invasion-war-2023-2",
                "urlToImage": "https://i.insider.com/63f6ee605ca81e001855ce62?width=1200&format=jpeg",
                "publishedAt": "2023-02-23T05:29:56Z",
                "content": "India tried to stop G20 countries describing the war Russia started in Ukraine as a \"war,\" even as the conflict enters its second year, reports say.\r\nDuring the group's negotiations over a joint comm… [+2338 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": null,
                "title": "PV Sindhu: 'It's not just months of hard work, it's years'",
                "description": "BBC Indian Sportswoman of the Year nominee PV Sindhu says success comes not with just months of hard work, but years.",
                "url": "https://www.bbc.co.uk/sport/av/badminton/64483622",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/C722/production/_128487905_pvsindhunominee.jpg",
                "publishedAt": "2023-02-06T09:43:00Z",
                "content": "Badminton player Pusarla Venkata (PV) Sindhu has set new standards in the sport for Indian women. \r\nIn 2022, she won the women's singles title at the Commonwealth Games, beating Canada's Michelle Li … [+780 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Agence France-Presse",
                "title": "India opens first stage of $13bn Delhi to Mumbai expressway",
                "description": "Route linking two cities is part of concerted infrastructure push to catch up with geopolitical rival ChinaIndia has inaugurated the first stage of its longest expressway, a route linking Delhi and Mumbai, as it makes a concerted infrastructure push to catch …",
                "url": "https://www.theguardian.com/world/2023/feb/12/india-opens-first-stage-expressway-delhi-to-mumbai",
                "urlToImage": "https://i.guim.co.uk/img/media/27c954261058e7e440d86740b0f9553b5ce04fe0/0_0_5116_3070/master/5116.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6015aa04f4c6847ac416a9af983f976c",
                "publishedAt": "2023-02-12T12:22:59Z",
                "content": "India has inaugurated the first stage of its longest expressway, a route linking Delhi and Mumbai, as it makes a concerted infrastructure push to catch up with its geopolitical rival China.\r\nThe $13b… [+2442 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "India's NSE puts trades in some Adani firms under additional watch - Reuters India",
                "description": "India's National Stock Exchange on Thursday placed on additional surveillance shares of Adani Enterprises <a href=\"https://www.reuters.com/companies/ADEL.NS\" target=\"_blank\">(ADEL.NS)</a>, Adani Ports <a href=\"https://www.reuters.com/companies/APSE.NS\" target…",
                "url": "https://www.reuters.com/world/india/indias-nse-puts-trades-some-adani-firms-under-additional-watch-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/Zo0OQXcbDsB1jyKbIA_12Ri9Slg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NI3FXDMVV5OFZANE3PVZXK6IYE.jpg",
                "publishedAt": "2023-02-02T16:14:00Z",
                "content": "BENGALURU, Feb 2 (Reuters) - India's National Stock Exchange on Thursday placed on additional surveillance shares of Adani Enterprises (ADEL.NS), Adani Ports (APSE.NS) and Ambuja Cements (ABUJ.NS), i… [+1855 chars]"
            },
            {
                "source": {
                    "id": "vice-news",
                    "name": "Vice News"
                },
                "author": "Pallavi Pundir, Sahar Habib Ghazi",
                "title": "Seattle Becomes First US City to Ban Caste-Based Discrimination",
                "description": "Over 40 percent of foreign-born tech workers in Seattle, which is home to headquarters of companies like Amazon and Microsoft, are from India.",
                "url": "https://www.vice.com/en/article/88qwxg/seattle-caste-discrimination-ban-india",
                "urlToImage": "https://video-images.vice.com/articles/63f5dea5e7f6db9c9278faaa/lede/1677059533919-seattlecastedebate23053024991723.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDI2eGg7MHh3LDAuMDU3NnhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
                "publishedAt": "2023-02-22T13:11:28Z",
                "content": "Seattle has made history in the U.S. by banning discrimination based on the ancient Hindu caste system, which activists argue encourages inequality, segregation and exclusion among South Asians. \r\nOn… [+4188 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Rupee likely to open higher after Fed, local equities in focus - Reuters",
                "description": "The Indian rupee is expected to open stronger on Thursday, as markets perceived the U.S. Federal Reserve to be a bit dovish, with investors keeping an eye on domestic equities after late developments in the Adani saga.",
                "url": "https://www.reuters.com/markets/currencies/india-rupee-rupee-likely-open-higher-after-fed-local-equities-focus-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/7ZwICFAaVmjcLPF6ZqV0N4fklzs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JBY37H3GENJKRM56UH5ZOKGNSQ.jpg",
                "publishedAt": "2023-02-02T02:52:00Z",
                "content": "MUMBAI, Feb 2 (Reuters) - The Indian rupee is expected to open stronger on Thursday, as markets perceived the U.S. Federal Reserve to be a bit dovish, with investors keeping an eye on domestic equiti… [+2478 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Vishnu Sarangapurkar)",
                "title": "The OnePlus 11 gets some love with its first OTA update",
                "description": "OnePlus 11 launched globally a week ago, and the first significant update is already underway, starting in India.",
                "url": "https://www.androidcentral.com/apps-software/oneplus-11-receives-its-first-oxygenos-update",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/mKsCDJ8P58KmGadmBb6EJL-1200-80.jpg",
                "publishedAt": "2023-02-14T20:16:38Z",
                "content": "<ul><li>The OnePlus 11 receives its first OxygenOS update post-launch.</li><li>The update brings various fixes and system/connection stability improvements. </li><li>The update is currently being rol… [+2501 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Jonathan Barrett Senior business reporter",
                "title": "Adani Group abandons share offer as crisis triggered by fraud claims escalates",
                "description": "Relentless selling triggers questions about how Indian conglomerate – which denies allegations – will meet its loan obligations<ul><li>Why has the Adani Group shed US$90bn in value and what do short sellers have to gain?</li><li>Follow our Australia news live…",
                "url": "https://www.theguardian.com/business/2023/feb/02/adani-group-abandons-share-offer-as-crisis-triggered-by-claims-escalates",
                "urlToImage": "https://i.guim.co.uk/img/media/21fc4689dac9e7bad02c19e188d5d86147fd1a43/0_0_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7f00714ed8e6386b8bb07b068fb4da78",
                "publishedAt": "2023-02-02T01:54:11Z",
                "content": "Beleaguered Indian conglomerate Adani Group has abandoned a much-vaunted share offer in an escalating crisis triggered by fraud claims that has cut more than US$90bn in value from the power-to-ports … [+3723 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Seattle: The South Asians supporting US city's ban on caste discrimination",
                "description": "Seattle is the first US city to ban caste-based discrimination - supporters say the move was necessary.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64728356",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2CC4/production/_128706411_kshamasawantspeakingtotheseattlecity'scouncilmembersbeforethevotepicture-grabdfromseattlecity'swebsiteoftheliveproceedings.png",
                "publishedAt": "2023-02-22T10:13:11Z",
                "content": "On Tuesday, Seattle became the first US city to ban caste-based discrimination after a vote by the local council. Ahead of the vote, several South Asians stood in line for hours to share their storie… [+6133 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "WASBIR HUSSAIN",
                "title": "Indian police nab over 2,000 men for illegal child marriages",
                "description": "Indian police have arrested more than 2,000 men in a crackdown on illegal child marriages involving girls under the age of 18 in a northeastern state...",
                "url": "https://news.yahoo.com/indian-police-nab-over-2-082449211.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/GzvpSSxxhJ2HQ.GqkY0XUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/672275997fcad45781f59821b44392c7",
                "publishedAt": "2023-02-04T08:24:49Z",
                "content": "GUWAHATI, India (AP) Indian police have arrested more than 2,000 men in a crackdown on illegal child marriages involving girls under the age of 18 in a northeastern state, officials said Saturday.\r\nT… [+1773 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Indian shares fall as Union budget drags insurance cos; Adani ... - Reuters",
                "description": "Indian shares reversed earlier gains to close lower on Wednesday, led by a fall in insurance companies after the country's Union budget proposed to limit tax exemptions for insurance proceeds, while Adani Group shares tumbled.",
                "url": "https://www.reuters.com/world/india/indian-shares-fall-union-budget-drags-insurance-cos-adani-group-stocks-tumble-2023-02-01/",
                "urlToImage": "https://www.reuters.com/resizer/Ll7GVsf8zHpcG5ugfCXcZxN3RdI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AWBK7DQS4JKWJEUM7ND6HQ4FHU.jpg",
                "publishedAt": "2023-02-01T10:34:00Z",
                "content": "BENGALURU, Feb 1 (Reuters) - Indian shares reversed earlier gains to close lower on Wednesday, led by a fall in insurance companies after the country's Union budget proposed to limit tax exemptions f… [+2782 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "jmann@insider.com (Jyoti Mann)",
                "title": "A pop-up message tells staff 'please go home' 10 minutes before locking their computers at the end of the day to improve work-life balance",
                "description": "An Indian IT company says it installed the software to help its employees after they started working longer hours during the pandemic.",
                "url": "https://www.businessinsider.com/message-tells-staff-go-home-computers-lock-work-life-balance-2023-2",
                "urlToImage": "https://i.insider.com/63f9e8c9ae0bf0001824b85a?width=1200&format=jpeg",
                "publishedAt": "2023-02-25T11:00:00Z",
                "content": "An IT firm in India has taken drastic action to help staff achieve a better work-life balance.\r\nIt's installed software that displays a pop-up message telling workers that their computers will shut d… [+1511 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Annesha Ghosh",
                "title": "‘Game changer’: why the Women’s Premier League is a revolution for players and fans",
                "description": "The inaugural WPL in March is shaping as the richest in women’s sport. As the game’s stars gather for the US$572m tournament in India, here’s how it works, who’s playing and why it will turbo-boost cricketDescribed variously by a wide cross-section of stakeho…",
                "url": "https://www.theguardian.com/sport/2023/feb/03/game-changer-why-the-womens-premier-league-is-a-revolution-for-players-and-fans",
                "urlToImage": "https://i.guim.co.uk/img/media/b25580117edc492931b459a46ac95c5499e5279d/0_66_2461_1477/master/2461.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6a3ef02c335643e4cfc647d304856a39",
                "publishedAt": "2023-02-03T00:34:42Z",
                "content": "What is the Womens Premier League (WPL)?\r\nDescribed variously by a wide cross-section of stakeholders in cricket as a revolution in the womens game and a game-changer, the WPL is an Indian domestic T… [+6015 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cracks begin to show in India's Himalayan building spree - Reuters",
                "description": "One morning 18 months ago, Jaswant Singh Butola woke to find hairline cracks had spread up the walls of his house, which overlooks a railway being built to take pilgrims to Himalayan holy sites in India near the border with China.",
                "url": "https://www.reuters.com/business/environment/cracks-begin-show-indias-himalayan-building-spree-2023-02-02/",
                "urlToImage": "https://www.reuters.com/resizer/goxOBsJ-Yc_kbCVoUBXDW09a89M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/P5UYIDBKTFIZBD34CLXZPVVPSQ.jpg",
                "publishedAt": "2023-02-02T02:17:00Z",
                "content": "JOSHIMATH, India, Feb 2 (Reuters) - One morning 18 months ago, Jaswant Singh Butola woke to find hairline cracks had spread up the walls of his house, which overlooks a railway being built to take pi… [+10211 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Hannah Ellis-Petersen in Delhi",
                "title": "Tax raids at BBC offices in India enter second day",
                "description": "Searches in offices in Delhi and Mumbai come weeks after the release of BBC documentary critical of prime minister Narendra ModiRaids of BBC offices by government officials in India have entered a second day as a tax investigation continues, just weeks after …",
                "url": "https://www.theguardian.com/world/2023/feb/15/tax-raids-at-bbc-offices-in-india-enter-second-day",
                "urlToImage": "https://i.guim.co.uk/img/media/317fac2ba31df01a90c47afec1464d9880bd3560/0_273_8192_4918/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=29d0f7dcd0a6fb713b573ace16252997",
                "publishedAt": "2023-02-15T05:56:33Z",
                "content": "Raids of BBC offices by government officials in India have entered a second day as a tax investigation continues, just weeks after the release of a documentary critical of prime minister Narendra Mod… [+2726 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Kenan Malik",
                "title": "India enjoyed a free and vibrant media. Narendra Modi’s brazen attacks are a catastrophe | Kenan Malik",
                "description": "The prime minister’s cynical raids on the BBC are the latest populist clampdown on a press and broadcasting ‘elite’In January, the BBC broadcast a two-part series, India: The Modi Question, which looked forensically at the role of Narendra Modi in fomenting t…",
                "url": "https://www.theguardian.com/commentisfree/2023/feb/19/india-enjoyed-a-free-and-vibrant-media-narendra-modis-brazen-attacks-are-a-catastrophe",
                "urlToImage": "https://i.guim.co.uk/img/media/bd572a15c92d0ddb58a434f74b36e534cef6f50d/0_187_4710_2827/master/4710.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=d3146f97b5bd3c502b8b1a2e215ef940",
                "publishedAt": "2023-02-19T08:00:02Z",
                "content": "In January, the BBC broadcast a two-part series, India: The Modi Question, which looked forensically at the role of Narendra Modi in fomenting the Gujarat anti-Muslim riots of 2002 in which at least … [+6936 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "'Now I deliver food, but once I played football for my country'",
                "description": "Poulami Adhikari played in India's under-16 team, but had to stop when her family fell on hard times.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-64513558",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/03FC/production/_128502010_poulami_garden.jpg",
                "publishedAt": "2023-02-05T00:18:05Z",
                "content": "Poulami Adhikari was half-way through a double shift when Atindra Chakraborty, a social worker whose hobby is making videos about ordinary people in Kolkata, stopped her to ask some questions. \r\nPoul… [+5873 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Mukul Kesavan",
                "title": "Narendra Modi is struggling to be both anti-Muslim strongman and global leader | Mukul Kesavan",
                "description": "The Indian prime minister’s attempts to suppress a critical BBC documentary show how sensitive he is to his international reputationThe clue to the Indian government’s thin-skinned response to the BBC’s two-part documentary, India: The Modi Question, is in th…",
                "url": "https://www.theguardian.com/commentisfree/2023/feb/08/narendra-modi-anti-muslim-strongman-global-leader-india-bbc",
                "urlToImage": "https://i.guim.co.uk/img/media/ce0d7250ea3dc170907bb583080c02393b276ade/0_134_4288_2573/master/4288.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=926532ae51d08a22e868ad5120ab9c26",
                "publishedAt": "2023-02-08T12:00:15Z",
                "content": "The clue to the Indian governments thin-skinned response to the BBCs two-part documentary, India: The Modi Question, is in the name. The documentary lays out the evidence for the argument that the an… [+5490 chars]"
            }
        ]
    }
    const [highlightsData, setHighlightsData] = useState({})
    const [generalNewsData, setGeneralNewsData] = useState(Object)
    const [highlightsLoading, setHighlightsLoading] = useState(true)
    const [generalNewsDataLoading, setGeneralNewsDataLoading] = useState(true)
    useEffect(() => {
        getData();
        getDataGenralNews();
        // setHighlightsData(sampleHighlightnewsdata)

    }, [])
    var apiKey = window.localStorage.getItem('apiKey');
    var country = window.localStorage.getItem('country');

    async function getData() {
        await axios.get(`https://newsapi.org/v2/top-headlines?pageSize=5&country=${country}&apiKey=${apiKey}`).then((res: any) => {
            console.log(res.data)
            setHighlightsData(res.data)
            setHighlightsLoading(false)
            return res.data
        }).then((data: any) => console.log(highlightsData, "Highlights"))
    }
    async function getDataGenralNews() {
        await axios.get(`https://newsapi.org/v2/everything?apiKey=${apiKey}&sortBy=relevancy&q=tamil%20Nadu%20politics%20OR%20kollywood%20OR%20boolywood%20OR%20tech%20OR%20crypto%20OR%20india%20OR%20tamil%20nadu%20OR%20Tamil`).then((res: any) => {
            setGeneralNewsData(res.data)
            setGeneralNewsDataLoading(false)
            return res.data
        }).then((data: any) => console.log(generalNewsData, "general"))
    }
    return (
        <div>
            {
            highlightsLoading ? <p>loading....</p>
                :
                <CardBox data={highlightsData} title="HIGHLIGHTS" />
        // <CardBox data={sampleHighlightnewsdata} title="HIGHLIGHTS"/>   

            }
            <H2Center>Genral News</H2Center>
            {
                generalNewsDataLoading ? <p>loading....</p>
                :
                generalNewsData.articles.map((article: any, index: any) => {
                    return (
                        <List article={article} key={index} />
                    )
                })
            }

        </div>
    )
}

export default Home