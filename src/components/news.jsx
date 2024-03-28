import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
// import Spinner from "./spinner";
// import PropTypes from 'prop-types';

const News = ({ pageSize, category, apikey}) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);


  const capitalizeFirstLetter = (string)=> {

  return string.charAt(0).toUpperCase() + string.slice(1);
}

  document.title = `${capitalizeFirstLetter(category)} News-Today`


  // const [loading, setLoading] = useState(false);
  // const articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "Spiceworks.com",
  //     },
  //     author: "Anuj Mudaliar",
  //     title:
  //       "DarkGate Malware Spread Through Windows Flaw - Spiceworks News and Insights",
  //     description:
  //       "A Windows Defender SmartScreen vulnerability has been exploited to enable the distribution of DarkGate malware. Find out more.",
  //     url: "https://www.spiceworks.com/it-security/vulnerability-management/news/windows-smartscreen-vulnerability-exploited-darkgate-malware/",
  //     urlToImage:
  //       "https://images.spiceworks.com/wp-content/uploads/2023/10/17121621/Critical-Vulnerability.jpg",
  //     publishedAt: "2024-03-15T12:31:14Z",
  //     content:
  //       "DarkGate malware is being distributed by exploiting a vulnerability in Windows Defender SmartScreen. Find out how the exploit works and the dangers that it poses to Windows systems.\r\n<ul><li>A now-fi… [+2357 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "India Today",
  //     },
  //     author: "India Today Tech",
  //     title:
  //       "Vivo T3 confirmed to launch in India on March 21: Check expected pricing and specs - India Today",
  //     description:
  //       "Vivo is preparing for another launch this year It is scheduled to launch the Vivo T3 smartphone on March 21",
  //     url: "https://www.indiatoday.in/technology/news/story/vivo-t3-confirmed-to-launch-in-india-on-march-21-check-expected-pricing-and-specs-2515367-2024-03-15",
  //     urlToImage:
  //       "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/vivo-t3-150927173-16x9_0.png?VersionId=NVtHd._IEVevZ3KwRpQGUldnm5QPoW3y",
  //     publishedAt: "2024-03-15T12:11:44Z",
  //     content:
  //       "Vivo has confirmed that it is launching a new smartphone in India on March 21. Called the Vivo T3, the smartphone will succeed the Vivo T2, which was launched last year around the same time, at a sta… [+1963 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "India Today",
  //     },
  //     author: "Ankita Chakravarti",
  //     title:
  //       "Apple will offer Rs 200 bonus if you add Rs 2000 to your Apple ID - India Today",
  //     description:
  //       "Apple offers a 10 per cent bonus to Indian users who add funds directly to their Apple ID This one-time promotional offer is valid until March 26",
  //     url: "https://www.indiatoday.in/technology/news/story/apple-will-offer-rs-200-bonus-if-you-add-rs-2000-to-your-apple-id-2515341-2024-03-15",
  //     urlToImage:
  //       "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/iphone-16-074904766-16x9.jpg?VersionId=jc4pQOPAsPwW03.zgIeeb3GS4yIadpDL",
  //     publishedAt: "2024-03-15T11:25:29Z",
  //     content:
  //       "Apple has announced an exciting offer for its users in India. The Cupertino-giant is offering a 10 percent bonus when they add funds directly to their Apple ID from the App Store. The offer is runnin… [+2156 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Abplive.com",
  //     },
  //     author: "ABP News Bureau",
  //     title:
  //       "OpenAI Will Release AI Tool Sora For The Public This Year: CTO Mira Murati - ABP Live",
  //     description:
  //       "While currently limited to select professionals such as visual artists, designers, and filmmakers, Sora's availability is expected to expand in the near future.",
  //     url: "https://news.abplive.com/technology/openai-ai-tool-sora-release-launch-date-2024-price-1672238",
  //     urlToImage:
  //       "https://feeds.abplive.com/onecms/images/uploaded-images/2024/03/15/3034ccc46eaaee77d51b41a38b6c0e251710500331361555_original.png?impolicy=abp_cdn&imwidth=1200",
  //     publishedAt: "2024-03-15T11:19:17Z",
  //     content:
  //       "OpenAI's highly anticipated text-to-video generation tool, Sora, has garnered significant attention in the tech community following its recent announcement by CEO Sam Altman. This innovative tool has… [+1854 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "India Today",
  //     },
  //     author: "Ankita Chakravarti",
  //     title:
  //       "Honor 9 Pad with free Bluetooth keyboard to be launched in India soon, company confirms - India Today",
  //     description:
  //       "Honor Pad 9 tablet with Bluetooth keyboard set to launch in India soon Honor confirms The tablet was officially unveiled in MWC Spain",
  //     url: "https://www.indiatoday.in/technology/news/story/honor-9-pad-with-free-bluetooth-keyboard-to-be-launched-in-india-soon-company-confirms-2515316-2024-03-15",
  //     urlToImage:
  //       "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/honor-pad-9-154942633-16x9_0.jpg?VersionId=xpgWUAsJHWwQFEcAmQ.CZPYf5Ck65INJ",
  //     publishedAt: "2024-03-15T10:50:05Z",
  //     content:
  //       "Honor Pad 9 is all set to be launched in India soon. The tablet was officially unveiled during the Mobile World Congress, which was held in Barcelona, Spain.Honor has now confirmed the launch of the … [+1854 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "India Today",
  //     },
  //     author: "India Today Tech",
  //     title:
  //       "Vivo T3 confirmed to launch in India on March 21: Check expected pricing and specs - India Today",
  //     description:
  //       "Vivo is preparing for another launch this year It is scheduled to launch the Vivo T3 smartphone on March 21",
  //     url: "https://www.indiatoday.in/technology/news/story/vivo-t3-confirmed-to-launch-in-india-on-march-21-check-expected-pricing-and-specs-2515367-2024-03-15",
  //     urlToImage:
  //       "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/vivo-t3-150927173-16x9_0.png?VersionId=NVtHd._IEVevZ3KwRpQGUldnm5QPoW3y",
  //     publishedAt: "2024-03-15T12:11:44Z",
  //     content:
  //       "Vivo has confirmed that it is launching a new smartphone in India on March 21. Called the Vivo T3, the smartphone will succeed the Vivo T2, which was launched last year around the same time, at a sta… [+1963 chars]",
  //   },
  // ];

  const getNewsdata = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${pageSize}`
      );
      setArticles(res.data.articles);
      setTotalResult(res.data.totalResults);
    } catch (error) {
      console.log(error)
    }
   
  };

  const handlePrevClick = async () => {

    try {
      
    } catch (error) {
      
    }
    if (page - 1 > Math.ceil(totalResults / pageSize)) {
      
    } else {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${
          page - 1
        }&pageSize=${pageSize}`
      );
     
      setArticles(res.data.articles);
      setPage(page - 1);
     
    }
  };

  const handleNextClick = async () => {
    if (page + 1 > Math.ceil(totalResults / pageSize)) {
      
    } else {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${
          page + 1
        }&pageSize=${pageSize}`
      );
      
      setArticles(res.data.articles);
      setPage(page + 1);
      // console.log(res.data.articles)
      
    }
  };

  useEffect(() => {
    getNewsdata();
  },[]);

  return (
    <div className="container my-5">
      <h1 className="text-center pt-5">News-Today - Top {capitalizeFirstLetter(category)} Headlines</h1>
      {/* {loading && <Spinner />} */}
      <div className="row my-5 mx-2">
        {articles.map((elem) => {
          return (
            <div className="col-md-4 my-2" key={elem.url}>
              <NewsItem
                title={elem.title}
                description={elem.description}
                urlToImage={elem.urlToImage}
                url={elem.url} source={elem.source.name} author={elem.author} date={elem.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

// News.propTypes = {
//   category: PropTypes.string
// }

export default News;

