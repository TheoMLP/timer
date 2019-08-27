let alarmsArr = process.argv.slice(2).sort();

for (let alarmTime of alarmsArr) {
  if (typeof(alarmTime) !== NaN && alarmTime >= 0) {
    setTimeout(() => process.stdout.write('\x07'), alarmTime * 1000);
  }
};
