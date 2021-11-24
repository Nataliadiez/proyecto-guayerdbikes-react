import Axios from "axios"

const conexionBannerHome = async(setImgApi) => {
    let url = "http://demo2420474.mockable.io/getHomeBanner"
    const respuesta = await Axios.get(url)
    setImgApi(respuesta.data)
  
}

  export {conexionBannerHome}