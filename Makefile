
up:
	nodebrew use 18.0.0
	gatsby develop

# create post cmd
post:
	sh create-post.sh ${N}

rm:
	rm -rf content/blog/${N}