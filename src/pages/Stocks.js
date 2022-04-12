import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Stocks(props) {

    const apiKey = '6a946a0631e672c7352022d15c048f7e';

    const appleUrl = `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${apiKey}`  
    const [apple, setApple] = useState([]);
    const getApple = async () => {
        try{
            const response = await fetch(appleUrl);
            const data = await response.json();
            setApple(data);
        } catch(e) {
            console.error(e)
        }
    };

    const microsoftUrl = `https://financialmodelingprep.com/api/v3/quote/MSFT?apikey=${apiKey}`  
    const [microsoft, setMicrosoft] = useState([]);
    const getMicrosoft = async () => {
        try{
            const response = await fetch(microsoftUrl);
            const data = await response.json();
            setMicrosoft(data);
        } catch(e) {
            console.error(e)
        }
    };

    const googleUrl = `https://financialmodelingprep.com/api/v3/quote/GOOG?apikey=${apiKey}`  
    const [google, setGoogle] = useState([]);
    const getGoogle = async () => {
        try{
            const response = await fetch(googleUrl);
            const data = await response.json();
            setGoogle(data);
        } catch(e) {
            console.error(e)
        }
    };

    // const facebookUrl = `https://financialmodelingprep.com/api/v3/quote/FB?apikey=${apiKey}`  
    // const [facebook, setFacebook] = useState([]);
    // const getFacebook = async () => {
    //     try{
    //         const response = await fetch(facebookUrl);
    //         const data = await response.json();
    //         setFacebook(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    // const oracleUrl = `https://financialmodelingprep.com/api/v3/quote/ORCL?apikey=${apiKey}`  
    // const [oracle, setOracle] = useState([]);
    // const getOracle = async () => {
    //     try{
    //         const response = await fetch(oracleUrl);
    //         const data = await response.json();
    //         setOracle(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    // const intelUrl = `https://financialmodelingprep.com/api/v3/quote/INTC?apikey=${apiKey}`  
    // const [intel, setIntel] = useState([]);
    // const getIntel = async () => {
    //     try{
    //         const response = await fetch(intelUrl);
    //         const data = await response.json();
    //         setIntel(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    // const amazonUrl = `https://financialmodelingprep.com/api/v3/quote/AMZN?apikey=${apiKey}`  
    // const [amazon, setAmazon] = useState([]);
    // const getAmazon = async () => {
    //     try{
    //         const response = await fetch(amazonUrl);
    //         const data = await response.json();
    //         setAmazon(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    // const shopifyUrl = `https://financialmodelingprep.com/api/v3/quote/SHOP?apikey=${apiKey}`  
    // const [shopify, setShopify] = useState([]);
    // const getShopify = async () => {
    //     try{
    //         const response = await fetch(shopifyUrl);
    //         const data = await response.json();
    //         setShopify(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    // const uberUrl = `https://financialmodelingprep.com/api/v3/quote/UBER?apikey=${apiKey}`  
    // const [uber, setUber] = useState([]);
    // const getUber = async () => {
    //     try{
    //         const response = await fetch(uberUrl);
    //         const data = await response.json();
    //         setUber(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    // const teslaUrl = `https://financialmodelingprep.com/api/v3/quote/TSLA?apikey=${apiKey}`  
    // const [tesla, setTesla] = useState([]);
    // const getTesla = async () => {
    //     try{
    //         const response = await fetch(teslaUrl);
    //         const data = await response.json();
    //         setTesla(data);
    //     } catch(e) {
    //         console.error(e)
    //     }
    // };

    useEffect(() => {
        getApple();
        getMicrosoft();
        getGoogle();
        // getFacebook();
        // getOracle();
        // getIntel();
        // getAmazon();
        // getShopify();
        // getUber();
        // getTesla();
    }, []);

    return (
        <div className="container">
            <h2>MOST ACTIVE STOCKS</h2>
            <p>(Click on Each Company Name for more Detail)</p>
            <table style={{width: "80%"}}>
                <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
                {
                    apple.map((x) => {
                        return (
                            <tr>
                                <td><Link className="link-style" to={`/stocks/${x.symbol}`}>{`${x.name} - ${x.symbol}`}</Link></td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    microsoft.map((x) => {
                        return (
                            <tr>
                                <td><Link className="link-style" to={`/stocks/${x.symbol}`}>{`${x.name} - ${x.symbol}`}</Link></td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    google.map((x) => {
                        return (
                            <tr>
                                <td><Link className="link-style" to={`/stocks/${x.symbol}`}>{`${x.name} - ${x.symbol}`}</Link></td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {/* {
                    facebook.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    oracle.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    intel.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    amazon.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    shopify.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    uber.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                }
                {
                    tesla.map((x) => {
                        return (
                            <tr>
                                <td>{`${x.name} - ${x.symbol}`}</td>
                                <td>{x.price}</td>
                                <td style={{color: (x.change > 0) ? 'green': 'red'}}>{x.change}</td>
                            </tr>
                        )
                    })
                } */}
            </table>
        </div>
    )
}