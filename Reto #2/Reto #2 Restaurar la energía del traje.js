function balanceEnergy(energy) {
  let totalEnergy = 0;
  for (let i = 0; i < energy.length; i++) {
    totalEnergy = totalEnergy + energy[i];
  }
  let targetLevel = Math.floor(totalEnergy / energy.length);
  let balanced = [];

  for (let i = 0; i < energy.length; i++) {
    balanced.push(targetLevel);
  }

  let totalUsed = targetLevel * energy.length;
  let leftover = totalEnergy - totalUsed;
  return { balanced: balanced, leftover: leftover };
}
