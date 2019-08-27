let alarmsArr = process.argv.slice(2).sort()

for (let alarmTime of alarmsArr) {
  setTimeout(() => process.stdout.write('\x07'), alarmTime * 1000)
}
