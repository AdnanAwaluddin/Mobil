function hitung() {
    let harga = 350000000;
    let ongkir = 1000000;
    let DPP = 2000;
	let PPN = 300000;
	let Jumlah = parseInt(document.getElementById("jumlah").value);
	let total = harga * Jumlah;
	document.getElementById("Harga").innerHTML = `<p><String>: Rp</String>${total}</p>`;
	let totalAkhir = total + ongkir + DPP + PPN;
    document.getElementById('total').innerHTML = `<p><String>: Rp</String>${totalAkhir}</p>`;}