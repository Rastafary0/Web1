function AddItem(val) {
    // document.getElementById("salesItems").innerHTML = AddTableItem(1, val, `other: ${val}`, "1234");

    document.getElementById("salesItems").appendChild(AddTableItemOption2(1, val, `other: ${val}`, "1234"));
}