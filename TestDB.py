import requests

url = "https://1103.api.green-api.com/waInstance1103185402/receiveNotification/f476c866e2094333936481ec7903b7bca2461b08ebba4aa3b8"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))

url = "https://1103.api.green-api.com/waInstance1103185402/deleteNotification/f476c866e2094333936481ec7903b7bca2461b08ebba4aa3b8/1234567"

payload = {}
headers= {}

response = requests.request("DELETE", url, headers=headers, data = payload)

print(response.text.encode('utf8'))