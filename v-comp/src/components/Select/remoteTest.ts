const provincesAbbr = [
  '京', // 北京市
  '津', // 天津市
  '冀', // 河北省
  '晋', // 山西省
  '蒙', // 内蒙古自治区
  '辽', // 辽宁省
  '吉', // 吉林省
  '黑', // 黑龙江省
  '沪', // 上海市
  '苏', // 江苏省
  '浙', // 浙江省
  '皖', // 安徽省
  '闽', // 福建省
  '赣', // 江西省
  '鲁', // 山东省
  '豫', // 河南省
  '鄂', // 湖北省
  '湘', // 湖南省
  '粤', // 广东省
  '桂', // 广西壮族自治区
  '琼', // 海南省
  '渝', // 重庆市
  '川', // 四川省
  '贵', // 贵州省
  '云', // 云南省
  '藏', // 西藏自治区
  '陕', // 陕西省
  '甘', // 甘肃省
  '青', // 青海省
  '宁', // 宁夏回族自治区
  '新', // 新疆维吾尔自治区
  '港', // 香港特别行政区
  '澳', // 澳门特别行政区
  '台'  // 台湾省
];

const getProvinces = (query: string) => {
    console.log("函数被调用")
    return new Promise((resolve) => {
        if(query){
            setTimeout(() => {
                const result = provincesAbbr.filter((item) => {return item.toLowerCase().includes(query.toLowerCase())}).map((item) => {return {label:item,value:item}})
                resolve(result);
            }, 300);
        }else{
            resolve([]);
        }
        ;
    });
}

export default getProvinces;