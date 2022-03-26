const userModule=(()=>{
  const BASE_URL="http://localhost:3000/api/v1/users"

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
                    </tr>`//`で囲むことでhtmlを書くことができ$をつけるとjsの世界になる
        document.getElementById('users-list').insertAdjacentHTML('beforeend',body)
      }
    }
  }
})()