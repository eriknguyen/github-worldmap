import { countries } from './countries.json';

export default {
  getCountries: () => {
    return countries.map(country => {
      return country.name;
    });
  },
  getCountry: name => {
    return countries.find(country => {
      return country.name === name;
    });
  }
};