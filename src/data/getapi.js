export const getUser= async()=>{
    const API_URL="https://jsonplaceholder.typicode.com/users"
      try{
  const response = await fetch(API_URL);
  const data = await response.json()
  return data
      }catch(error){
          console.error(error)
      }
  }

