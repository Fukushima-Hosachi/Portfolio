import React from 'react';
import images01 from '../pic/02/01.png'
import images02 from '../pic/01/01.jpg'
import images03 from '../pic/03/01.png'
import images04 from '../pic/04/01.png'
import images05 from '../pic/04/02.jpg'
import images06 from '../pic/04/03.jpg'

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function Card02() {
  return (
    <MDBRow className='row-cols-2 row-cols-md-3 g-6'>
      <MDBCol>
        <MDBCard classNa02me='h-100'>
          <MDBCardImage
            src = {images01}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>旅館の一室</MDBCardTitle>
            <MDBCardText>
              自然の中にある旅館の一室をイメージして作りました。<br></br>
              自然な光が入り込むようにマテリアルとライティングを工夫しました。
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src= {images02}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Shower Room</MDBCardTitle>
            <MDBCardText>モダンな浴室をイメージして作りました。</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={images03}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>プロップモデル_駄菓子屋</MDBCardTitle>
            <MDBCardText>
              制作中
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={images04}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>時計塔_ラフモデリング</MDBCardTitle>
            <MDBCardText>
              懐中時計のパーツを元にした遺跡を作っています。<br/>
              廃れた感じを出せるようにラフモデリング中です。
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={images05}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>彼岸花</MDBCardTitle>
            <MDBCardText>
              1時間モデリング参加作品です。<br/>
              質感をあえてガラスにすることで透明感と花びらの重なりを綺麗に描写できました。
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={images06}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>ホイール</MDBCardTitle>
            <MDBCardText>
            1時間モデリング参加作品です。<br/>
            WRX STIの純正ホイールをベースに作成しました。
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>

 

    
  );
}

export default Card02;