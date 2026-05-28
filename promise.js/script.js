async function getPincode() {
  let pin = document.getElementById("pincode").value;
  let result = document.getElementById("result");
  let loader = document.getElementById("loader");

  result.innerText = "";

  if (pin.length !== 6) {
    result.innerText = "Please enter valid 6-digit PIN";
    return;
  }

  try {
    loader.style.display = "block";

    let response = await fetch(
      `https://api.postalpincode.in/pincode/${pin}`
    );

    let data = await response.json();

    loader.style.display = "none";

    if (data[0].Status === "Success") {
      let po = data[0].PostOffice[0];
      result.innerText =
        `Post Office: ${po.Name}
City: ${po.District}
State: ${po.State}`;
    } else {
      result.innerText = "Invalid PIN code";
    }

  } catch (error) {
    loader.style.display = "none";
    result.innerText = "Something went wrong";
    console.log(error);
  }
}
