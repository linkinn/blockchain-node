const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1577758927421,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0"
    },
    {
      index: 2,
      timestamp: 1577759181889,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0"
    },
    {
      index: 3,
      timestamp: 1577759304713,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "ef47eb102b7411ea872dad28055e98b9",
          transactionId: "ef535cc02b7411ea872dad28055e98b9"
        },
        {
          amount: 10,
          sender: "FILD3489JNKL39",
          recipient: "TESTJFI445N3K3",
          transactionId: "0ece98d02b7511ea872dad28055e98b9"
        },
        {
          amount: 20,
          sender: "JAID3489JNKL39",
          recipient: "POIIJFI445N3K3",
          transactionId: "1ac4bb102b7511ea872dad28055e98b9"
        },
        {
          amount: 20,
          sender: "LLLD3489JNKL39",
          recipient: "LIIIJFI445N3K3",
          transactionId: "23109a002b7511ea872dad28055e98b9"
        }
      ],
      nonce: 40945,
      hash: "000013af3ad4ca0586d892b18d6daa51e2f933340ef8cca01133328fbd03d317",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      index: 4,
      timestamp: 1577759362830,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "387d5f902b7511ea872dad28055e98b9",
          transactionId: "387dfbd02b7511ea872dad28055e98b9"
        },
        {
          amount: 30,
          sender: "LLLD3489JNKL39",
          recipient: "LIIIJFI445N3K3",
          transactionId: "5634cb902b7511ea872dad28055e98b9"
        },
        {
          amount: 40,
          sender: "LLLD3489JNKL39",
          recipient: "LIIIJFI445N3K3",
          transactionId: "5819df402b7511ea872dad28055e98b9"
        },
        {
          amount: 50,
          sender: "LLLD3489JNKL39",
          recipient: "LIIIJFI445N3K3",
          transactionId: "5997a5a02b7511ea872dad28055e98b9"
        }
      ],
      nonce: 70081,
      hash: "0000130a4eda7ba6d5264ae8e1c8acdee54f72a2c31dbc971db77e6d2be65f81",
      previousBlockHash:
        "000013af3ad4ca0586d892b18d6daa51e2f933340ef8cca01133328fbd03d317"
    }
  ]
};

// bitcoin.createNewBlock(2389, "JKKJIUIHJKKB", "478cec2g1f65gr8");

// bitcoin.createNewTransaction(100, "FILKIJI54846SD558SE", "NASKN5464FDEFEFD");

// bitcoin.createNewBlock(2311, "OIOIOIOIOO545", "78Ndffd56597");

// bitcoin.createNewTransaction(50, "FILKIJI54846SD558SE", "NASKN5464FDEFEFD");
// bitcoin.createNewTransaction(200, "FILKIJI54846SD558SE", "NASKN5464FDEFEFD");
// bitcoin.createNewTransaction(300, "FILKIJI54846SD558SE", "NASKN5464FDEFEFD");

// bitcoin.createNewBlock(7711, "ASSDIOIOO545", "78fdfrgthd56597");

// const previousBlockHash = "548644FDFEJNJK5187FDFD";
// const currentBlockData = [
//   {
//     amount: 10,
//     sender: "JHJHUIe6848",
//     recipient: "687DSDFD548"
//   },
//   {
//     amount: 20,
//     sender: "JHRRGRGRe6848",
//     recipient: "687D8686D548"
//   },
//   {
//     amount: 30,
//     sender: "JHKOPOIIe6848",
//     recipient: "6875656DFD548"
//   }
// ];
// const nonce = 101;

console.log("VALID", bitcoin.chainIsValid(bc1.chain));
