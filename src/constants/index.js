export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const restDay =  {
  id: 1,
  title: "Отдых",
  exercise: [],
  node: null,
}

export const exercises = [
  {
    id: 1,
    title: "Грудь",
    exercise: [
      {
        id: 1,
        title: "Жим штанги лёжа.",
      },
      {
        id: 2,
        title: "Жим гантелей лёжа.",
      },
      {
        id: 3,
        title: "Сведение рук накрест в кроссовере.",
      },
      {
        id: 4,
        title: "Разведение гантелей на скамье.",
      },
      {
        id: 5,
        title: "Отжимание на брусьях.",
      },
      {
        id: 6,
        title: "Отжимание на петлях.",
      },
      {
        id: 7,
        title: "Пуловер.",
      },
    ],
    node: null,
  },
  {
    id: 2,
    title: "Руки",
    node: [
      {
        id: 1,
        title: "Бицепс",
        exercise: [
          {
            id: 1,
            title: "Подъемы гантелей стоя.",
          },
          {
            id: 2,
            title: "Подъемы гантелей сидя.",
          },
          {
            id: 3,
            title: "Молотки.",
          },
          {
            id: 4,
            title: "Подтягивания узким хватом.",
          },
        ],
        node: null,
      },
      {
        id: 2,
        title: "Трицепс",
        exercise: [
          {
            id: 1,
            title: "Жим лежа узким хватом.",
          },
          {
            id: 2,
            title: "Французский жим лежа.",
          },
          {
            id: 3,
            title: "Французский жим стоя.",
          },
          {
            id: 4,
            title: "Отжимания от пола с узкой постановкой рук.",
          },
          {
            id: 5,
            title: "Разгибания рук с гантелей из-за головы.",
          },
          {
            id: 6,
            title: "Брусья.",
          },
        ],
        node: null,
      },
    ],
  },
  {
    id: 3,
    title: "Спина",
    node: [
      {
        id: 1,
        title: "Верх",
        exercise: [
          {
            id: 1,
            title: "Подтягивание широким хватом.",
          },
          {
            id: 2,
            title: "Пуловер.",
          },
        ],
        node: null,
      },
      {
        id: 2,
        title: "Центр",
        exercise: [
          {
            id: 1,
            title: "Тяга грифа к животу.",
          },
          {
            id: 2,
            title: "Подтягивания к груди.",
          },
          {
            id: 3,
            title: "Тяга грифа с угла.",
          },
        ],
        node: null,
      },
      {
        id: 3,
        title: "Низ",
        exercise: [
          {
            id: 1,
            title: "Гиперэкстензия.",
          },
        ],
        node: null,
      },
    ],
  },
  {
    id: 4,
    title: "Плечи",
    node: [
      { id: 1, title: "Перед", exercise: [], node: null },
      { id: 2, title: "Центр", exercise: [], node: null },
      { id: 3, title: "Зад", exercise: [], node: null },
    ],
  },
  {
    id: 5,
    title: "Кор",
    node: [
      { id: 1, title: "Пресс", exercise: [], node: null },
      { id: 2, title: "Зубчатые", exercise: [], node: null },
      { id: 3, title: "Косые", exercise: [], node: null },
    ],
  },
  {
    id: 6,
    title: "Ноги",
    node: [
      { id: 1, title: "Квадрицепс", exercise: [], node: null },
      { id: 2, title: "Бицепс бедра", exercise: [], node: null },
      { id: 3, title: "Икры", exercise: [], node: null },
    ],
  },
];

export const agendaList = [
  {
    weekday: "Wednesday",
    sets: [
      {
        group: 2,
        set: [[1], [4,5]],
      },
      {
        group: 1,
        set: [[3,4,5,6,7]],
      }
    ],
  },
];
