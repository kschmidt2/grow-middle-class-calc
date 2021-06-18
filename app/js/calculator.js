

var calculator = new Vue({
    el: '#calculator',
    data: {
      hh_income: '',
      hh_size: '',
      metro: '',
      income_array: '',
      median_income: '',
      result: '<span class="result-highlight">The U.S. middle class</span> according to 3 different definitions',
      errors: false,
      options: [{metro:"Abilene, TX","percentile_20":39389.01981,"percentile_50":67367.09165,"percentile_80":180463.7073},{metro:"Akron, OH","percentile_20":39674.3558,"percentile_50":92272.27861,"percentile_80":159771.6427},{metro:"Albany-Schenectady-Troy, NY","percentile_20":34906.01992,"percentile_50":97879.05716,"percentile_80":183084.6986},{metro:"Albuquerque, NM","percentile_20":32279.42456,"percentile_50":69013,"percentile_80":138419.4406},{metro:"Allentown-Bethlehem-Easton, PA/NJ","percentile_20":42790.3152,"percentile_50":80351.56901,"percentile_80":135833.2719},{metro:"Amarillo, TX","percentile_20":43303.00224,"percentile_50":55683,"percentile_80":112350},{metro:"Ann Arbor, MI","percentile_20":43301.27019,"percentile_50":105184.7638,"percentile_80":184881},{metro:"Appleton, WI","percentile_20":47228.6954,"percentile_50":78931.13273,"percentile_80":137783.798},{metro:"Oshkosh-Neenah, WI","percentile_20":38226.73693,"percentile_50":59755.75286,"percentile_80":146366.9535},{metro:"Asheville, NC","percentile_20":45726.14132,"percentile_50":66550.18682,"percentile_80":151472.7715},{metro:"Athens-Clark County, GA","percentile_20":21522.46333,"percentile_50":79555.75261,"percentile_80":114982.6337},{metro:"Atlanta-Sandy Springs-Marietta, GA","percentile_20":38105.11777,"percentile_50":76227.55604,"percentile_80":147279.7443},{metro:"Atlantic City, NJ","percentile_20":32042.93994,"percentile_50":71195.94845,"percentile_80":103309.6794},{metro:"Auburn-Opelika, AL","percentile_20":23400,"percentile_50":76482.86773,"percentile_80":149757.4429},{metro:"Augusta-Richmond County, GA-SC","percentile_20":29306.29966,"percentile_50":64000,"percentile_80":109985.2263},{metro:"Austin-Round Rock, TX","percentile_20":49886.52736,"percentile_50":91928.59661,"percentile_80":170990},{metro:"Bakersfield, CA","percentile_20":25561.69008,"percentile_50":51439.2846,"percentile_80":110288.2757},{metro:"Baltimore-Towson-Columbia, MD","percentile_20":43000,"percentile_50":99592.92144,"percentile_80":177602.7033},{metro:"Bangor, ME","percentile_20":38437.67152,"percentile_50":91145.51333,"percentile_80":137233.8876},{metro:"Barnstable Town, MA","percentile_20":54687.308,"percentile_50":99340.28126,"percentile_80":237294.4247},{metro:"Baton Rouge, LA","percentile_20":30396.62565,"percentile_50":77000,"percentile_80":156010.7406},{metro:"Battle Creek, MI","percentile_20":36284.73237,"percentile_50":68748.60387,"percentile_80":142082.6525},{metro:"Beaumont-Port Arthur, TX","percentile_20":25575.46222,"percentile_50":57088.26598,"percentile_80":105334.1827},{metro:"Niles-Benton Harbor, MI","percentile_20":38849.89961,"percentile_50":66704.50468,"percentile_80":93887.54608},{metro:"Billings, MT","percentile_20":41808.24239,"percentile_50":73445.50045,"percentile_80":141704.2727},{metro:"Bend, OR","percentile_20":43876.31106,"percentile_50":91809.32505,"percentile_80":181255.6206},{metro:"Binghamton, NY","percentile_20":30006,"percentile_50":83671.93221,"percentile_80":196146.5654},{metro:"Birmingham-Hoover, AL","percentile_20":32071,"percentile_50":66829.42865,"percentile_80":135334.3083},{metro:"Blacksburg-Christiansburg-Radford, VA","percentile_20":53500,"percentile_50":95083,"percentile_80":126043.0693},{metro:"Bloomington, IN","percentile_20":75531,"percentile_50":103923.0485,"percentile_80":172189.331},{metro:"Bloomington, IL","percentile_20":45491,"percentile_50":102685.0595,"percentile_80":175459.3998},{metro:"Boise City-Nampa, ID","percentile_20":44150,"percentile_50":86100,"percentile_80":166571.4262},{metro:"Boston-Cambridge-Newton, MA-NH","percentile_20":53891.02883,"percentile_50":120637,"percentile_80":222964.8038},{metro:"Bowling Green, KY","percentile_20":24941.53163,"percentile_50":35352.88903,"percentile_80":133547.4055},{metro:"Bridgeport-Stamford-Norwalk, CT","percentile_20":38687.08684,"percentile_50":96026.12164,"percentile_80":237927.5119},{metro:"Brownsville-Harlingen, TX","percentile_20":24595.12147,"percentile_50":47000,"percentile_80":103923.0485},{metro:"Buffalo-Niagara Falls, NY","percentile_20":32823.16255,"percentile_50":74366.50859,"percentile_80":150000},{metro:"Burlington, NC","percentile_20":30139.4161,"percentile_50":76322.81884,"percentile_80":137357.5868},{metro:"Burlington-South Burlington, VT","percentile_20":47472.04853,"percentile_50":127378.3656,"percentile_80":227395.6413},{metro:"California-Lexington Park, MD","percentile_20":46897.00767,"percentile_50":101639.5287,"percentile_80":180046.0693},{metro:"Canton-Massillon, OH","percentile_20":52664.02947,"percentile_50":99940.40625,"percentile_80":167422.6239},{metro:"Carbondale-Marion, IL","percentile_20":20043.29195,"percentile_50":45402.24782,"percentile_80":101323.1432},{metro:"Cedar Rapids, IA","percentile_20":44002,"percentile_50":82333,"percentile_80":137287.7764},{metro:"Chambersburg-Waynesboro, PA","percentile_20":37261,"percentile_50":63392.79454,"percentile_80":107900},{metro:"Champaign-Urbana, IL","percentile_20":20784.60969,"percentile_50":57202.70997,"percentile_80":92600.51024},{metro:"Charleston-North Charleston, SC","percentile_20":32622.30439,"percentile_50":66268.4955,"percentile_80":111580.3815},{metro:"Charleston, WV","percentile_20":9202.732964,"percentile_50":65817.93069,"percentile_80":136197},{metro:"Charlotte-Gastonia-Concord, NC/SC","percentile_20":35011.76945,"percentile_50":86956.88587,"percentile_80":159229.0807},{metro:"Charlottesville, VA","percentile_20":24721.56118,"percentile_50":72002,"percentile_80":176565.3444},{metro:"Chattanooga, TN/GA","percentile_20":33313.0605,"percentile_50":71227.12536,"percentile_80":126200},{metro:"Chicago-Naperville-Joliet, IL-IN-WI","percentile_20":42800,"percentile_50":96824.58366,"percentile_80":173129.935},{metro:"Chico,CA","percentile_20":22045.40769,"percentile_50":45972.02349,"percentile_80":134121.8109},{metro:"Cincinnati-Middleton, OH/KY/IN","percentile_20":38836.04321,"percentile_50":87472.02988,"percentile_80":166407},{metro:"Clarksville, TN/KY, TN/KY","percentile_20":46665.22909,"percentile_50":64500,"percentile_80":111761.0552},{metro:"Cleveland-Lorain-Mentor, OH","percentile_20":25856.05446,"percentile_50":79268.08438,"percentile_80":149870.0263},{metro:"Cleveland, TN","percentile_20":22776.46812,"percentile_50":42918,"percentile_80":102029.821},{metro:"Coeur d'Alene, ID","percentile_20":42308.80508,"percentile_50":76000,"percentile_80":123944.181},{metro:"College Station-Bryan, TX","percentile_20":10769.18165,"percentile_50":44000,"percentile_80":124923.9769},{metro:"Colorado Springs, CO","percentile_20":28942.56899,"percentile_50":77207.91669,"percentile_80":129999.0734},{metro:"Columbia, SC","percentile_20":51469.90322,"percentile_50":89202.34864,"percentile_80":140718.2867},{metro:"Columbus, GA/AL","percentile_20":25980.76211,"percentile_50":62712,"percentile_80":113242.3478},{metro:"Columbus, OH","percentile_20":40004,"percentile_50":92110.46195,"percentile_80":148196.5789},{metro:"Corpus Christi, TX","percentile_20":21097.45515,"percentile_50":61534.56904,"percentile_80":131271.8296},{metro:"Dallas-Fort Worth-Arlington, TX","percentile_20":40830,"percentile_50":89140,"percentile_80":162639.5708},{metro:"Daphne-Fairhope-Foley, AL","percentile_20":35272.6523,"percentile_50":75690.62029,"percentile_80":150427.4478},{metro:"Davenport-Rock Island-Moline, IA/IL","percentile_20":39510.26955,"percentile_50":71138.08111,"percentile_80":125007},{metro:"Dayton, OH","percentile_20":41350.98098,"percentile_50":74304.97964,"percentile_80":160315.9488},{metro:"Deltona-Daytona Beach-Ormond Beach, FL","percentile_20":32343.06256,"percentile_50":65557,"percentile_80":109291.8383},{metro:"Boulder, CO","percentile_20":60938,"percentile_50":98726.89603,"percentile_80":210968},{metro:"Denver-Aurora, CO","percentile_20":50566.04151,"percentile_50":104414.9509,"percentile_80":196326.6029},{metro:"Des Moines, IA","percentile_20":45000,"percentile_50":87700.30601,"percentile_80":167476.5127},{metro:"Detroit-Warren-Livonia, MI","percentile_20":36026.6568,"percentile_50":85075.67775,"percentile_80":161370},{metro:"Dover, DE","percentile_20":41569.21938,"percentile_50":73484.69228,"percentile_80":130736.616},{metro:"East Stroudsburg, PA","percentile_20":51576.45602,"percentile_50":103505,"percentile_80":152194.1462},{metro:"El Paso, TX","percentile_20":25856.05446,"percentile_50":48505.21684,"percentile_80":104533.1995},{metro:"Elkhart-Goshen, IN","percentile_20":35318.24802,"percentile_50":64959.69951,"percentile_80":167601.8964},{metro:"Erie, PA","percentile_20":44527.56216,"percentile_50":84472.11789,"percentile_80":151442.1528},{metro:"Eugene-Springfield, OR","percentile_20":35000,"percentile_50":74178.53994,"percentile_80":146125.3324},{metro:"Evansville, IN/KY","percentile_20":20140.28679,"percentile_50":62045.57518,"percentile_80":131472.1826},{metro:"Fargo, ND/MN","percentile_20":48622.13027,"percentile_50":86244.08435,"percentile_80":138641.1194},{metro:"Farmington, NM","percentile_20":17241.74726,"percentile_50":46869.29485,"percentile_80":95023.7714},{metro:"Fayetteville, NC","percentile_20":23420,"percentile_50":52713.01926,"percentile_80":93530.74361},{metro:"Fayetteville-Springdale-Rogers, AR-MO","percentile_20":31833.5687,"percentile_50":78028.88888,"percentile_80":151933.2755},{metro:"Flint, MI","percentile_20":29098.45357,"percentile_50":79649,"percentile_80":165638.1706},{metro:"Florence-Muscle Shoals, AL","percentile_20":32969.58712,"percentile_50":64077.21963,"percentile_80":132120.8356},{metro:"Florence, SC","percentile_20":17320.50808,"percentile_50":44298.06543,"percentile_80":93631.74542},{metro:"Fort Collins-Loveland, CO","percentile_20":38777.15348,"percentile_50":90019.97279,"percentile_80":162068.0393},{metro:"Fort Myers-Cape Coral, FL","percentile_20":46265.96226,"percentile_50":77305.89628,"percentile_80":146971.8341},{metro:"Port St. Lucie-Fort Pierce, FL","percentile_20":27019.9926,"percentile_50":65683.06745,"percentile_80":121723.7185},{metro:"Fort Smith, AR/OK","percentile_20":30101,"percentile_50":53856.38781,"percentile_80":106867.5348},{metro:"Fort Wayne, IN","percentile_20":25199.87147,"percentile_50":83831.25909,"percentile_80":158060},{metro:"Fresno, CA","percentile_20":30997.80951,"percentile_50":61239.69306,"percentile_80":137286.5516},{metro:"Gainesville, FL","percentile_20":34641.01615,"percentile_50":66237.87688,"percentile_80":136926.4766},{metro:"Gainesville, GA","percentile_20":30000,"percentile_50":70165.37821,"percentile_80":133129.7675},{metro:"Glens Falls, NY","percentile_20":26755.77646,"percentile_50":62482.8091,"percentile_80":86295.52364},{metro:"Goldsboro, NC","percentile_20":30528.26151,"percentile_50":59160.07627,"percentile_80":109164.2342},{metro:"Grand Rapids-Wyoming, MI","percentile_20":38873.13385,"percentile_50":79608.41664,"percentile_80":142031.6303},{metro:"Greeley, CO","percentile_20":23909.22935,"percentile_50":58435.93015,"percentile_80":143723.8107},{metro:"Green Bay, WI","percentile_20":61187.02903,"percentile_50":86628.52114,"percentile_80":125244.86},{metro:"Winston-Salem, NC","percentile_20":37328,"percentile_50":77097.15568,"percentile_80":128175.6745},{metro:"Greensboro-High Point, NC","percentile_20":29393.87691,"percentile_50":70161.95945,"percentile_80":120121.1876},{metro:"Greenville, NC","percentile_20":24770.0586,"percentile_50":63046.6494,"percentile_80":141524.1394},{metro:"Greenville, SC","percentile_20":41641.32563,"percentile_50":81406.38796,"percentile_80":148457.4496},{metro:"Spartanburg, SC","percentile_20":28944.39555,"percentile_50":66850.23297,"percentile_80":136501.1921},{metro:"Hagerstown-Martinsburg, MD-WV","percentile_20":46462.26291,"percentile_50":92669.09595,"percentile_80":156969.7025},{metro:"Hanford-Corcoran, CA","percentile_20":30983.86677,"percentile_50":67404.95392,"percentile_80":154521.4487},{metro:"Harrisburg-Carlisle, PA","percentile_20":28066.15129,"percentile_50":88398.67707,"percentile_80":153629.5472},{metro:"Hartford-West Hartford-East Hartford, CT","percentile_20":46010.19765,"percentile_50":112655.1826,"percentile_80":176670.9144},{metro:"Hickory-Morganton-Lenoir, NC","percentile_20":35591.91204,"percentile_50":64007.61647,"percentile_80":116319.0655},{metro:"Hilton Head Island-Bluffton-Beaufort, SC","percentile_20":51961.52423,"percentile_50":110600.5856,"percentile_80":168395.0713},{metro:"Houston-Baytown-Sugar Land, TX","percentile_20":35701,"percentile_50":85304.3683,"percentile_80":157633.944},{metro:"Huntington-Ashland,WV/KY/OH","percentile_20":22412.83115,"percentile_50":53888.77434,"percentile_80":112601},{metro:"Huntsville,AL","percentile_20":43065,"percentile_50":97283.93462,"percentile_80":159589.1557},{metro:"Idaho Falls, ID","percentile_20":38807.29313,"percentile_50":86812.11853,"percentile_80":184555.5799},{metro:"Indianapolis, IN","percentile_20":33380.08316,"percentile_50":82762.58374,"percentile_80":147200.8613},{metro:"Iowa City, IA","percentile_20":56977.54337,"percentile_50":93389,"percentile_80":153667.5476},{metro:"Jackson, MI","percentile_20":42541.51311,"percentile_50":96895.2898,"percentile_80":160999},{metro:"Jackson, MS","percentile_20":26209.54025,"percentile_50":57100,"percentile_80":127203.5434},{metro:"Jacksonville,FL","percentile_20":31400,"percentile_50":77942.28634,"percentile_80":152704.5274},{metro:"Jacksonville, NC","percentile_20":24979.63675,"percentile_50":56483.04286,"percentile_80":77942.28634},{metro:"Janvesville, WI","percentile_20":47298.84345,"percentile_50":67549.9815,"percentile_80":139801},{metro:"Johnson City, TN","percentile_20":22876.92707,"percentile_50":49310.67801,"percentile_80":99204.33458},{metro:"Kingsport-Bristol, TN-VA","percentile_20":34641.01615,"percentile_50":62884.52542,"percentile_80":121260.765},{metro:"Johnstown, PA","percentile_20":27213.98229,"percentile_50":67888.83297,"percentile_80":116529.5755},{metro:"Kahului-Wailuku-Lahaina, HI","percentile_20":42961.78823,"percentile_50":101997.874,"percentile_80":154845.3422},{metro:"Kalamazoo-Portage, MI","percentile_20":48030,"percentile_50":96225.81467,"percentile_80":170005.6109},{metro:"Kansas City, MO/KS","percentile_20":46809.74898,"percentile_50":91805.621,"percentile_80":171072.3636},{metro:"Kennewick-Richland, WA","percentile_20":62353.82907,"percentile_50":108443.5337,"percentile_80":196598.4962},{metro:"Killeen-Temple-Fort Hood, TX","percentile_20":45000,"percentile_50":82400,"percentile_80":127495.9411},{metro:"Knoxville, TN","percentile_20":25980.76211,"percentile_50":61999.492,"percentile_80":150800},{metro:"Lafayette, LA","percentile_20":30983.86677,"percentile_50":74487.75833,"percentile_80":135295.1165},{metro:"Lafayette-West Lafayette, IN","percentile_20":34334.49772,"percentile_50":60665.07954,"percentile_80":104458.4901},{metro:"Lake Charles, LA","percentile_20":30522.19933,"percentile_50":56851.10366,"percentile_80":115815.5493},{metro:"Lakeland-Winterhaven, FL","percentile_20":25000,"percentile_50":48747.29537,"percentile_80":86956.88587},{metro:"Lancaster, PA","percentile_20":61413.60683,"percentile_50":142075,"percentile_80":218324.2455},{metro:"Lansing-East Lansing, MI","percentile_20":51593.60245,"percentile_50":101634.829,"percentile_80":149424.998},{metro:"Laredo, TX","percentile_20":35940.05426,"percentile_50":67175.14421,"percentile_80":141825.4561},{metro:"Las Cruces, NM","percentile_20":27757.84624,"percentile_50":55425.62584,"percentile_80":106146.1885},{metro:"Las Vegas-Paradise, NV","percentile_20":37910.75275,"percentile_50":77944.01839,"percentile_80":146969.3846},{metro:"Lewiston-Auburn, ME","percentile_20":27757.84624,"percentile_50":79010,"percentile_80":165064.442},{metro:"Lexington-Fayette, KY","percentile_20":30685.01211,"percentile_50":60403.53986,"percentile_80":122474.4871},{metro:"Little Rock-North Little Rock, AR","percentile_20":37869.55886,"percentile_50":86602.54038,"percentile_80":160093},{metro:"Longview, TX","percentile_20":41168,"percentile_50":70049.33081,"percentile_80":137703.2354},{metro:"Los Angeles-Long Beach-Anaheim, CA","percentile_20":34082.25345,"percentile_50":82600,"percentile_80":169717.7958},{metro:"Louisville, KY/IN","percentile_20":37464.25897,"percentile_50":84518.01723,"percentile_80":152078},{metro:"Lubbock, TX","percentile_20":33401.24213,"percentile_50":70901,"percentile_80":152152.8692},{metro:"Macon, GA","percentile_20":31178.64659,"percentile_50":74502.43344,"percentile_80":107974.3153},{metro:"Warner Robins, GA","percentile_20":35550.34283,"percentile_50":79400.21001,"percentile_80":104625.5467},{metro:"Madison, WI","percentile_20":52634.42597,"percentile_50":88564.95394,"percentile_80":158054.8323},{metro:"Manchester-Nashua, NH","percentile_20":53380,"percentile_50":112860.2399,"percentile_80":184875},{metro:"McAllen-Edinburg-Pharr, TX","percentile_20":18000,"percentile_50":40997.03147,"percentile_80":77336.06856},{metro:"Medford, OR","percentile_20":29644.33724,"percentile_50":65125.58449,"percentile_80":129033},{metro:"Palm Bay-Melbourne-Titusville, FL","percentile_20":42106.72868,"percentile_50":83283.876,"percentile_80":143761.9491},{metro:"Memphis, TN/AR/MS","percentile_20":25098.48128,"percentile_50":70151.52181,"percentile_80":127141.1895},{metro:"Miami-Fort Lauderdale-Miami Beach, FL","percentile_20":30618.62178,"percentile_50":66712.48231,"percentile_80":133887.5274},{metro:"Milwaukee-Waukesha-West Allis, WI","percentile_20":41430.65532,"percentile_50":82818.47295,"percentile_80":134433.1234},{metro:"Minneapolis-St. Paul-Bloomington, MN/WI","percentile_20":52134.72931,"percentile_50":109200.7022,"percentile_80":191374.9594},{metro:"Mobile, AL","percentile_20":37325.6949,"percentile_50":70587.99861,"percentile_80":129903.8106},{metro:"Modesto, CA","percentile_20":41044.87487,"percentile_50":70672.65091,"percentile_80":158920.8577},{metro:"Monroe, LA","percentile_20":11762.44974,"percentile_50":51112.27772,"percentile_80":121000},{metro:"Monroe, MI","percentile_20":38109.16142,"percentile_50":61038.8349,"percentile_80":100573.2622},{metro:"Montgomery, Al","percentile_20":30290.39016,"percentile_50":71643.68358,"percentile_80":136333},{metro:"Morgantown, WV","percentile_20":19605.7159,"percentile_50":69308.01306,"percentile_80":156914.3129},{metro:"Mount Vernon-Anacortes, WA","percentile_20":54501.14678,"percentile_50":103102.0564,"percentile_80":183226},{metro:"Muskegon-Norton Shores, MI","percentile_20":29836.30721,"percentile_50":51186,"percentile_80":88055.37476},{metro:"Myrtle Beach-Conway-North Myrtle Beach, SC","percentile_20":31010.54014,"percentile_50":66392,"percentile_80":124513.6874},{metro:"Naples-Marco Island, FL","percentile_20":54788.23115,"percentile_50":86603.4064,"percentile_80":132923.8868},{metro:"Nashville-Davidson-Murfreesboro, TN","percentile_20":43301.27019,"percentile_50":89200.61659,"percentile_80":177056},{metro:"New Haven-Milford, CT","percentile_20":36700,"percentile_50":93548.06412,"percentile_80":160406},{metro:"New Orleans-Metairie-Kenner, LA","percentile_20":28706,"percentile_50":67619.26353,"percentile_80":140051},{metro:"New York-Northern New Jersey-Long Island, NY-NJ-PA","percentile_20":35399.06778,"percentile_50":92354.68111,"percentile_80":188215.0331},{metro:"Virginia Beach-Norfolk-Newport News, VA/NC","percentile_20":35917.5376,"percentile_50":83919.51859,"percentile_80":155945.1945},{metro:"North Port-Sarasota-Bradenton, FL","percentile_20":36000,"percentile_50":65891.27408,"percentile_80":126429.1883},{metro:"Norwich-New London, CT","percentile_20":50214.53973,"percentile_50":111353.8037,"percentile_80":205396.111},{metro:"Ocala, FL","percentile_20":30310.88913,"percentile_50":58400.73445,"percentile_80":99596.38554},{metro:"Odessa, TX","percentile_20":40917.96828,"percentile_50":62475.46063,"percentile_80":166280.3416},{metro:"Midland, TX","percentile_20":51898.75144,"percentile_50":103511.7623,"percentile_80":180388.0723},{metro:"Oklahoma City, OK","percentile_20":33861.7462,"percentile_50":69112.29132,"percentile_80":156750.5981},{metro:"Omaha-Council Bluffs, NE/IA","percentile_20":43301.27019,"percentile_50":86775.74546,"percentile_80":156487.1175},{metro:"Orlando, FL","percentile_20":41569.21938,"percentile_50":84434.13533,"percentile_80":166595.9211},{metro:"Panama City-Lynn Haven, FL","percentile_20":38884.7528,"percentile_50":89072.44483,"percentile_80":155993.3048},{metro:"Pensacola-Ferry Pass-Brent, FL","percentile_20":43301.27019,"percentile_50":63729.59938,"percentile_80":112730},{metro:"Peoria, IL","percentile_20":40673.77718,"percentile_50":79755.38603,"percentile_80":142623.9898},{metro:"Philadelphia-Camden-Wilmington, PA/NJ/DE","percentile_20":38150.15109,"percentile_50":96561.33515,"percentile_80":186371.8316},{metro:"Phoenix-Mesa-Scottsdale, AZ","percentile_20":42866.0705,"percentile_50":88073.85319,"percentile_80":162423.0645},{metro:"Pine Bluff, AR","percentile_20":22231.56891,"percentile_50":58198.63919,"percentile_80":104103.3141},{metro:"Pittsburg, PA","percentile_20":39972.26854,"percentile_50":86602.54038,"percentile_80":165340.5576},{metro:"Portland-South Portland, ME","percentile_20":43696.44752,"percentile_50":106027.3883,"percentile_80":190826.2737},{metro:"Portland-Vancouver-Beaverton, OR/WA","percentile_20":50676.26854,"percentile_50":100883.4598,"percentile_80":168816.3836},{metro:"Prescott, AZ","percentile_20":35476.52745,"percentile_50":67281.35951,"percentile_80":117301.4089},{metro:"Providence-Warwick, RI-MA","percentile_20":35119.55919,"percentile_50":82475.54438,"percentile_80":161951},{metro:"Provo-Orem, UT","percentile_20":43301.27019,"percentile_50":88575.02384,"percentile_80":154305},{metro:"Racine, WI","percentile_20":56763.25055,"percentile_50":117630.6212,"percentile_80":159077},{metro:"Durham, NC","percentile_20":45419.56833,"percentile_50":99577,"percentile_80":200650},{metro:"Raleigh-Carey, NC","percentile_20":53187.68029,"percentile_50":107811.5025,"percentile_80":166424.4568},{metro:"Reading, PA","percentile_20":35525.22809,"percentile_50":73513.43243,"percentile_80":126472.6179},{metro:"Redding, CA","percentile_20":32049.86814,"percentile_50":67861.88858,"percentile_80":187753.3888},{metro:"Richmond, VA","percentile_20":34846.44108,"percentile_50":85393.56891,"percentile_80":147224.3186},{metro:"Riverside-San Bernadino, CA","percentile_20":33825,"percentile_50":68939.10356,"percentile_80":133390.4288},{metro:"Roanoke, VA","percentile_20":32042.93994,"percentile_50":56844,"percentile_80":104105},{metro:"Rochester, NY","percentile_20":43245.74141,"percentile_50":98118.9462,"percentile_80":174501.6493},{metro:"Rockford, IL","percentile_20":36409.91644,"percentile_50":70081,"percentile_80":173161.7795},{metro:"Sacramento-Arden Arcade-Roseville, CA","percentile_20":44686.91084,"percentile_50":97002.2433,"percentile_80":173510.7877},{metro:"Saginaw-Saginaw Township North, MI","percentile_20":28780.91384,"percentile_50":68083.45314,"percentile_80":110307.3877},{metro:"St. George, UT","percentile_20":45037.65112,"percentile_50":91032.8368,"percentile_80":189508.4482},{metro:"St. Louis, MO/IL","percentile_20":38044,"percentile_50":82366.81013,"percentile_80":161637},{metro:"Salem, OR","percentile_20":32540,"percentile_50":70488.2969,"percentile_80":164974.3589},{metro:"Salinas, CA","percentile_20":32311.40782,"percentile_50":97694.59375,"percentile_80":155235.0536},{metro:"Salisbury, MD","percentile_20":37226.12037,"percentile_50":78636.83871,"percentile_80":131637.5934},{metro:"Salt Lake City, UT","percentile_20":50918.76803,"percentile_50":100722.2186,"percentile_80":158604.4608},{metro:"San Antonio, TX","percentile_20":38626,"percentile_50":80540.36255,"percentile_80":150388.7755},{metro:"San Diego-Carlsbad-San Marcos, CA","percentile_20":42555,"percentile_50":86290.77123,"percentile_80":183895.4424},{metro:"Vallejo-Fairfield, CA","percentile_20":33959.72579,"percentile_50":77942.28634,"percentile_80":163614.9561},{metro:"San Francisco-Oakland-Fremont, CA","percentile_20":54996.36352,"percentile_50":135101.695,"percentile_80":266172.5782},{metro:"San Jose-Sunnyvale-Santa Clara, CA","percentile_20":70115.41914,"percentile_50":160009,"percentile_80":318436.1161},{metro:"San Luis Obispo-Paso Robles, CA","percentile_20":42569.54489,"percentile_50":93201.85997,"percentile_80":152404},{metro:"Santa Barbara-Santa Maria, CA","percentile_20":27712.81292,"percentile_50":86569.86649,"percentile_80":152420.4711},{metro:"Santa Cruz-Watsonville, CA","percentile_20":36150.79437,"percentile_50":88200,"percentile_80":161088.5193},{metro:"Santa Fe, NM","percentile_20":37539.65505,"percentile_50":84267.73589,"percentile_80":155472.3446},{metro:"Santa Rosa-Petaluma, CA","percentile_20":50089.1773,"percentile_50":108048.7935,"percentile_80":208499.0801},{metro:"Savannah, GA","percentile_20":34066.76151,"percentile_50":77459.66692,"percentile_80":136921.5776},{metro:"Scranton-Wilkes-Barre, PA","percentile_20":41120.61822,"percentile_50":77942.28634,"percentile_80":117748.1967},{metro:"Seattle-Tacoma-Bellevue, WA","percentile_20":53724.75195,"percentile_50":117375.8871,"percentile_80":206387.882},{metro:"Sherman-Denison, TX","percentile_20":46488.9683,"percentile_50":77945.75044,"percentile_80":134683.4048},{metro:"Shreveport-Bossier City, LA","percentile_20":33255.37551,"percentile_50":70315.05256,"percentile_80":128017},{metro:"Sioux Falls, SD","percentile_20":43057.05103,"percentile_50":83200,"percentile_80":146479.4866},{metro:"South Bend-Mishawaka, IN","percentile_20":42882.11389,"percentile_50":87384.25602,"percentile_80":145257.1912},{metro:"Spokane, WA","percentile_20":44725.01595,"percentile_50":86659.27287,"percentile_80":151098},{metro:"Springfield, IL","percentile_20":42861.32928,"percentile_50":81701,"percentile_80":184325.3279},{metro:"Springfield, MO","percentile_20":35978.15937,"percentile_50":65606.62049,"percentile_80":103923.0485},{metro:"Springfield, MA/CT","percentile_20":27695.49241,"percentile_50":80541.22858,"percentile_80":166450.0826},{metro:"Stockton, CA","percentile_20":45895.62725,"percentile_50":86971.58281,"percentile_80":142094.9},{metro:"Syracuse, NY","percentile_20":32210.79012,"percentile_50":68468.13729,"percentile_80":134314},{metro:"Tallahassee, FL","percentile_20":29791.27389,"percentile_50":53693.57503,"percentile_80":123824.156},{metro:"Tampa-St. Petersburg-Clearwater, FL","percentile_20":33376.74724,"percentile_50":78398.36871,"percentile_80":141596.0195},{metro:"Terre Haute, IN","percentile_20":19466.51903,"percentile_50":80245.91391,"percentile_80":175456.7468},{metro:"Toledo, OH/MI","percentile_20":38579.46345,"percentile_50":73579.25036,"percentile_80":137639},{metro:"Topeka, KS","percentile_20":48332.87779,"percentile_50":80384.47798,"percentile_80":108459.8002},{metro:"Trenton-Ewing, NJ","percentile_20":50911.68825,"percentile_50":95945.22243,"percentile_80":166276.8775},{metro:"Tucson, AZ","percentile_20":34646.2123,"percentile_50":74915.19429,"percentile_80":140649.701},{metro:"Tulsa, OK","percentile_20":41915.62954,"percentile_50":82881.84361,"percentile_80":159129.8764},{metro:"Tyler, TX","percentile_20":34329.24701,"percentile_50":69314.436,"percentile_80":122498.982},{metro:"Urban Honolulu, HI","percentile_20":48542.45593,"percentile_50":97836.9815,"percentile_80":169048.1588},{metro:"Utica-Rome, NY","percentile_20":34918.14428,"percentile_50":90068.37404,"percentile_80":167610.0099},{metro:"Oxnard-Thousand Oaks-Ventura, CA","percentile_20":37967.09101,"percentile_50":104790.8059,"percentile_80":165171},{metro:"Vineland-Milville-Bridgetown, NJ","percentile_20":35238.35944,"percentile_50":63581.993,"percentile_80":144911.8132},{metro:"Visalia-Porterville, CA","percentile_20":31783.13232,"percentile_50":60100,"percentile_80":116428.4553},{metro:"Waco, TX","percentile_20":41151.42768,"percentile_50":75770.06621,"percentile_80":156338.6828},{metro:"Washington, DC/MD/VA","percentile_20":65045,"percentile_50":145492.2678,"percentile_80":258742.4099},{metro:"Waterloo-Cedar Falls, IA","percentile_20":20275.38675,"percentile_50":66304.63696,"percentile_80":139317.1786},{metro:"Watertown-Fort Drum, NY","percentile_20":23515.10153,"percentile_50":53000.75471,"percentile_80":128256.5077},{metro:"Wausau, WI","percentile_20":25171.89439,"percentile_50":88628.76395,"percentile_80":105097.8069},{metro:"Wichita, KS","percentile_20":39846.69485,"percentile_50":80540.36255,"percentile_80":142047.2188},{metro:"Wichita Falls, TX","percentile_20":22427.52808,"percentile_50":76240.36824,"percentile_80":105083.11},{metro:"Williamsport, PA","percentile_20":56950.63652,"percentile_50":101046.1355,"percentile_80":157110},{metro:"Winchester, VA-WV","percentile_20":60721,"percentile_50":97220.24789,"percentile_80":211566},{metro:"Worcester, MA","percentile_20":38737.57943,"percentile_50":86619.86089,"percentile_80":181507.1899},{metro:"York-Hanover, PA","percentile_20":43318.5907,"percentile_50":91718,"percentile_80":147263.3233},{metro:"Youngstown-Warren-Boardman, OH","percentile_20":28894.18101,"percentile_50":58068.73537,"percentile_80":110839.4109},{metro:"Yuma, AZ","percentile_20":31110.96922,"percentile_50":62464.43793,"percentile_80":91166.49426}]
    },
    watch: {
        hh_income: function(newValue) {
            const result = newValue.replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            Vue.nextTick(() => this.hh_income = result);
          },
    },
    methods: {
      // functions go here
      getResults: function () {
        let income = parseInt((this.hh_income.replace(/,/g, '')),10),
            hh_size = this.hh_size,
            adjustedIncome,
            medianIncome = 80672,
            povertyLevel = 21960,
            pewDef_low,
            pewDef_high,
            brookingsDef_low = 36044,
            brookingsDef_high = 156550,
            urbanDef_low,
            urbanDef_high,

            medianIncome_met = 0,
            pewDef_low_met,
            pewDef_high_met,
            brookingsDef_low_met = 0,
            brookingsDef_high_met = 0,
            urbanDef_low_met = 0,
            urbanDef_high_met = 0,

            pew_met = 0,
            pew_us = 0,
            brookings_met = 0,
            brookings_us = 0,
            urban_met = 0,
            urban_us = 0,
            sum_us = 0,
            sum_met = 0,

            us_result,
            met_result,

            tickMax = 200000,
            align = 'center',

            plotLineClass = '',


            pewContainer = 'chart-container-pew',
            brookingsContainer = 'chart-container-brookings',
            urbanContainer = 'chart-container-urban';


        adjustedIncome = income/(Math.sqrt(hh_size));
        adjustedIncome = adjustedIncome * Math.sqrt(3);

        pewDef_low = medianIncome*.67;
        pewDef_high = medianIncome*2;
        urbanDef_low = povertyLevel*1.5;
        urbanDef_high = povertyLevel*5;

        if(this.metro) {
            console.log(this.filteredData)
                medianIncome_met = this.filteredData[0].percentile_50,
                pewDef_low_met = medianIncome_met*.67,
                pewDef_high_met = medianIncome_met*2,
                brookingsDef_low_met = this.filteredData[0].percentile_20,
                brookingsDef_high_met = this.filteredData[0].percentile_80,
                urbanDef_low_met = urbanDef_low,
                urbanDef_high_met = urbanDef_high;

        }

        // adds a total to return how many definitions you qualify for middle class under

        if (adjustedIncome >= pewDef_low && adjustedIncome <= pewDef_high) {
            pew_us = 1;
        } 
        if (adjustedIncome >= brookingsDef_low && adjustedIncome <= brookingsDef_high) {
            brookings_us = 1;
        } 
        if (adjustedIncome >= urbanDef_low && adjustedIncome <= urbanDef_high) {
            urban_us = 1;
            urban_met = 1;
        }
        if (adjustedIncome >= pewDef_low_met && adjustedIncome <= pewDef_high_met) {
            pew_met = 1;
        } 
        if (adjustedIncome >= brookingsDef_low_met && adjustedIncome <= brookingsDef_high_met) {
            brookings_met = 1;
        } 

        sum_us = pew_us + brookings_us + urban_us;
        sum_met = pew_met + brookings_met + urban_met;


        if (sum_us > 0 && sum_us < 3) {
            us_result = "In <span class='result-highlight'>the U.S.</span>, you are considered middle class according to " + sum_us + " of 3 definitions.<br/>"
        } else if (sum_us == 3) {
            us_result = "In <span class='result-highlight'>the U.S.</span>, you are considered middle class according to all 3 definitions.<br/>"
        } else {
            us_result = "In <span class='result-highlight'>the U.S.</span>, you are not considered middle class.<br/>"
        }

        if (sum_met > 0 && sum_met < 3) {
            met_result = "In <span class='result-highlight-metro'>" + this.metro + "</span>, you are considered middle class according to " + sum_met + " of 3 definitions."
        } else if (sum_met == 3) {
            met_result = "In <span class='result-highlight-metro'>" + this.metro + "</span>, you are considered middle class according to all 3 definitions."
        } else {
            met_result = "In <span class='result-highlight-metro'>" + this.metro + "</span>, you are not considered middle class."
        }

        if (!income) {
            this.result = '<span class="result-highlight">The U.S. middle class</span> according to 3 different definitions'
        } else {
            this.result = us_result + met_result;
        }

        // updates the tickMax if the range extends past 200,000

        if (brookingsDef_high_met > 200000 || pewDef_high_met > 200000) {
            if (brookingsDef_high_met > pewDef_high_met) {
                tickMax = brookingsDef_high_met
            } else if (brookingsDef_high_met <= pewDef_high_met) {
                tickMax = pewDef_high_met
            }
        } 

        if (adjustedIncome > 180000) {
            tickMax = adjustedIncome + 20000;
            align = "right";
        } else if (adjustedIncome < 25000) {
            align = "left"
        }


        this.drawChart(pewContainer,adjustedIncome,pewDef_low,pewDef_high,pewDef_low_met,pewDef_high_met,tickMax,align,plotLineClass);
        this.drawChart(brookingsContainer,adjustedIncome,brookingsDef_low,brookingsDef_high,brookingsDef_low_met,brookingsDef_high_met,tickMax,align,plotLineClass);
        this.drawChart(urbanContainer,adjustedIncome,urbanDef_low,urbanDef_high,urbanDef_low_met,urbanDef_high_met,tickMax,align,plotLineClass);


      },
      drawChart: function(container,income,low,high,low_met,high_met,tick_max,align,plot_line_class) {

        Highcharts.setOptions({
            lang: {
              thousandsSep: ',',
              numericSymbols: ["K", "M", "G", "T", "P", "E"]
            }
        });

        function drawHighcharts() {
            Highcharts.chart(container, {
                chart: {
                    type: 'columnrange',
                    inverted: true,
                    styledMode: true,
                    spacingBottom: 0,
                    spacingRight: 25,
                    spacingLeft: 15,
                    spacingTop: 30,
                    animation: false
                }, 
                title: {
                    text: null
                },
                series: [{
                    name: 'middle class',
                    data: [
                        [low,high],
                        [low_met,high_met]
                    ]
                }],
                // for line charts only
                plotOptions: {
                    series: {
                        groupPadding: .01
                    }
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false,
                    },
                    gridLineWidth: 2,
                    tickLength: 0,
                    tickPosition: 'inside'
                },
                yAxis: {
                    title: false,
                    labels: {
                        overflow: 'allow',
                        formatter: function() {
                            return "$" + Highcharts.numberFormat( this.value/1000, 0) + "K";  // maybe only switch if > 1000
                        },
                    },
                    min: 0,
                    max: tick_max,
                    gridZIndex: 10,
                    tickAmount: 5,
                    visible: true,
                    plotLines: [{
                        value: income,
                        className: plot_line_class,
                        zIndex: 100,
                        label: {
                            text: 'Your adjusted income',
                            rotation: 0,
                            align: align,
                            y: -10,
                            x: 0
                        }
                    }]
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
            })
        }
        
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            drawHighcharts();
        } else {
            document.addEventListener("DOMContentLoaded", drawHighcharts);
        }
      },
      buttonClick: function (){
        if (this.hh_size && this.hh_income && this.metro) {
            this.errors = false;
            this.getResults();
        } else if (!this.hh_size || !this.hh_income || !this.metro) {
            this.errors = true;
        };
      },
    },
    computed: {
        filteredData (){
            const category = this.metro;
            return this.options.filter((option) => option.metro === category);
        }
    },
    mounted: function(){
        this.getResults()
     },
  })

  function limitNumber () {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
        type = "number"
        maxlength = "2"
    }
  }

  document.getElementById('metro-dropdown').addEventListener('click', () => {
    document.getElementById('metro-dropdown').value = '';
})