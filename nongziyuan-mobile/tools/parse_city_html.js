const cheerio  = require('cheerio')

const html = `
  <div class="J_list">
   <div id="A" class="hot-trade modebox">
    <div class="hd">
     A
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/abagaqi" data-id="3568">阿巴嘎旗</a> </li>
      <li> <a href="/aba" data-id="255">阿坝</a> </li>
      <li> <a href="/abaxian" data-id="1704">阿坝县</a> </li>
      <li> <a href="/aershan" data-id="680">阿尔山市</a> </li>
      <li> <a href="/aheqi" data-id="2238">阿合奇县</a> </li>
      <li> <a href="/akesai" data-id="2107">阿克塞哈萨克族自治县</a> </li>
      <li> <a href="/akesudiqu" data-id="332">阿克苏地区</a> </li>
      <li> <a href="/akesu" data-id="2213">阿克苏市</a> </li>
      <li> <a href="/aketao" data-id="2237">阿克陶县</a> </li>
      <li> <a href="/alaer" data-id="389">阿拉尔</a> </li>
      <li> <a href="/alashankoushi" data-id="3594">阿拉山口市</a> </li>
      <li> <a href="/alashan" data-id="57">阿拉善</a> </li>
      <li> <a href="/ayouqi" data-id="3578">阿拉善右旗</a> </li>
      <li> <a href="/azuoqi" data-id="3577">阿拉善左旗</a> </li>
      <li> <a href="/aletaidiqu" data-id="338">阿勒泰地区</a> </li>
      <li> <a href="/aletai" data-id="2275">阿勒泰市</a> </li>
      <li> <a href="/ali" data-id="288">阿里</a> </li>
      <li> <a href="/alishan" data-id="2503">阿里山</a> </li>
      <li> <a href="/aluqinqi" data-id="3531">阿鲁科尔沁旗</a> </li>
      <li> <a href="/arongqi" data-id="3550">阿荣旗</a> </li>
      <li> <a href="/citylist?c=A&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="B" class="hot-trade modebox">
    <div class="hd">
     B
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/basu" data-id="1955">八宿县</a> </li>
      <li> <a href="/bachu" data-id="2211">巴楚县</a> </li>
      <li> <a href="/badong" data-id="1371">巴东县</a> </li>
      <li> <a href="/balikun" data-id="2235">巴里坤哈萨克自治县</a> </li>
      <li> <a href="/bayouqi" data-id="3533">巴林右旗</a> </li>
      <li> <a href="/bazuoqi" data-id="3532">巴林左旗</a> </li>
      <li> <a href="/bama" data-id="1591">巴马瑶族自治县</a> </li>
      <li> <a href="/baqing" data-id="1947">巴青县</a> </li>
      <li> <a href="/batang" data-id="1720">巴塘县</a> </li>
      <li> <a href="/bayannaoer" data-id="56">巴彦淖尔</a> </li>
      <li> <a href="/bayan" data-id="769">巴彦县</a> </li>
      <li> <a href="/linzhixian" data-id="1960">巴宜区</a> </li>
      <li> <a href="/bayinguoleng" data-id="331">巴音郭楞</a> </li>
      <li> <a href="/bazhong" data-id="253">巴中</a> </li>
      <li> <a href="/bazhouqu" data-id="3510">巴州区</a> </li>
      <li> <a href="/bazhou" data-id="489">霸州市</a> </li>
      <li> <a href="/baicheng" data-id="77">白城</a> </li>
      <li> <a href="/baihe" data-id="2080">白河县</a> </li>
      <li> <a href="/bailang" data-id="1987">白朗县</a> </li>
      <li> <a href="/baisha" data-id="390">白沙</a> </li>
      <li> <a href="/citylist?c=B&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="C" class="hot-trade modebox">
    <div class="hd">
     C
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/cangxian" data-id="532">沧县</a> </li>
      <li> <a href="/changyuanxian" data-id="1873">沧源佤族自治县</a> </li>
      <li> <a href="/cangzhou" data-id="32">沧州</a> </li>
      <li> <a href="/cangnan" data-id="911">苍南</a> </li>
      <li> <a href="/caofei" data-id="488">曹妃甸</a> </li>
      <li> <a href="/cangwu" data-id="1554">苍梧县</a> </li>
      <li> <a href="/cangxi" data-id="1617">苍溪县</a> </li>
      <li> <a href="/caoxian" data-id="1201">曹县</a> </li>
      <li> <a href="/ceheng" data-id="1813">册亨县</a> </li>
      <li> <a href="/cele" data-id="2227">策勒县</a> </li>
      <li> <a href="/cengong" data-id="1784">岑巩县</a> </li>
      <li> <a href="/cenxi" data-id="1553">岑溪市</a> </li>
      <li> <a href="/chaling" data-id="1402">茶陵县</a> </li>
      <li> <a href="/chabuchaer" data-id="2267">察布查尔锡伯自治县</a> </li>
      <li> <a href="/chayouhouqi" data-id="3563">察哈尔右翼后旗</a> </li>
      <li> <a href="/chayouqianqi" data-id="3561">察哈尔右翼前旗</a> </li>
      <li> <a href="/chayouzhongqi" data-id="3562">察哈尔右翼中旗</a> </li>
      <li> <a href="/chaya" data-id="1954">察雅县</a> </li>
      <li> <a href="/chayu" data-id="1965">察隅县</a> </li>
      <li> <a href="/changdudiqu" data-id="284">昌都市</a> </li>
      <li> <a href="/citylist?c=C&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="D" class="hot-trade modebox">
    <div class="hd">
     D
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/daerhanqi" data-id="3530">达尔罕茂明安联合旗</a> </li>
      <li> <a href="/dalateqi" data-id="3543">达拉特旗</a> </li>
      <li> <a href="/dari" data-id="2176">达日县</a> </li>
      <li> <a href="/dazhou" data-id="251">达州</a> </li>
      <li> <a href="/dazi" data-id="1937">达孜县</a> </li>
      <li> <a href="/daan" data-id="728">大安市</a> </li>
      <li> <a href="/dachang" data-id="496">大厂回族自治县</a> </li>
      <li> <a href="/dacheng" data-id="494">大城县</a> </li>
      <li> <a href="/dafang" data-id="1763">大方县</a> </li>
      <li> <a href="/dafeng" data-id="846">大丰区</a> </li>
      <li> <a href="/daguan" data-id="1847">大关县</a> </li>
      <li> <a href="/dahua" data-id="1593">大化瑶族自治县</a> </li>
      <li> <a href="/dalishi" data-id="3590">大理市</a> </li>
      <li> <a href="/dali" data-id="277">大理州</a> </li>
      <li> <a href="/dalixian" data-id="2025">大荔县</a> </li>
      <li> <a href="/dalian" data-id="19">大连</a> </li>
      <li> <a href="/daming" data-id="563">大名县</a> </li>
      <li> <a href="/daning" data-id="642">大宁县</a> </li>
      <li> <a href="/dapu" data-id="1485">大埔县</a> </li>
      <li> <a href="/daqing" data-id="84">大庆</a> </li>
      <li> <a href="/citylist?c=D&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="E" class="hot-trade modebox">
    <div class="hd">
     E
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/ebian" data-id="1651">峨边彝族自治县</a> </li>
      <li> <a href="/emeishan" data-id="1646">峨眉山市</a> </li>
      <li> <a href="/eshan" data-id="1837">峨山彝族自治县</a> </li>
      <li> <a href="/eerguna" data-id="671">额尔古纳市</a> </li>
      <li> <a href="/ejinaqi" data-id="3579">额济纳旗</a> </li>
      <li> <a href="/emin" data-id="2270">额敏县</a> </li>
      <li> <a href="/eerduosi" data-id="51">鄂尔多斯</a> </li>
      <li> <a href="/elunchunqi" data-id="3552">鄂伦春自治旗</a> </li>
      <li> <a href="/eqi" data-id="3546">鄂托克旗</a> </li>
      <li> <a href="/eqianqi" data-id="3545">鄂托克前旗</a> </li>
      <li> <a href="/ewenkeqi" data-id="3553">鄂温克族自治旗</a> </li>
      <li> <a href="/ezhou" data-id="181">鄂州</a> </li>
      <li> <a href="/enping" data-id="1503">恩平市</a> </li>
      <li> <a href="/enshizhou" data-id="188">恩施</a> </li>
      <li> <a href="/enshi" data-id="1368">恩施市</a> </li>
      <li> <a href="/eryuan" data-id="1892">洱源县</a> </li>
      <li> <a href="/erlianhaote" data-id="682">二连浩特市</a> </li>
      <li> <a href="/citylist?c=E&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="F" class="hot-trade modebox">
    <div class="hd">
     F
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/fakun" data-id="687">法库县</a> </li>
      <li> <a href="/fancang" data-id="948">繁昌县</a> </li>
      <li> <a href="/fanzhi" data-id="611">繁峙县</a> </li>
      <li> <a href="/fanxian" data-id="1252">范县</a> </li>
      <li> <a href="/fangcheng" data-id="1282">方城县</a> </li>
      <li> <a href="/fangshan" data-id="652">方山县</a> </li>
      <li> <a href="/fangchenggang" data-id="229">防城港</a> </li>
      <li> <a href="/fangxian" data-id="1319">房县</a> </li>
      <li> <a href="/feicheng" data-id="1192">肥城市</a> </li>
      <li> <a href="/feidong" data-id="921">肥东县</a> </li>
      <li> <a href="/feixi" data-id="922">肥西县</a> </li>
      <li> <a href="/feixiang" data-id="566">肥乡县</a> </li>
      <li> <a href="/feixian" data-id="1177">费县</a> </li>
      <li> <a href="/fenyi" data-id="1056">分宜县</a> </li>
      <li> <a href="/fenxi" data-id="645">汾西县</a> </li>
      <li> <a href="/fengyang" data-id="647">汾阳市</a> </li>
      <li> <a href="/fengchengshi" data-id="1098">丰城市</a> </li>
      <li> <a href="/fengdu" data-id="2290">丰都县</a> </li>
      <li> <a href="/fengning" data-id="474">丰宁满族自治县</a> </li>
      <li> <a href="/fengshun" data-id="1486">丰顺县</a> </li>
      <li> <a href="/citylist?c=F&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="G" class="hot-trade modebox">
    <div class="hd">
     G
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/geer" data-id="1997">噶尔县</a> </li>
      <li> <a href="/gaize" data-id="2002">改则县</a> </li>
      <li> <a href="/gaizhou" data-id="714">盖州市</a> </li>
      <li> <a href="/gande" data-id="2175">甘德县</a> </li>
      <li> <a href="/gangu" data-id="2096">甘谷县</a> </li>
      <li> <a href="/ganluo" data-id="1736">甘洛县</a> </li>
      <li> <a href="/gannanzhou" data-id="312">甘南</a> </li>
      <li> <a href="/gannan" data-id="778">甘南县</a> </li>
      <li> <a href="/ganquan" data-id="2014">甘泉县</a> </li>
      <li> <a href="/ganzixian" data-id="1713">甘孜县</a> </li>
      <li> <a href="/ganzi" data-id="256">甘孜州</a> </li>
      <li> <a href="/ganxian" data-id="1062">赣县</a> </li>
      <li> <a href="/ganyu" data-id="834">赣榆区</a> </li>
      <li> <a href="/ganzhou" data-id="140">赣州</a> </li>
      <li> <a href="/gangcha" data-id="2167">刚察县</a> </li>
      <li> <a href="/gangba" data-id="1996">岗巴县</a> </li>
      <li> <a href="/gaolan" data-id="2088">皋兰县</a> </li>
      <li> <a href="/gaoan" data-id="1100">高安市</a> </li>
      <li> <a href="/gaopaidian" data-id="500">高碑店市</a> </li>
      <li> <a href="/tulufan" data-id="2230">高昌区</a> </li>
      <li> <a href="/citylist?c=G&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="H" class="hot-trade modebox">
    <div class="hd">
     H
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/habahe" data-id="2279">哈巴河县</a> </li>
      <li> <a href="/haerbin" data-id="79">哈尔滨</a> </li>
      <li> <a href="/hamidiqu" data-id="328">哈密地区</a> </li>
      <li> <a href="/hami" data-id="2233">哈密市</a> </li>
      <li> <a href="/haian" data-id="862">海安县</a> </li>
      <li> <a href="/haibei" data-id="315">海北</a> </li>
      <li> <a href="/haicheng" data-id="707">海城市</a> </li>
      <li> <a href="/haidong" data-id="314">海东</a> </li>
      <li> <a href="/haifeng" data-id="1498">海丰县</a> </li>
      <li> <a href="/haikou" data-id="23">海口</a> </li>
      <li> <a href="/hailin" data-id="811">海林市</a> </li>
      <li> <a href="/hailun" data-id="817">海伦市</a> </li>
      <li> <a href="/haimen" data-id="857">海门市</a> </li>
      <li> <a href="/hainanzhou" data-id="411">海南州</a> </li>
      <li> <a href="/haining" data-id="877">海宁市</a> </li>
      <li> <a href="/haixi" data-id="320">海西</a> </li>
      <li> <a href="/haixing" data-id="535">海兴县</a> </li>
      <li> <a href="/haiyan" data-id="880">海盐县</a> </li>
      <li> <a href="/haiyanxian" data-id="2165">海晏县</a> </li>
      <li> <a href="/haiyang" data-id="1154">海阳市</a> </li>
      <li> <a href="/citylist?c=H&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="I" class="hot-trade modebox">
    <div class="hd">
     I
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/ilan" data-id="3173">宜兰</a> </li>
      <li> <a href="/citylist?c=I&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="J" class="hot-trade modebox">
    <div class="hd">
     J
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/jiashi" data-id="2210">伽师县</a> </li>
      <li> <a href="/jidong" data-id="808">鸡东县</a> </li>
      <li> <a href="/jixi" data-id="81">鸡西</a> </li>
      <li> <a href="/jizhe" data-id="569">鸡泽县</a> </li>
      <li> <a href="/jishishan" data-id="2147">积石山保安族东乡族撒拉族自治县</a> </li>
      <li> <a href="/keelung" data-id="3170">基隆</a> </li>
      <li> <a href="/jixixian" data-id="980">绩溪县</a> </li>
      <li> <a href="/jian" data-id="141">吉安</a> </li>
      <li> <a href="/jianxian" data-id="1108">吉安县</a> </li>
      <li> <a href="/jilin" data-id="71">吉林</a> </li>
      <li> <a href="/jilong" data-id="1993">吉隆县</a> </li>
      <li> <a href="/jimumai" data-id="2281">吉木乃县</a> </li>
      <li> <a href="/jimusaer" data-id="2249">吉木萨尔县</a> </li>
      <li> <a href="/jishou" data-id="1456">吉首市</a> </li>
      <li> <a href="/jishui" data-id="1109">吉水县</a> </li>
      <li> <a href="/lfjixian" data-id="639">吉县</a> </li>
      <li> <a href="/jianshi" data-id="747">集安市</a> </li>
      <li> <a href="/sysjixianxian" data-id="802">集贤县</a> </li>
      <li> <a href="/jinan" data-id="22">济南</a> </li>
      <li> <a href="/jining" data-id="150">济宁</a> </li>
      <li> <a href="/citylist?c=J&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="K" class="hot-trade modebox">
    <div class="hd">
     K
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/kaohsiung" data-id="2337">高雄</a> </li>
      <li> <a href="/keelung" data-id="3170">基隆</a> </li>
      <li> <a href="/keqinqi" data-id="3536">喀喇沁旗</a> </li>
      <li> <a href="/kalaqinzuiyi" data-id="692">喀喇沁左翼蒙古族自治县</a> </li>
      <li> <a href="/kashidiqu" data-id="334">喀什地区</a> </li>
      <li> <a href="/kashi" data-id="2201">喀什市</a> </li>
      <li> <a href="/changdu" data-id="1949">卡若区</a> </li>
      <li> <a href="/kaifeng" data-id="161">开封</a> </li>
      <li> <a href="/kaihua" data-id="890">开化县</a> </li>
      <li> <a href="/kaijian" data-id="1676">开江县</a> </li>
      <li> <a href="/kailu" data-id="666">开鲁县</a> </li>
      <li> <a href="/kaiping" data-id="1505">开平市</a> </li>
      <li> <a href="/kaixian" data-id="2293">开县</a> </li>
      <li> <a href="/kaiyang" data-id="1741">开阳县</a> </li>
      <li> <a href="/kaiyuan" data-id="696">开原市</a> </li>
      <li> <a href="/kaiyuanshi" data-id="1913">开远市</a> </li>
      <li> <a href="/kaili" data-id="1779">凯里市</a> </li>
      <li> <a href="/kangbao" data-id="458">康保县</a> </li>
      <li> <a href="/kangding" data-id="383">康定市</a> </li>
      <li> <a href="/kangle" data-id="2142">康乐县</a> </li>
      <li> <a href="/citylist?c=K&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="L" class="hot-trade modebox">
    <div class="hd">
     L
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/lasa" data-id="283">拉萨</a> </li>
      <li> <a href="/lazi" data-id="1984">拉孜县</a> </li>
      <li> <a href="/laian" data-id="942">来安县</a> </li>
      <li> <a href="/laibin" data-id="398">来宾</a> </li>
      <li> <a href="/laifeng" data-id="1374">来凤县</a> </li>
      <li> <a href="/laishui" data-id="510">涞水县</a> </li>
      <li> <a href="/laiyuan" data-id="505">涞源县</a> </li>
      <li> <a href="/laiwu" data-id="154">莱芜</a> </li>
      <li> <a href="/laiyang" data-id="1156">莱阳市</a> </li>
      <li> <a href="/laizhou" data-id="1157">莱州市</a> </li>
      <li> <a href="/lankao" data-id="1259">兰考县</a> </li>
      <li> <a href="/lanling" data-id="1172">兰陵县</a> </li>
      <li> <a href="/lanping" data-id="1882">兰坪白族普米族自治县</a> </li>
      <li> <a href="/lanxixian" data-id="819">兰西县</a> </li>
      <li> <a href="/lanxi" data-id="892">兰溪市</a> </li>
      <li> <a href="/lanzhou" data-id="299">兰州</a> </li>
      <li> <a href="/langao" data-id="2076">岚皋县</a> </li>
      <li> <a href="/lanxian" data-id="654">岚县</a> </li>
      <li> <a href="/lanshan" data-id="1427">蓝山县</a> </li>
      <li> <a href="/lantian" data-id="2004">蓝田县</a> </li>
      <li> <a href="/citylist?c=L&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="M" class="hot-trade modebox">
    <div class="hd">
     M
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/macau" data-id="342">澳门</a> </li>
      <li> <a href="/macheng" data-id="1337">麻城市</a> </li>
      <li> <a href="/majian" data-id="1793">麻江县</a> </li>
      <li> <a href="/malipo" data-id="1927">麻栗坡县</a> </li>
      <li> <a href="/mayang" data-id="1447">麻阳苗族自治县</a> </li>
      <li> <a href="/maanshan" data-id="114">马鞍山</a> </li>
      <li> <a href="/mabian" data-id="1652">马边彝族自治县</a> </li>
      <li> <a href="/maerkang" data-id="1694">马尔康区</a> </li>
      <li> <a href="/maguan" data-id="1928">马关县</a> </li>
      <li> <a href="/maliu" data-id="1825">马龙县</a> </li>
      <li> <a href="/mashan" data-id="1534">马山县</a> </li>
      <li> <a href="/maduo" data-id="2178">玛多县</a> </li>
      <li> <a href="/manasi" data-id="2247">玛纳斯县</a> </li>
      <li> <a href="/maqin" data-id="2173">玛沁县</a> </li>
      <li> <a href="/maqu" data-id="2153">玛曲县</a> </li>
      <li> <a href="/maigaiti" data-id="2208">麦盖提县</a> </li>
      <li> <a href="/mancheng" data-id="501">满城区</a> </li>
      <li> <a href="/manzhouli" data-id="667">满洲里市</a> </li>
      <li> <a href="/mangkang" data-id="1957">芒康县</a> </li>
      <li> <a href="/luxishi" data-id="1874">芒市</a> </li>
      <li> <a href="/citylist?c=M&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="N" class="hot-trade modebox">
    <div class="hd">
     N
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/neihuang" data-id="1249">内黄县</a> </li>
      <li> <a href="/neijiang" data-id="245">内江</a> </li>
      <li> <a href="/neiqiu" data-id="546">内丘县</a> </li>
      <li> <a href="/neixiang" data-id="1285">内乡县</a> </li>
      <li> <a href="/napo" data-id="1580">那坡县</a> </li>
      <li> <a href="/naqu" data-id="287">那曲</a> </li>
      <li> <a href="/naquxian" data-id="1939">那曲县</a> </li>
      <li> <a href="/nayong" data-id="1767">纳雍县</a> </li>
      <li> <a href="/naidong" data-id="1967">乃东区</a> </li>
      <li> <a href="/naimanqi" data-id="3541">奈曼旗</a> </li>
      <li> <a href="/nanan" data-id="1010">南安市</a> </li>
      <li> <a href="/nanao" data-id="1492">南澳县</a> </li>
      <li> <a href="/nanbu" data-id="1631">南部县</a> </li>
      <li> <a href="/nanchang" data-id="134">南昌</a> </li>
      <li> <a href="/nancheng" data-id="1088">南城县</a> </li>
      <li> <a href="/nanchong" data-id="247">南充</a> </li>
      <li> <a href="/nanchuan" data-id="4431">南川区</a> </li>
      <li> <a href="/nandaihe" data-id="3595">南戴河</a> </li>
      <li> <a href="/nandan" data-id="1587">南丹县</a> </li>
      <li> <a href="/nanfeng" data-id="1090">南丰县</a> </li>
      <li> <a href="/citylist?c=N&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="P" class="hot-trade modebox">
    <div class="hd">
     P
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/panzhihua" data-id="239">攀枝花</a> </li>
      <li> <a href="/panjin" data-id="66">盘锦</a> </li>
      <li> <a href="/panshan" data-id="716">盘山县</a> </li>
      <li> <a href="/panxian" data-id="1744">盘县</a> </li>
      <li> <a href="/panan" data-id="897">磐安县</a> </li>
      <li> <a href="/panshi" data-id="736">磐石市</a> </li>
      <li> <a href="/peixian" data-id="832">沛县</a> </li>
      <li> <a href="/pengshan" data-id="1683">彭山区</a> </li>
      <li> <a href="/pengshui" data-id="2300">彭水苗族土家族自治县</a> </li>
      <li> <a href="/pengyang" data-id="2199">彭阳县</a> </li>
      <li> <a href="/pengze" data-id="1051">彭泽县</a> </li>
      <li> <a href="/pengzhou" data-id="1605">彭州市</a> </li>
      <li> <a href="/pengan" data-id="1633">蓬安县</a> </li>
      <li> <a href="/penglai" data-id="1158">蓬莱市</a> </li>
      <li> <a href="/pengxi" data-id="1640">蓬溪县</a> </li>
      <li> <a href="/Penghu" data-id="15242">澎湖</a> </li>
      <li> <a href="/pizhou" data-id="828">邳州市</a> </li>
      <li> <a href="/pishan" data-id="2225">皮山县</a> </li>
      <li> <a href="/pixian" data-id="1610">郫县</a> </li>
      <li> <a href="/pianguan" data-id="619">偏关县</a> </li>
      <li> <a href="/citylist?c=P&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="Q" class="hot-trade modebox">
    <div class="hd">
     Q
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/jianwei" data-id="1647">犍为县</a> </li>
      <li> <a href="/qitaihe" data-id="87">七台河</a> </li>
      <li> <a href="/bijie" data-id="1762">七星关区</a> </li>
      <li> <a href="/qixia" data-id="1153">栖霞市</a> </li>
      <li> <a href="/qidongxian" data-id="1413">祁东县</a> </li>
      <li> <a href="/qilian" data-id="2166">祁连县</a> </li>
      <li> <a href="/qimen" data-id="962">祁门县</a> </li>
      <li> <a href="/qixian" data-id="627">祁县</a> </li>
      <li> <a href="/qiyang" data-id="1430">祁阳县</a> </li>
      <li> <a href="/qihe" data-id="1135">齐河县</a> </li>
      <li> <a href="/qiqihaer" data-id="80">齐齐哈尔</a> </li>
      <li> <a href="/qishan" data-id="2043">岐山县</a> </li>
      <li> <a href="/qitai" data-id="2248">奇台县</a> </li>
      <li> <a href="/hbqixian" data-id="1244">淇县</a> </li>
      <li> <a href="/qichun" data-id="1343">蕲春县</a> </li>
      <li> <a href="/qidong" data-id="858">启东市</a> </li>
      <li> <a href="/kfqixian" data-id="1255">杞县</a> </li>
      <li> <a href="/qiandaohu" data-id="3602">千岛湖</a> </li>
      <li> <a href="/qianyang" data-id="2047">千阳县</a> </li>
      <li> <a href="/qianan" data-id="482">迁安市</a> </li>
      <li> <a href="/citylist?c=Q&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="R" class="hot-trade modebox">
    <div class="hd">
     R
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/riyuetan" data-id="2504">南投</a> </li>
      <li> <a href="/rangtang" data-id="1703">壤塘县</a> </li>
      <li> <a href="/raohe" data-id="805">饶河县</a> </li>
      <li> <a href="/raoping" data-id="1491">饶平县</a> </li>
      <li> <a href="/raoyang" data-id="523">饶阳县</a> </li>
      <li> <a href="/renbu" data-id="1988">仁布县</a> </li>
      <li> <a href="/renhua" data-id="1474">仁化县</a> </li>
      <li> <a href="/renhuai" data-id="1746">仁怀市</a> </li>
      <li> <a href="/renshou" data-id="1682">仁寿县</a> </li>
      <li> <a href="/renqiu" data-id="529">任丘市</a> </li>
      <li> <a href="/renxian" data-id="549">任县</a> </li>
      <li> <a href="/rikazediqu" data-id="286">日喀则</a> </li>
      <li> <a href="/ritou" data-id="2000">日土县</a> </li>
      <li> <a href="/rizhao" data-id="153">日照</a> </li>
      <li> <a href="/rongcang" data-id="2286">荣昌区</a> </li>
      <li> <a href="/rongcheng" data-id="1161">荣成</a> </li>
      <li> <a href="/rongxianxian" data-id="1653">荣县</a> </li>
      <li> <a href="/rongchengxian" data-id="3517">容城县</a> </li>
      <li> <a href="/rongxian" data-id="1561">容县</a> </li>
      <li> <a href="/rongjian" data-id="1790">榕江县</a> </li>
      <li> <a href="/citylist?c=R&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="S" class="hot-trade modebox">
    <div class="hd">
     S
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/danxian" data-id="1204">单县</a> </li>
      <li> <a href="/sagaxian" data-id="1995">萨嘎县</a> </li>
      <li> <a href="/sajia" data-id="1983">萨迦县</a> </li>
      <li> <a href="/sandu" data-id="1806">三都水族自治县</a> </li>
      <li> <a href="/sanhe" data-id="490">三河市</a> </li>
      <li> <a href="/sanjiang" data-id="1551">三江侗族自治县</a> </li>
      <li> <a href="/sanmenxia" data-id="171">三门峡</a> </li>
      <li> <a href="/sanmen" data-id="900">三门县</a> </li>
      <li> <a href="/sanming" data-id="128">三明</a> </li>
      <li> <a href="/sanqingshan" data-id="3514">三清山</a> </li>
      <li> <a href="/sansha" data-id="2310">三沙</a> </li>
      <li> <a href="/sansui" data-id="1782">三穗县</a> </li>
      <li> <a href="/santai" data-id="1619">三台县</a> </li>
      <li> <a href="/sanxia" data-id="3516">三峡</a> </li>
      <li> <a href="/sanya" data-id="345">三亚</a> </li>
      <li> <a href="/sanyuan" data-id="2032">三原县</a> </li>
      <li> <a href="/sangri" data-id="1970">桑日县</a> </li>
      <li> <a href="/sangzhi" data-id="1381">桑植县</a> </li>
      <li> <a href="/rikaze" data-id="1979">桑珠孜区</a> </li>
      <li> <a href="/seda" data-id="1718">色达县</a> </li>
      <li> <a href="/citylist?c=S&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="T" class="hot-trade modebox">
    <div class="hd">
     T
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/tachengdiqu" data-id="337">塔城地区</a> </li>
      <li> <a href="/tacheng" data-id="2268">塔城市</a> </li>
      <li> <a href="/tahe" data-id="825">塔河县</a> </li>
      <li> <a href="/tashikuergan" data-id="2212">塔什库尔干塔吉克自治县</a> </li>
      <li> <a href="/taianxian" data-id="708">台安县</a> </li>
      <li> <a href="/taipei" data-id="2335">台北</a> </li>
      <li> <a href="/taitung" data-id="3171">台东</a> </li>
      <li> <a href="/taijian" data-id="1788">台江县</a> </li>
      <li> <a href="/tainan" data-id="2338">台南</a> </li>
      <li> <a href="/taiqian" data-id="1253">台前县</a> </li>
      <li> <a href="/taishan" data-id="1504">台山市</a> </li>
      <li> <a href="/taiwan" data-id="340">台湾</a> </li>
      <li> <a href="/taichung" data-id="2341">台中</a> </li>
      <li> <a href="/zhejiangtaizhou" data-id="108">台州</a> </li>
      <li> <a href="/taibai" data-id="2050">太白县</a> </li>
      <li> <a href="/taicang" data-id="420">太仓</a> </li>
      <li> <a href="/taigu" data-id="626">太谷县</a> </li>
      <li> <a href="/taihe" data-id="933">太和县</a> </li>
      <li> <a href="/taihu" data-id="955">太湖县</a> </li>
      <li> <a href="/taikang" data-id="1302">太康县</a> </li>
      <li> <a href="/citylist?c=T&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="W" class="hot-trade modebox">
    <div class="hd">
     W
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/wafangdian" data-id="429">瓦房店市</a> </li>
      <li> <a href="/wanan" data-id="1115">万安县</a> </li>
      <li> <a href="/wannian" data-id="1086">万年县</a> </li>
      <li> <a href="/wanning" data-id="407">万宁</a> </li>
      <li> <a href="/wanquan" data-id="464">万全县</a> </li>
      <li> <a href="/wanrongxian" data-id="3519">万荣县</a> </li>
      <li> <a href="/wanyuan" data-id="1673">万源市</a> </li>
      <li> <a href="/wanzai" data-id="1102">万载县</a> </li>
      <li> <a href="/wanzhou" data-id="4426">万州区</a> </li>
      <li> <a href="/wangqing" data-id="760">汪清县</a> </li>
      <li> <a href="/wangcang" data-id="1614">旺苍县</a> </li>
      <li> <a href="/wangdu" data-id="509">望都县</a> </li>
      <li> <a href="/wangjian" data-id="957">望江县</a> </li>
      <li> <a href="/wangkui" data-id="818">望奎县</a> </li>
      <li> <a href="/wangmo" data-id="1812">望谟县</a> </li>
      <li> <a href="/weihai" data-id="152">威海</a> </li>
      <li> <a href="/weining" data-id="1769">威宁彝族回族苗族自治县</a> </li>
      <li> <a href="/xtweixian" data-id="556">威县</a> </li>
      <li> <a href="/weixin" data-id="1852">威信县</a> </li>
      <li> <a href="/weiyuan" data-id="1643">威远县</a> </li>
      <li> <a href="/citylist?c=W&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="X" class="hot-trade modebox">
    <div class="hd">
     X
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/xunxian" data-id="1243">浚县</a> </li>
      <li> <a href="/xian" data-id="17">西安</a> </li>
      <li> <a href="/xichang" data-id="382">西昌市</a> </li>
      <li> <a href="/xichong" data-id="1635">西充县</a> </li>
      <li> <a href="/xichou" data-id="1926">西畴县</a> </li>
      <li> <a href="/xidi" data-id="3611">西递</a> </li>
      <li> <a href="/xifeng" data-id="698">西丰县</a> </li>
      <li> <a href="/xihe" data-id="2136">西和县</a> </li>
      <li> <a href="/xihua" data-id="1300">西华县</a> </li>
      <li> <a href="/xiji" data-id="2196">西吉县</a> </li>
      <li> <a href="/xijiangqianhu" data-id="3625">西江千户苗寨</a> </li>
      <li> <a href="/xilin" data-id="1583">西林县</a> </li>
      <li> <a href="/xilingxueshan" data-id="3620">西岭雪山</a> </li>
      <li> <a href="/ximeng" data-id="1866">西盟佤族自治县</a> </li>
      <li> <a href="/xining" data-id="313">西宁</a> </li>
      <li> <a href="/xiping" data-id="1310">西平县</a> </li>
      <li> <a href="/xishuangbanna" data-id="276">西双版纳</a> </li>
      <li> <a href="/xitang" data-id="3512">西塘</a> </li>
      <li> <a href="/xiwuqinqi" data-id="3572">西乌珠穆沁旗</a> </li>
      <li> <a href="/xixia" data-id="1283">西峡县</a> </li>
      <li> <a href="/citylist?c=X&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="Y" class="hot-trade modebox">
    <div class="hd">
     Y
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/yueqing" data-id="905">乐清</a> </li>
      <li> <a href="/weili" data-id="2252">尉犁县</a> </li>
      <li> <a href="/weixian" data-id="461">蔚县</a> </li>
      <li> <a href="/yakeshi" data-id="669">牙克石市</a> </li>
      <li> <a href="/yaan" data-id="252">雅安</a> </li>
      <li> <a href="/yajian" data-id="1710">雅江县</a> </li>
      <li> <a href="/yabuli" data-id="3597">亚布力</a> </li>
      <li> <a href="/yadong" data-id="1992">亚东县</a> </li>
      <li> <a href="/yantai" data-id="148">烟台</a> </li>
      <li> <a href="/yanqi" data-id="2258">焉耆回族自治县</a> </li>
      <li> <a href="/yanling" data-id="1270">鄢陵县</a> </li>
      <li> <a href="/yanan" data-id="294">延安</a> </li>
      <li> <a href="/yanbian" data-id="78">延边</a> </li>
      <li> <a href="/yanchang" data-id="2008">延长县</a> </li>
      <li> <a href="/yanchuan" data-id="2009">延川县</a> </li>
      <li> <a href="/yanji" data-id="361">延吉市</a> </li>
      <li> <a href="/yanjin" data-id="1240">延津县</a> </li>
      <li> <a href="/yanqing" data-id="435">延庆区</a> </li>
      <li> <a href="/yanhe" data-id="1777">沿河土家族自治县</a> </li>
      <li> <a href="/yanlingxian" data-id="1403">炎陵县</a> </li>
      <li> <a href="/citylist?c=Y&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
   <div id="Z" class="hot-trade modebox">
    <div class="hd">
     Z
    </div>
    <div class="home-place-list">
     <ul class="J_citylist">
      <li> <a href="/zunyixian" data-id="1747">播州区</a> </li>
      <li> <a href="/zongyang" data-id="953">枞阳县</a> </li>
      <li> <a href="/zaduo" data-id="2180">杂多县</a> </li>
      <li> <a href="/zanhuang" data-id="451">赞皇县</a> </li>
      <li> <a href="/zaoqiang" data-id="520">枣强县</a> </li>
      <li> <a href="/zaoyang" data-id="1323">枣阳市</a> </li>
      <li> <a href="/zaozhuang" data-id="146">枣庄</a> </li>
      <li> <a href="/zekun" data-id="2171">泽库县</a> </li>
      <li> <a href="/zepu" data-id="2205">泽普县</a> </li>
      <li> <a href="/zhezhou" data-id="603">泽州县</a> </li>
      <li> <a href="/zhalaiteqi" data-id="3567">扎赉特旗</a> </li>
      <li> <a href="/zalantun" data-id="668">扎兰屯市</a> </li>
      <li> <a href="/zhaluteqi" data-id="3542">扎鲁特旗</a> </li>
      <li> <a href="/zhanang" data-id="1968">扎囊县</a> </li>
      <li> <a href="/zhada" data-id="1999">札达县</a> </li>
      <li> <a href="/zhanhua" data-id="1198">沾化区</a> </li>
      <li> <a href="/zhanyi" data-id="1826">沾益区</a> </li>
      <li> <a href="/zhanjiang" data-id="210">湛江</a> </li>
      <li> <a href="/zhangbei" data-id="457">张北县</a> </li>
      <li> <a href="/zhangjiachuan" data-id="2098">张家川回族自治县</a> </li>
      <li> <a href="/citylist?c=Z&amp;returl=&amp;type=0">更多</a> </li>
     </ul>
    </div>
   </div>
  </div>
`;

const parse = () => {
  const $ =  cheerio.load(html)
  const list = {}
  $('.hot-trade').each((i, el) => {
    const id = $(el).find('.hd').text().trim()
    const cities = []
    $(el).find('li').each((i, el) => {
      const city = {
        path: $(el).find('a').attr('href'),
        name: $(el).text().trim()
      }
      cities.push(city)
    })
    list[id] = cities
  })
  console.log(JSON.stringify(list))
}


parse()
