import { v4 as uuidv4 } from "uuid";

export const menu = [
  {
    id: uuidv4(),
    label: "البيتزا الشرقي",
    children: [
      {
        id: uuidv4(),
        label: "بيتزا جبنه",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "بيتزا سجق",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "بيتزا سوسيس",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "بيتزا بسطرمه",
        price: 40,
        checked: false,
        count: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    label: "البيتزا الايطالي",
    children: [
      {
        id: uuidv4(),
        label: "بيتزا جبنه",
        price: 40,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "بيتزا سجق",
        price: 40,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "بيتزا سوسيس",
        price: 45,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "بيتزا بسطرمه",
        price: 45,
        checked: false,
        count: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    label: "الفطير الحادق",
    children: [
      {
        id: uuidv4(),
        label: "فطيره جبنه",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "فطيره سجق",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "فطيره سوسيس",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "فطيره بسطرمه",
        price: 45,
        checked: false,
        count: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    label: "حواوشي",
    children: [
      {
        id: uuidv4(),
        label: "حواوشي اسكندراني",
        price: 15,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "حواوشي سوري",
        price: 40,
        checked: false,
        count: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    label: "الصاروخ",
    children: [
      {
        id: uuidv4(),
        label: "صاروخ جبنه",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "صاروخ سجق",
        price: 30,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "صاروخ بسطرمه",
        price: 30,
        checked: false,
        count: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    label: "الفطائر",
    children: [
      {
        id: uuidv4(),
        label: "سكر",
        price: 3,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "مربي",
        price: 3,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "جبنه قديمه",
        price: 3,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "سجق",
        price: 6,
        checked: false,
        count: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    label: "الفطير الحلو",
    children: [
      {
        id: uuidv4(),
        label: "فطيره بسبوسة",
        price: 35,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "فطيره مهلبيه",
        price: 35,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "فطيره كاسترد",
        price: 35,
        checked: false,
        count: 1,
      },
      {
        id: uuidv4(),
        label: "فطيره شيكولاته",
        price: 40,
        checked: false,
        count: 1,
      },
    ],
  },
];

export const changeOrder = (order, categoryId, itemId, count, checked) => {
  const newOrder = order.map((category) => {
    if (category.id === categoryId) {
      const newChildren = category?.children?.map((item) => {
        if (item.id === itemId) {
          item.count = count >= 0 ? count : 1;
          item.checked = checked;
        }
        return item;
      });
      category = { ...category, children: newChildren };
    }
    return category;
  });
  return newOrder;
};

export const sumOfItems = (order) => {
  let sum = 0;
  order.forEach((category) => {
    category?.children?.forEach((item) => {
      sum += item.checked ? item.count : 0;
    });
  });
  return sum;
};
