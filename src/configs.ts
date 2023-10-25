import TitleImage from './resources/Title2.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto7 from './resources/Gallery_Photo_7.png';
import GalleryPhoto8 from './resources/Gallery_Photo_8.png';
import GalleryPhoto10 from './resources/Gallery_Photo_10.png';
import GalleryPhoto11 from './resources/Gallery_Photo_11.png';
import GalleryPhoto12 from './resources/Gallery_Photo_12.png';
import GalleryPhoto13 from './resources/Gallery_Photo_13.png';
import GalleryPhoto14 from './resources/Gallery_Photo_14.png';
import GalleryPhoto15 from './resources/Gallery_Photo_15.png';
import GalleryPhoto16 from './resources/Gallery_Photo_16.png';
import GalleryPhoto17 from './resources/Gallery_Photo_17.png';
import GalleryPhoto18 from './resources/Gallery_Photo_18.png';


const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: '2023년 12월 09일, 토요일 오후 2시',
  weddingLocation: '오클랜드 포레스트힐 장로교회',
  groom: {
    name: '김성재',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '김희중',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '정영임',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '이시온',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '이성건',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '남궁경',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto10,
    GalleryPhoto11,
    GalleryPhoto12,
    GalleryPhoto13,
    GalleryPhoto14,
    GalleryPhoto15,
    GalleryPhoto16,
    GalleryPhoto17,
    GalleryPhoto18,
  ],
  musicSrc: './resources/background.mp3',
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
  musicSrc: string;
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
