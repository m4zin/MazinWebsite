const express = require('express')
const router = express.Router()
const { getStoriesData } = require("../services/hackerNews")

router.get('/', async (req, res) => {
    try {
        res.render('index', {
            page_title: "Mazin's Website - Index"
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/cv', async (req, res) => {
    try {
        res.render('cv', {
            page_title: "Mazin's Website - CV"
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/contact', async (req, res) => {
    try {
        res.render('contact', {
            page_title: "Mazin's Website - Contact"
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/find-me', async (req, res) => {
    try {
        res.render('find-me', {
            page_title: "Mazin's Website - Find Me"
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/hn', async (req, res) => {
    try {
        const hnStories = await getStoriesData(30);
        
        let tableRows = ``;

        for(const story of hnStories) {
            let storyUrl = story.url;
            storyUrl = storyUrl.replace(/http:\/\//g, '');
            storyUrl = storyUrl.replace(/https:\/\//g, '');
            storyUrl = storyUrl.replace(/www./g, '');
            
            tableRows += `<tr class="whitespace-nowrap">`;
            tableRows += `<td class="px-6 py-4 text-center">${story.title}</td>`;
            tableRows += `<td class="px-6 py-4 text-center"><a href="${story.url}" class="text-blue-600">${storyUrl}<a></td>`;
            tableRows += `</tr>`;
        }

        res.render('hn', {
            page_title: "Mazin's Website - Hacker News",
            hn_table_rows: tableRows
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/zippy-bird', async (req, res) => {
    try {
        res.render('zippy-bird', {
            page_title: "Mazin's Website - Zippy Bird"
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router