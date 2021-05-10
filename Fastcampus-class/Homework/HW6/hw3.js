  /*
    Q4) 숫자 n을 입력받아 삼각형 모양의 문자를 "출력"하는 printTriangle 함수를 완성해주세요. (15점)
    제한사항: n은 2이상, 10 이하의 양수입니다.
  
    n = 2일 때 아래와 같이 출력
    *
    **
  
    n = 10일 때 아래와 같이 출력
    *
    **
    ***
    ****
    *****
    ******
    *******
    ********
    *********
    **********
  */
    function printInvertedTriangle(n) {
      if (n >= 2 && n <= 10) {

        for (let i = n; i > 0; i--) {
          let blank = "";    
          console.log(blank + "* ".repeat(i));
          blank += " ";
        }
      }
      // do something
    }
    
    printInvertedTriangle(2);
    printInvertedTriangle(10);