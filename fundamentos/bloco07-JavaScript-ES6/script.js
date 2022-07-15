/* const order = {
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

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const endereco = order.address;
    const entregador = order.order.delivery.deliveryPerson;
    const nome = order.name;
    const telefone = order.phoneNumber;
    const rua = order.address.street;
    const numero = order.address.number;
    const apartamento = order.address.apartment;

    console.log(`Olá ${entregador}, entrega para: ${nome}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, APT: ${apartamento}`)
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoNome = order.name = 'Luís Silva';
    const novoPedido = order.payment.total = '50';
    const pizzas = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const total = order.payment.total;

    console.log(`Olá ${novoNome}, o total do seu pedido de ${pizzas} e ${bebida} é de R$ ${total},00.`)

}

orderModifier(order);
 */


// parte 3

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionandoTurno = (objeto, chave, valor) => {
    objeto[chave] = valor
  }

  adicionandoTurno(lesson2, 'turno', 'noite');
  console.log(lesson2)

  const listaObj = (objeto) => Object.keys(objeto);
  
  console.log(listaObj(lesson1))

  const tamanhoObj = (objeto) => Object.keys(objeto).length;

  console.log(tamanhoObj(lesson1));

  const valoresObj = (objeto) => Object.values(objeto);

  console.log(valoresObj(lesson1));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  const numeroTotalDeAlunos = (objeto) => {
    let total = 0;

    const array = Object.keys(objeto);

    for (index in array) {
        total += objeto[array[index]].numeroEstudantes;
    }
    return total;
  }
  console.log(numeroTotalDeAlunos(allLessons))

  const valorDoNumero = (obj, number) => Object.values(obj)[number];

  console.log(valorDoNumero(lesson1, 2));

  const verificaParDeChaves = (obj, chave, valor) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (index in arr) {
        if (arr[index][0] === chave && arr[index][1] === valor) {            
        }
    }
    return isEqual
  };

  console.log(verificaParDeChaves(lesson2,'professor','Carlos'));