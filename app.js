setTimeout(function() {
  console.log("첫번째 함수");
  setTimeout(function() {
    console.log("두번째 함수");
    setTimeout(function() {
      console.log("세번째 함수");
    }, 1000);
  }, 1000);
}, 1000);