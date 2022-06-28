export default function notExistSample(){
  let name=null;
  console.log("notExist sample1:",typeof name,name);
  if(!name){
    console.log("notExist sample2:","吾輩は猫である。名前は"+name)
  }else{
    console.log("notExist sample3:","吾輩は猫である。名前はまだ"+name)
  }
}