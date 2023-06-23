export type rduampurType = {
    chw_id: string;
    chw: string;
    amphoe_id: string;
    amphoe: string;
    rduhospital: string;
    rdupcu: string;
    grocerycnt: number; //จำนวนร้านชำ
    rdugrocery: number; //จำนวนร้านชำผ่านเกณฑ์
    rduampur: boolean; //ผลการผ่านเกณฑ์อำเภอ
    drugstoregpp: number; //จำนวนร้านยา GPP
    lastupdate: string;
}