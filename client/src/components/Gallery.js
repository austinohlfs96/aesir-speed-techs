import React, { useState, useEffect } from 'react';
import { Item, Image, Segment } from 'semantic-ui-react';
import Head from './Header';

const Gallery = () => {


 

   


  return (
    <>
      <Head />
      <div className='modal'>
      <div id="services">
      <Segment style={{ background: 'rgba(255, 255, 255, 0.8)', width: '100%', height: '77vh', overflow: 'auto' }}>
        <h1>Gallery</h1>
        <div className="image-grid">
       
        <Image src='https://swiftmedia.s3.amazonaws.com/mountain.swiftcom.com/images/sites/5/2019/11/09155113/phantom-atd-11xx19-1-1024x682.jpg' size='medium' centered />
        <Image src='https://www.rhythmjapan.com/wp-content/uploads/CV5A8698_-1024x683.jpg' size='medium' centered />
        {/* <Image src='https://lh3.googleusercontent.com/pw/ABLVV85W3_s2b2xdDkjxrx4-rUHFx4Qs-0RNqEOQw3Cgj9YxtUHSPFZmXAuK4_XIJO1O041ktwXKUa5KYfpMZ-KTS46WnLbQCQyT0UyDM_IkLYskrtbJtfOPUKrJCGjHy-NCIfD_rIwyE9ZaS-6d2Y2ojhy6csaT_SyvlKmD4E4-6skCACCPLdiuRP45pTDtZLXKn-iHMa3hZl4kZYDJmYlL3Lib6lwBxi6Z4pvEEMCr3bsfVMCZ8u8N1xResYPEG-5GAU_Y-qnKS-98dN7cwYfIxLTjJzgQDj4OBctEx2aIcYrbwO1mskFr-eUIFB3tGbB3ZAKviKqs9Yiuo1HLemGgxMypbRJCrYkzQ0jgVu5dS8oHziCNSVFAKOTtHEn_ouGb4CeCXKdmHJyVYayL9hpqgQeUJJzUyxh2LhmJluXAPEsSp25h4fKzyVuM8hzu840d4kZTeZG0AvRZ-AcmQ2BebOq_fhRp7SWcnB6-9nLJagZTVXlMqyL1204-gqUScf4ePvlv4rCJQpTOTzTnf7vBts5cKhwSWJl35B_eMwuC8eVZ_KWzhQfXIQIUu_pSGWiovZ1faw4x_PqyWmuNPQBg4ubYQ0uD8vy6dUnUcmv270cy7WVPYUu5eaQfhrM-gmjP02Za0zVB-9fPPMY1uD_x5e5c3sGeTAjLzyNvkOnIB6Ef7NVzJz11zBLB5awyxa69PJKXx19oJbAj75crEAtyijkHAlXrLLCfZhfqiwfA7Z5Q_3dOWiudPHVX0L7O1I-OhgzZ27oP0iNWXhN6mzJD-HUNRcGQiFUAbM6TT6agMlbn4TNyQQLYCoi0yeEevXDG3kAomslPvczl4E9vjgCojmoaOW1tjLk0g6omoZQ0ZqryK2tZ0uf7baUBx3dCJArRMc1Td6I=w360-h480-s-no-gm?authuser=0' size='medium' centered />
        <Image src='https://lh3.googleusercontent.com/pw/ABLVV86eykuClMvHBq9EjGRJlUr8kNFbB9oPGfive53cbB7o1jdkIUxB38RhrRTITjbPgMfoNv0nHQW2LbkRpurwbkbb-eYd4CBdSgvnaOjzcBB6bw_daCn78oFNzIH399zmN3IVt8hNVFk3on4H7gzfP3EWKxsnS2bcd0Q4zVZff0UtZUOVIg8nbcc56ngDHQCn-VmJE-fzTNwgkQnmxTxrVZTwR2obewZcAzJ57aaOgF98Uh7uRIFzrdGXh9X4Huzltwvu2J-h6AnqMrq-byioQ1RWYCI0HkugABUwgXWZICKXvutJCqMeMLswlpk7UHqyprDZG5y-_RpUG6chmfR_UQkhMUbs8pqF-cgoL2IqneeS0uLuCiUNqGxVJrEW5of0TRhbN-A8oIZK3F81P6G4QLtEEMPt0RL6BNOziEUzCbyBYOv-0-Lj315RccQMWnVWxZXnMDCCl_mx22NFXs8LwvcenLIgiqAFF6qngJZR8HJlxFWJ8R6QMkfQYQg86N-dwXsY23W3vQ08EXVMwTR5KRrVIwFYO_86P69zvoiexVJauQarK8UJZdfE_Kys0hsznUeK4IfvoN-YIoMv-ASDTIeTuaDB2askfGEzzux1MVNLcDlis9WhU5HIuNaiLzzEkUmtjteMKADLYplMAHNn8Yxh6qp_6FYH3l5FcvU0sm7ehFS1chFKwNSgbldG_aI8kp4fWTw_uzHG5XvV31VoMMPeU5ZLYJTpPicaREtevCM3mjVBXwFUH_TRTEKAJ_S30EblosNg6FBTQzlLbWmBOyi82HDfAn2KMN8EEIIW7Tmmsm3k_ktR5iLviObo0Vrg92Z-G-DqBAevMpyj0hI2B52RGgafX1PtGPw6uTv204uu8ni-LNABibtuRDxTUSrQDP2htls=w768-h1024-s-no-gm?authuser=0' size='medium' centered />
       
        <Image src='https://lh3.googleusercontent.com/pw/ABLVV86ugMYm-hOdFOJXVyp2O2eJIt3nVXxb3_WE8kaVCaaPcWcdz2nZlvSMgQ_dO4659xTzsV6sK7nJGa4P9kT0D1AXGF43R5Vk6GbRme6aeK2CvdR-TbBEv3ji0XwTxHs0W3AJqNp4VzaEU8dZuDnBurk-p173wXKN00BmTDtmlbQWW3yBl1zUONG9GDzSOsBB-T9-A7oAmSV-Rx_CUHlkThdF0VxNz5wr992ZFs4PTpn48g6ROLBdgoh4IKBERy3UQgiMPoORdSALAyTm5I4tz-A-Up7biTZ3E2a-ZuG_H2dSVtgms7lzI2geq-8eGB5EWGmr4BLT5BlaGBdzhsDfE0rKWRff5hXuQpYhRp_o87PYH6RJseiPDRtCDhblzGuNTWZK5g1gadT9Es1GKo6mq-5_KihDH7yc_JERMtadAAyYShGYflOIev5Cj3CHFG4gmaIEeVYhifM7x16RYA6ndMUp7d0VQva18WhZcMTOKowyvsTjtmGCg3_OQDwNySgs6P5Yyms1-Qa51N865egSCFZV4wj88EOh3UJYFilIpRINkDegBBJXRMcClcc_mo11lYgTH4lxXsZoHweAXXoQ9UpxEViLYsD6ETsjmlwfiEH-VAdLdJA5p60JF4SNhX9R72Ytu-_06WgIIg4WFNQNz1fCBN3lMwGTZRa14UoL-pZ1W0kRt43VXlNzO6lQyEykTZNQOLJsZK_NICdesrc_K4QykqoSYPWl6up4V2Mva9CB4VFaiAZxbwAKXaeFY-L1eqmrpkyyG-5UZxfE_W9JChXLWStcwagUGtdaMnv9Mrvg0i_DyZaoaQZRZv83KeObl9zvNmyHe-mk0T5Qy2DKA7jit9-70m8uhW2II-wFNIsrueUmyUYL_mkrqvogoZC6uXLAkgE=w800-h600-s-no-gm?authuser=0' size='medium' centered />
        <Image src='https://lh3.googleusercontent.com/pw/ABLVV86XhrrgLDGP_OcSgZ1scYI_ahD6Xu_y8nUX5u15CYX0MEq7oaggTWltpe3AOSeclcOijAHcTbo1CnXUCpXlm5gIUTG0U1bZXOXCd6yhxwS6XPBecTnaShBjrkgX1Tl99G51BKEdrrmd7p9HSvQvedfZ8msdDsLSKfmfkRid-X3W_venBCmj469Aq8pEHlOVgSVQ19o616vySg3eQUx2I0jAPrVSg45Fr_YiddfPkuKXtFpkvuqKCTCX0PaTHTA5PlTp0N8bwpTIyQul_erffsbgQOqR0OVS1i8RPbQbGvLTqzoAgt4jzOIgUtQwDuYITFUTSESs0D4U1pwayuSUDfYvexEYOdFbeFZKrh6IX84NFj9qM_PYOS8pKonKMSyVg2dsybJTGvUI48IIDaSkdyCmiQN77UtP5mQ7u3f4wcgGD8pkDpi-j3D_mvVi4mN81Yoi40h2JJtm5mOv8xecuwh1n_gK9-3rs5IzOfmmuneyKwFmJrjEZCwIFekhMCWAeXtn2OfOe86F5KCVR30xOI4hev4kxK16NbHMJ3Fd-kWUEjrZnezekX-VK36lL_b6qlyUqMbCeigE6zganJouPYe_uMmS9h09d-XNqfBF9DmtR9Jsn2tLk-7_rCZ80GADD6z-q_NjToKusZy9Y_p66JvlRwDwAIklW3kIrz_7-9L0L1a9PTiipPOSY-kOUjGnZ_vJ_SZo5G06mH0hqmvjhpCqi2LPHiylA_vbJl_2QJVQ1SHYd-JB-cV_duMqxmzOwJkEWnovD3JEpAuQCZ_d21Ac0ZWhxxsZphktaDyVEgqHgyj34BD-yzhCpeNkyi4ZnjFaVDIAHcwyWhS6yoVgBcw-U19hjuBLfqRi1OsdHlQVH9APt3sn0zGaw_1mrJs4oq0GgF4=w320-h240-s-no-gm?authuser=0' size='medium' centered />
        <Image src='https://lh3.googleusercontent.com/pw/ABLVV84F6tEGTcTtwUSXE0sjkOQt-j5uOnmQe-sFZqpsZtzVZ4w7sVELMPAya_jiSKJRMDr0Zcit8L7t9wDvnie7TnVIIAJ0BwN7f0SYWDAhPb7lacsB9Sx8jyxijYwdWJZKYdh6XKRjMTh1gGEQiDQOGRsfy_ukakcey5N2Ge6La4fOaVZrWj4O4CNc1C0BuktpyKqGRi76J3WSc9oJfdVbOUdtBc55jFzPidA4veEE4xl53XfID6igOKGK2lHjICU9xAGvj6gRF2f2YqW7nijNjBg0OLO5JtsaX86B3QXhviewMRxQKpgwfqMT2bHOvEyVtNT5obRYKjVwGI6JLej4KrxZD53mLrG5hEHNcQbd1iHkGL4C5fUCYb0CK0TZO0ruHJndUAdwiHpnXlgjGYD7Tt8F02VwqygeXsLF2GWBCuxlWrSMuwhz0jmt-C1cyNp1tiPeVD0sCcFsxT9FJxCzS8Woq314jAV9egZyi6A6qcj3t8rax66AEPbcAuMgGO3TV3Y1j3DX5qd77shdPwRdPOdAIoG63sTyczS4aJaGZbO5rJpmRoCJfGzSxvTWzA4kUR8ig4-sy8jDEbqtGuFjrThDaFI6RrgaKqgTrNOQEG6QizmDbgyiljeUTAdriIizVyzPBTpveTJn6Ji47VSwOhOEZvwHiBWjgR-4mzEqSA-v42dvt1ansygTB_JUt6OWSBdg1azt6z587rVx9rsKS0ngznxWzHrO8HynxLLQETjClA9-xWZrmrYuKM9PuOhiM_8yKLlrtGc7PY_5W3U722qEsx6ld0Eih5ErcLPr21z6o6Qu57rrZcYJxT9j7jwlsNxXGR6pX1ADUFZBybGwg3F2FdKwr3ZG5RhDQXJ9ld67jtQZHM6GFb2Zu9SMexn8gOCqkKg=w320-h240-s-no-gm?authuser=0' size='medium' centered />
        <Image src='https://lh3.googleusercontent.com/pw/ABLVV87N-tUbCqS0N09omDm1BTn5_d5Umvo3dBBPySvVPp0JqhgNUliDMJROtLpgr7o8N4nIK6aff6cAXTELha7fNP0BY-1YkJBJTgHD0fuRH7bg9nI5sOsbTZyVixqVqPtwsXsvu4-Anf3Wb30MzgGogkTWiI0g26S5_1FPhJf8oeWTLqbTZyuuAoluQ05bCJUp91Lkud_tjOvPLGHS2t1CjrlxOvjtGKf9xNYkxs3sQDUztLNrHyWSRoK7ARItR2ORgxjatr-zFJ7g7wSAaE8Eq4woHJyJoo0NEERLwUu4sx9xAJE9b4mu05q4sLsMdDTo4bb9Y5sdqYXDShOeaurgSjuI25n5hKoHtV0ERUMUPX5B3jz0dBZbM6IQJfDLEnB8biINFBa9WKOKAVrl_hDtJoLU8D9Z3M6Kgw29pzIdt0hyW-kYMZuCFshXx54Ubux-DWyS5adpmHXay3WJUb9ijcvaG0-EzWaS24B8pr3ot0wCKDpEY8P0RgXNGyy7u11GX9BUvkeIBDU_a8grG5WK524pnEI2GcaH4OWeJMWYSfdEr4W5VO-EpJG_OlA0qJXKeFTt0bw_Zouacpkxv7eeSgajAtK5D8LTIEJkmLgaBMBVZUFFNSls8i_-O4ibvl_YKG7cmYyNll7PL_ZtlMl6R14HSTB8RroEILaEDXHndNhqLNOz1RKsL6DkCYzZW04XybJp61YiS0U3tMsIkm3H75_m67QDONbmFb9QOsr7LD9Fz6z8ccT0uEkrdCtkEshryNMrNA6_7kUO8h97iCLx0fDRujHIR21JvTbA9fjWsi8oBSXhzy0FdQ0D-iRkKphOuX_TnYkDURdTqaJwfb8QDbPFD023OQv7I5Bba2UDE4UQJ4NBODk8SWLgp5jok13lNDt2he4=w320-h240-s-no-gm?authuser=0' size='medium' centered /> */}
       
        <Image src='https://usskiandsnowboard.org/sites/default/files/images/news-articles/hero-image/2021-12/Red_Gerard_Podiumsb_mens_final_slopestyle_copper_dew_tour_2021_CLAVIN11.JPG' size='medium' centered />
        <Image src='https://www.usskiandsnowboard.org/sites/default/files/paragraph/single-image-caption/2020-01/maggiepodium%20.jpg' size='medium' centered />
        <Image src='https://skiclubvail.org/wp-content/uploads/2023/02/SSCV-Mogul-Podium-Rocky-Mountain-Freestyle-Championships-Podium.jpeg' size='medium' centered />
        <Image src='https://www.snowtrails.com/upload/events/21-22/slopestyle_2-16-20_snow-trails-72620.jpg' size='medium' centered />
        <Image src='https://www.snowboarder.com/.image/t_share/MTk2MzUwOTc2NTQyMDU4NDM1/thumb_tuning_printtoweb_taylor_boyd.jpg' size='medium' centered />
        <Image src='https://usskiandsnowboard.org/sites/default/files/images/news-articles/hero-image/converted/kim-and-clark-podium-at-dew-tour_6410.jpg' size='medium' centered />
        <Image src='https://www.gearwest.com/cdn/shop/products/gear-west-standard-ski-tune-gear-west-23305105801416_535x.jpg?v=1695759323' size='medium' centered />
        <Image src='https://swiftmedia.s3.amazonaws.com/mountain.swiftcom.com/images/sites/5/2020/05/10184146/snowboardcoach-atd-052720-1-3-768x1024.jpg' size='medium' centered />
        <Image src='https://s3-media0.fl.yelpcdn.com/bphoto/a6rR_XBQdjUYQknJ5q9-HQ/1000s.jpg' size='medium' centered />
        </div>
        </Segment>
      </div>
    </div>
    </>
  );
};

export default Gallery;
