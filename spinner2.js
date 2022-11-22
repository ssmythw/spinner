const times = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700];
const loader = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let loaderCounter = 0;

for (let i = 0; i < times.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${loader[loaderCounter]}   `);
    loaderCounter++;
  }, times[i]);
}
