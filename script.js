function getFormvalue() {
    //Write your code here
	const firstName = document.getElementsByTagName("input")[0].value;
	const lastName = document.getElementsByTagName("input")[1].value;
	alert(firstName +" "+ lastName);
}
