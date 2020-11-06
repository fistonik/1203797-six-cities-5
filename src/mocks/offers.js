const TYPE = {
  APARTMENT: `Apartment`,
  ROOM: `Private room`,
  HOUSE: `House`,
  HOTEL: `Hotel`,
};

export default [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    type: TYPE.APARTMENT,
    price: 120,
    raiting: 4.1,
    previewImage: `/img/apartment-01.jpg`,
    images: [`/img/apartment-02.jpg`, `/img/apartment-03.jpg`],
    isPremium: true,
    isFavorite: false,
    description: `This is detail description for apartment`,
    rooms: 3,
    maxGuests: 4,
    owner: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: true,
    },
    inside: [`Wi-Fi`, `Baby seat`, `Dishwasher`, `Washing machine`]
  },
  {
    id: 2,
    title: `Супер аппартаменты`,
    type: TYPE.HOTEL,
    price: 150,
    raiting: 3.1,
    previewImage: `/img/apartment-02.jpg`,
    images: [`/img/apartment-02.jpg`, `/img/apartment-03.jpg`],
    isPremium: false,
    isFavorite: false,
    description: `This is detail description for apartment`,
    rooms: 2,
    maxGuests: 3,
    owner: {
      name: `Федор`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: false,
    },
    inside: [`Wi-Fi`, `Kitchen`, `Fridge`, `Washing machine`]
  },
  {
    id: 3,
    title: `Дом - два в одном`,
    type: TYPE.HOUSE,
    price: 235,
    raiting: 4.9,
    previewImage: `/img/apartment-02.jpg`,
    images: [`/img/apartment-02.jpg`, `/img/apartment-03.jpg`],
    isPremium: true,
    isFavorite: true,
    description: `This is detail description for apartment`,
    rooms: 4,
    maxGuests: 7,
    owner: {
      name: `Антон`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: true,
    },
    inside: [`Wi-Fi`, `Towels`, `Baby seat`, `Dishwasher`, `Washing machine`]
  },
  {
    id: 4,
    title: `Квартира в центре`,
    type: TYPE.ROOM,
    price: 90,
    raiting: 4.5,
    previewImage: `/img/apartment-03.jpg`,
    images: [`/img/apartment-02.jpg`, `/img/apartment-03.jpg`],
    isPremium: false,
    isFavorite: true,
    description: `This is detail description for apartment`,
    rooms: 1,
    maxGuests: 2,
    owner: {
      name: `Маргарэт`,
      avatar: `/img/avatar-angelina.jpg`,
      isPro: false,
    },
    inside: [`Wi-Fi`, `Kitchen`, `Fridge`, `Towels`, `Baby seat`, `Dishwasher`, `Washing machine`]
  }
];
