// //chuong 2 phan 1

// const Pdc = 15.99;//chuong 1
// const ndc = 2935;//chuong 1

// //n=ap+b 
// function positionequation(a: number, b: number, p: number, n: number): number{
//     let temp = n - (a * p) - b;
//     if (temp >= 0){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// }

// function selectBeltType(p: number, n: number): string {
//     let posD = positionequation(6000/577, -18400/577, p, n);
//     let posC = positionequation(600/23, -500/23, p, n);
//     let posB = positionequation(22000/257, -11575/257, p, n);
//     let posA = positionequation(2930/9, -460/9, p ,n);

//     if (p >= 80 && p <= 400 && n <= 800){
//         return "E";
//     }
//     else if (p >= (263/6) && p <= 200 && n >= 800 && n <= 1130){
//         return "D";
//     }
//     else if (p >= 22.3 && p <= 125 && n >= 1130 && n <= 1825){
//         return "C";
//     }
//     else if (p >= 11 && p <= 50 && n >= 1825 && n <= 3530){
//         return "B";
//     }
//     else if (p >= 2 && p <= 20 && n >= 3530 && n <= 5000){
//         return "A";
//     }
//     else if (p >= (263/6) && p <= 80 && n <= 800){
//         if (posD == 1){
//             return "D";
//         }
//         else return "E";
//     }
//     else if (p >= 22.3 && p <= (236/6) && n <= 1130){
//         if (posD == -1) return "E";
//         else if (posC == -1) return "D";
//         else return "C";
//     }
//     else if (p >= 11 && p <= 22.3 && n <= 1825){
//         if (posC == -1) return "D";
//         else if (posB == -1) return "C";
//         else return "B";
//     }
//     else if (p >= 2 && p <= 11 && n <= 3530){
//         if (posC == -1) return "D";
//         else if (posB == -1) return "C";
//         else if (posA == -1) return "B";
//         else return "A";
//     }
    
//     return "";
// }

// const result_dai = selectBeltType(Pdc, ndc);

// let bp: number = 0;
// let bo: number = 0;
// let h: number = 0;
// let yo: number = 0;
// let A: number = 0;
// let d: number = 0; 
// let qm: number = 0; //1.3.1

// if (result_dai == "A"){
//     bp = 11;
//     bo = 13;
//     h = 8;
//     yo = 2.8;
//     A = 81; 
//     d = 100;
//     qm = 0.105;
// } else if (result_dai == "B"){
//     bp = 14;
//     bo = 17;
//     h = 10.5;
//     yo = 4.0;
//     A = 138; 
//     d = 140;
//     qm = 0.178;
// } else if (result_dai == "C"){
//     bp = 19;
//     bo = 22;
//     h = 13.5;
//     yo = 4.8;
//     A = 230;
//     d = 250;
//     qm = 0.3;
// } else if (result_dai == "D"){
//     bp = 27;
//     bo = 32;
//     h = 19;
//     yo = 6.9;
//     A = 476;
//     d = 320;
// } else if (result_dai == "E"){
//     bp = 32;
//     bo = 38;
//     h = 23.5;
//     yo = 8.3;
//     A = 692;
//     d = 500;
// }
// else{
//     throw new Error("Không tìm được đai phù hợp");
// }

// //1.2
// //1.2.1
// const giatritieuchuan: number[] = [
//   63, 71, 80, 90, 100, 112, 125, 140, 160, 180, 200,
//   224, 250, 280, 315, 355, 400, 450, 500, 560, 630, 710, 800, 900, 1000
// ];

// function selectStandardValue(d1: number): number {
//     let initialIndex = -1;
//     for (let i = 0; i < giatritieuchuan.length; i++) {
//         if (giatritieuchuan[i] >= d1) {
//             initialIndex = i;
//             break;
//         }
//     }

//     if (initialIndex === -1) {
//         initialIndex = giatritieuchuan.length - 1;
//     }
//     let v1: number = 0;
//     for (let i = initialIndex; i >= 0; i--) {
//         const selectedValue = giatritieuchuan[i];
//         v1 = (Math.PI * selectedValue * n1) / 60000;
        
//         if (v1 <= 25) {
//             return selectedValue;
//         }
//     }
    
