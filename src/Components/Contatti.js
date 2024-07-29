import FormContatto from "./FormContatto";

function Contatti(){
    return(
        <div id="contatti" class="relative flex items-top justify-center min-h-screen pb-14 bg-white sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
                                    Contattami
                                </h1>
                                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600-400 mt-2">
                                    Compila il form per scrivermi
                                </p>
        
                                <div class="flex items-center mt-10 text-gray-600">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                    Legàmi - Via Italia, 32, 63813 Monte Urano (FM)
                                    </div>
                                </div>
        
                                <div class="flex items-center mt-8 text-gray-600">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        +39 3351749090
                                    </div>
                                </div>
        
                                <div class="flex items-center mt-8 text-gray-600">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        paolo.valentini167@gmail.com
                                    </div>
                                </div>
                                <div class="flex items-center mt-8 text-gray-600">
                                   <b className="tracking-widest">P.IVA:</b>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        02514360441
                                    </div>
                                </div>
                                <p className="mt-16 leading-7  text-gray-600 text-xl">Disponibile per sedute online su <b>meet, skype e whatsapp</b> </p>
                            </div>
        
                          <FormContatto />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contatti