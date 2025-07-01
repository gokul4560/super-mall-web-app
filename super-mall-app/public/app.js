const auth = firebase.auth();
const db = firebase.database();

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Signed up successfully!");
      showContent();
    })
    .catch(err => alert("Sign Up Error: " + err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      showContent();
    })
    .catch(err => alert("Login Error: " + err.message));
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      alert("Logged in with Google!");
      showContent();
    })
    .catch(err => alert("Google Login Error: " + err.message));
}

function logout() {
  auth.signOut()
    .then(() => {
      alert("Logged out.");
      document.getElementById("login").style.display = 'block';
      document.getElementById("content").style.display = 'none';
    });
}

function showContent() {
  document.getElementById("login").style.display = 'none';
  document.getElementById("content").style.display = 'block';
}

function addShop() {
  const user = auth.currentUser;
  if (!user) return alert("Login required.");

  const shop = {
    name: "Demo Shop",
    category: "Electronics",
    floor: 1,
    owner: user.email
  };

  const shopKey = db.ref().child("shops").push().key;
  db.ref("shops/" + shopKey).set(shop)
    .then(() => alert("Shop added."))
    .catch(err => alert("Error: " + err.message));
}

function addOffer() {
  const user = auth.currentUser;
  if (!user) return alert("Login required.");

  const offer = {
    product: "Laptop",
    price: 49999,
    feature: "i7 processor",
    user: user.email
  };

  const offerKey = db.ref().child("offers").push().key;
  db.ref("offers/" + offerKey).set(offer)
    .then(() => alert("Offer added."))
    .catch(err => alert("Error: " + err.message));
}

function listShops() {
  db.ref("shops").once("value", snapshot => {
    const data = snapshot.val();
    const output = Object.values(data || {}).map(shop => 
      `<div><strong>${shop.name}</strong> - ${shop.category} (Floor ${shop.floor})</div>`).join("");
    document.getElementById("shopList").innerHTML = output || "No shops available.";
  });
}

function filterByCategory() {
  const category = prompt("Enter category to filter:");
  db.ref("shops").orderByChild("category").equalTo(category).once("value", snapshot => {
    const data = snapshot.val();
    const output = Object.values(data || {}).map(shop => 
      `<div><strong>${shop.name}</strong> - ${shop.category} (Floor ${shop.floor})</div>`).join("");
    document.getElementById("shopList").innerHTML = output || "No matching shops.";
  });
}
function updateShop(shopId) {
  const newName = prompt("Enter new shop name:");
  const newCategory = prompt("Enter new category:");
  const newFloor = parseInt(prompt("Enter new floor number:"), 10);
  
  db.ref("shops/" + shopId).update({
    name: newName,
    category: newCategory,
    floor: newFloor
  }).then(() => alert("Shop updated."));
}
function deleteShop(shopId) {
  db.ref("shops/" + shopId).remove()
    .then(() => alert("Shop deleted."));
}
function listOffers() {
  db.ref("offers").once("value", snapshot => {
    const offers = snapshot.val();
    const output = Object.values(offers || {}).map(offer =>
      `<div><strong>${offer.product}</strong>: ₹${offer.price} - ${offer.feature}</div>`).join("");
    document.getElementById("shopList").innerHTML = output || "No offers.";
  });
}
function filterByFloor() {
  const floor = parseInt(prompt("Enter floor number:"), 10);
  db.ref("shops").orderByChild("floor").equalTo(floor).once("value", snapshot => {
    const data = snapshot.val();
    const output = Object.values(data || {}).map(shop =>
      `<div>${shop.name} - ${shop.category}</div>`).join("");
    document.getElementById("shopList").innerHTML = output || "No matching shops.";
  });
}
function compareProducts() {
  const product1 = prompt("Enter first product name:");
  const product2 = prompt("Enter second product name:");

  db.ref("offers").once("value", snapshot => {
    const data = snapshot.val();
    const filtered = Object.values(data || {}).filter(o =>
      o.product === product1 || o.product === product2);

    if (filtered.length < 2) {
      alert("One or both products not found.");
      return;
    }

    const output = filtered.map(o =>
      `<div><strong>${o.product}</strong>: ₹${o.price} - ${o.feature}</div>`).join("<hr>");
    document.getElementById("shopList").innerHTML = output;
  });
}
console.log("Shop Added:", shop);
console.log("Offer Added:", offer);
console.log("Shops Listed");
console.log("Offers Compared:", product1, product2);