//     return giatritieuchuan[0];
// }

// //van toc dai
// const n1 = 2935; //chuong 1
// const hesotruot = 0.01; 
// let ud = 3; //chuong 1
// let d1: number = 1.2 * d;
// d1 = selectStandardValue(d1);

// function computeV1(d1: number): number {
//   return (Math.PI * d1 * n1) / 60000;
// }

// let finalD1: number = d1;
// let finalD2: number = 0;
// let finalUtt: number = 0;
// let finalError: number = 0;
// let found = false;


// outer: while (true) {
//   const v1 = computeV1(d1);
//   if (v1 > 25) {
//     throw new Error(`v1 vượt quá giới hạn cho d1 = ${d1}`);
//   }

//   const d2_computed = ud * d1 * (1 - hesotruot);

  
//   for (const candidate of giatritieuchuan) {
//     const utt = candidate / (d1 * (1 - hesotruot));
//     const error = (Math.abs(utt - ud) / ud) * 100;
    
//     if (error <= 4) {
//       finalD2 = candidate;
//       finalD1 = d1;
//       finalUtt = utt;
//       finalError = error;
//       found = true;
//       break outer; 
//     }
//   }
  
//   const currentIndex = giatritieuchuan.indexOf(d1);
//   if (currentIndex <= 0) {
//     throw new Error("Không thể hạ d1 xuống thêm để đạt yêu cầu sai số");
//   }
//   d1 = giatritieuchuan[currentIndex - 1];
  
// }

// d1 = finalD1;
// const d2 = finalD2;
// const utt = finalUtt;
// const denta_u = finalError.toFixed(2);
// const v1 = (Math.PI * d1 * n1) / 60000;

// console.log("Giá trị cuối cùng của d1: " + d1);
// console.log("Giá trị cuối cùng của d2: " + d2);
// console.log("Tỷ số truyền thực tế (utt): " + utt);
// console.log("Sai số tỷ số truyền (denta_u): " + denta_u + "%");

// //1.2.3
 
// const asb = d2;
// let Lsb = 2 * asb + ((Math.PI * (d1 + d2)) / 2) + (((d1 - d2) * (d1 - d2)) / (4*asb));
// console.log("Gia tri Lsb " + Lsb);

// const chieudaitieuchuan: number[] = [
//   400, 450, 500, 560, 630, 710, 800, 900, 1000, 1120,
//   1250, 1400, 1600, 1800, 2000, 2240, 2500, 2800, 3150, 3550,
//   4000, 5000, 5600, 6300, 7100, 8000, 9000, 10000, 11200, 12500,
//   14000, 16000, 18000
// ];

// console.log("Gia tri v1 " + v1);

// const dk_L_thoa = (v1 / 10) * 1000;
// let vitricuaL: number = 0;
// for(let i = 0 ; i < chieudaitieuchuan.length; i++){
//     if (chieudaitieuchuan[i] > Lsb && chieudaitieuchuan[i] > dk_L_thoa){
//         Lsb = chieudaitieuchuan[i];
//         vitricuaL = i;
//         break;
//     }
// }

// console.log("Gia tri Lsb " + Lsb);


// //so vong dai trong 1 s

// let i_kq = v1 / Lsb;

// let k = Lsb - ((Math.PI * (d1 + d2)) / 2);
// let denta = (d2 - d1)/2;

// let a = (k + Math.sqrt(k * k - 8 * denta * denta)) / 4;


// while (a < (0.7*(d1 + d2)) && a > (2*(d1 + d2))){
//     for(let j = vitricuaL + 1; j < chieudaitieuchuan.length; j++){
//         if (chieudaitieuchuan[j] > Lsb && chieudaitieuchuan[j] > dk_L_thoa){
//             Lsb = chieudaitieuchuan[j];
//             vitricuaL = j;
//             i_kq = v1 / Lsb;
//             k = Lsb - ((Math.PI * (d1 + d2)) / 2);
//             denta = (d2 - d1)/2;
//             a = (k + Math.sqrt(k * k - 8 * denta * denta)) / 4;
//             break;
//         }
//     }
// }

// console.log("Gia tri a " + a);

