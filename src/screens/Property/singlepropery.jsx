import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { fetchSingle } from "../../utils/handleApi";
import { Detailproperty } from  "../../components/data/data.js"

const axios = require("axios");

const SinglePropery = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [propertyData, setPropertyData] = useState();
    const [loading, setLoading] = useState(false);

    const toComponentB = () => {
        navigate(-1, { state: { type: location.state.data } });
    }
    useEffect(() => {
        console.log(Detailproperty);
        console.log("inside hook" + JSON.stringify(location));
         console.log("inside hook" + location?.state?.externalID)
         setLoading(true);
         let finalData = Detailproperty.filter(function(obj, index){
            return (obj.externalID===location?.state?.externalID );
          })
          console.log("finalDataSingleview*********"+JSON.stringify(finalData));

          setPropertyData(finalData[0])
          setLoading(false);

        // setLoading(true);

        // if (location?.state?.externalID) {
        //     loaddata();
        // }
        // setLoading(false);
        //loaddata();
    }, []);

    const loaddata =async () => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://bayut.p.rapidapi.com/properties/detail',
        //     params: { externalID: location?.state?.externalID },
        //     headers: {
        //         'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        //         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        //     }
        // };

        // const data = await fetchSingle(options);
        // setPropertyData(data)
    };

    return (
        <>
            <button class="btn previous round"  onClick={() => { toComponentB() }}><i class="fa fa-backward" ></i></button>

            {propertyData?.length>0&&loading && <div class="text-center" style={{ color: '#dc3545' }}><div class="spinner-border ms-auto" role="status" aria-hidden="true"></div></div>}

            <div class="container single">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">

                                {propertyData?.photos?.map((photo,i) => (
                                    <div className={ i===1 ? ' carousel-item active' : 'carousel-item' }>

                                        <img src={photo?.url} class="d-block w-100" alt="..." height="500px" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>{photo?.title}</h5>

                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">{propertyData?.title}</h3>
                        <div class="rating">
                            <span class="review-no">contact name </span>
                            {propertyData?.contactName}
                        </div>
                        <h4 class="price"> price: <span>{propertyData?.price}</span></h4>

<p class="vote"><strong>Type</strong> {propertyData?.type}<strong></strong></p>
<p class="vote"><strong>Contact</strong> {propertyData?.phoneNumber?.mobile}<strong></strong></p>

                        <p class="product-description">{propertyData?.description}</p>
                

                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePropery
