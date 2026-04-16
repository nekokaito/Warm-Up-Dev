interface Cat {
  name: string;
  age: number;
  gender: "male" | "female";
  ownerInfo: {
    name: string;
    phone: string;
  };
  run?: (i: number) => number;
}

const cat: Cat = {
  name: "Piku",
  age: 21,
  gender: "male",
  ownerInfo: {
    name: "kudus",
    phone: "016308283289",
  },
  run: (i) => {
    return i * i;
  },
};

console.log(cat);
