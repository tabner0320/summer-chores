// callbackVersion.js
// ---------------------------------------------
// Simulates a series of summer chores using callbacks
// Each chore has a set duration and a random chance of falling asleep
// ---------------------------------------------

// Utility function to generate a random boolean (50% chance by default)
function didStayAwake(chance = 0.8) {
  // 80% chance of staying awake by default
  return Math.random() < chance;
}

// 1️⃣ mowYard
function mowYard(name, callback) {
  console.log(`${name} started mowing the yard...`);
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000); // 2 seconds
}

// 2️⃣ weedEat
function weedEat(name, callback) {
  console.log(`${name} started weed eating the yard...`);
  setTimeout(() => {
    if (didStayAwake()) {
      console.log(`${name} finished using the weed eater.`);
      callback();
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, 1500);
}

// 3️⃣ trimHedges
function trimHedges(name, callback) {
  console.log(`${name} started trimming the hedges...`);
  setTimeout(() => {
    if (didStayAwake()) {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
    }
  }, 1000);
}

// 4️⃣ collectWood
function collectWood(name, callback) {
  console.log(`${name} started collecting wood...`);
  setTimeout(() => {
    if (didStayAwake()) {
      console.log(`${name} finished collecting wood.`);
      callback();
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
    }
  }, 2500);
}

// 5️⃣ waterGarden
function waterGarden(name, callback) {
  console.log(`${name} started watering the garden...`);
  setTimeout(() => {
    if (didStayAwake()) {
      console.log(`${name} finished watering the garden.`);
      callback();
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
    }
  }, 500);
}

// 6️⃣ doSummerChores — wraps the callback chain ("callback hell")
function doSummerChores(name) {
  if (typeof name !== "string") {
    console.log("Please provide a valid name as a string.");
    return;
  }

  console.log(`🌞 ${name} is starting their summer chores!\n`);

  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`\n✅ ${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

// Test the full sequence
doSummerChores("Theo");

