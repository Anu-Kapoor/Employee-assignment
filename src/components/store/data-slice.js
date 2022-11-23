import { createSlice } from '@reduxjs/toolkit';



// const DUMMY_EMPLOYEES = [
//   {
//     "id": 1001,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=LT&height=120&width=120",
//     "firstName": "Lorena",
//     "lastName": "Towne",
//     "email": "Lorena.Towne@dummyapis.com",
//     "contactNumber": "4965890332",
//     "age": 27,
//     "dob": "1995-10-18",
    
//     "address": "Address1",
//     "target": 40000,
//     "achievedTarget": 50000,
    
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
    
//     "claimedAmount":0,
    
//   },
//   {
//     "id": 1002,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=RM&height=120&width=120",
//     "firstName": "Retha",
//     "lastName": "Mayer",
//     "email": "Retha.Mayer@dummyapis.com",
//     "contactNumber": "4866891192",
//     "age": 52,
//     "dob": "1970-06-04",
//     "address": "Address2",
//     "target": 50000,
//     "achievedTarget": 50000,
    
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
   
//     "claimedAmount":0,
    
//   },
//   {
//     "id": 1003,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=CH&height=120&width=120",
//     "firstName": "Chaya",
//     "lastName": "Harris",
//     "email": "Chaya.Harris@dummyapis.com",
//     "contactNumber": "4143795212",
//     "age": 75,
//     "dob": "1947-01-13",
//     "address": "Address3",
//     "target": 60000,
//     "achievedTarget": 50000,
    
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
    
//     "claimedAmount":0,
   
//   },
//   {
//     "id": 1004,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=CD&height=120&width=120",
//     "firstName": "Cayla",
//     "lastName": "Dare",
//     "email": "Cayla.Dare@dummyapis.com",
//     "contactNumber": "4600596805",
//     "age": 83,
//     "dob": "1939-01-04",
//     "address": "Address4",
//     "target": 55000,
//     "achievedTarget": 50000,
    
//     "salary": 800000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
  
//     "claimedAmount":0,
 
//   },
//   {
//     "id": 1005,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=BC&height=120&width=120",
//     "firstName": "Berneice",
//     "lastName": "Carroll",
//     "email": "Berneice.Carroll@dummyapis.com",
//     "contactNumber": "4316195160",
//     "age": 40,
//     "dob": "1982-02-17",
//     "address": "Address5",
//     "target": 58000,
//     "achievedTarget": 80000,
   
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
   
//     "claimedAmount":0,
  
//   },
//   {
//     "id": 1006,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=LO&height=120&width=120",
//     "firstName": "Lempi",
//     "lastName": "Orn",
//     "email": "Lempi.Orn@dummyapis.com",
//     "contactNumber": "4671695953",
//     "age": 42,
//     "dob": "1980-10-19",
//     "address": "Address6",
//     "target": 45000,
//     "achievedTarget": 50000,
//      "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
    
//     "claimedAmount":0,
 
//   },
//   {
//     "id": 1007,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=MC&height=120&width=120",
//     "firstName": "Maureen",
//     "lastName": "Carter",
//     "email": "Maureen.Carter@dummyapis.com",
//     "contactNumber": "4778998628",
//     "age": 32,
//     "dob": "1990-04-28",
//     "address": "Address7",
//     "target": 50000,
//     "achievedTarget": 50000,
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",

//     "claimedAmount":0,
   
//   },
//   {
//     "id": 1008,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=SH&height=120&width=120",
//     "firstName": "Sonny",
//     "lastName": "Homenick",
//     "email": "Sonny.Homenick@dummyapis.com",
//     "contactNumber": "4290398114",
//     "age": 50,
//     "dob": "1972-10-07",
//     "address": "Address8",
//     "target": 65000,
//     "achievedTarget": 50000,
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
   
//     "claimedAmount":0,
   
