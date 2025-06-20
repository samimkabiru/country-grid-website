import axios from 'axios';

export default axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  params: {
    fields:
      'name,flags,population,capital,region,borders,nativeName,tld,currencies,languages',
  },
});
