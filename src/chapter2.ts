// interface BanhRang {
//   HB: number;
//   usb: number;
//   usch: number;
// }

class Chapter2 {
  //Chọn vật liệu
  public section3_1 = () => {
    //Bánh răng nhỏ
    const HB1 = 270; //Độ rắn HB
    const usb1 = 700; //Giới hạn bền
    const usch1 = 950; //Giới hạn chảy

    const HB2 = 245; //Bánh răng lớn
    const usb2 = 850; //Giới hạn bền
    const usch2 = 550; //Giới hạn chảy

    return {
      B1: {
        HB1,
        usb1,
        usch1,
      },
      B2: {
        HB2,
        usb2,
        usch2,
      },
    };
  };

  //Xác định ứng suất cho phép
  public section3_2 = (B1: object, B2: object) => {
    const KFC = 1; //hệ số xét đến ảnh hưởng đặt tải
    const ZrZvKxh = 1;
    const YrYsKxf = 1;
  };

  public section3 = () => {};
}
