import axios from 'axios';
axios.defaults.baseUrl="localhost";

const apiUrl = "https://localhost:7271"
const { interceptResponse } = require('intercept-response');
 

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(task)=>{
    console.log('addTask', task)
    const result=await axios.post(`/items`,{name:task,isComplete:false}).then(function(response){
      console.log(response);
      return result.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  setCompleted: async(id, isComplete)=>{
    //console.log('setCompleted', {id, isComplete})
    await axios.put(`/items/${id}?isComplete=${isComplete}`).then(function(response){
    console.log(response);
    return result.data;
  })
  .catch(function(error) {
    console.log(error);
  });
  },

  deleteTask:async()=>{
  //  console.log('deleteTask')
  const result=await axios.delete(`items/${id}`).then(function(response){
    console.log(response);
    return result.data;
  })
  .catch(function(error) {
    console.log(error);
  });
  }
};
