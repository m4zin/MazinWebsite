const axios = require('axios');

const newStoriesUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';

async function getStory(id){
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    const story = await axios.get(storyUrl);
    return story.data;
}

async function getStoriesData(length) {
    try {
        const response = await axios.get(newStoriesUrl);
        const storiesIds = response.data;
        let fetchLength;
        let maxLength = storiesIds.length;
    
        let promiseArr = [];
    
        if(length > maxLength){
            fetchLength = maxLength;
        } else {
            fetchLength = length;
        }
    
        for (let i = 0; i < fetchLength; i++) {
            promiseArr.push(getStory(storiesIds[i]));
        }
    
        const allStories = await Promise.all(promiseArr);
        let aGs = [];
    
        for(let story of allStories) {
            if(story.url == null || story.url == '' || story.url == undefined){
                story.url = 'https://news.ycombinator.com/item?id=' + story.id;
            }
    
            aGs.push({
                title: story.title,
                url: story.url,
            })
        }
    
        return aGs;
    } catch (error) {
        return [];
    }
}

module.exports = {
    getStoriesData
}