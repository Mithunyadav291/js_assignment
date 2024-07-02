// day2 4
function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const profiles = {
                1: { userId: 1, name: 'Alice', age: 25 },
                2: { userId: 2, name: 'Bob', age: 30 }
            };
            const profile = profiles[userId];
            if (profile) {
                resolve(profile);
            } else {
                reject(new Error('User profile not found!!!'));
            }
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = {
                1: ['Post 1', 'Post 2', 'Post 3'],
                2: ['Post A', 'Post B']
            };
            const userPosts = posts[userId];
            if (userPosts) {
                resolve(userPosts);
            } else {
                reject(new Error('User posts not found'));
            }
        }, 1000);
    });
}

// Function to fetch and combine user data
function getUserData(userId) {
    return Promise.all([fetchUserProfile(userId), fetchUserPosts(userId)])
        .then(([profile, posts]) => {
            return {
                profile,
                posts
            };
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            throw error;  // Re-throw the error after logging it
        });
}

// Usage example
getUserData(1)
    .then(userData => {
        console.log('User data:', userData);
    })
    .catch(error => {
        console.error('Failed to get user data:', error.message);
    });

getUserData(3)  // Non-existent user to demonstrate error handling
    .then(userData => {
        console.log('User data:', userData);
    })
    .catch(error => {
        console.error('Failed to get user data:', error.message);
    });
