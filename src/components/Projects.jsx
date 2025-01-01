import React from 'react'

function Projects() {
  return (
    <div>
      <h3 className="text-xl font-bold text-green-400 uppercase">Projects</h3>
      <div className="mb-4">
        <h4 className="font-semibold text-blue-500 uppercase">YouTube Clone App</h4>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Developed a scalable backend using Node.js, Express, and MongoDB.</li>
          <li>Implemented user authentication with JWT and bcrypt.</li>
          <li>Designed the frontend using Jetpack Compose for Android.</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-blue-500 uppercase">Recipe App</h4>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Built a Kotlin-based recipe app with real-time API integration.</li>
          <li>Enabled offline functionality with Room Database and Coroutines.</li>
          <li>Enhanced user experience using Shimmer loading animations.</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects