import categoryItems from '@/sections/Categories/categoryItems'

const collectionItems = [
  {
    isActive: true,
    title: 'Movies & Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },


          {
            title: 'Action 1',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },


          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },


          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        }
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Grand Blue',
            imgSrc: '/src/assets/images/movies/trending-now/1.jpg',
            duration: '1h 40min',
            views: '124K'
          },
          {
            title: 'Gnosia',
            imgSrc: '/src/assets/images/movies/trending-now/2.jpg',
            duration: '2h 30min',
            views: '115K'
          },
          {
            title: 'Solo Leveling',
            imgSrc: '/src/assets/images/movies/trending-now/3.jpg',
            duration: '2h 10min',
            views: '101K'
          },
          {
            title: 'The Apothecary Diaries',
            imgSrc: '/src/assets/images/movies/trending-now/4.jpg',
            duration: '2h 25min',
            views: '131K'
          },
          {
            title: 'Alya Sometimes Hides Her Feelings in Russian',
            imgSrc: '/src/assets/images/movies/trending-now/5.jpg',
            duration: '2h 15min',
            views: '88K'
          },

          {
            title: 'Grand Blue',
            imgSrc: '/src/assets/images/movies/trending-now/1.jpg',
            duration: '1h 40min',
            views: '124K'
          },
          {
            title: 'Gnosia',
            imgSrc: '/src/assets/images/movies/trending-now/2.jpg',
            duration: '2h 30min',
            views: '115K'
          },
          {
            title: 'Solo Leveling',
            imgSrc: '/src/assets/images/movies/trending-now/3.jpg',
            duration: '2h 10min',
            views: '101K'
          },
          {
            title: 'The Apothecary Diaries',
            imgSrc: '/src/assets/images/movies/trending-now/4.jpg',
            duration: '2h 25min',
            views: '131K'
          },
          {
            title: 'Alya Sometimes Hides Her Feelings in Russian',
            imgSrc: '/src/assets/images/movies/trending-now/5.jpg',
            duration: '2h 15min',
            views: '88K'
          },

          {
            title: 'Grand Blue',
            imgSrc: '/src/assets/images/movies/trending-now/1.jpg',
            duration: '1h 40min',
            views: '124K'
          },
          {
            title: 'Gnosia',
            imgSrc: '/src/assets/images/movies/trending-now/2.jpg',
            duration: '2h 30min',
            views: '115K'
          },
          {
            title: 'Solo Leveling',
            imgSrc: '/src/assets/images/movies/trending-now/3.jpg',
            duration: '2h 10min',
            views: '101K'
          },
          {
            title: 'The Apothecary Diaries',
            imgSrc: '/src/assets/images/movies/trending-now/4.jpg',
            duration: '2h 25min',
            views: '131K'
          },
          {
            title: 'Alya Sometimes Hides Her Feelings in Russian',
            imgSrc: '/src/assets/images/movies/trending-now/5.jpg',
            duration: '2h 15min',
            views: '88K'
          },

        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Your forma',
            imgSrc: '/src/assets/images/movies/new-releases/1.jpg',
            released: {
              label: '02 April 2026',
              dateTime: '2026-04-02',
            }
          },
          {
            title: 'BLEACH: Thousand-Year Blood War - The Calamity',
            imgSrc: '/src/assets/images/movies/new-releases/2.jpg',
            released: {
              label: '25 July 2026',
              dateTime: '2026-07-25',
            }
          },
          {
            title: 'Smoking Behind the Supermarket with You',
            imgSrc: '/src/assets/images/movies/new-releases/3.jpg',
            released: {
              label: '10 July 2026',
              dateTime: '2026-07-10',
            }
          },
          {
            title: 'Mebius Dust',
            imgSrc: '/src/assets/images/movies/new-releases/4.jpg',
            released: {
              label: '09 July 2026',
              dateTime: '2026-07-09',
            }
          },

          {
            title: 'Your forma',
            imgSrc: '/src/assets/images/movies/new-releases/1.jpg',
            released: {
              label: '02 April 2026',
              dateTime: '2026-04-02',
            }
          },
          {
            title: 'BLEACH: Thousand-Year Blood War - The Calamity',
            imgSrc: '/src/assets/images/movies/new-releases/2.jpg',
            released: {
              label: '25 July 2026',
              dateTime: '2026-07-25',
            }
          },
          {
            title: 'Smoking Behind the Supermarket with You',
            imgSrc: '/src/assets/images/movies/new-releases/3.jpg',
            released: {
              label: '10 July 2026',
              dateTime: '2026-07-10',
            }
          },
          {
            title: 'Mebius Dust',
            imgSrc: '/src/assets/images/movies/new-releases/4.jpg',
            released: {
              label: '09 July 2026',
              dateTime: '2026-07-09',
            }
          },

          {
            title: 'Your forma',
            imgSrc: '/src/assets/images/movies/new-releases/1.jpg',
            released: {
              label: '02 April 2026',
              dateTime: '2026-04-02',
            }
          },
          {
            title: 'BLEACH: Thousand-Year Blood War - The Calamity',
            imgSrc: '/src/assets/images/movies/new-releases/2.jpg',
            released: {
              label: '25 July 2026',
              dateTime: '2026-07-25',
            }
          },
          {
            title: 'Smoking Behind the Supermarket with You',
            imgSrc: '/src/assets/images/movies/new-releases/3.jpg',
            released: {
              label: '10 July 2026',
              dateTime: '2026-07-10',
            }
          },
          {
            title: 'Mebius Dust',
            imgSrc: '/src/assets/images/movies/new-releases/4.jpg',
            released: {
              label: '09 July 2026',
              dateTime: '2026-07-09',
            }
          },

          {
            title: 'Your forma',
            imgSrc: '/src/assets/images/movies/new-releases/1.jpg',
            released: {
              label: '02 April 2026',
              dateTime: '2026-04-02',
            }
          },
          {
            title: 'BLEACH: Thousand-Year Blood War - The Calamity',
            imgSrc: '/src/assets/images/movies/new-releases/2.jpg',
            released: {
              label: '25 July 2026',
              dateTime: '2026-07-25',
            }
          },
          {
            title: 'Smoking Behind the Supermarket with You',
            imgSrc: '/src/assets/images/movies/new-releases/3.jpg',
            released: {
              label: '10 July 2026',
              dateTime: '2026-07-10',
            }
          },
          {
            title: 'Mebius Dust',
            imgSrc: '/src/assets/images/movies/new-releases/4.jpg',
            released: {
              label: '09 July 2026',
              dateTime: '2026-07-09',
            }
          },

        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Naruto',
            imgSrc: '/src/assets/images/movies/must-watch-movies/1.jpg',
            duration: '8h 50min',
            rating: {
              value: 4.5,
              label: '26K',
            }
          },
          {
            title: 'Attack on Titan',
            imgSrc: '/src/assets/images/movies/must-watch-movies/2.jpg',
            duration: '4h 57min',
            rating: {
              value: 4,
              label: '40K',
            }
          },
          {
            title: 'ONE PIECE',
            imgSrc: '/src/assets/images/movies/must-watch-movies/3.jpg',
            duration: '17h 20min',
            rating: {
              value: 4.5,
              label: '61K',
            }
          },
          {
            title: 'A Silent Voice',
            imgSrc: '/src/assets/images/movies/must-watch-movies/4.jpg',
            duration: '1h 55min',
            rating: {
              value: 5,
              label: '39K',
            }
          },
          {
            title: 'Naruto',
            imgSrc: '/src/assets/images/movies/must-watch-movies/1.jpg',
            duration: '8h 50min',
            rating: {
              value: 4.5,
              label: '26K',
            }
          },
          {
            title: 'Attack on Titan',
            imgSrc: '/src/assets/images/movies/must-watch-movies/2.jpg',
            duration: '4h 57min',
            rating: {
              value: 4,
              label: '40K',
            }
          },
          {
            title: 'ONE PIECE',
            imgSrc: '/src/assets/images/movies/must-watch-movies/3.jpg',
            duration: '17h 20min',
            rating: {
              value: 4.5,
              label: '61K',
            }
          },
          {
            title: 'A Silent Voice',
            imgSrc: '/src/assets/images/movies/must-watch-movies/4.jpg',
            duration: '1h 55min',
            rating: {
              value: 5,
              label: '39K',
            }
          },
          {
            title: 'Naruto',
            imgSrc: '/src/assets/images/movies/must-watch-movies/1.jpg',
            duration: '8h 50min',
            rating: {
              value: 4.5,
              label: '26K',
            }
          },
          {
            title: 'Attack on Titan',
            imgSrc: '/src/assets/images/movies/must-watch-movies/2.jpg',
            duration: '4h 57min',
            rating: {
              value: 4,
              label: '40K',
            }
          },
          {
            title: 'ONE PIECE',
            imgSrc: '/src/assets/images/movies/must-watch-movies/3.jpg',
            duration: '17h 20min',
            rating: {
              value: 4.5,
              label: '61K',
            }
          },
          {
            title: 'A Silent Voice',
            imgSrc: '/src/assets/images/movies/must-watch-movies/4.jpg',
            duration: '1h 55min',
            rating: {
              value: 5,
              label: '39K',
            }
          },
          {
            title: 'Naruto',
            imgSrc: '/src/assets/images/movies/must-watch-movies/1.jpg',
            duration: '8h 50min',
            rating: {
              value: 4.5,
              label: '26K',
            }
          },
          {
            title: 'Attack on Titan',
            imgSrc: '/src/assets/images/movies/must-watch-movies/2.jpg',
            duration: '4h 57min',
            rating: {
              value: 4,
              label: '40K',
            }
          },
          {
            title: 'ONE PIECE',
            imgSrc: '/src/assets/images/movies/must-watch-movies/3.jpg',
            duration: '17h 20min',
            rating: {
              value: 4.5,
              label: '61K',
            }
          },
          {
            title: 'A Silent Voice',
            imgSrc: '/src/assets/images/movies/must-watch-movies/4.jpg',
            duration: '1h 55min',
            rating: {
              value: 5,
              label: '39K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }
        }
      },
    ]
  },
]

export default collectionItems