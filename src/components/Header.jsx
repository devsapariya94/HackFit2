const Header = () => {
    return (
        
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Help</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-blue-400 bg-white border-2 border-blue-400 hover:text-blue-500 hover:border-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Connect Wallet</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-500 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-500 rounded md:bg-transparent md:p-0">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-500 rounded md:bg-transparent md:p-0">How it works?</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-500 rounded md:bg-transparent md:p-0">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    )
}

export default Header