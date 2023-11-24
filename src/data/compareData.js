// const supplierInfoFormDB = {
const res = {
  company: "平安人寿",
  companySimple: "",
  stockDataStart: "",
  stockData: "2027-11-02 00:00:00",
};
const dataFormSupplierInput = {
  company: "中国人寿",
  companySimple: "中寿",
  stockData: "2027-11-01 00:00:00",
  stockDataStart: "2020-10-01",
};

const diffAttrList = [
  {
    label: "企业名称",
    attrNameOfDB: "company",
    attrNameOfSupplier: "company",
  },
  {
    label: "企业简称（字号）",
    attrNameOfDB: "companySimple",
    attrNameOfSupplier: "companySimple",
  },
  {
    label: "营业期限",
    attrNameOfDB: ["stockDataStart", "stockData"],
    attrNameOfSupplier: ["stockDataStart", "stockData"],
  },
];

export { res, dataFormSupplierInput, diffAttrList };
