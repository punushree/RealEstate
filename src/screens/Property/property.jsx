import React, { useState, useEffect } from 'react'
import Slider from '@material-ui/core/Slider';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { fetchdefault, fetchlocation, fetchSubmit } from '../../utils/handleApi';
import { loc, propData } from "../../components/data/data.js"

const optionsc = {
    margin: 8,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,

        }
    },
};
const Property = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const [locationData, setLocationData] = useState(loc);
    let rentdata = propData.filter(function (obj, index) {
        return obj.purpose === "for-rent";
    })
    const [propertyData, setPropertyData] = useState(rentdata);

    const [loction, setLoction] = useState(6020);
    const [type, setType] = useState(4);
    const [price, setPrice] = useState([100000, 1000000]);
    const [area, setArea] = useState([100, 10000]);

    const rangeSelector = (event, newValue) => {
        setPrice(newValue);
    };
    const areaSelector = (event, newValue) => {
        setArea(newValue);
    };
    const handlelocation = (event) => {
        setLoction(event.target.value)
    }
    const [bedroom, setBedroom] = useState(1)
    const handleIncrement = () => {
        if (bedroom < 5) {
            setBedroom(bedroom + 1)
        }
    }
    const handleDecrement = () => {
        if (bedroom > 1) {
            setBedroom(bedroom - 1)
        }
    }
    const [bathroom, setBathroom] = useState(1)
    const handlebathIncrement = () => {
        if (bathroom < 5) {
            setBathroom(bathroom + 1)
        }
    }
    const handlebathDecrement = () => {
        if (bathroom > 1) {
            setBathroom(bathroom - 1)
        }
    }
    const handletype = (event) => {
        setType(event.target.value);

    }
    useEffect(() => {
        // console.log("loading useeffect");

        // if (location?.state?.type) {
        //     console.log("in if"+location.state.type);
        //     setPropertyData(location.state.type);
        // }
        // else {
        //     console.log("inelse");

        //     loaddefault();
        // }
        loadlocation();
        loaddefault();
    }, []);
    const loadlocation = async () => {
        setLoading(true);
        // console.log("loading location");
        // const data = await fetchlocation();
        // setLocationData(data?.hits);
        setLocationData(loc);
        setLoading(false);
    };
    const loaddefault = async () => {
        setLoading(true);
        // console.log("loading default");
        // const data = await fetchdefault(optionsdefault);
        // setPropertyData(data?.hits);
        let result = propData.filter(function (obj, index) {
            return obj.purpose === "for-rent";
        })
        setPropertyData(result);
        setLoading(false);
        console.log("Default*********" +JSON.stringify( result));
    };
    const optionsdefault = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
            locationExternalIDs: '5002,6020',
            purpose: 'for-rent',
            hitsPerPage: '20',
            page: '0',
            lang: 'en',
            sort: 'city-level-score',
            rentFrequency: 'monthly',
            categoryExternalID: '4',
            priceMin: '65757',
            priceMax: '8789797',
            areaMin: '35',
            roomsMin: '1',
            bathsMin: '2'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };
    const handlesubmit = async () => {
        // const optionssubmit = {
        //     method: 'GET',
        //     url: 'https://bayut.p.rapidapi.com/properties/list',
        //     params: {
        //         locationExternalIDs: loction,
        //         purpose: 'for-rent',
        //         hitsPerPage: '20',
        //         page: '0',
        //         lang: 'en',
        //         sort: 'city-level-score',
        //         rentFrequency: 'monthly',
        //         categoryExternalID: type,
        //         priceMin: price[0],
        //         priceMax: price[1],
        //         areaMin: area[0],
        //         roomsMin: bedroom,
        //         bathsMin: bathroom
        //     },
        //     headers: {
        //         'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        //         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        //     }
        // };
        // console.log(optionssubmit);
        // const data = await fetchSubmit(optionssubmit);
        // setPropertyData(data?.hits);
        console.log("@@@@@@@RentData" + JSON.stringify(rentdata))
       

        let finalData = rentdata.filter(function (obj, index) {
            let menu = obj.location.some(({externalID}) => externalID === loction)&&
            obj.category.some(({externalID}) => externalID === type)
            return menu
        });
        console.log("final*********"+JSON.stringify(finalData));

        // rentdata.filter(object => object.location.target.includes(target_filter))

        setPropertyData(finalData);
    };


    const toComponentB = (external) => {
        console.log("typepass" + type)
        navigate('/single', { state: { externalID: external, data: propertyData, fortype: 'rent' } });
    }

    return (
        <>
            {loading && <div class="text-center" style={{ color: '#dc3545' }}><div class="spinner-border ms-auto" role="status" aria-hidden="true"></div></div>}

            <div className=" propertygrid container overflow-hidden">
                <div className="row gx-5">
                    <div className="col-8">
                        <div className="p-4  data">
                            <OwlCarousel
                                className="owl-theme"

                                {...optionsc}
                            >
                                {propertyData?.map((property) => (

                                    <div className="card h-100">
                                        <span className="offer">{property.price}{property.rentFrequency && `/${property.rentFrequency}`}</span>
                                        <div className="item-image">
                                            <img src={property.coverPhoto ? property.coverPhoto.url : ""} width={300} height={260} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <div className="item-content">
                                                <p>{property.title.length > 30 ? property.title.substring(0, 20) + '...' : property.title}
                                                </p>
                                                <div className="item-price ">  <span>bedroom | {property.rooms}</span> <span>bathroom | {property.baths}</span> </div>
                                                <hr />
                                                <p fontSize='lg'> {property.area} sq.feet</p>

                                            </div>

                                            <div style={{ color: '#dc3545' }}> <center><a onClick={() => { toComponentB(property.externalID) }}>View Detail</a></center></div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-2 border filter">
                            <div class="mb-3">
                                <label for="loc" class="form-label">Select Location</label>
                                <select id="loc" value={loction} onChange={handlelocation} className='form-control'>
                                    {locationData?.map((location) => (
                                        <option value={location.externalID}>{location.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="locatagoryc" class="form-label">Select Catagory</label>
                                <select id="catagory" value={type} onChange={handletype} className='form-control'>
                                    <option value="4">Apartment</option>
                                    <option value="3">Villas</option>
                                    <option value="1">Residential Building</option>

                                </select>
                            </div>
                            <div class="mb-3 item-area " >

                                Select Price
                                <Slider id="range-slider" style={{ color: '#dc3545' }}
                                    value={price}
                                    min={1000}
                                    max={9000000}
                                    className=' mx-2'

                                    onChange={rangeSelector}
                                    valueLabelDisplay="off"
                                />
                            </div>
                            <div className="item-price mb-3" style={{ fontSize: '10px' }}>  <span>{price[0]} </span>  <span>  {price[1]}</span> </div>
                            <div class="mb-3 item-area"  >
                                Select Area

                                <Slider id="area-slider" style={{ color: '#dc3545' }}
                                    value={area}
                                    min={100}
                                    max={100000}
                                    onChange={areaSelector}
                                    valueLabelDisplay="off"
                                    className=' mx-2'
                                />

                            </div>
                            <div className="item-price mb-3" style={{ fontSize: '10px' }}>  <span>{area[0]}  </span>  <span>    {area[1]}</span> </div>

                            <div class="mb-3 " style={{ alignItems: 'center' }}>
                                Bedrooms  :
                                <button className="btn mx-3" onClick={handleDecrement}><i className="fa fa-minus-square plusminus" ></i>
                                </button>
                                {bedroom}
                                <button className="btn mx-3" onClick={handleIncrement}><i className="fa fa-plus-square plusminus" ></i>
                                </button>
                            </div>
                            <div class="mb-3 ">
                                Bathroom :
                                <button className="btn mx-3" onClick={handlebathDecrement}><i className="fa fa-minus-square plusminus" ></i>
                                </button>
                                {bathroom}
                                <button className="btn mx-3" onClick={handlebathIncrement}><i className="fa fa-plus-square plusminus"></i>
                                </button>
                            </div>
                            <div class="col-md-12 text-center">
                                <input type="submit" name="btnSubmit" className="btnContact" value="Search" onClick={handlesubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Property
