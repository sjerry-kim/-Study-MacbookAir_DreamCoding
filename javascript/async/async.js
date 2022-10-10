// async & await
// clear style of using promise :)


// 1. async : Promise 키워드를 사용하지 않아도 됨ㄴ
async function fetchUser(){ 
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
  await delay(1000);
  return '🍎';
}

async function getBanana(){
  await delay(1000);
  return '🍌';
}

/*
function getBanana(){
  return delay(3000)
  .then(()=>'🍌');
}
*/

async function pickFruits(){
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

/*
function pickFruits(){
  return getApple()
  .then(apple => {
    return getBanana().then(banana =>`${apple} + ${banana}`);
  });
}
*/
pickFruits().then(console.log);

// 3. useful Promise APIs
// 병렬화
function pickAllFruist(){
  return Promise.all([getApple(),getBanana()]) 
  .then(fruits => fruits.join(' + '));
}
pickAllFruist().then(console.log);

// Promise 중에서 가장 먼저 값을 전달하는 것만 반환
function pickOnlyOne(){
  return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);