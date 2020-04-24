import paho.mqtt.client as mqtt
import json

# This is the Publisher



client = mqtt.Client(client_id='ASE_Publisher',userdata='ASE_Publisher')
client.connect("broker.mqttdashboard.com",1883,60)

json_str = '{"disasters":['
json_str += '{"id":"D01","name":"Fire 1", "status":"open","scale":"medium","radius":700,"time":"23/4/2020","user":"Lin","location":"Spire","lat":53.35,"lng":-6.2603},'
json_str += '{"id":"D02","name":"Fire 2", "status":"open","scale":"medium","radius":400,"time":"23/4/2020","user":"Lin","location":"TCD","lat":53.34,"lng":-6.259},'
json_str += '{"id":"D03","name":"Earthquake", "status":"open","scale":"medium","radius":800,"time":"23/4/2020","user":"Siohan","location":"unkown","lat":53.3,"lng":-6.25}'
json_str += '],'
json_str += '"rescues":['
json_str += '{"lat":53.37,"lng":-6.24,"name":"Team A"},'
json_str += '{"lat":53.33,"lng":-6.25,"name":"Team B"},'
json_str += '{"lat":53.335,"lng":-6.265,"name":"Team C"}'
json_str += ']}'


client.publish("disaster", json_str)

#print(json_str)

#content = json.loads(json_str)
