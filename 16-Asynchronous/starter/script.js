'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
          </div>
        </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');*/


/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data)

    // get neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
}

getCountryAndNeighbour('russia')*/

const request = fetch('https://restcountries.com/v3.1/name/portugal');

/*const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
    console.log(response);
    return response.json();
  }).then(function (data) {
    console.log(data);
    renderCountry(data[0]);
  });
};*/

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMsg} (${response.status})`)
      }
      return response.json();
    });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders;
      if (!neighbour) {
        throw new Error(`There no neighbour found`);
      }
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 😒`);
      renderError(`Something went wrong: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('russia');
// })

//Challenge 1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding (${response.status})`)
      }
      return response.json();
    })
    .then(data => {
      const msgLocation = `You are in ${data.address.city}, ${data.address.country}.`
      console.log(data);
      console.log(msgLocation);
      getCountryData(data.address.country);
    })
    .catch(err => {
      console.error(`${err} 😒`);
    })
}

whereAmI(19.037, 72.873);
whereAmI(29.037, 32.873);
*/

//Event loop example
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i<1000000000; i++) {}
  console.log(res);
});
console.log('Test end');*/

/*const lotteryPromise = new Promise(function (resolve, reject) {

  console.log('Lottery draw is happening')
  setTimeout(function () {
    if(Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You LOSE'))
    }
  }, 2000)
});*/

//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(
    (resolve) => setTimeout(resolve, seconds * 1000)
  );
};

/*
wait(2)
  .then(() => {
  console.log('wait 2')
  return wait(1);
}).then(() => {
  console.log('wait 1')
})*/


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    /*navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );*/
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos))

/*const whereAmI = function () {
  getPosition().then(pos => {
      const {latitude: lat, longitude: lng} = pos.coords;
      return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding (${response.status})`)
      }
      return response.json();
    })
    .then(data => {
      const msgLocation = `You are in ${data.address.city}, ${data.address.country}.`
      console.log(data);
      console.log(msgLocation);
      getCountryData(data.address.country);
    })
    .catch(err => {
      console.error(`${err} 😒`);
    })
}*/

//btn.addEventListener('click', whereAmI);

//Challenge 2
const imagesContainer = document.querySelector('.images');
let currentImage;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.setAttribute('src', imgPath);
    img.addEventListener('load', function () {
      imagesContainer.append(img);
      resolve(img);
    })
    img.addEventListener('error', function () {
      reject(new Error('Image not found'))
    })
  })
}

/*createImage('img/img-1.jpg')
  .then((img) => {
    currentImage = img;
    console.log('img loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((img) => {
    currentImage = img;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    console.log('end')
  })
  .catch(err => console.error(err));*/

const whereAmI = async function () {
  /*fetch(`https://restcountries.com/v3.1/name/${country}`).then(
    res => console.log(res))
  )*/
  try {
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
    if (!resGeo.ok) {
      throw new Error('Problem getting location data');
    }
    const dataGeo = await resGeo.json();

    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);
    const data = await res.json();
    renderCountry(data[0])

    return `You are in ${dataGeo.address.city} `
  } catch (err) {
    console.error(err);
    renderError(`Something wrong ${err.message}`)

    throw err;
  }
}
/*console.log('1');
/!*whereAmI()
  .then(city => )
  .catch(err => )
  .finally(() => console.log('3'))*!/

  (async function () {
    try {
      const city = await whereAmI();
      console.log(`2 ${city} `)
    }catch (err) {
      console.error(`2 ${err.message} 😒`)
    }
    console.log('3')
  })();*/

const get3Countries = async function (c1, c2, c3) {
  try {
    /*const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`, 'Country not found');
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`, 'Country not found');
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`, 'Country not found');
*/const data = await Promise.all([
        getJSON(`https://restcountries.com/v3.1/name/${c1}`, 'Country not found'),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`, 'Country not found'),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`, 'Country not found')
      ]
    )
    console.log(data)
    console.log(data.map(d => d[0].capital[0]))
  } catch (err) {
    console.error(err);
  }

}

get3Countries('poland', 'russia', 'canada');