// Promise is a JavaScript object for asynchronous operation.
// Promise는 JS 안에 내장되어있는 오브젝트이다.
// 1. State (상태) : pending -> fulfilled or rejected
// 2. Producer와 Cunsumer의 차이점을 이해

// 1. Producer : Promise 만들기
// when new Promise is created, the executer runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(()=>{
    //resolve('ellie');
    reject(new Error('no network')); // 실행중 문제가 발생했을 때 : reject함수 호출
  },2000)
});

// 2. Consumer : then, catch, finally
promise.then((value)=>{
  console.log(value);
})
// reject가 반환된 promise에서 then을 사용했을 때 Uncaugth 에러 
// : then은 성공한 것만 다루기 그래서 실패를 못 잡음 = uncaught
// 이것을 바로 잡아서 위리가 원하는 Error 객체를 출력하기 위해서는 catch를 이용
.catch(error =>{
  console.log(error);
})
// 여기서 catch는 then에서 return된 promise를 캐치함. -> chaining
.finally(()=>{
  console.log("finally");
});
// 최근에 추가되어진 finally는 성공, 실패 여부와 상관 없이 무조건 마지막에 호출되어짐

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject)=>{
  setTimeout(()=> resolve(num - 1), 1000);
  });
})
.then(num => console.log(num)); // 5

// 4. Error Handling
const getHen = () =>
  new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('🐓'),1000)
  });
const getEgg = hen =>
  new Promise((resolve,reject)=>{
    setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)),1000)
  });
const cook = egg =>
  new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${egg} => 🍳`),1000)
  });

  /*
  getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));
  // 아래와 같이 생략해서 사용할 수도 있음
  */

  getHen()
  .then(getEgg)
  .catch(error =>{
    return '🍞'; 
    // 에러 빵꾸처리 : 에러 난 곳에 바로 catch를 넣어주면, 달걀은 못 가져와도 완성 요리가 무사히 출력됨
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);