// //1.2.4
// const alpha1 = 180 - 57 * ((d2 - d1)/a)

// console.log("Gia tri alpha " + alpha1);

// //1.2.5
// const Cv = 1 - 0.05*((0.01 * v1 * v1) - 1);
// console.log("Gia tri Cv " + Cv);

// const C_alpha = 1.24 * (1 - Math.exp(-(alpha1/110)));
// console.log("Gia tri Calpha " + C_alpha);

// let Cu: number = 0;

// if (ud == 1){
//     Cu = 1;
// } else if (ud == 1.1){
//     Cu = 1.04;
// } else if (ud == 1.2){
//     Cu = 1.07;
// } else if (ud == 1.4){
//     Cu = 1.1;
// } else if (ud == 1.8){
//     Cu = 1.12;
// } else if (ud >= 2.5){
//     Cu = 1.14;
// }

// console.log("Gia tri Cu " + Cu);

// const Cz = 1;
// const Cr = 0.85;

// const CL = Math.pow((Lsb / 2240), 1/6);
// console.log("Gia tri CL " + CL);

// const xx: number = 2.25 + (v1 - 10) * ((2.61 - 2.25) / 5);
// const xx_rounded: number = Math.round(xx * 100) / 100;

// const yy: number = 3.38 + (v1 - 10) * ((4.61 - 3.38) / 5);
// const yy_rounded: number = Math.round(yy * 100) / 100;

// let P0: number = xx_rounded + (d1 - 125) * ((yy_rounded - xx_rounded) / (180 - 125));
// P0 = Math.round(P0 * 100) / 100;
// //const P0 = 4.064; //test
// console.log("Gia tri P0 " + P0);


// const z = Math.ceil(Pdc / (P0 * Cv * C_alpha * Cu * CL * Cz * Cr));

// console.log("Gia tri z " + z);

// //1.2.6
// let t: number = 0;
// let e: number = 0;
// let h0: number = 0;
// if (result_dai == "A"){
//     t = 15;
//     e = 10;
//     h0 = 3.3;
// } else if (result_dai == "B"){
//     t = 19;
//     h0 = 4.2;
//     e = 12.5;
// } else if (result_dai == "C"){
//     t = 25.5;
//     h0 = 5.7;
//     e = 17;
// }

// console.log("Gia tri t " + t);

// const B = (z - 1)*t + 2* e;

// console.log("Gia tri B " + B);

// const da1 = d1 + 2*h0;
// const da2 = d2 + 2*h0;
// console.log("Gia tri da1 " + da1);
// console.log("Gia tri da2 " + da2);

// //1.3
// //1.3.1
// const Fv = qm * v1 * v1;
// console.log("Gia tri Fv " + Fv);

// //1.3.2
// const Kd = 1.1;
// const F0 = ((780 * Pdc * Kd) / (v1 * C_alpha * z)) + Fv;
// console.log("Gia tri F0 " + F0);

// const luccangdaydaiF0 = F0 / z;
// console.log("Gia tri luccangdaydaiF0 " + luccangdaydaiF0);

// //1.3.3
// const Fr = 2*F0*z*Math.sin(((alpha1 * Math.PI) / 180) / 2);
// console.log("Gia tri Fr " + Fr);

// //1.3.4
// const Ft = 1000 * Pdc / v1;
// console.log("Gia tri Ft " + Ft);
// const luccangdaydaiFt = Ft / z;
// console.log("Gia tri luccangdaydaiFt " + luccangdaydaiFt);

// //1.3.5
// const E = 100;
// const sigma_max = (F0 / A) + 0.5 * (Ft / A) + (Fv / A) + ((2* yo/ d1) * E)
// console.log("Gia tri sigma_max " + sigma_max);

// //1.3.6

// const Lhdai = (Math.pow((9/sigma_max), 8) * Math.pow(10, 7)) / (2* 3600 * 9.8);
// console.log("Gia tri Ldai " + Lhdai);

// const beltParamters = {
//     d1: d1,
//     d2: d2,
//     a: a,
//     L: Lsb,
//     goc_om_dai: alpha1,
//     z: z,
//     B: B,
//     F0: F0,
//     Fr: Fr
// }

// console.log(beltParamters);

