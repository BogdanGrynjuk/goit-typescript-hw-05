// Task#1

function getPromise(): Promise<Array<string | number>>  {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

// Task#2

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const topObject = { name: 'TopName', color: 'red' };
const bottomObject = { position: 1, weight: 100 };
console.log(compare(topObject, bottomObject));

// Task#3

function merge <T extends object, U extends object>(objA: T, objB: U): T & U{
  return Object.assign(objA, objB);
};

const objA = { firstName: "Bogdan" };
const objB = { lastName: "Grynjuk" };
console.log(merge(objA, objB));

// Task#4

interface IProps {
  title: string;
};

class Component <T>{
  constructor(public props: T) { };
};

class Page extends Component<IProps> {
  pageInfo (): void {
    console.log(this.props.title);
  };
};

const props: IProps = { title: "My Page" };
const myPage = new Page(props);
myPage.pageInfo();



