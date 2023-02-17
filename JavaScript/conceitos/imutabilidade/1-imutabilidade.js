const user = {
    name: 'Leonardo',
    lastName: 'Ruoso Vendramini'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: '${user.name} ${user.lastName}'
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);