//   },
//   {
//     "id": 1009,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=MH&height=120&width=120",
//     "firstName": "Maude",
//     "lastName": "Hodkiewicz",
//     "email": "Maude.Hodkiewicz@dummyapis.com",
//     "contactNumber": "4000792888",
//     "age": 31,
//     "dob": "1991-06-13",
//     "address": "Address9",
//     "target": 68000,
//     "achievedTarget": 50000,
//     "salary": 200000,
//     "policy": "Gold Policy",
//     "Dependents":"family",
  
//     "claimedAmount":0,
  
//   },
//   {
//     "id": 1010,
//     "imageUrl": "https://hub.dummyapis.com/Image?text=SW&height=120&width=120",
//     "firstName": "Sylvia",
//     "lastName": "Wisoky",
//     "email": "Sylvia.Wisoky@dummyapis.com",
//     "contactNumber": "4242097518",
//     "age": 51,
//     "dob": "1971-03-10",
//     "address": "Address10",
//     // "target": 78000,
//     // "achievedTarget": 50000,
//     // "salary": 200000,
//     // "policy": "Gold Policy",
//     // "Dependents":"family",

//     // "claimedAmount":0,
//   }
// ];

const dataSlice = createSlice({
  name: 'EmpDATA',
  initialState: {
    EmpItems: [],
    
    selectedEmployee:null,
  },
 reducers: {

  initiateDummy(state, action) {
    state.EmpItems = action.payload.items;
  },
  mapEmployee(state){
state.EmpItems.map( x => {
  x.target = 40000;
  x.achievedTarget=0;
  x.claimedAmount=0;
  x.Dependents="family";
  x.policy="Gold Policy";
  x.salary=x.salary*100000;
  let [dd, mm, yy]=x.dob.split('/');
  x.dob=(`${yy}-${mm}-${dd}`);

  return x
  })
  },

    editEmployee(state, action) {
      const newData = action.payload;
      const existingItem = state.EmpItems.find((item) => item.id === newData.id);
      if(existingItem)
      { existingItem.firstName = newData.firstName;
        existingItem.lastName = newData.lastName;
        existingItem.email = newData.email;
        existingItem.contactNumber = newData.contactNumber;
        existingItem.age = newData.age;
        existingItem.dob = newData.dob;
        existingItem.address = newData.address;
        existingItem.salary = newData.salary;
        existingItem.target = newData.target;
        existingItem.achievedTarget = newData.achievedTarget;
        existingItem.claimedAmount= newData.claimedAmount;
      }
      else{
        state.EmpItems.push(newData);
      }

    },

    // addEmployee(state, action) {
    //   const newItem = action.payload;
    
    //     state.isAdding = false;
    // },

    deleteEmployee(state, action) {
      const empID = action.payload;
      state.EmpItems = state.EmpItems.filter((item) => item.id !== empID,);  
    },

    setSelectedEmployee(state, action) {
      const empID = action.payload;
     state.selectedEmployee= state.EmpItems.find(employee => employee.id === empID);
     
    },

    // CalculateBonus(state,action){
    //   const newData = action.payload; 
    //   const existingItem = state.EmpItems.find((item) => item.id === newData.id);
    
    //   existingItem.firstName = newData.firstName;
    //   existingItem.lastName = newData.lastName;
    //   existingItem.target = newData.target;
    //   existingItem.bonus = newData.bonus;
    //   existingItem.forecast = newData.forecast;
    //   existingItem.achievedTarget = newData.achievedTarget;
    
    //    },

      //  calculateClaim(state,action){
      //   const newData = action.payload;
      //   const existingItem = state.EmpItems.find((item) => item.id === newData.id);
        
      //   existingItem.salary = newData.salary;
      //   existingItem.totalClaim = newData.totalClaim;
      //   existingItem.claimedAmount = newData.claimedAmount;
      //   existingItem.balanceClaim = newData.balanceClaim;
       
      //    }
  },
});

export const dataSliceActions = dataSlice.actions;

export default dataSlice;
