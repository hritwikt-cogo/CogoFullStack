import React from 'react'

function Newsletter() {
  return (
    <>
      <div class="container my-24 px-6 mx-auto">

{/* <!-- Section: Design Block --> */}
<section class="mb-32 text-gray-800 text-center ">
  <div class="flex flex-wrap justify-center ">
    <div class="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
      <div class="p-4 bg-purple-600 rounded-full shadow-lg inline-block mb-6">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="envelope"
          class="w-5 h-5 text-white"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
          ></path>
        </svg>
      </div>

      <h2 class="text-3xl font-bold mb-6">Subscribe to the newsletter</h2>

      <p class="text-gray-500 mb-12">We will write rarely and only high-quality content.</p>

      <div class="md:flex flex-row">
        <input
          type="text"
          class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          class="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</section>
{/* <!-- Section: Design Block --> */}

</div>
    </>
  )
}

export default Newsletter