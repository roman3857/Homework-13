const user = {
  name: "John",
  age: 25,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "John", age: 30, city: "Kyiv" }));

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }

  return bestName;
}

console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));

function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

function getAllPropValues(arr, prop) {
  const result = [];

  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }

  return result;
}

const products = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "orange", price: 300 },
];

console.log(getAllPropValues(products, "name"));

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      total += price * quantity;
    }
  }

  return total;
}

const productsList = [
  { name: "apple", price: 100, quantity: 2 },
  { name: "banana", price: 200, quantity: 3 },
  { name: "apple", price: 100, quantity: 1 },
];

console.log(calculateTotalPrice(productsList, "apple"));

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: Date.now(),
      amount,
      type,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;

    for (const { amount, type: t } of this.transactions) {
      if (t === type) {
        total += amount;
      }
    }

    return total;
  },
};

account.deposit(1000);
account.withdraw(200);
account.deposit(500);

console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
