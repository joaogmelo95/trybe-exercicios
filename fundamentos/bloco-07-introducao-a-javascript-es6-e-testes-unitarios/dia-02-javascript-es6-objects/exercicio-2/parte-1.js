

// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const deliverTo = order.name;
  const deliverPhone = order.phoneNumber;
  const deliverAddress = Object.values(order.address);

  return `Olá ${deliveryPerson}, entrega para: ${deliverTo}, Telefone: ${deliverPhone}, R: ${deliverAddress[0]}, Nº: ${deliverAddress[1]}, AP: ${deliverAddress[2]}`;
}

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newDeliverTo = order.name = 'Luiz Silva';
  const newOrderTotal = order.payment.total = 50
  const flavours = Object.keys(order.order.pizza);
  const beverage = order.order.drinks.coke.type;

  return `Olá ${newDeliverTo}, o total do seu pedido de ${flavours[0]}, ${flavours[1]} e ${beverage} é R$ ${newOrderTotal},00.`
}

console.log(orderModifier(order));