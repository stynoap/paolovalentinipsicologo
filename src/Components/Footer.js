import logo from "./../icone/icons8-psicologia-100.png";

function Footer() {
  return (
    <>
      <footer class="bg-sky-50 pt-12 ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <div class="flex items-center ">
                <img
                  src={logo}
                  class=" w-12 mr-2"
                  alt="Paolo Valentini Logo"
                />
                <span class="self-center lg:text-2xl font-semibold whitespace-nowrap text-slate-700  ">
                  <a className="hover:text-sky-100" href="/">Paolo Valentini Psicologo</a>
                </span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-slate-700 uppercase ">
                  Risorse
                </h2>
                <ul class="text-slate-800 font-medium">
                  <li class="mb-4">
                    <a href="/chi-sono" class="hover:underline">
                      Chi sono
                    </a>
                  </li>
                  <li>
                    <a href="#approccio-terapeutico" class="hover:underline">
                      Il mio approccio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-slate-700 uppercase">
                  Seguimi
                </h2>
                <ul class="text-slate-800  font-medium">
                  <li class="mb-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61580065947231"
                      class="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-slate-700 uppercase">
                  Deontologia
                </h2>
                <ul class="text-slate-800 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://www.psy.it/la-professione-psicologica/codice-deontologico-degli-psicologi-italiani/codice-deontologico-vigente/"
                      class="hover:underline"
                    >
                      Codice deontologico
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-slate-800 sm:text-center">
              © 2024{" "}
              <a href="/" class="hover:underline">
                Paolo Valentini
              </a>
              
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/profile.php?id=61580065947231"
                class="text-slate-800 hover:text-sky-50 "
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/7000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
         <p className="text-xs text-slate-700"> Icons by <a href="https://icons8.it/" className=" underline">Icons8</a></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
