var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://example.com'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Mteor Book',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers(
    {
        posts: postsData
    }
);