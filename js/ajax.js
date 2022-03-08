async function getStoryIds() {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json');
    const storyIds = await response.json();
    return storyIds;
}

async function getTitle(url) {
    const response = await fetch(url);
    const story = await response.json();
    const title = story.title;
    const date = story.time;
    const storyUrl = (story.url == undefined || story.url == null) ? null : story.url;

    const dateString = new Date(date * 1000).toLocaleString();

    return {
        title,
        dateString,
        storyUrl
    };
}

async function addRow(title, date, storyUrl) {
    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    dateCell.innerText = date;

    const titleCell = document.createElement('td');
    const titleA = document.createElement('a');
    
    titleA.classList = 'green-a-table';
    titleA.href = storyUrl;
    titleA.innerText = title;
    titleCell.appendChild(titleA);

    row.appendChild(titleCell);
    row.appendChild(dateCell);
    document.getElementById('hnData').appendChild(row);
}

async function getTitles() {
    const storyIds = await getStoryIds();
    let promiseArr = [];
    let iterationCount = 0;

    for(const storyId of storyIds) {
        if(iterationCount >= 25) {
            break;
        }
        promiseArr.push(getTitle(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`));
        iterationCount++;
    }

    let titles = await Promise.all(promiseArr);
    titles = titles.filter(title => title.storyUrl != null)

    for(const title of titles) {
        addRow(title.title, title.dateString, title.storyUrl);
    }
}

document.addEventListener("DOMContentLoaded", async function(event) {
    getTitles();
})