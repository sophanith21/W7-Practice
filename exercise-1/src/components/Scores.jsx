function Statistic({ courseResult }) {
  let total = 0;
  let numStudent = 0;
  let average, min, max;
  min = courseResult[0].score;
  max = min;
  courseResult.forEach((element) => {
    total += element.score;
    numStudent++;
    if (element.score > max) {
      max = element.score;
    }
    if (element.score < min) {
      min = element.score;
    }
  });
  average = total / numStudent;
  return (
    <div className="statistics">
      <table>
        <thead>
          <tr>
            <th>AVERAGE</th>
            <th>MIN</th>
            <th>MAX</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{average.toPrecision(4)}</td>
            <td>{min}</td>
            <td>{max}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Scores({ courseName, courseResult }) {
  function checkScore(score) {
    if (score < 50) {
      return true;
    }
    return false;
  }
  return (
    <div className="scores">
      <h1>{courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResult.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={checkScore(result.score) ? "warning" : ""}>
                {result.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Statistic courseResult={courseResult} />
    </div>
  );
}
