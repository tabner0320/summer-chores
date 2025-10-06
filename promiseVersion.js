// promiseVersion.js
// ---------------------------------------------
// Simulates a series of summer chores using Promises
// Each chore returns a Promise that resolves after a delay
// ---------------------------------------------

function mowYard(name) {
  return new Promise((resolve) => {
    console.log(`${name} started mowing the yard...`);
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve();
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} started weed eating the yard...`);
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log(`${name} finished using the weed eater.`);
        resolve();
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} started trimming the hedges...`);
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log(`${name} finished trimming the hedges.`);
        resolve();
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} started collecting wood...`);
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log(`${name} finished collecting wood.`);
        resolve();
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    console.log(`${name} started watering the garden...`);
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log(`${name} finished watering the garden.`);
        resolve();
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

// Master function to chain Promises
// promiseVersion.js

function doSummerChores(name) {
  console.log(`🌞 ${name} is starting their summer chores!\n`);

  mowYard(name)
    .then(() => weedEat(name))
    .then(() => trimHedges(name))
    .then(() => collectWood(name))
    .then(() => waterGarden(name))
    .then(() => {
      console.log(`\n✅ ${name} finished all their chores!`);
    })
    .catch((error) => {
      console.log(`😴 ${error}`);
    });
}


// Test the function
doSummerChores("Theo");
