import { REALTIME_DATABASE_URL } from '../../constants/firebase/index';
import { personstypes } from '../types/index';

const { GET_PERSONS, ADD_PERSONS } = personstypes;

export const getPersons = (id) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/persons.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const test = Object.keys(data).map(key => data[key]);
      const filterPerson = test.filter(item => item.id === id)
      dispatch({
        type: GET_PERSONS,
        persons: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const addPerson = (names, mailp, mails, phone, phones, face, insta, link, address, city, country, coords, photo) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/persons.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          names: names,
          mailp: mailp.toLowerCase(),
          mails: mails.toLowerCase(),
          phone: phone,
          phones: phones,
          face: 'https:www.facebook.com/'+face.toLowerCase(),
          insta:'https://www.instagram.com/'+insta.toLowerCase(),
          link: 'https://www.linkedin.com/in/'+link.toLowerCase(),
          address: address,
          city: city,
          country: country,
          coords: coords,
          photo: photo,
        })
      });
      console.log(names, mailp, mails, phone, phones, face, insta, link, address, city, country, coords, photo);
      dispatch({
        type: ADD_PERSONS,
        names: names,
        mailp: mailp.toLowerCase(),
        mails: mails.toLowerCase(),
        phone: phone,
        phones: phones,
        face: 'https:www.facebook.com/' + face.toLowerCase(),
        insta: 'https://www.instagram.com/' + insta.toLowerCase(),
        link: 'https://www.linkedin.com/in/' + link.toLowerCase(),
        address: address,
        city: city,
        country: country,
        coords: coords,
        photo: photo,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
