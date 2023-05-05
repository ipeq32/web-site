import CustomButton from "./Button";

const Body = () => {
  return (
    <div
      className="flex flex-wrap justify-center w-full h-auto px-5 bg-gray-200 shadow-lg rounded-tl-3xl rounded-tr-[400px] rounded-br-[200px] rounded-bl-[600px]"
    >
      <div className="flex flex-col">
        <div className="duration-200 transform rounded-t-full shadow-lg bg-yellow-50 easy-in-out">
          <div className="max-w-[1500px] w-full h-40 mx-auto max-2xl:px-10 max-2xl:rounded-full overflow-hidden rounded-xl">
            <img
              className="w-full rounded opacity-tema"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-center px-5 -mt-12">
            <img
              className="w-40 h-40 p-2 bg-green-50 rounded-[70%_30%_30%_70%/60%_40%_60%_40%] opacity-profil"
              src='/profil.png'
              alt="Profil Fotoğrafı"
              width="1920"
              height="1080"
            />
          </div>
          <div className="">
            <div className="text-center px-14">
              <h2 className="text-3xl font-bold text-gray-800">
                Tunahan İPEK
              </h2>
              <p className="mt-2 text-gray-400">KİŞİSEL WEB SİTESİ</p>
              <p className="mt-1 text-gray-400">
                - kurumsal olma yolunda ilk adımlar -
              </p>
              <br />
              <p className="mt-2 text-gray-600">
                Merhabalar ben Tunahan, kısaca kendimi tanıtmam gerekirse 22
                yaşındayım ve Denizli'de yaşıyorum. Isparta'da Biyomedikal
                bölümünden mezun oldum. Yazılım ile hobi olarak ilgileniyorum
                ve ismimi markam olarak kullanma kararı aldım. Sorularınız
                için mail adreslerimi aşağıya bırakıyorum. Benim hakkımda daha
                fazla bilgi almak için lüfen Blog sitemi ziyaret et..
              </p>
            </div>
            <hr className="mt-6" />
            <div
              id="bilgilendirme"
              className="flex rounded-t-full bg-gray-50"
            >
              <div className="w-1/2 p-4 text-center cursor-default hover:bg-gray-100">
                <p className="max-sm:text-sm">
                  <span className="font-semibold">
                    KURUMSAL E-MAIL &rarr;
                  </span>
                  destek@tunahanipek.com
                </p>
              </div>
              <div className="border"></div>
              <div className="w-1/2 p-4 text-center cursor-default hover:bg-gray-100">
                <p className="max-sm:text-sm">
                  <span className="font-semibold">
                    KİŞİSEL E-MAIL &rarr;
                  </span>
                  tnhnipek@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <CustomButton />
      </div>
    </div>
  )
}

export default Body