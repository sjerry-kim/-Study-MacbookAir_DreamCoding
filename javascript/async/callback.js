'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting. 
// 호이스팅 된 이후부터 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행됨
// hoisting: var, function declaration
// asynchronous는 코드가 언제 실행될지 예측할 수 없는 것을 의미함.
console.log('1');
setTimeout(()=>console.log("2"),1000); // setTimeout()은 브라우저 API :asynchronous
console.log('3');

// Q. callback은 언제나 asynchronous로만 사용하나요? -> No
// Synchronous callback
function printImmediately(print){
  print();
}// 함수 선언은 호이스팅 되어 가장 위로 올라감

printImmediately(()=>console.log('hello'));

//Asynchronous callback
function printWithDelay(print,timeout){
  setTimeout(print,timeout);
} // 함수 선언은 호이스팅 되어 가장 위로 올라감

printWithDelay(()=>console.log('async callback'),2000);


// Callback Hell example
class UserStorage{
  loginUser(id,password,onSuccess,onError){
    setTimeout(()=>{
      if(
        (id ==='ellie' && password === 'dream')||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id);
      }else{
        onError(new Error('not found'));
      }
    },2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if(user === 'ellie'){
        onSuccess({name: 'ellie', role:'admin'});
      }else{
        onError(new Error('no access'));
      }
    },1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password, 
  (user)=>{
    userStorage.getRoles(user,
      (userWithRole)=>{
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`)
      },
    error =>{
      console.log(error);
    }
    );
  },
  (error)=>{
    console.log(error);
  }
);