#to add new bookmark
curl -i -H "Content-Type: application/json" -d '{"title": "google" ,"url" : "www.google.com"}'  http://localhost:20020/api/bookmark

#To delete a bookmark 
curl -i  -X DELETE http://localhost:20020/api/bookmark/{$id}

#To get the list of bookmark

curl -i http://localhost:20020/api/bookmark
