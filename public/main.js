
        const butt = document.getElementById("1");
        const handler = () => {
                butt.innerText = "sosi jopu";
                console.log('click');
                butt.removeEventListener("click", handler);
            }
         
        function clickBut() {
            butt.addEventListener("click", handler);    

        };
    