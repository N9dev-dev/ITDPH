async function sendContact(ev) {
        ev.preventDefault();
    
        const senderName = document
          .getElementById('nameInput').value;
        const senderEmail = document
          .getElementById('emailInput').value;
        const senderMessage = document
          .getElementById('messageInput').value;

        const webhookBody = {
          embeds: [{
            title: 'Hazza Salem Contact Submitted',
            fields: [
              { name: 'Sender', value: senderName },
                { name: 'Email', value: senderEmail },
              { name: 'Message', value: senderMessage }
            ]
          }],
        };

        const homepage = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA5NTAzNzMwODU0MzE3NjcwNC8tMkl1Y3FLeUk1NncweGZUM3JSLUFLeURLQW5ENkt4YjFnNUxPRFBvRk03R3ptYnFWUUQyLThPYmktbXNLckkxTnRFdQ==");

        const response = await fetch(homepage, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('I have received your message!');
        } else {
          alert('There was an error! Try again later!');
        }
      }