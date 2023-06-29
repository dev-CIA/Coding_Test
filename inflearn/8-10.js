function solution(m, arr) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push([...tmp].join(" "));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (L === 0) tmp = Array.from({ length: m }, () => 0);
      if (tmp.includes(arr[i])) continue;

      tmp[L] = arr[i];
      DFS(L + 1);
    }
  }

  DFS(0);
  answer.push(answer.length);
  answer = answer.join("\n");
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

/**
 * function solution(m, arr){         
                let answer=[];
                n=arr.length;
                let ch=Array.from({length:n}, ()=>0);
                let tmp=Array.from({length:m}, ()=>0);;
                function DFS(L){
                    if(L===m){
                        answer.push(tmp.slice()); 
                    }
                    else{
                        for(let i=0; i<n; i++){
                            if(ch[i]===0){
                                ch[i]=1;
                                tmp[L]=arr[i];
                                DFS(L+1);
                                ch[i]=0;
                            }
                        }
                    }
                }
                DFS(0);
                return answer;
            }
 */
