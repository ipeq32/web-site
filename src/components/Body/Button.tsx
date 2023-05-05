const Button = () => {
  return (
    <div className="flex flex-wrap-reverse items-center px-8 py-16 max-lg:flex-col max-lg:gap-10">
      <div className="flex-grow"></div>
      <div className="flex flex-row gap-1 max-sm:gap-0 max-sm:mx-auto">
        <a className="flex-none px-1 max-sm:px-0" href="https://www.instagram.com/tnhnipek">
          <img
            src="https://img.icons8.com/nolan/64/instagram-new.png"
            alt="instagram"
          />
        </a>
        <a
          className="flex-none px-1 max-sm:px-0"
          href="https://api.whatsapp.com/send/?phone=+905416064488&text&app_absent=0"
        >
          <img
            src="https://img.icons8.com/nolan/64/whatsapp.png"
            alt="whatsapp"
          />
        </a>
        <a className="flex-none px-1 max-sm:px-0" href="https://github.com/ipeq32">
          <img src="https://img.icons8.com/nolan/64/github.png" alt="github" />
        </a>
        <a
          className="flex-none px-1 max-sm:px-0"
          href="https://www.linkedin.com/in/tunahan-ipek-3389bb20b"
        >
          <img
            src="https://img.icons8.com/nolan/64/linkedin.png"
            alt="linekdin"
          />
        </a>
        <a
          className="flex-none px-1 max-sm:px-0"
          href="https://open.spotify.com/user/vmr0p63u44tv5ugde26ybzipx"
        >
          <img
            src="https://img.icons8.com/nolan/64/spotify.png"
            alt="spotify"
          />
        </a>
      </div>
      <div className="flex-grow"></div>
      <div className="relative flex-none group">
        <div className="animate-skew opacity-75 group-hover:opacity-100 transition duration-500 absolute bg-pink-500 rounded-lg -inset-0.5 filter blur bg-gradient-to-r from-green-300 via-indigo-700 to-pink-500 "></div>
        <a href="https://blog.tunahanipek.com">
          <button className="relative flex items-center px-4 leading-none divide-x divide-pink-600 rounded-lg bg-gradient-to-tr from-gray-500 py-7 via-indigo-500 to-green-400">
            <span className="pr-6 text-gray-300">Blog</span>
            <span className="pl-6 text-green-200 transition duration-200 group-hover:text-gray-50">
              Siteme gitmek için
              <span className="pl-1 text-xl text-center">&rarr;</span>
            </span>
          </button>
        </a>
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Button