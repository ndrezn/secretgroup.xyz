# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'AC4d9c263f09427ab17b3c4899b3c4972c'
auth_token = '72a81a717db2e691af7f3df88e6f4767'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body='secretgroup is located at 4238 de Bullion.',
                              from_='+15146132783',
                              to='+16095589614'
                          )

print(message.sid)