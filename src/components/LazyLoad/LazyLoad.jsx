import LazyImage from "./LazyImage";
import styles from "./LazyLoad.module.css"
const images = [
  "https://i.picsum.photos/id/947/200/140.jpg?hmac=gqFoK0aqQULaf485hrQAiaohUocbFb0llPfQt5IalD8",
  "https://i.picsum.photos/id/743/200/140.jpg?hmac=4lBkZYnXrFgtc3O9ZZ3BLVTdhCQ1N_KLbZ1Y94yoWuE",
  "https://i.picsum.photos/id/975/200/140.jpg?hmac=B_1MncAKjatyIIyx1A8htY2aahUfpPdFUtZ0--JZIAg",
  "https://i.picsum.photos/id/694/200/140.jpg?hmac=Kf1c8Js1jr1lcyIol-2nX4MaaHDsFJlskclailuryaY",
  "https://i.picsum.photos/id/993/200/140.jpg?hmac=hLuFxAM7vBsr5fq8tH3Hf9Zb25gLiVhPdsLEGuCvhsY",
  "https://i.picsum.photos/id/918/200/140.jpg?hmac=2w5ZPJkQLbGM1-AdgQKafrllM3e7RiUVX7pbMUajqgU",
  "https://i.picsum.photos/id/54/200/140.jpg?hmac=WSdBerX4Y6EGoaXpTcWJueeihL-De4yyiP71mzm-H10",
  "https://i.picsum.photos/id/569/200/140.jpg?hmac=PzyujsDoxlemqyCqFEu5pFeQMtJLWts3utOmlajWQuo",
  "https://i.picsum.photos/id/1048/200/140.jpg?hmac=UhaUaB3kqXAbjUT2MvXvIxqbzwhoxeIkbErnXkcmZUs",
  "https://i.picsum.photos/id/357/200/140.jpg?hmac=2Q7WzqwmOdv6od0UQoakW-O3pSHTd-GNWaw7V8s_BoY",
  "https://i.picsum.photos/id/232/200/140.jpg?hmac=2ijxK26DAuSZvggYJ81Tb4SLBReseZ-pT_6WrSFbELg",
  "https://i.picsum.photos/id/186/200/140.jpg?hmac=BXQ3SmcgfgMKUTZfytFd2m667MfXHzeOMddALVygyBc",
  "https://i.picsum.photos/id/419/200/140.jpg?hmac=CQ_vd0tMKywFptcXAFu7maz1lzfdKX7Crn5ecuA9G54",
  "https://i.picsum.photos/id/972/200/140.jpg?hmac=3fHpTKXZEEPRkXywECGB_sT6t26zVyusKDboDOCkkhE",
  "https://i.picsum.photos/id/195/200/140.jpg?hmac=2554rYgGZE_dfD-VDHEL9d_Y9QQ837HXHETfRI0oE4w",
  "https://i.picsum.photos/id/731/200/140.jpg?hmac=vbdXg4eoRe6MvFfezXQ128MEqLZD1SJqh7dbl13RCDI",
  "https://i.picsum.photos/id/703/200/140.jpg?hmac=AVh3b70QeZ1gP0sgPJbvabSJGRfvESHtwchbexa2Ji0",
  "https://i.picsum.photos/id/906/200/140.jpg?hmac=9BrZTWkShNz71WWmojd7DoB2vxPt1Ujz17X6zEeAnWk",
  "https://i.picsum.photos/id/176/200/140.jpg?hmac=SX_ZSuqW_2KoZ2hApML-qOoV566FGrAv0ivUW0Rljic",
  "https://i.picsum.photos/id/678/200/140.jpg?hmac=VR9yib_OG0wIHt8gZagzBGGwJfyEAtbbFiscKqi2bgU",
  "https://i.picsum.photos/id/937/200/140.jpg?hmac=nKYmC488OXKMGLkqGZ2T3U6gPDd7Z4i22vLsjEVLxzs",
  "https://i.picsum.photos/id/151/200/140.jpg?hmac=V1huGCMIOPoPcMv-Umc37TH_FbeCjmrY3c9I8VKvmxA",
  "https://i.picsum.photos/id/386/200/140.jpg?hmac=yRES5H9uM5W2y2SCvmG6WoW0pxXg7eJra6zCkCjJoDs",
  "https://i.picsum.photos/id/780/200/140.jpg?hmac=rqXg1-YZpbpoww3ah8VZUXpTMjPVtPKfLlewZrm9S1k",
  "https://i.picsum.photos/id/176/200/140.jpg?hmac=SX_ZSuqW_2KoZ2hApML-qOoV566FGrAv0ivUW0Rljic",
  "https://i.picsum.photos/id/399/200/140.jpg?hmac=zuFwjke_wi1XNWsty7-UBc4-O-tFi5IsaXlOEOHgxOU",
  "https://i.picsum.photos/id/973/200/140.jpg?hmac=loSFqShq6A9Y2SAJp-QnzzTpaesPmKGRIB8YFxpDXcY",
  "https://i.picsum.photos/id/366/200/140.jpg?hmac=T4cKloQeW2Z11DNse6WFRijSD76hK40ogCDuHtYGouc",
  "https://i.picsum.photos/id/83/200/140.jpg?hmac=u3mjGpCrK7gSPllLp4xkSYlb0lvh6duiuXuHVAbC69o",
  "https://i.picsum.photos/id/187/200/140.jpg?hmac=bRBEh0UCJ1mtxJEnW_GTdPvgFjOvY8HPY8OcOr1u0n8",
  "https://i.picsum.photos/id/839/200/140.jpg?hmac=cKKuom3v18PlvCnHQqU3a70KQFpsiwaeGlS5T5KJAYA",
  "https://i.picsum.photos/id/1057/200/140.jpg?hmac=G5ULa0r3XB6JMOb6RXx5wbeMGB3SKvKu1jR1Gin1ESQ",
  "https://i.picsum.photos/id/299/200/140.jpg?hmac=AV0sBbTlsvHnz78e0Cp3Jk66Gj33iIRPEAOjSh6fdTI",
  "https://i.picsum.photos/id/317/200/140.jpg?hmac=XqGK83f27zsnlb6IhTSkGQc15soJEWIPio-F9Zh7-iQ",
  "https://i.picsum.photos/id/616/200/140.jpg?hmac=OGse6XXqlACeAW9ihpbS7y36KVjNL5fZtK7WdoEyf5I",
  "https://i.picsum.photos/id/505/200/140.jpg?hmac=jwq-_OzOWypSDvUxeAi29mXs_kms7QfoTe_k6uN7MAE",
  "https://i.picsum.photos/id/715/200/140.jpg?hmac=kAJEb2GhXRuU6rqdSHC71uR4nfcPWANc-8igDgRFg_Q",
  "https://i.picsum.photos/id/377/200/140.jpg?hmac=wriunNnl224dLkMV3ZTvomi4VuD-L-D3IrDKhdlY6Oc",
  "https://i.picsum.photos/id/839/200/140.jpg?hmac=cKKuom3v18PlvCnHQqU3a70KQFpsiwaeGlS5T5KJAYA",
  "https://i.picsum.photos/id/1031/200/140.jpg?hmac=F-5mhG5KHq2k-l0jwvXOwgA5iB9mZrsDCZno1nSVPSo",
  "https://i.picsum.photos/id/50/200/140.jpg?hmac=CKQUWnjxqLPe6vFFjuV3CyhlNwovCgZ1PnjOUTKYMAo",
  "https://i.picsum.photos/id/990/200/140.jpg?hmac=GFz3ZEOGs6bSKWL3rCshXqjgZY5n3ZNK7s17Fqmthzg",
  "https://i.picsum.photos/id/606/200/140.jpg?hmac=Vz5sD14H02XJ26LrwFF_-eYUvlsDKF3X8ePon_gxi9s",
  "https://i.picsum.photos/id/266/200/140.jpg?hmac=OIpJChJVzRSqDvPEolc6UqXsrvEoOYGZ2haGuYn-pEY",
  "https://i.picsum.photos/id/233/200/140.jpg?hmac=fT_GjxaySeBFRvUf7MG7mcqzvduGdPs1TFpCEgRo-zg",
  "https://i.picsum.photos/id/115/200/140.jpg?hmac=LNa6CUr44PXOL5caz5-8heaBhFI76dMqmEij7dsvvrk",
  "https://i.picsum.photos/id/492/200/140.jpg?hmac=w6J-uQW9PF3dTdm_8IWj4Tb9a4nddGbWZt6mQAcDXuA",
  "https://i.picsum.photos/id/856/200/140.jpg?hmac=cRclckpeMH918Yh5JjpFsjS2EI87DdJ9KlXdzghF4eA",
  "https://i.picsum.photos/id/881/200/140.jpg?hmac=HJmx5d7MCYrPke_AJZKkycgXj65NBOuAqx9XupeGxB0",
  "https://i.picsum.photos/id/345/200/140.jpg?hmac=5fawXO6foCZuZZJTRRx7mAoC6QRNR7_70yw_6v7eBYU",
  "https://i.picsum.photos/id/180/200/140.jpg?hmac=iq7bzo47ynRB5x1H3XcoUcn39Z-x78mcAZ4BWkU6w80",
];

export default function LazyLoad() {
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return <LazyImage key={index} image={image} />;
        
      })}
    </div>
  )
}
