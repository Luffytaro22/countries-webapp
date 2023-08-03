import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getRegions } from '../redux/home/regionSlice';
import store from '../redux/store';

const mockAxios = new MockAdapter(axios);

it('should update the state on successful API call', async () => {
  const region = 'Asia';
  const mockedResponse = { data: [{ 
      "alpha2code": "AF",
      "alpha3code": "AFG",
      "alt_spellings": [
        "AF",
        "Af\u0121\u0101nist\u0101n"
      ],
      "area": 652230.0,
      "borders": [
        "IRN",
        "PAK",
        "TKM",
        "UZB",
        "TJK",
        "CHN"
      ],
      "calling_codes": [
        "93"
      ],
      "capital": "Kabul",
      "currencies": [
        {
          "code": "AFN",
          "name": "Afghan afghani",
          "symbol": "\u060b"
        }
      ],
      "demonym": "Afghan",
      "flag": "http://assets.promptapi.com/flags/AF.svg",
      "gini": 27.8,
      "languages": [
        {
          "iso639_1": "ps",
          "iso639_2": "pus",
          "name": "Pashto",
          "native_name": "\u067e\u069a\u062a\u0648"
        },
        {
          "iso639_1": "uz",
          "iso639_2": "uzb",
          "name": "Uzbek",
          "native_name": "O\u02bbzbek"
        },
        {
          "iso639_1": "tk",
          "iso639_2": "tuk",
          "name": "Turkmen",
          "native_name": "T\u00fcrkmen"
        }
      ],
      "latitude": 33.0,
      "longitude": 65.0,
      "name": "Afghanistan",
      "native_name": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
      "numeric_code": "004",
      "population": 27657145,
      "region": "Asia",
      "regional_blocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "subregion": "Southern Asia",
      "timezones": [
        "UTC+04:30"
      ],
      "top_level_domains": [
        ".af"
      ]
  }]};

  const result = { data: [{ 
    "alpha2code": "AF",
    "alpha3code": "AFG",
    "alt_spellings": [
      "AF",
      "Af\u0121\u0101nist\u0101n"
    ],
    "area": 652230.0,
    "borders": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ],
    "calling_codes": [
      "93"
    ],
    "capital": "Kabul",
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "\u060b"
      }
    ],
    "demonym": "Afghan",
    "flag": "http://assets.promptapi.com/flags/AF.svg",
    "gini": 27.8,
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "native_name": "\u067e\u069a\u062a\u0648"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "native_name": "O\u02bbzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "native_name": "T\u00fcrkmen"
      }
    ],
    "latitude": 33.0,
    "longitude": 65.0,
    "name": "Afghanistan",
    "native_name": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
    "numeric_code": "004",
    "population": 27657145,
    "region": "Asia",
    "regional_blocs": [
      {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation"
      }
    ],
    "subregion": "Southern Asia",
    "timezones": [
      "UTC+04:30"
    ],
    "top_level_domains": [
      ".af"
    ],
    flagName: 'https://flagcdn.com/af.svg',
  }]};
  mockAxios.onGet('https://api.apilayer.com/geo/country/region/Asia').reply(200, mockedResponse.data);

  await store.dispatch(getRegions(region));

  expect(store.getState().detailRegions.region[region]).toEqual(result.data);
});
