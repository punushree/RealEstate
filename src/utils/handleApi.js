import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}

export const fetchdefault= async (optionsdefault) => {
    let data;
    await  axios.request(optionsdefault).then(function (response) {
        data=response.data;
    }).catch(function (error) {
        console.error(error);
         
    });

    return data;

      
  }

export const fetchlocation= async () => {
    let data;

    const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/auto-complete',
        params: { query: 'abu dhabi', hitsPerPage: '25', page: '0', lang: 'en' },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };

    await axios.request(options).then(function (response) {
        data=response.data;

    }).catch(function (error) {
        console.error(error);
    });
    return data;

  }

  export const fetchSubmit= async (optionssubmit) => {
    let data;
    await axios.request(optionssubmit).then(function (response) {
        console.log(response.data);
        data= response.data;

    }).catch(function (error) {
        console.error(error);
    });
    return data;

  }
  export const fetchSingle= async (optionssubmit) => {
    let data;

    await    axios.request(optionssubmit).then(function (response) {
      console.log(response.data);
      data= response.data;

  }).catch(function (error) {
      console.error(error);
  });
    return data;

  }