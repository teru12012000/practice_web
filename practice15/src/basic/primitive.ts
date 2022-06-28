export default function primtiveSample(){
  let name: string = 'トラハック';
  console.log("primitve sample 1:",typeof name,name);

  let age:number=28;

  console.log("primitive sample2:" ,typeof age,age);

  let isSingle:boolean=true;
  console.log("primitive sample3:",typeof isSingle,isSingle);

  const isOver20:boolean=age>=20
  console.log("primitive sample4:",typeof isOver20,isOver20);
}