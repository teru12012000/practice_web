//const { application } = require("express");

const userModule=(()=>{
  const BASE_URL="http://localhost:3000/api/v1/users"
  const headers=new Headers();
  headers.set("Content-Type","application/json");
 
  const hundleError=async(res)=>{
    const resJson=await res.json();
    console.log(res.status);
    switch(res.status){
      case 200:
        alert(resJson.message);
        window.location.href="/";
        break;
      case 201:
        alert(resJson.message);
        window.location.href="/";
        break;
      case 400:
        //リクエストのパラメータ間違い
        alert(resJson.error);
        break;
      case 404:
        alert(resJson.error);
        break;
      case 500:
        alert(resJson.error);
        break;
      default:
        alert("何らかのエラーが発生しました.");
        break;
      
    }


    
  }
  return {
    fetchAllUsers:async ()=>{
      const res=await fetch(BASE_URL)//URLの情報を持ってくる
      const users=await res.json()//情報をjsで使える方式に直す
      for(let i=0;i<users.length;i++)
      {
        const user=users[i]
        const body=`<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.profile}</td>
                    <td>${user.date_of_birth}</td>
                    <td>${user.created_at}</td>
                    <td>${user.updated_at}</td>
                    <td><a href="edit.html?uid=${user.id}">編集</a></td>
                    </tr>`//`で囲むことでhtmlを書くことができ$をつけるとjsの世界になる
        document.getElementById('users-list').insertAdjacentHTML('beforeend',body)
      }
    },
    createUsers:async()=>{
      const name=document.getElementById("name").value;
      const profile=document.getElementById("profile").value;
      const dateOfBirth=document.getElementById('date-of-birth').value;

      const body={
        name:name,
        profile:profile,
        date_of_birth:dateOfBirth
      };

      const res =await fetch(BASE_URL,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
      });
      return hundleError(res);
    },
    setExistingValue:async(uid)=>{
      const res=await fetch(BASE_URL+"/"+uid);
      const resJson=await res.json();

      document.getElementById('name').value=resJson.name;
      document.getElementById('profile').value=resJson.profile;
      document.getElementById('date-of-birth').value=resJson.date_of_birth;
    },
    saveUsers:async(uid)=>{
      const name=document.getElementById("name").value;
      const profile=document.getElementById("profile").value;
      const dateOfBirth=document.getElementById('date-of-birth').value;
      const body={
        name:name,
        profile:profile,
        date_of_birth:dateOfBirth
      };

      const res =await fetch(BASE_URL+"/"+uid,{
        method:"PUT",
        headers:headers,
        body:JSON.stringify(body)
      });
      return hundleError(res);
    },
    deleteUsers:async(uid)=>{
      const ret=window.confirm('このユーザーを削除しますか?');
      if(!ret){
        return false;
      }else{
        const res =await fetch(BASE_URL+"/"+uid,{
          method:"DELETE",
          headers:headers,
        });
        return hundleError(res);
      }
    }
  }
})()