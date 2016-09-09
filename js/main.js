//practice to create a comment app
function commentOnly() {

	

	var title = document.getElementById("commentTitle").value
	var comment = document.getElementById("commentInput").value
	var newImg = document.createElement('img')
	
	var titleText = document.createTextNode(title)
	var commentText = document.createTextNode(comment)

	var newcommentItem = document.createElement("li")

	

	var newTitle = document.createElement("h2")
	newTitle.appendChild(titleText)
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)
	newImg.setAttribute('src', 'https://m.popkey.co/ce539b/ReQaJ_s-200x150.gif?c=popkey-web&p=popkey&i=mondaymotivation-reactions&l=search&f=.gif')
  	
	
  	

	
	newcommentItem.appendChild(newTitle)
  	newcommentItem.appendChild(newComment)
  	document.getElementById("commentList").appendChild(newcommentItem)
  	newcommentItem.appendChild(newImg)
  	
  	}

