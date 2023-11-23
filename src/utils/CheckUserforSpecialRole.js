function checkUserforSpecialRole(userInfo, specialRole) {
    let result = false
    userInfo.ProjectRoles.forEach(ProjectRole => {
        if(ProjectRole.Role === specialRole) {
            result = true
            console.log(ProjectRole)
            console.log(userInfo.FirstName+" is " + specialRole)
        }
    });
    return result
}

export default checkUserforSpecialRole;