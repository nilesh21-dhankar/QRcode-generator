const input = document.getElementById('qr-input');
const img = document.getElementById('qr-img');
const button = document.getElementById('qr-button');
 console.log(input,img,button)

 button.addEventListener('click', () => {
  const inputValue = input.value;
  console.log(inputValue) 
  if( !inputValue ) {
    alert('Please enter a valid URL');
    return;
} else{
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
 img.alt = `QR code for ${inputValue}`;
}

 });