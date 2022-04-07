const indexModule=(()=>{
  const path=window.location.pathname;

  switch(path){
    case'/':
      document.getElementById('search-btn').addEventListener('click',()=>{
        return serchModule.searchUsers();
      });
      return userModule.fetchAllUsers(); 
    case '/create.html':
      document.getElementById('save-btn').addEventListener('click',()=>{
        return userModule.createUsers();
      })
      document.getElementById('cancel-btn').addEventListener('click',()=>{
        return window.location.href='/'
      })
      break;
      case '/edit.html':
        const uid=window.location.search.split('?uid=')[1];
        document.getElementById('save-btn').addEventListener('click',()=>{
          return userModule.saveUsers(uid);
        })
        document.getElementById('cancel-btn').addEventListener('click',()=>{
          return window.location.href='/'
        })
        document.getElementById('delete-btn').addEventListener('click',()=>{
          return userModule.deleteUsers(uid);
        })
        return userModule.setExistingValue(uid);
    default:
      break;
  }
  
  
})();
