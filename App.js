function sendMessage() {
  const imput=document.grtElementById("message");
  const conversation=document.getElementById("conversation");
  const message=imput.vale.trim();
  if (message=== "") {
    return:
      }
  conversation.innerHTML +=
    '<p class="user">you: ${message}</p>'; 
  conversation.innerHTML +=
    ,<p class="omputer'>nightwatch: Command received. </P>';
    input.value="";
}
