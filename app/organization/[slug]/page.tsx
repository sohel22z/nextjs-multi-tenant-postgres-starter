'use client'

import Navbar from "@/app/components/Navbar"
import * as React from "react"

export default function Organization() {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")

    return (
        <main>
            <Navbar />
            <div className="py-5 px-8">
                <form className="flex flex-col space-y-4">
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blog title..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        id="description"
                        name="description"
                        rows={5}
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Enter blog content here..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="self-start bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Create Blog
                    </button>
                </form>
            </div>
        </main>
    )
}