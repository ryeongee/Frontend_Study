// async/await
function delay(n) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(n + 1);
      }, 1000)
    );
  }
  
  async function makeError() {
    const error = new Error();
    error.name = "ValueIsFiveError";
    throw error;
  }
  
  async function increaseAndPrint(n) {
    try {
      // 코드 구현
      while (true){
        n++;
        if (n === 5) {
          await makeError();
          break;
        }
        console.log(n);
        await delay(1000);
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  increaseAndPrint(0);