import React from 'react'
import CreateEvent from '../components/forms/CreateEvent'

export const getStaticProps = async () => {
    let data = []
    try {
        const res = await fetch('http://127.0.0.1:8000/events')
        data = await res.json() 
    } catch(err) {
        console.log('Error in /pages/conventions.js - getStaticProps(): ', err)
    }
    return { props: { events: data } }
}

const setMarkup = () => {
    try {

    } catch(err) {
        console.log('Error in /pages/conventions.js - setMarkup(): ', err)
    }
}

const Conventions = ({ events }) => {
    return (
        <main>
            <CreateEvent />
            <h1>Conventions</h1>
            {
                events.map(e => {
                    return (
                        <section key={ e.eventId }>
                            <p>{ e.title }</p>
                        </section>
                    )
                })
            }
        </main>
    )
}

export default Conventions