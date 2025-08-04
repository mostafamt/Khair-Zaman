import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    label: "البيتزا الشرقي",
    children: [
      {
        id: uuidv4(),
        label: "بيتزا جبنه",
        price: 30,
      },
      {
        id: uuidv4(),
        label: "بيتزا سجق",
        price: 30,
      },
      {
        id: uuidv4(),
        label: "بيتزا سوسيس",
        price: 30,
      },
      {
        id: uuidv4(),
        label: "بيتزا بسطرمه",
        price: 40,
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
      },
      {
        id: uuidv4(),
        label: "بيتزا سجق",
        price: 40,
      },
      {
        id: uuidv4(),
        label: "بيتزا سوسيس",
        price: 45,
      },
      {
        id: uuidv4(),
        label: "بيتزا بسطرمه",
        price: 45,
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
      },
      {
        id: uuidv4(),
        label: "فطيره سجق",
        price: 30,
      },
      {
        id: uuidv4(),
        label: "فطيره سوسيس",
        price: 30,
      },
      {
        id: uuidv4(),
        label: "فطيره بسطرمه",
        price: 45,
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
      },
      {
        id: uuidv4(),
        label: "حواوشي سوري",
        price: 40,
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
      },
      {
        id: uuidv4(),
        label: "صاروخ سجق",
        price: 30,
      },
      {
        id: uuidv4(),
        label: "صاروخ بسطرمه",
        price: 30,
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
      },
      {
        id: uuidv4(),
        label: "مربي",
        price: 3,
      },
      {
        id: uuidv4(),
        label: "جبنه قديمه",
        price: 3,
      },
      {
        id: uuidv4(),
        label: "سجق",
        price: 6,
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
      },
      {
        id: uuidv4(),
        label: "فطيره مهلبيه",
        price: 35,
      },
      {
        id: uuidv4(),
        label: "فطيره كاسترد",
        price: 35,
      },
      {
        id: uuidv4(),
        label: "فطيره شيكولاته",
        price: 40,
      },
    ],
  },
];
