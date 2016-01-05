http://140.124.181.160:8080/softwareEngineer/ 

accounts{
	@POST 
		username,
		email,
		password

	@GET
		/{userId}
	@PUT
		/userId

		username,
		password,
		email
	}
Login{
	@POST
		username,
		password
}
member{
	@POST
		project_id,
		user_id,
		role,
		username
	@GET
		/{user_id}

}
projects{
	@POST
		name,
		notes
	@GET
		/{projectId}
		id
	@PUT
		/{projectId}
		name,
		notes
	@DELETE
		/{projectId}

}
projects/{projectId}/requirements{
	@POST
		name,
		description,
		comment
	@GET (get all requirements in project)

	@GET
		/{requirementId}

	@PUT
		/{requirementId}
			name,
			description,
			comment,
			Type,
			hadfix
}

projects/{projectId}/tests{
	@POST
		name,
		description,
		requirementid
	@GET(get all tests in project)	

	@GET
		/{testId}
	@PUT
		name,
		description,
		requirementid
	@DELETE
		/{testId}
}