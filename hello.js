function solution(n, computers) {
  var answer = 0;
  const visitedComputers = new Array(n).fill(false);

  const dfs = (computer, index) => {
    if (!visitedComputers[index]) {
      visitedComputers[index] = true;

      computer.map((connect, connectIndex) => {
        if (index !== connectIndex && connect === 1) {
          dfs(computers[connectIndex], connectIndex);
        }
      });

      answer++;
    }
  };

  computers.map((computer, computerIndex) => {
    dfs(computer, computerIndex);
  });
  console.log(answer);
  console.log(visitedComputers);
  return answer;
}
