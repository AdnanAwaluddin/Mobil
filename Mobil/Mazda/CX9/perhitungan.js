function hitung() {
    let harga = 955000000;
    let ongkir = 1000000;
    let DPP = 2000;
	let PPN = 300000;
	let Jumlah = parseInt(document.getElementById("jumlah").value);
	let total = harga * Jumlah;
	let totalAkhir = total + ongkir + DPP + PPN;
    document.getElementById('total').innerHTML = totalAkhir;}