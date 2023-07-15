import fetch from 'node-fetch' // Agragar "type": "module" al package.json

const url = 'https://spotify23.p.rapidapi.com/artist_albums/?id=06HL4z0CvFAxyc27GXpf02&limit=100';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9b77c9a6amsh2b83e467f3fea3cp1f9f10jsnca1cbfc6280c',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const object = {
    "data": {
      "artist": {
        "discography": {
          "albums": {
            "totalCount": 25,
            "items": [
              {
                "releases": {
                  "items": [
                    {
                      "id": "5AEDGbliTTfjOB8TSm1sxt",
                      "uri": "spotify:album:5AEDGbliTTfjOB8TSm1sxt",
                      "name": "Speak Now (Taylor's Version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2023,
                        "isoString": "2023-07-07T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e020b04da4f224b51ff86e0a481",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048510b04da4f224b51ff86e0a481",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2730b04da4f224b51ff86e0a481",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "aVtFU-fRQxqmZCfvtRnGdw",
                        "shareUrl": "https://open.spotify.com/album/5AEDGbliTTfjOB8TSm1sxt?si=aVtFU-fRQxqmZCfvtRnGdw"
                      },
                      "tracks": {
                        "totalCount": 22
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1fnJ7k0bllNfL1kVdNVW1A",
                      "uri": "spotify:album:1fnJ7k0bllNfL1kVdNVW1A",
                      "name": "Midnights (The Til Dawn Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2023,
                        "isoString": "2023-05-26T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02fa747621a53c8e2cc436dee0",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851fa747621a53c8e2cc436dee0",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273fa747621a53c8e2cc436dee0",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "LDruIw_AQImP8x6lbjRaPg",
                        "shareUrl": "https://open.spotify.com/album/1fnJ7k0bllNfL1kVdNVW1A?si=LDruIw_AQImP8x6lbjRaPg"
                      },
                      "tracks": {
                        "totalCount": 23
                      }
                    },
                    {
                      "id": "19O46pvAPG1Xg6fxAuSU5F",
                      "uri": "spotify:album:19O46pvAPG1Xg6fxAuSU5F",
                      "name": "Midnights (The Til Dawn Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2023,
                        "isoString": "2023-05-26T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02092ceed587e44053cd4f89b1",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851092ceed587e44053cd4f89b1",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273092ceed587e44053cd4f89b1",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "GhX-IRrCTHGo0x3cy7sKog",
                        "shareUrl": "https://open.spotify.com/album/19O46pvAPG1Xg6fxAuSU5F?si=GhX-IRrCTHGo0x3cy7sKog"
                      },
                      "tracks": {
                        "totalCount": 23
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "3lS1y25WAhcqJDATJK70Mq",
                      "uri": "spotify:album:3lS1y25WAhcqJDATJK70Mq",
                      "name": "Midnights (3am Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2022,
                        "isoString": "2022-10-22T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02e0b60c608586d88252b8fbc0",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851e0b60c608586d88252b8fbc0",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273e0b60c608586d88252b8fbc0",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "EtZq0i5hTTCemuRaqoIoOA",
                        "shareUrl": "https://open.spotify.com/album/3lS1y25WAhcqJDATJK70Mq?si=EtZq0i5hTTCemuRaqoIoOA"
                      },
                      "tracks": {
                        "totalCount": 20
                      }
                    },
                    {
                      "id": "4894htPwC6zoiuTqUQwn4I",
                      "uri": "spotify:album:4894htPwC6zoiuTqUQwn4I",
                      "name": "Midnights (3am Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2022,
                        "isoString": "2022-10-21T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e024a97c76d7b4f6530f439c249",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048514a97c76d7b4f6530f439c249",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2734a97c76d7b4f6530f439c249",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "83-l4yl9TYGIn78ci9rbUw",
                        "shareUrl": "https://open.spotify.com/album/4894htPwC6zoiuTqUQwn4I?si=83-l4yl9TYGIn78ci9rbUw"
                      },
                      "tracks": {
                        "totalCount": 20
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "151w1FgRZfnKZA9FEcg9Z3",
                      "uri": "spotify:album:151w1FgRZfnKZA9FEcg9Z3",
                      "name": "Midnights",
                      "type": "ALBUM",
                      "date": {
                        "year": 2022,
                        "isoString": "2022-10-21T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02bb54dde68cd23e2a268ae0f5",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851bb54dde68cd23e2a268ae0f5",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "ThVt3fsLRxWe5IQO46UfKg",
                        "shareUrl": "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=ThVt3fsLRxWe5IQO46UfKg"
                      },
                      "tracks": {
                        "totalCount": 13
                      }
                    },
                    {
                      "id": "4moVP48t9bji7djUc5VOvi",
                      "uri": "spotify:album:4moVP48t9bji7djUc5VOvi",
                      "name": "Midnights",
                      "type": "ALBUM",
                      "date": {
                        "year": 2022,
                        "isoString": "2022-10-21T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02427ee2ecbd5e20c63e88c9d2",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851427ee2ecbd5e20c63e88c9d2",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273427ee2ecbd5e20c63e88c9d2",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "GfSaGpWHQKWezoygu3uCyg",
                        "shareUrl": "https://open.spotify.com/album/4moVP48t9bji7djUc5VOvi?si=GfSaGpWHQKWezoygu3uCyg"
                      },
                      "tracks": {
                        "totalCount": 13
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "6kZ42qRrzov54LcAk4onW9",
                      "uri": "spotify:album:6kZ42qRrzov54LcAk4onW9",
                      "name": "Red (Taylor's Version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2021,
                        "isoString": "2021-11-12T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02318443aab3531a0558e79a4d",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851318443aab3531a0558e79a4d",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "UwiXXaYVTbiEFPUgY6mBPw",
                        "shareUrl": "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9?si=UwiXXaYVTbiEFPUgY6mBPw"
                      },
                      "tracks": {
                        "totalCount": 30
                      }
                    },
                    {
                      "id": "6x9s2ObPdpATZgrwxsk9c0",
                      "uri": "spotify:album:6x9s2ObPdpATZgrwxsk9c0",
                      "name": "Red (Taylor's Version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2021,
                        "isoString": "2021-11-12T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02563151cc3a0528d8228998c8",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851563151cc3a0528d8228998c8",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273563151cc3a0528d8228998c8",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "ZxQsGuRtTJuOoC6IQfB2NQ",
                        "shareUrl": "https://open.spotify.com/album/6x9s2ObPdpATZgrwxsk9c0?si=ZxQsGuRtTJuOoC6IQfB2NQ"
                      },
                      "tracks": {
                        "totalCount": 30
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "4hDok0OAJd57SGIT8xuWJH",
                      "uri": "spotify:album:4hDok0OAJd57SGIT8xuWJH",
                      "name": "Fearless (Taylor's Version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2021,
                        "isoString": "2021-04-09T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02a48964b5d9a3d6968ae3e0de",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851a48964b5d9a3d6968ae3e0de",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "s-md7xa0QmGG05-0TxNJEQ",
                        "shareUrl": "https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH?si=s-md7xa0QmGG05-0TxNJEQ"
                      },
                      "tracks": {
                        "totalCount": 26
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "6AORtDjduMM3bupSWzbTSG",
                      "uri": "spotify:album:6AORtDjduMM3bupSWzbTSG",
                      "name": "evermore (deluxe version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2021,
                        "isoString": "2021-01-07T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0290fd9741e1838115cd90b3b6",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485190fd9741e1838115cd90b3b6",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27390fd9741e1838115cd90b3b6",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "7fX37UpZSemjg8Zf-v4LWA",
                        "shareUrl": "https://open.spotify.com/album/6AORtDjduMM3bupSWzbTSG?si=7fX37UpZSemjg8Zf-v4LWA"
                      },
                      "tracks": {
                        "totalCount": 17
                      }
                    },
                    {
                      "id": "1DT6fDJL6AWPJxe7Lq1dPb",
                      "uri": "spotify:album:1DT6fDJL6AWPJxe7Lq1dPb",
                      "name": "evermore (deluxe version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2021,
                        "isoString": "2021-01-07T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02566d7b70ffedb7f2ddce55f4",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851566d7b70ffedb7f2ddce55f4",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273566d7b70ffedb7f2ddce55f4",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "FkWXQngfQaGWjKKMsbDspQ",
                        "shareUrl": "https://open.spotify.com/album/1DT6fDJL6AWPJxe7Lq1dPb?si=FkWXQngfQaGWjKKMsbDspQ"
                      },
                      "tracks": {
                        "totalCount": 17
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "2Xoteh7uEpea4TohMxjtaq",
                      "uri": "spotify:album:2Xoteh7uEpea4TohMxjtaq",
                      "name": "evermore",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-12-11T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0233b8541201f1ef38941024be",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485133b8541201f1ef38941024be",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27333b8541201f1ef38941024be",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "eI1qKDjZQxO9BlF-waOhDQ",
                        "shareUrl": "https://open.spotify.com/album/2Xoteh7uEpea4TohMxjtaq?si=eI1qKDjZQxO9BlF-waOhDQ"
                      },
                      "tracks": {
                        "totalCount": 15
                      }
                    },
                    {
                      "id": "5jmVg7rwRcgd6ARPAeYNSm",
                      "uri": "spotify:album:5jmVg7rwRcgd6ARPAeYNSm",
                      "name": "evermore",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-12-10T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0225751b4b32829d6bbfe6be7f",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485125751b4b32829d6bbfe6be7f",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27325751b4b32829d6bbfe6be7f",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "Vvz4kJ0JRRGHYHmG0u3w2A",
                        "shareUrl": "https://open.spotify.com/album/5jmVg7rwRcgd6ARPAeYNSm?si=Vvz4kJ0JRRGHYHmG0u3w2A"
                      },
                      "tracks": {
                        "totalCount": 15
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "0PZ7lAru5FDFHuirTkWe9Z",
                      "uri": "spotify:album:0PZ7lAru5FDFHuirTkWe9Z",
                      "name": "folklore: the long pond studio sessions (from the Disney+ special) [deluxe edition]",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-11-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02045514e3ed4e1767a7c3ece5",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851045514e3ed4e1767a7c3ece5",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273045514e3ed4e1767a7c3ece5",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "J52kZgJxReigI6VussfVzg",
                        "shareUrl": "https://open.spotify.com/album/0PZ7lAru5FDFHuirTkWe9Z?si=J52kZgJxReigI6VussfVzg"
                      },
                      "tracks": {
                        "totalCount": 34
                      }
                    },
                    {
                      "id": "3VaaZ7OIbGLi60NVsnueoo",
                      "uri": "spotify:album:3VaaZ7OIbGLi60NVsnueoo",
                      "name": "folklore: the long pond studio sessions (from the Disney+ special) [deluxe edition]",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-11-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e024e265291f29fd8686d3dc3b4",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048514e265291f29fd8686d3dc3b4",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2734e265291f29fd8686d3dc3b4",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "LGQFQThBQZ-lvPUxcpOH7g",
                        "shareUrl": "https://open.spotify.com/album/3VaaZ7OIbGLi60NVsnueoo?si=LGQFQThBQZ-lvPUxcpOH7g"
                      },
                      "tracks": {
                        "totalCount": 34
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1pzvBxYgT6OVwJLtHkrdQK",
                      "uri": "spotify:album:1pzvBxYgT6OVwJLtHkrdQK",
                      "name": "folklore (deluxe version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-08-18T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02c288028c2592f400dd0b9233",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851c288028c2592f400dd0b9233",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273c288028c2592f400dd0b9233",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "ZQnkS97TRTSqYQMqjeO6Ag",
                        "shareUrl": "https://open.spotify.com/album/1pzvBxYgT6OVwJLtHkrdQK?si=ZQnkS97TRTSqYQMqjeO6Ag"
                      },
                      "tracks": {
                        "totalCount": 17
                      }
                    },
                    {
                      "id": "7v7pe5vZQPWB5zW0JrKRiw",
                      "uri": "spotify:album:7v7pe5vZQPWB5zW0JrKRiw",
                      "name": "folklore (deluxe version)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-08-17T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e025fce26509342fe7c8f6dad3a",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048515fce26509342fe7c8f6dad3a",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2735fce26509342fe7c8f6dad3a",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "W1P_csKuT5SnJAaCm0jQHg",
                        "shareUrl": "https://open.spotify.com/album/7v7pe5vZQPWB5zW0JrKRiw?si=W1P_csKuT5SnJAaCm0jQHg"
                      },
                      "tracks": {
                        "totalCount": 17
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "2fenSS68JI1h4Fo296JfGr",
                      "uri": "spotify:album:2fenSS68JI1h4Fo296JfGr",
                      "name": "folklore",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-07-24T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0295f754318336a07e85ec59bc",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485195f754318336a07e85ec59bc",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "Awt_qBZhRH-XmqaR21_mfg",
                        "shareUrl": "https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?si=Awt_qBZhRH-XmqaR21_mfg"
                      },
                      "tracks": {
                        "totalCount": 16
                      }
                    },
                    {
                      "id": "0xS0iOtxQRoJvfcFcJA5Gv",
                      "uri": "spotify:album:0xS0iOtxQRoJvfcFcJA5Gv",
                      "name": "folklore",
                      "type": "ALBUM",
                      "date": {
                        "year": 2020,
                        "isoString": "2020-07-24T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02ca0e5b2eeeedc77e6acd4cd0",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851ca0e5b2eeeedc77e6acd4cd0",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273ca0e5b2eeeedc77e6acd4cd0",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "eFS05ZSNTxqkjdIJdZBJbQ",
                        "shareUrl": "https://open.spotify.com/album/0xS0iOtxQRoJvfcFcJA5Gv?si=eFS05ZSNTxqkjdIJdZBJbQ"
                      },
                      "tracks": {
                        "totalCount": 16
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1NAmidJlEaVgA3MpcPFYGq",
                      "uri": "spotify:album:1NAmidJlEaVgA3MpcPFYGq",
                      "name": "Lover",
                      "type": "ALBUM",
                      "date": {
                        "year": 2019,
                        "isoString": "2019-08-23T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851e787cffec20aa2a396a61647",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "Q8ucZKm3QFe6XMcxD44k5Q",
                        "shareUrl": "https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq?si=Q8ucZKm3QFe6XMcxD44k5Q"
                      },
                      "tracks": {
                        "totalCount": 18
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "6DEjYFkNZh67HP7R9PSZvv",
                      "uri": "spotify:album:6DEjYFkNZh67HP7R9PSZvv",
                      "name": "reputation",
                      "type": "ALBUM",
                      "date": {
                        "year": 2017,
                        "isoString": "2017-11-10T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851da5d5aeeabacacc1263c0f4b",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "Ix0KxgtESZqa1Xee0Ykcnw",
                        "shareUrl": "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=Ix0KxgtESZqa1Xee0Ykcnw"
                      },
                      "tracks": {
                        "totalCount": 15
                      }
                    },
                    {
                      "id": "1Hrs3jLGexOvBoaPMoOQYJ",
                      "uri": "spotify:album:1Hrs3jLGexOvBoaPMoOQYJ",
                      "name": "reputation (Big Machine Radio Release Special)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2017,
                        "isoString": "2017-11-10T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02727a2e497acecc218412dfe6",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851727a2e497acecc218412dfe6",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273727a2e497acecc218412dfe6",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "9J6UitELQtK_Qo7pPmtrqg",
                        "shareUrl": "https://open.spotify.com/album/1Hrs3jLGexOvBoaPMoOQYJ?si=9J6UitELQtK_Qo7pPmtrqg"
                      },
                      "tracks": {
                        "totalCount": 31
                      }
                    },
                    {
                      "id": "1MHuZZrGT36cXLxAQ5cLP3",
                      "uri": "spotify:album:1MHuZZrGT36cXLxAQ5cLP3",
                      "name": "Taylor Swift Karaoke: reputation",
                      "type": "ALBUM",
                      "date": {
                        "year": 2018,
                        "isoString": "2018-03-09T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0205fd6906725e3f12544c2d04",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485105fd6906725e3f12544c2d04",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27305fd6906725e3f12544c2d04",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "fPKMsd7DQOaGeXUcGkyXMg",
                        "shareUrl": "https://open.spotify.com/album/1MHuZZrGT36cXLxAQ5cLP3?si=fPKMsd7DQOaGeXUcGkyXMg"
                      },
                      "tracks": {
                        "totalCount": 15
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1MPAXuTVL2Ej5x0JHiSPq8",
                      "uri": "spotify:album:1MPAXuTVL2Ej5x0JHiSPq8",
                      "name": "reputation Stadium Tour Surprise Song Playlist",
                      "type": "ALBUM",
                      "date": {
                        "year": 2017,
                        "isoString": "2017-11-09T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0263d77f99117b28af9f656918",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485163d77f99117b28af9f656918",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27363d77f99117b28af9f656918",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "RJgUVvCzTnGO6FZPc9cy9g",
                        "shareUrl": "https://open.spotify.com/album/1MPAXuTVL2Ej5x0JHiSPq8?si=RJgUVvCzTnGO6FZPc9cy9g"
                      },
                      "tracks": {
                        "totalCount": 46
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "34OkZVpuzBa9y40DCy0LPR",
                      "uri": "spotify:album:34OkZVpuzBa9y40DCy0LPR",
                      "name": "1989 (Deluxe Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2014,
                        "isoString": "2014-10-27T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02332d85510aba3eb28312cfb2",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851332d85510aba3eb28312cfb2",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273332d85510aba3eb28312cfb2",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "MbUOrV__SEi57hFx6GOf5w",
                        "shareUrl": "https://open.spotify.com/album/34OkZVpuzBa9y40DCy0LPR?si=MbUOrV__SEi57hFx6GOf5w"
                      },
                      "tracks": {
                        "totalCount": 19
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "2QJmrSgbdM35R67eoGQo4j",
                      "uri": "spotify:album:2QJmrSgbdM35R67eoGQo4j",
                      "name": "1989",
                      "type": "ALBUM",
                      "date": {
                        "year": 2014,
                        "isoString": "2014-10-27T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e029abdf14e6058bd3903686148",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048519abdf14e6058bd3903686148",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "nIkZ4B1oS_2ta-HMusnAMQ",
                        "shareUrl": "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j?si=nIkZ4B1oS_2ta-HMusnAMQ"
                      },
                      "tracks": {
                        "totalCount": 13
                      }
                    },
                    {
                      "id": "6EsTJnpahwW6xX20zvqQgZ",
                      "uri": "spotify:album:6EsTJnpahwW6xX20zvqQgZ",
                      "name": "1989 (Big Machine Radio Release Special)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2014,
                        "isoString": "2014-10-27T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e020432bfd9e6adb616fd8bcc97",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048510432bfd9e6adb616fd8bcc97",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2730432bfd9e6adb616fd8bcc97",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "WsAOMwQvRVeTfEiY2-BysA",
                        "shareUrl": "https://open.spotify.com/album/6EsTJnpahwW6xX20zvqQgZ?si=WsAOMwQvRVeTfEiY2-BysA"
                      },
                      "tracks": {
                        "totalCount": 26
                      }
                    },
                    {
                      "id": "02H4kc9YLgorpUIREOwa0q",
                      "uri": "spotify:album:02H4kc9YLgorpUIREOwa0q",
                      "name": "Taylor Swift Karaoke: 1989",
                      "type": "ALBUM",
                      "date": {
                        "year": 2014,
                        "isoString": "2014-10-27T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e021aa2d7dad8f5eeb10cceaad0",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048511aa2d7dad8f5eeb10cceaad0",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2731aa2d7dad8f5eeb10cceaad0",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "o-Y54yFUSJ2Z33wj8iKRBg",
                        "shareUrl": "https://open.spotify.com/album/02H4kc9YLgorpUIREOwa0q?si=o-Y54yFUSJ2Z33wj8iKRBg"
                      },
                      "tracks": {
                        "totalCount": 13
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1KlU96Hw9nlvqpBPlSqcTV",
                      "uri": "spotify:album:1KlU96Hw9nlvqpBPlSqcTV",
                      "name": "Red (Deluxe Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2012,
                        "isoString": "2012-10-22T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02a7613d346501b828b56a0bc3",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851a7613d346501b828b56a0bc3",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273a7613d346501b828b56a0bc3",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "XJaIh1BgSNe1EQ4QWMNy1Q",
                        "shareUrl": "https://open.spotify.com/album/1KlU96Hw9nlvqpBPlSqcTV?si=XJaIh1BgSNe1EQ4QWMNy1Q"
                      },
                      "tracks": {
                        "totalCount": 22
                      }
                    },
                    {
                      "id": "4jTYApZPMapg56gRycOn0D",
                      "uri": "spotify:album:4jTYApZPMapg56gRycOn0D",
                      "name": "Red (Big Machine Radio Release Special)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2012,
                        "isoString": "2012-10-22T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e021c248e90c3e569f90aef9dec",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048511c248e90c3e569f90aef9dec",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2731c248e90c3e569f90aef9dec",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "eKbrYAJHRPmhWt7Zr6UBLw",
                        "shareUrl": "https://open.spotify.com/album/4jTYApZPMapg56gRycOn0D?si=eKbrYAJHRPmhWt7Zr6UBLw"
                      },
                      "tracks": {
                        "totalCount": 32
                      }
                    },
                    {
                      "id": "11gfxXxJPd3j6sdWUyEA5S",
                      "uri": "spotify:album:11gfxXxJPd3j6sdWUyEA5S",
                      "name": "Taylor Swift Karaoke: Red",
                      "type": "ALBUM",
                      "date": {
                        "year": 2012,
                        "isoString": "2012-10-22T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e029da4f850e7536e6c32d1dc4c",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048519da4f850e7536e6c32d1dc4c",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2739da4f850e7536e6c32d1dc4c",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "2NmygOMbTbmSe55B4EE4tg",
                        "shareUrl": "https://open.spotify.com/album/11gfxXxJPd3j6sdWUyEA5S?si=2NmygOMbTbmSe55B4EE4tg"
                      },
                      "tracks": {
                        "totalCount": 16
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1EoDsNmgTLtmwe1BDAVxV5",
                      "uri": "spotify:album:1EoDsNmgTLtmwe1BDAVxV5",
                      "name": "Red",
                      "type": "ALBUM",
                      "date": {
                        "year": 2012,
                        "isoString": "2012-10-22T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0296384c98ac4f3e7c2440f5b5",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485196384c98ac4f3e7c2440f5b5",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27396384c98ac4f3e7c2440f5b5",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "N2z-hDmxQ9y2zLKSwzCBBA",
                        "shareUrl": "https://open.spotify.com/album/1EoDsNmgTLtmwe1BDAVxV5?si=N2z-hDmxQ9y2zLKSwzCBBA"
                      },
                      "tracks": {
                        "totalCount": 16
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "6fyR4wBPwLHKcRtxgd4sGh",
                      "uri": "spotify:album:6fyR4wBPwLHKcRtxgd4sGh",
                      "name": "Speak Now World Tour Live",
                      "type": "ALBUM",
                      "date": {
                        "year": 2010,
                        "isoString": "2010-10-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02be4ec62353ee75fa11f6d6f7",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851be4ec62353ee75fa11f6d6f7",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273be4ec62353ee75fa11f6d6f7",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "CJWZKohjSnqlEuilPD_CXw",
                        "shareUrl": "https://open.spotify.com/album/6fyR4wBPwLHKcRtxgd4sGh?si=CJWZKohjSnqlEuilPD_CXw"
                      },
                      "tracks": {
                        "totalCount": 16
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "5EpMjweRD573ASl7uNiHym",
                      "uri": "spotify:album:5EpMjweRD573ASl7uNiHym",
                      "name": "Speak Now (Deluxe Edition)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2010,
                        "isoString": "2010-10-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e022e4ec3175d848eca7b76b07f",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048512e4ec3175d848eca7b76b07f",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2732e4ec3175d848eca7b76b07f",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "QRdMBPu2R1-oSVI4ZwUwNg",
                        "shareUrl": "https://open.spotify.com/album/5EpMjweRD573ASl7uNiHym?si=QRdMBPu2R1-oSVI4ZwUwNg"
                      },
                      "tracks": {
                        "totalCount": 20
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "5MfAxS5zz8MlfROjGQVXhy",
                      "uri": "spotify:album:5MfAxS5zz8MlfROjGQVXhy",
                      "name": "Speak Now",
                      "type": "ALBUM",
                      "date": {
                        "year": 2010,
                        "isoString": "2010-10-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02e11a75a2f2ff39cec788a015",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851e11a75a2f2ff39cec788a015",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273e11a75a2f2ff39cec788a015",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "9ivOvNzPRR2cTbIPDhRMtA",
                        "shareUrl": "https://open.spotify.com/album/5MfAxS5zz8MlfROjGQVXhy?si=9ivOvNzPRR2cTbIPDhRMtA"
                      },
                      "tracks": {
                        "totalCount": 14
                      }
                    },
                    {
                      "id": "75N0Z60SNMQbAPYZuxKgWd",
                      "uri": "spotify:album:75N0Z60SNMQbAPYZuxKgWd",
                      "name": "Speak Now (Big Machine Radio Release Special)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2010,
                        "isoString": "2010-10-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e020ac2865a6b8b6ffecf85ce7d",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048510ac2865a6b8b6ffecf85ce7d",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2730ac2865a6b8b6ffecf85ce7d",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "xeMME0fjRziznCZshYYtqA",
                        "shareUrl": "https://open.spotify.com/album/75N0Z60SNMQbAPYZuxKgWd?si=xeMME0fjRziznCZshYYtqA"
                      },
                      "tracks": {
                        "totalCount": 28
                      }
                    },
                    {
                      "id": "1BdjHo5IR6twMhJDxzlpLt",
                      "uri": "spotify:album:1BdjHo5IR6twMhJDxzlpLt",
                      "name": "Taylor Swift Karaoke: Speak Now",
                      "type": "ALBUM",
                      "date": {
                        "year": 2010,
                        "isoString": "2010-10-25T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02822dcc5a916c1e11a0629759",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851822dcc5a916c1e11a0629759",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273822dcc5a916c1e11a0629759",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "CE3_qlPgQ8WWdSEUte-R5g",
                        "shareUrl": "https://open.spotify.com/album/1BdjHo5IR6twMhJDxzlpLt?si=CE3_qlPgQ8WWdSEUte-R5g"
                      },
                      "tracks": {
                        "totalCount": 14
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "43OpbkiiIxJO8ktIB777Nn",
                      "uri": "spotify:album:43OpbkiiIxJO8ktIB777Nn",
                      "name": "Fearless Platinum Edition",
                      "type": "ALBUM",
                      "date": {
                        "year": 2008,
                        "isoString": "2008-11-11T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0234e5885465afc8a497ac1b7e",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485134e5885465afc8a497ac1b7e",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27334e5885465afc8a497ac1b7e",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "LlceNUcQSCSFZdIO0DR10w",
                        "shareUrl": "https://open.spotify.com/album/43OpbkiiIxJO8ktIB777Nn?si=LlceNUcQSCSFZdIO0DR10w"
                      },
                      "tracks": {
                        "totalCount": 19
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "2dqn5yOQWdyGwOpOIi9O4x",
                      "uri": "spotify:album:2dqn5yOQWdyGwOpOIi9O4x",
                      "name": "Fearless",
                      "type": "ALBUM",
                      "date": {
                        "year": 2008,
                        "isoString": "2008-11-11T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e027b25c072237f29ee50025fdc",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048517b25c072237f29ee50025fdc",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "Xv9gJVAuT_qdOWXc3GTWpA",
                        "shareUrl": "https://open.spotify.com/album/2dqn5yOQWdyGwOpOIi9O4x?si=Xv9gJVAuT_qdOWXc3GTWpA"
                      },
                      "tracks": {
                        "totalCount": 13
                      }
                    },
                    {
                      "id": "3EzFY9Rg0PpbADMth746zi",
                      "uri": "spotify:album:3EzFY9Rg0PpbADMth746zi",
                      "name": "Fearless (Big Machine Radio Release Special)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2008,
                        "isoString": "2008-11-11T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0260cb9332e8c8c7d8e50854b3",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485160cb9332e8c8c7d8e50854b3",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27360cb9332e8c8c7d8e50854b3",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "0vsSyTyMRR-9_2Vk8pvLZg",
                        "shareUrl": "https://open.spotify.com/album/3EzFY9Rg0PpbADMth746zi?si=0vsSyTyMRR-9_2Vk8pvLZg"
                      },
                      "tracks": {
                        "totalCount": 26
                      }
                    },
                    {
                      "id": "6vRfYCQ1mKKfnB6D7R4N5p",
                      "uri": "spotify:album:6vRfYCQ1mKKfnB6D7R4N5p",
                      "name": "Fearless Karaoke",
                      "type": "ALBUM",
                      "date": {
                        "year": 2008,
                        "isoString": "2008-11-11T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02517d624a80d9fc9669cd96c4",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851517d624a80d9fc9669cd96c4",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273517d624a80d9fc9669cd96c4",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "CcgYO30DRNqozmZIS_L3Yw",
                        "shareUrl": "https://open.spotify.com/album/6vRfYCQ1mKKfnB6D7R4N5p?si=CcgYO30DRNqozmZIS_L3Yw"
                      },
                      "tracks": {
                        "totalCount": 13
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "1ycoesYxIFymXWebfmz828",
                      "uri": "spotify:album:1ycoesYxIFymXWebfmz828",
                      "name": "Live From Clear Channel Stripped 2008",
                      "type": "ALBUM",
                      "date": {
                        "year": 2008,
                        "isoString": "2008-06-28T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02c031e8322b3e8684536ed6d0",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851c031e8322b3e8684536ed6d0",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273c031e8322b3e8684536ed6d0",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "u5EfnAe7QEe8Fu14Bc4WkA",
                        "shareUrl": "https://open.spotify.com/album/1ycoesYxIFymXWebfmz828?si=u5EfnAe7QEe8Fu14Bc4WkA"
                      },
                      "tracks": {
                        "totalCount": 8
                      }
                    }
                  ]
                }
              },
              {
                "releases": {
                  "items": [
                    {
                      "id": "7mzrIsaAjnXihW3InKjlC3",
                      "uri": "spotify:album:7mzrIsaAjnXihW3InKjlC3",
                      "name": "Taylor Swift",
                      "type": "ALBUM",
                      "date": {
                        "year": 2006,
                        "isoString": "2006-10-24T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e022f8c0fd72a80a93f8c53b96c",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d000048512f8c0fd72a80a93f8c53b96c",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b2732f8c0fd72a80a93f8c53b96c",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "u9rG9w4wQO2fRizDDTQBzg",
                        "shareUrl": "https://open.spotify.com/album/7mzrIsaAjnXihW3InKjlC3?si=u9rG9w4wQO2fRizDDTQBzg"
                      },
                      "tracks": {
                        "totalCount": 15
                      }
                    },
                    {
                      "id": "2rU7u7C2v5i45MFVxx7xG1",
                      "uri": "spotify:album:2rU7u7C2v5i45MFVxx7xG1",
                      "name": "Taylor Swift (Big Machine Radio Release Special)",
                      "type": "ALBUM",
                      "date": {
                        "year": 2006,
                        "isoString": "2006-10-24T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e0278de0096f5395323490185e6",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000485178de0096f5395323490185e6",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b27378de0096f5395323490185e6",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "FG6RzeZgRyaOPyRRKGVlFA",
                        "shareUrl": "https://open.spotify.com/album/2rU7u7C2v5i45MFVxx7xG1?si=FG6RzeZgRyaOPyRRKGVlFA"
                      },
                      "tracks": {
                        "totalCount": 30
                      }
                    },
                    {
                      "id": "1ymIvQpnPQBj1lGlJRqrFQ",
                      "uri": "spotify:album:1ymIvQpnPQBj1lGlJRqrFQ",
                      "name": "Taylor Swift Karaoke",
                      "type": "ALBUM",
                      "date": {
                        "year": 2006,
                        "isoString": "2006-10-24T00:00:00Z"
                      },
                      "coverArt": {
                        "sources": [
                          {
                            "url": "https://i.scdn.co/image/ab67616d00001e02b5c6df46431b11d01e890005",
                            "width": 300,
                            "height": 300
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d00004851b5c6df46431b11d01e890005",
                            "width": 64,
                            "height": 64
                          },
                          {
                            "url": "https://i.scdn.co/image/ab67616d0000b273b5c6df46431b11d01e890005",
                            "width": 640,
                            "height": 640
                          }
                        ]
                      },
                      "playability": {
                        "playable": true,
                        "reason": "PLAYABLE"
                      },
                      "sharingInfo": {
                        "shareId": "o-hbdTIYTAaktwSNAhWCRw",
                        "shareUrl": "https://open.spotify.com/album/1ymIvQpnPQBj1lGlJRqrFQ?si=o-hbdTIYTAaktwSNAhWCRw"
                      },
                      "tracks": {
                        "totalCount": 14
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    },
    "extensions": []
  }

// const AlbunesNAme = object.data.artist.discography.albums.items[0].releases.items[0].name
// console.log(AlbunesNAme);
// const AlbunesTraks = object.data.artist.discography.albums.items[0].releases.items[0].tracks.totalCount
// console.log(AlbunesTraks);
// const AlbunesUrl= object.data.artist.discography.albums.items[0].releases.items[0].sharingInfo.shareUrl
// console.log(AlbunesUrl);
// const AlbunesImg= object.data.artist.discography.albums.items[0].releases.items[0].coverArt.sources[2].url
// console.log(AlbunesImg);

object.data.artist.discography.albums.totalCount

let view = `
        ${object.data.artist.discography.albums.items.map(album => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${album.releases.items[0].coverArt.sources[2].url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" >
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${album.releases.items[0].name}
                </h3>
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" >
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${album.releases.items[0].tracks.totalCount} Tracks
                </h3>
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" >
                <span aria-hidden="true" class="absolute inset-0"></span>
                See it on spotify: ${album.releases.items[0].sharingInfo.shareUrl} 
                </h3>
            </div>

        </div>
        `).join('')}
        `;

console.log((view));

//////////////////////////////////////////////////////////////////////7

import fetch from 'node-fetch' // Agragar "type": "module" al package.json
const API = 'https://spotify23.p.rapidapi.com/artist_albums/?id=06HL4z0CvFAxyc27GXpf02&limit=100'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9b77c9a6amsh2b83e467f3fea3cp1f9f10jsnca1cbfc6280c',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};




async function fetchData(urlApi){
  const response =  await fetch(urlApi,options)
  const data = await response.json()

  return data
}

/*
Vamo a crar una función que se invoca a sí misma 
Automáticamente se llama a la función
*/

(async () => {

  try {
      const Data = await fetchData(API)
      console.log(Data);

      // CRear template html que itera por cada uno de los elementos que me regresa la solicitud
      let view = `
      ${Data.data.artist.discography.albums.items.map(album => `
      <div class="group relative">
          <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${album.releases.items[0].coverArt.sources[2].url}" alt="" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700" >
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${album.releases.items[0].name}
              </h3>
          </div>
          <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700" >
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${album.releases.items[0].tracks.totalCount} Tracks
              </h3>
          </div>
          <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700" >
              <span aria-hidden="true" class="absolute inset-0"></span>
              See it on spotify: ${album.releases.items[0].sharingInfo.shareUrl} 
              </h3>
          </div>

      </div>
      `).slice(0,4).join()}
      `;

      //Vamos a agregar el nuevo html 
      
  } catch (error) {
      console.log(error);
      // To-do : Un mensaje que el usuario pueda ver, como una ventana i.e
  }


})();