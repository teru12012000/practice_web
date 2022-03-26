const indexModule=(()=>{
  document.getElementById('search-btn').addEventListener('click',()=>{
    return serchModule.searchUsers();
  });
  
  return userModule.fetchAllUsers();
})();
