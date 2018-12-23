

export const defaultTheme = {
    FIRST_COLOR: '179, 173, 233',
    SECOND_COLOR: '189, 217, 252',
    THIRDD_COLOR: '213, 201, 249',
    FOURTH_COLOR: '176, 254, 251'
}

export const backgroundImage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.png','8.jpg' ,'9.jpg', '10.jpg'];

export const switchImage = ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg', 's7.png', 's8.jpg', 's9.jpg', 's10.jpg', 's11.jpg', 's12.jpg', 's13.jpg', 's14.jpg', 's15.jpg', 's16.jpg', 's17.jpg'];

export const application = [
    // {
    //     show: false,
    //     id: 'leafletMap',
    //     class: 'dribbble-square',
    //     status: 'normal'
    // },
    // {
    //     show: false,
    //     id: 'myBlob',
    //     src: 'https://renhongl.github.io/',
    //     class: 'github',
    //     status: 'normal'
    // },
    // {
    //     show: false,
    //     id: 'mrui',
    //     src: 'https://renhongl.github.io/mr/',
    //     class: 'smile-o',
    //     status: 'normal'
    // },
    {
        show: false,
        id: 'article',
        class: 'file-text',
        status: 'normal'
    },
    {
        show: false,
        id: 'videoPlayer',
        class: 'video-camera',
        status: 'normal',
        width: 700,
        height: 400
    },
    {
        show: true,
        id: 'musicPlayer',
        class: 'sound',
        status: 'normal',
        width: 352,
        height: 552
    }
]

export const defaultSetting = {
    backgroundColor: defaultTheme.FIRST_COLOR,
    fontColor: '#fff',
    backgroundImage: './assets/image/3.jpg',
    autoPlay: false,
    opacity: 0.4,
    showSetting: false,
    showStore: false,
    switchBg: false,
    language: 0,
    showAwesomeClock: false,
    showBackgroundPicture: true,
    showHeart: false,
    bigHeartNumber: 52,
    currentNumber: 0
}

export const notificationStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff'
}

export const markdownText = [
    {   
        title: '关雎',
        content: `## 关雎 \n ### 关关雎鸠 在河之洲 \n ### 窈窕淑女 君子好逑 \n ### 参差荇菜左右流之 \n ### 窈窕淑女寤寐求之 \n ### 求之不得寤寐思服 `
    },
    {   
        title: '蒹葭',
        content: `## 蒹葭 \n ### 蒹葭苍苍 白露为霜 \n ### 所谓伊人 在水一方 \n ### 溯洄从之 道阻且长 \n ### 溯游从之 宛在水中央 \n ### 蒹葭凄凄 白露未晞 `
    },
    {   
        title: '采薇',
        content: `## 采薇 \n ### 采薇采薇 薇亦作止 \n ### 曰归曰归 岁亦莫止 \n ### 靡家靡室 猃狁之故 \n ### 不遑启居 猃狁之故 \n ### 采薇采薇 薇亦柔止 `
    },
    {   
        title: '静女',
        content: `## 静女 \n ### 静女其姝 俟我于城隅 \n ### 爱而不见 搔首踟蹰 \n ### 静女其娈 贻我彤管 \n ### 彤管有炜 说怿女美 \n ### 自牧归荑 洵美且异 \n ### 静女其姝 俟我于城隅 \n ### 爱而不见 搔首踟蹰 \n ### 静女其娈 贻我彤管 \n ### 彤管有炜 说怿女美 \n ### 自牧归荑 洵美且异 `
    }
]

export const videoList = [
    {
        title: 'Example1',
        src: '1.mp4'
    }
]

export const musicList = [
    {
        file: "assets/music/zhuiguangzhe.mp3",
        thumb: "assets/image/s1.jpg",
        trackName: "追光者",
        trackArtist: "岑宁儿",
        trackAlbum: "Single"
      },
      {
        file: "assets/music/kele.mp3",
        thumb: "assets/image/s2.jpg",
        trackName: "可乐",
        trackArtist: "赵紫烨",
        trackAlbum: "Single"
      },
      {
        file: "assets/music/dengnixiake.mp3",
        thumb: "assets/image/s3.jpg",
        trackName: "等你下课",
        trackArtist: "周杰伦",
        trackAlbum: "Single"
      },
      {
        file: "assets/music/tiankongzhicheng.mp3",
        thumb: "assets/image/s4.jpg",
        trackName: "天空之城",
        trackArtist: "八音盒版",
        trackAlbum: "Single"
      }
]

export const loginMd5 = {
    userName: '21232f297a57a5a743894a0e4a801fc3',//admin
    password: '21232f297a57a5a743894a0e4a801fc3'//admin
}