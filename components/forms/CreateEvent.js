import Button from '@mui/material/Button'
import { useState } from 'react'

class Event {
    constructor(eventId, creator, fellowship, startDate, endDate, area, address, featuredImg, description, title, contactInfo) {
        this.eventId = eventId
        this.create = creator
        this.fellowship = fellowship
        this.startDate = startDate
        this.endDate = endDate
        this.area = area
        this.address = address
        this.featuredImg = featuredImg
        this.description = description
        this.title = title
        this.contactInfo = contactInfo
    }
    async submitEvent() {
        let success = false
        try {
            const request = await fetch('http://localhost:8000/events/create', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(this)
            })
            const json = await response.json()
            success = json.status === 200
        } catch(err) {
            console.log('Error in /components/forms/CreateEvent.js - Event.submitEvent(): ', err)
        }
        return success
    }
}

const createEvent = () => {

    const [title, setTitle] = useState('')

    return (
        <section className="w-full max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p>{title}</p>
            <form className="shadow-md rounded">
                <label for="title">Event Title</label>
                <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)} id="title" required className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                <label for="description">Event Description</label>
                <textarea id="description" rows="4" required placeholder="Meditation retreat near mountains, speaker every night at 7:00 PM..." className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                <label for="fellowship">Organization</label>
                <select id="fellowship">
                    <option value="NA">NA</option>
                    <option value="AA">AA</option>
                    <option value="GA">GA</option>
                </select>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create</button>
            </form>
        </section>
    )
}

export default createEvent