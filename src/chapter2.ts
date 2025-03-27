interface BanhRang {
  do_ran_hb: number;
  gioi_han_ben: number;
  gioi_han_chay: number;
}

//***CÁC PHẦN PHỤ THUỘC ĐỀ BÀI***
const L = 9;
const T1 = 1;
const T2 = 0.6;
const t1 = 17;
const t2 = 15;
const T_2 = 1364084.03;
//***CÁC PHẦN PHỤ THUỘC ĐỀ BÀI***


//***CÁC PHẦN PHỤ THUỘC CHƯƠNG 1***
const n_2 = 87.66;
const n_3 = 25.05;
const u_II_III = 3.5;
//***CÁC PHẦN PHỤ THUỘC CHƯƠNG 1***

export class Chapter2 {
  //Chọn vật liệu
  public section3_1 = () => {
    //Bánh răng nhỏ
    const B1: BanhRang = {
      do_ran_hb: 270, //Độ rắn HB
      gioi_han_ben: 950, //Giới hạn bền
      gioi_han_chay: 700 //Giới hạn chảy
    }

    //Bánh răng lớn
    const B2: BanhRang = {
      do_ran_hb: 245, //Độ rắn HB
      gioi_han_ben: 850, //Giới hạn bền
      gioi_han_chay: 550 //Giới hạn chảy
    } 

    return {B1, B2}
  };

  //Xác định ứng suất cho phép
  public section3_2 = (B1: BanhRang, B2: BanhRang) => {
    const KFC = 1; //hệ số xét đến ảnh hưởng đặt tải
    const ZrZvKxh = 1;
    const YrYsKxf = 1;
    const Sh = 1.1;
    const Sf = 1.75;

    const usHlim1 = 2 * B1.do_ran_hb + 70 // ứng suất tiếp xúc cho phép bánh 1
    const usHlim2 = 2 * B2.do_ran_hb + 70 // ứng suất tiếp xúc cho phép bánh 2
    const usFlim1 = 1.8 * B1.do_ran_hb; // ứng suất uốn cho phép bánh 1
    const usFlim2 = 1.8 * B2.do_ran_hb; // ứng suất uốn cho phép bánh 2

    const mH = 6; //bậc của đường cong mỏi khi thử về tiếp xúc
    const mF = 6; //bậc của đường cong mỏi khi thử về uốn

    const NHO1 = 30 * B1.do_ran_hb ** 2.4; //số chu kỳ thay đổi ứng suất cơ sở khi thử về tiếp xúc bánh 1
    const NHO2 = 30 * B2.do_ran_hb ** 2.4; //số chu kỳ thay đổi ứng suất cơ sở khi thử về tiếp xúc bánh 2
    const NFO = 4 * 10 ** 6; //số chu kỳ thay đổi ứng suất cơ sở khi thử về uốn

    const c = 1; //số lần ăn khớp trong 1 vòng quay
    // Số chu kỳ thay đổi ứng suất tương đương, trường hợp bộ truyền làm việc với tải trọng thay đổi nhiều bậc
    const NHE1 = 60 * c * n_2 * ((T1 ** 3) * (t1 / (t1 + t2)) + (T2 ** 3) * (t2 / (t1 + t2))) * L * 8760;
    const NHE2 = 60 * c * n_3 * (T1 ** 3 * (t1 / (t1 + t2)) + T2 ** 3 * (t2 / (t1 + t2))) * L * 8760;
    const NFE1 = 60 * c * n_2 * (T1 ** 6 * (t1 / (t1 + t2)) + T2 ** 6 * (t2 / (t1 + t2))) * L * 8760;
    const NFE2 = 60 * c * n_3 * (T1 ** 6 * (t1 / (t1 + t2)) + T2 ** 6 * (t2 / (t1 + t2))) * L * 8760;
    const KHL = 1;
    const KFL = 1;

    // Ứng suất tiếp xúc cho phép: 
    const usH1 = usHlim1 * (KHL/Sh);
    const usH2 = usHlim2 * (KHL/Sh);
    const usF1 = usFlim1 * (KFL * KFC / Sf);
    const usF2 = usFlim2 * (KFL * KFC / Sf);

    const usH = Math.min(usH1, usH2)

    const usH1Max = 2.8 * B1.gioi_han_chay;
    const usH2Max = 2.8 * B2.gioi_han_chay;
    const usF1Max = 0.8 * B1.gioi_han_chay;
    console.log(B1.gioi_han_chay);
    const usF2Max = 0.8 * B2.gioi_han_chay;

    // console.log({
    //   usHlim1,
    //   usHlim2,
    //   usFlim1,
    //   usFlim2,
    //   NHO1,
    //   NHO2,
    //   NFO,
    //   NHE1,
    //   NHE2,
    //   NFE1,
    //   NFE2,
    //   usH1,
    //   usH2,
    //   usF1,
    //   usF2,
    //   usH,
    //   usH1Max,
    //   usH2Max,
    //   usF1Max,
    //   usF2Max
    // });

    return {
      ung_xuat_tiep_xuat_cho_phep: usH
    }
  };


  public section3_3 = (usH) => {
    const Ka = 49.5 // hệ số phụ thuộc vật liệu của cặp bánh răng và loại răng
    const ba = 0.4;
    const bd = 0.53 * ba * (u_II_III + 1);
    const KHB = 1.05 // hệ số kể đến sự phân bố không đều tải trọng trên chiều rộng vành răng khi tính về tiếp xúc
    const aw = Ka * (u_II_III + 1) * (((T_2 * KHB) / (usH ** 2 * u_II_III * ba)) ** (1/3)) //Khoảng cách trục
    const aw_rounded = Math.ceil(aw / 100) * 100 //Khoảng cách trục làm tròn
    const Kd = 77 //hệ số phụ thuộc vật liệu của cặp bánh răng và loại răng
    const dw1 = Kd * ((T_2 * KHB * (u_II_III + 1)) / (usH ** 2 * u_II_III * bd)) ** (1/3) //Đường kính vòng lăn bánh nhỏ 
    console.log(aw, aw_rounded, dw1);
  }

  public section3 = () => {
    const { B1, B2 } = this.section3_1();
    const { ung_xuat_tiep_xuat_cho_phep: usH } = this.section3_2(B1, B2);
    console.log(usH);
    this.section3_3(usH)
  };
}
