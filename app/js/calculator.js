

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
      options: [{"metro":"Akron, OH","percentile_20":32908.96534,"percentile_50":70494.46787,"percentile_80":129903.8106},{"metro":"Albany-Schenectady-Troy, NY","percentile_20":40500,"percentile_50":90631.12048,"percentile_80":155542.5987},{"metro":"Albuquerque, NM","percentile_20":31003.70946,"percentile_50":72259.94741,"percentile_80":135099.963},{"metro":"Allentown-Bethlehem-Easton, PA-NJ","percentile_20":39490.75841,"percentile_50":82000,"percentile_80":141972.4255},{"metro":"Amarillo, TX","percentile_20":28000,"percentile_50":62355.03187,"percentile_80":121589.9667},{"metro":"Anchorage, AK","percentile_20":45400,"percentile_50":93815.45715,"percentile_80":168200},{"metro":"Ann Arbor, MI","percentile_20":39191.83588,"percentile_50":91978.84073,"percentile_80":183099.3583},{"metro":"Anniston-Oxford-Jacksonville, AL","percentile_20":24854.92909,"percentile_50":60621.77826,"percentile_80":100978.5621},{"metro":"Asheville, NC","percentile_20":33068.11153,"percentile_50":65817.93069,"percentile_80":122474.4871},{"metro":"Atlanta-Sandy Springs-Roswell, GA","percentile_20":38624.56657,"percentile_50":83710.01553,"percentile_80":155884.5727},{"metro":"Atlantic City-Hammonton, NJ","percentile_20":32000,"percentile_50":72746.13392,"percentile_80":140110.8133},{"metro":"Auburn-Opelika, AL","percentile_20":23036.27574,"percentile_50":70300.35562,"percentile_80":126439.709},{"metro":"Augusta-Richmond County, GA-SC","percentile_20":30618.62178,"percentile_50":66136.22306,"percentile_80":127373.4666},{"metro":"Austin-Round Rock, TX","percentile_20":44152.01015,"percentile_50":94050.35885,"percentile_80":173205.0808},{"metro":"Bakersfield, CA","percentile_20":26000,"percentile_50":56828.16203,"percentile_80":117779.4549},{"metro":"Baltimore-Columbia-Towson, MD","percentile_20":42866.0705,"percentile_50":97979.58971,"percentile_80":174937.1316},{"metro":"Bangor, ME","percentile_20":33593.12541,"percentile_50":63074.36088,"percentile_80":108000},{"metro":"Barnstable Town, MA","percentile_20":55603.41716,"percentile_50":103368.4671,"percentile_80":172512.2604},{"metro":"Baton Rouge, LA","percentile_20":28232.42816,"percentile_50":70912.72805,"percentile_80":133864.6144},{"metro":"Beaumont-Port Arthur, TX","percentile_20":29800,"percentile_50":66900,"percentile_80":128598.2115},{"metro":"Bellingham, WA","percentile_20":39000,"percentile_50":78873.56972,"percentile_80":145867.1142},{"metro":"Bend-Redmond, OR","percentile_20":39314.31037,"percentile_50":78400,"percentile_80":138564.0646},{"metro":"Binghamton, NY","percentile_20":29393.87691,"percentile_50":65700,"percentile_80":115003.5434},{"metro":"Birmingham-Hoover, AL","percentile_20":28752.04341,"percentile_50":68069.59674,"percentile_80":130000},{"metro":"Bismarck, ND","percentile_20":44090.81537,"percentile_50":81406.38796,"percentile_80":139000},{"metro":"Blacksburg-Christiansburg-Radford, VA","percentile_20":30250,"percentile_50":71000,"percentile_80":124707.6581},{"metro":"Bloomington, IL","percentile_20":30137.68405,"percentile_50":79300,"percentile_80":142894.1916},{"metro":"Bloomington, IN","percentile_20":29444.86373,"percentile_50":64176.63126,"percentile_80":116913.4295},{"metro":"Boise City, ID","percentile_20":39144.34825,"percentile_50":75292.24861,"percentile_80":132894.6952},{"metro":"Boston-Cambridge-Newton, MA-NH","percentile_20":46785.25409,"percentile_50":109737.1405,"percentile_80":202082.9038},{"metro":"Bremerton-Silverdale, WA","percentile_20":48989.79486,"percentile_50":89308.39602,"percentile_80":151554.4457},{"metro":"Bridgeport-Stamford-Norwalk, CT","percentile_20":45800,"percentile_50":114315.3533,"percentile_80":238212.8775},{"metro":"Brownsville-Harlingen, TX","percentile_20":18371.17307,"percentile_50":43301.27019,"percentile_80":89161.42664},{"metro":"Buffalo-Cheektowaga-Niagara Falls, NY","percentile_20":31869.73486,"percentile_50":73700,"percentile_80":131982.2715},{"metro":"Burlington, NC","percentile_20":30373.67281,"percentile_50":66000,"percentile_80":117759.2194},{"metro":"Burlington-South Burlington, VT","percentile_20":44703.18781,"percentile_50":89893.43691,"percentile_80":153093.1089},{"metro":"Canton-Massillon, OH","percentile_20":33255.37551,"percentile_50":64678.82188,"percentile_80":111451.7833},{"metro":"Cape Coral-Fort Myers, FL","percentile_20":38105.11777,"percentile_50":75934.18203,"percentile_80":135706.1808},{"metro":"Champaign-Urbana, IL","percentile_20":29393.87691,"percentile_50":66136.22306,"percentile_80":127863.3646},{"metro":"Charleston, WV","percentile_20":27189.33614,"percentile_50":56753.53146,"percentile_80":110331.6364},{"metro":"Charleston-North Charleston, SC","percentile_20":37354.71858,"percentile_50":82057.90638,"percentile_80":155000},{"metro":"Charlotte-Concord-Gastonia, NC-SC","percentile_20":36374.92268,"percentile_50":77400,"percentile_80":142028.1662},{"metro":"Chattanooga, TN-GA","percentile_20":31176.91454,"percentile_50":65298.31545,"percentile_80":121862.1147},{"metro":"Chicago-Naperville-Elgin, IL-IN-WI","percentile_20":38105.11777,"percentile_50":87936.68177,"percentile_80":165000},{"metro":"Chico, CA","percentile_20":29964.47897,"percentile_50":67360.96793,"percentile_80":125291.4003},{"metro":"Cincinnati, OH-KY-IN","percentile_20":36303.78493,"percentile_50":82800,"percentile_80":147224.3186},{"metro":"Clarksville, TN-KY","percentile_20":29132.79938,"percentile_50":63000,"percentile_80":108253.1755},{"metro":"Cleveland-Elyria, OH","percentile_20":31176.91454,"percentile_50":70055.40664,"percentile_80":130000},{"metro":"Coeur d'Alene, ID","percentile_20":39191.83588,"percentile_50":72746.13392,"percentile_80":112410.0974},{"metro":"College Station-Bryan, TX","percentile_20":25229.74435,"percentile_50":64894.17026,"percentile_80":121029.2882},{"metro":"Colorado Springs, CO","percentile_20":40318.60117,"percentile_50":79903.06627,"percentile_80":143760.217},{"metro":"Columbia, MO","percentile_20":25980.76211,"percentile_50":69320.55972,"percentile_80":122719.4361},{"metro":"Columbia, SC","percentile_20":30618.62178,"percentile_50":66857.16117,"percentile_80":123699.232},{"metro":"Columbus, OH","percentile_20":38105.11777,"percentile_50":80833.16151,"percentile_80":144400},{"metro":"Corpus Christi, TX","percentile_20":26000,"percentile_50":64951.90528,"percentile_80":124447.8505},{"metro":"Dallas-Fort Worth-Arlington, TX","percentile_20":38500,"percentile_50":82792.0286,"percentile_80":155018.5473},{"metro":"Daphne-Fairhope-Foley, AL","percentile_20":34034.79837,"percentile_50":71200,"percentile_80":132000},{"metro":"Dayton, OH","percentile_20":33068.11153,"percentile_50":71133.18213,"percentile_80":127410.209},{"metro":"Decatur, AL","percentile_20":27712.81292,"percentile_50":63046.6494,"percentile_80":112496.7},{"metro":"Decatur, IL","percentile_20":30618.62178,"percentile_50":69282.0323,"percentile_80":118800.2525},{"metro":"Deltona-Daytona Beach-Ormond Beach, FL","percentile_20":31598.41768,"percentile_50":64000,"percentile_80":114391.171},{"metro":"Denver-Aurora-Lakewood, CO","percentile_20":48497.42261,"percentile_50":101757.9849,"percentile_80":178401.2332},{"metro":"Des Moines-West Des Moines, IA","percentile_20":42525.35714,"percentile_50":84870.48957,"percentile_80":143295.15},{"metro":"Detroit-Warren-Dearborn, MI","percentile_20":34641.01615,"percentile_50":76607.79171,"percentile_80":141162.1408},{"metro":"Dover, DE","percentile_20":33802.95845,"percentile_50":69282.0323,"percentile_80":121249.7423},{"metro":"East Stroudsburg, PA","percentile_20":38187.61579,"percentile_50":77400,"percentile_80":135359.7706},{"metro":"Eau Claire, WI","percentile_20":44167.29559,"percentile_50":80588.21254,"percentile_80":131000},{"metro":"El Centro, CA","percentile_20":20091.78937,"percentile_50":50193.86417,"percentile_80":98469.48766},{"metro":"Elkhart-Goshen, IN","percentile_20":34121.40091,"percentile_50":67973.34036,"percentile_80":120024.9974},{"metro":"El Paso, TX","percentile_20":23882.52499,"percentile_50":53600,"percentile_80":100551.5539},{"metro":"Erie, PA","percentile_20":29098.45357,"percentile_50":64421.58024,"percentile_80":113102.9177},{"metro":"Eugene, OR","percentile_20":31176.91454,"percentile_50":66956.80212,"percentile_80":118645.4803},{"metro":"Fayetteville, NC","percentile_20":26944.38717,"percentile_50":55970.84062,"percentile_80":105328.0589},{"metro":"Fayetteville-Springdale-Rogers, AR-MO","percentile_20":31176.91454,"percentile_50":68463.23831,"percentile_80":131059.9487},{"metro":"Flagstaff, AZ","percentile_20":27626.3849,"percentile_50":65425.87103,"percentile_80":127373.4666},{"metro":"Florence, SC","percentile_20":24190,"percentile_50":57504.08681,"percentile_80":115181.3787},{"metro":"Fort Collins, CO","percentile_20":40400,"percentile_50":88000,"percentile_80":154152.5219},{"metro":"Fort Wayne, IN","percentile_20":33849.87445,"percentile_50":67389.91022,"percentile_80":116913.4295},{"metro":"Fresno, CA","percentile_20":24787.09342,"percentile_50":61237.24357,"percentile_80":123841.6327},{"metro":"Gadsden, AL","percentile_20":20264.99445,"percentile_50":48254.94793,"percentile_80":96215.42236},{"metro":"Gainesville, FL","percentile_20":25980.76211,"percentile_50":64085.87988,"percentile_80":125291.4003},{"metro":"Gainesville, GA","percentile_20":36406.04345,"percentile_50":73974.59023,"percentile_80":138396.1705},{"metro":"Glens Falls, NY","percentile_20":41200,"percentile_50":74478.18473,"percentile_80":126148.7218},{"metro":"Goldsboro, NC","percentile_20":23000,"percentile_50":56118.44617,"percentile_80":95262.79442},{"metro":"Grand Junction, CO","percentile_20":35940.05426,"percentile_50":70148.05771,"percentile_80":117738.6937},{"metro":"Grand Rapids-Wyoming, MI","percentile_20":39663.96349,"percentile_50":77281.40138,"percentile_80":128598.2115},{"metro":"Greensboro-High Point, NC","percentile_20":26760.18498,"percentile_50":61141.39351,"percentile_80":111197.6618},{"metro":"Greenville, NC","percentile_20":25980.76211,"percentile_50":61727.14152,"percentile_80":113000},{"metro":"Greenville-Anderson-Mauldin, SC","percentile_20":32216.14502,"percentile_50":68218.28934,"percentile_80":125920},{"metro":"Gulfport-Biloxi-Pascagoula, MS","percentile_20":28000,"percentile_50":60621.77826,"percentile_80":113200},{"metro":"Hanford-Corcoran, CA","percentile_20":29444.86373,"percentile_50":54299.79282,"percentile_80":114268.6965},{"metro":"Harrisburg-Carlisle, PA","percentile_20":37354.71858,"percentile_50":77942.28634,"percentile_80":140296.1154},{"metro":"Harrisonburg, VA","percentile_20":36742.34614,"percentile_50":68000,"percentile_80":132675.0919},{"metro":"Hartford-West Hartford-East Hartford, CT","percentile_20":40000,"percentile_50":91855.86535,"percentile_80":170851.9096},{"metro":"Hickory-Lenoir-Morganton, NC","percentile_20":28319.0307,"percentile_50":58889.72746,"percentile_80":103923.0485},{"metro":"Hilton Head Island-Bluffton-Beaufort, SC","percentile_20":39837.16857,"percentile_50":85732.141,"percentile_80":163503.4403},{"metro":"Homosassa Springs, FL","percentile_20":28169.13204,"percentile_50":62000,"percentile_80":110227.0384},{"metro":"Houma-Thibodaux, LA","percentile_20":25980.76211,"percentile_50":59643.94353,"percentile_80":114400},{"metro":"Houston-The Woodlands-Sugar Land, TX","percentile_20":34292.8564,"percentile_50":77459.66692,"percentile_80":155000},{"metro":"Huntsville, AL","percentile_20":34292.8564,"percentile_50":77942.28634,"percentile_80":153950.4303},{"metro":"Indianapolis-Carmel-Anderson, IN","percentile_20":35507.04156,"percentile_50":74954.38613,"percentile_80":137661.3235},{"metro":"Iowa City, IA","percentile_20":29237.01763,"percentile_50":73586.68358,"percentile_80":153093.1089},{"metro":"Ithaca, NY","percentile_20":27801.70858,"percentile_50":68708.18729,"percentile_80":145000},{"metro":"Jackson, MI","percentile_20":27193.19768,"percentile_50":66600,"percentile_80":121243.5565},{"metro":"Jackson, MS","percentile_20":28752.04341,"percentile_50":62339.51395,"percentile_80":120269.9464},{"metro":"Jackson, TN","percentile_20":25352.21884,"percentile_50":60012.4987,"percentile_80":103923.0485},{"metro":"Jacksonville, FL","percentile_20":36900,"percentile_50":76155.40033,"percentile_80":139256.8849},{"metro":"Janesville-Beloit, WI","percentile_20":36476.99001,"percentile_50":73974.59023,"percentile_80":121243.5565},{"metro":"Jefferson City, MO","percentile_20":37065.88728,"percentile_50":69810.45767,"percentile_80":111544.072},{"metro":"Johnstown, PA","percentile_20":24248.71131,"percentile_50":57960,"percentile_80":104200},{"metro":"Joplin, MO","percentile_20":25287.94179,"percentile_50":56638.06141,"percentile_80":103000},{"metro":"Kalamazoo-Portage, MI","percentile_20":32735.76026,"percentile_50":67203.57133,"percentile_80":122474.4871},{"metro":"Kankakee, IL","percentile_20":35395.12678,"percentile_50":75000,"percentile_80":125000},{"metro":"Kansas City, MO-KS","percentile_20":38624.56657,"percentile_50":81059.97779,"percentile_80":140600.7112},{"metro":"Knoxville, TN","percentile_20":29444.86373,"percentile_50":64911.47818,"percentile_80":119511.5057},{"metro":"La Crosse-Onalaska, WI-MN","percentile_20":37599.66755,"percentile_50":71014.08311,"percentile_80":116350.7628},{"metro":"Lafayette, LA","percentile_20":23382.6859,"percentile_50":60621.77826,"percentile_80":115000},{"metro":"Lafayette-West Lafayette, IN","percentile_20":27712.81292,"percentile_50":60012.4987,"percentile_80":117779.4549},{"metro":"Lake Havasu City-Kingman, AZ","percentile_20":28925.24849,"percentile_50":57930.43242,"percentile_80":102829.5794},{"metro":"Lakeland-Winter Haven, FL","percentile_20":29791.27389,"percentile_50":59409.3427,"percentile_80":108253.1755},{"metro":"Lancaster, PA","percentile_20":41396.0143,"percentile_50":77100,"percentile_80":130435.3288},{"metro":"Lansing-East Lansing, MI","percentile_20":34641.01615,"percentile_50":77459.66692,"percentile_80":129903.8106},{"metro":"Laredo, TX","percentile_20":23760.0505,"percentile_50":53740.11537,"percentile_80":108000},{"metro":"Las Cruces, NM","percentile_20":20264.99445,"percentile_50":51961.52423,"percentile_80":96200},{"metro":"Las Vegas-Henderson-Paradise, NV","percentile_20":33255.37551,"percentile_50":71880.10851,"percentile_80":129700},{"metro":"Lawrence, KS","percentile_20":32908.96534,"percentile_50":72000,"percentile_80":126148.7218},{"metro":"Lebanon, PA","percentile_20":40661.52973,"percentile_50":72504.89639,"percentile_80":112583.3025},{"metro":"Lewiston-Auburn, ME","percentile_20":34905.22883,"percentile_50":71014.08311,"percentile_80":120024.9974},{"metro":"Lima, OH","percentile_20":34072.40232,"percentile_50":66200,"percentile_80":109859.615},{"metro":"Lincoln, NE","percentile_20":38797.93809,"percentile_50":73692.89891,"percentile_80":132272.4461},{"metro":"Little Rock-North Little Rock-Conway, AR","percentile_20":29393.87691,"percentile_50":65644.72561,"percentile_80":122474.4871},{"metro":"Los Angeles-Long Beach-Anaheim, CA","percentile_20":35272.6523,"percentile_50":85043.69465,"percentile_80":170239.5371},{"metro":"Louisville/Jefferson County, KY-IN","percentile_20":34641.01615,"percentile_50":73484.69228,"percentile_80":128598.2115},{"metro":"Lubbock, TX","percentile_20":29393.87691,"percentile_50":65548.79862,"percentile_80":124000},{"metro":"Lynchburg, VA","percentile_20":34641.01615,"percentile_50":70100,"percentile_80":124200},{"metro":"Madera, CA","percentile_20":27712.81292,"percentile_50":61487.80367,"percentile_80":110227.0384},{"metro":"Manchester-Nashua, NH","percentile_20":49675.65198,"percentile_50":97220,"percentile_80":162812.7759},{"metro":"Mansfield, OH","percentile_20":31769.88196,"percentile_50":60621.77826,"percentile_80":102190.9976},{"metro":"McAllen-Edinburg-Mission, TX","percentile_20":17000,"percentile_50":42602.81681,"percentile_80":89406.37561},{"metro":"Medford, OR","percentile_20":31843.36666,"percentile_50":66683.95609,"percentile_80":127373.4666},{"metro":"Memphis, TN-MS-AR","percentile_20":29393.87691,"percentile_50":65298.31545,"percentile_80":124707.6581},{"metro":"Merced, CA","percentile_20":30983.86677,"percentile_50":60621.77826,"percentile_80":108000},{"metro":"Miami-Fort Lauderdale-West Palm Beach, FL","percentile_20":30128.72384,"percentile_50":68589.21198,"percentile_80":138564.0646},{"metro":"Michigan City-La Porte, IN","percentile_20":32562.55518,"percentile_50":69108.82722,"percentile_80":121243.5565},{"metro":"Midland, TX","percentile_20":40096.9762,"percentile_50":92713.18676,"percentile_80":173509.6059},{"metro":"Milwaukee-Waukesha-West Allis, WI","percentile_20":36742.34614,"percentile_50":80540.36255,"percentile_80":138564.0646},{"metro":"Minneapolis-St. Paul-Bloomington, MN-WI","percentile_20":48151.01245,"percentile_50":97860.87063,"percentile_80":169259.7412},{"metro":"Mobile, AL","percentile_20":25980.76211,"percentile_50":57850.49697,"percentile_80":105949.5479},{"metro":"Modesto, CA","percentile_20":31783.13232,"percentile_50":68400,"percentile_80":127730.9908},{"metro":"Monroe, LA","percentile_20":19595.91794,"percentile_50":56338.26408,"percentile_80":106552.8038},{"metro":"Monroe, MI","percentile_20":37065.88728,"percentile_50":77074.63915,"percentile_80":134721.9359},{"metro":"Montgomery, AL","percentile_20":28405.63324,"percentile_50":63500,"percentile_80":116105.8138},{"metro":"Morgantown, WV","percentile_20":24941.53163,"percentile_50":67483.44241,"percentile_80":140815.7307},{"metro":"Muncie, IN","percentile_20":23382.6859,"percentile_50":56638.06141,"percentile_80":103923.0485},{"metro":"Muskegon, MI","percentile_20":31843.36666,"percentile_50":59842.3554,"percentile_80":98836.91112},{"metro":"Myrtle Beach-Conway-North Myrtle Beach, SC-NC","percentile_20":35000,"percentile_50":69282.0323,"percentile_80":119000},{"metro":"Napa, CA","percentile_20":48000,"percentile_50":106694.3297,"percentile_80":210656.1179},{"metro":"Naples-Immokalee-Marco Island, FL","percentile_20":40000,"percentile_50":84139.97266,"percentile_80":188806.6694},{"metro":"Nashville-Davidson--Murfreesboro--Franklin, TN","percentile_20":40400,"percentile_50":79363.46767,"percentile_80":142437.8285},{"metro":"New Haven-Milford, CT","percentile_20":31900,"percentile_50":83772.5492,"percentile_80":156644.8691},{"metro":"New Orleans-Metairie, LA","percentile_20":27600,"percentile_50":67000,"percentile_80":129822.9564},{"metro":"New York-Newark-Jersey City, NY-NJ-PA","percentile_20":37354.71858,"percentile_50":96754.84484,"percentile_80":190525.5888},{"metro":"Niles-Benton Harbor, MI","percentile_20":28578.83832,"percentile_50":58542.80485,"percentile_80":122474.4871},{"metro":"North Port-Sarasota-Bradenton, FL","percentile_20":40465.57055,"percentile_50":80710.68702,"percentile_80":148096.1498},{"metro":"Norwich-New London, CT","percentile_20":43301.27019,"percentile_50":86602.54038,"percentile_80":159216.8333},{"metro":"Ocala, FL","percentile_20":30137.68405,"percentile_50":60621.77826,"percentile_80":103923.0485},{"metro":"Ocean City, NJ","percentile_20":39490.75841,"percentile_50":87761.80263,"percentile_80":156750.5981},{"metro":"Odessa, TX","percentile_20":34641.01615,"percentile_50":73484.69228,"percentile_80":131047.7012},{"metro":"Ogden-Clearfield, UT","percentile_20":48989.79486,"percentile_50":82024.38662,"percentile_80":134721.9359},{"metro":"Oklahoma City, OK","percentile_20":33139.90545,"percentile_50":71014.08311,"percentile_80":130769.836},{"metro":"Olympia-Tumwater, WA","percentile_20":41641.32563,"percentile_50":87079.36036,"percentile_80":149418.8743},{"metro":"Omaha-Council Bluffs, NE-IA","percentile_20":38105.11777,"percentile_50":77942.28634,"percentile_80":134600},{"metro":"Orlando-Kissimmee-Sanford, FL","percentile_20":35517.60127,"percentile_50":71880.10851,"percentile_80":130000},{"metro":"Oshkosh-Neenah, WI","percentile_20":36742.34614,"percentile_50":73239.74331,"percentile_80":121900},{"metro":"Owensboro, KY","percentile_20":26153.96719,"percentile_50":58889.72746,"percentile_80":104442.6637},{"metro":"Oxnard-Thousand Oaks-Ventura, CA","percentile_20":48989.79486,"percentile_50":102310,"percentile_80":183000},{"metro":"Palm Bay-Melbourne-Titusville, FL","percentile_20":37773.5168,"percentile_50":72746.13392,"percentile_80":135000},{"metro":"Parkersburg-Vienna, WV","percentile_20":24508.51893,"percentile_50":53888.77434,"percentile_80":111717.2771},{"metro":"Pensacola-Ferry Pass-Brent, FL","percentile_20":31176.91454,"percentile_50":67376.77641,"percentile_80":122975.6073},{"metro":"Philadelphia-Camden-Wilmington, PA-NJ-DE-MD","percentile_20":36374.92268,"percentile_50":88304.02029,"percentile_80":166276.8775},{"metro":"Phoenix-Mesa-Scottsdale, AZ","percentile_20":37967.09101,"percentile_50":77942.28634,"percentile_80":142070.4051},{"metro":"Pittsburgh, PA","percentile_20":36373.06696,"percentile_50":78383.67177,"percentile_80":138564.0646},{"metro":"Pittsfield, MA","percentile_20":33948.19583,"percentile_50":71035.20254,"percentile_80":134233.9376},{"metro":"Portland-South Portland, ME","percentile_20":41865.10224,"percentile_50":82057.90638,"percentile_80":144000},{"metro":"Portland-Vancouver-Hillsboro, OR-WA","percentile_20":44686.91084,"percentile_50":91316.97761,"percentile_80":163938.6089},{"metro":"Port St. Lucie, FL","percentile_20":35762.55024,"percentile_50":72900,"percentile_80":129822.9564},{"metro":"Prescott, AZ","percentile_20":31230.99422,"percentile_50":68100,"percentile_80":119657.5739},{"metro":"Providence-Warwick, RI-MA","percentile_20":35000,"percentile_50":83900,"percentile_80":148956.3695},{"metro":"Provo-Orem, UT","percentile_20":39000,"percentile_50":76424.07997,"percentile_80":130930.7341},{"metro":"Pueblo, CO","percentile_20":23642.49352,"percentile_50":59409.3427,"percentile_80":112676.5282},{"metro":"Punta Gorda, FL","percentile_20":33601.78567,"percentile_50":69282.0323,"percentile_80":128171.7598},{"metro":"Racine, WI","percentile_20":34641.01615,"percentile_50":70840.87803,"percentile_80":129120},{"metro":"Raleigh, NC","percentile_20":40500,"percentile_50":88691.31863,"percentile_80":161427.1353},{"metro":"Reading, PA","percentile_20":39681.73383,"percentile_50":78200,"percentile_80":129822.9564},{"metro":"Redding, CA","percentile_20":32042.93994,"percentile_50":69282.0323,"percentile_80":137171.4256},{"metro":"Reno, NV","percentile_20":36373.06696,"percentile_50":80955.636,"percentile_80":142061.0291},{"metro":"Richmond, VA","percentile_20":38105.11777,"percentile_50":82057.90638,"percentile_80":151390.7136},{"metro":"Riverside-San Bernardino-Ontario, CA","percentile_20":34292.8564,"percentile_50":73092.54408,"percentile_80":137103.6105},{"metro":"Roanoke, VA","percentile_20":34641.01615,"percentile_50":71533.69835,"percentile_80":125400.4785},{"metro":"Rochester, NY","percentile_20":35316.51597,"percentile_50":75000,"percentile_80":132284.6936},{"metro":"Rockford, IL","percentile_20":30310.88913,"percentile_50":71533.69835,"percentile_80":126761.0942},{"metro":"Rocky Mount, NC","percentile_20":24000,"percentile_50":54221.76685,"percentile_80":97000},{"metro":"Sacramento--Roseville--Arden-Arcade, CA","percentile_20":38729.83346,"percentile_50":90066.64199,"percentile_80":161666.323},{"metro":"Saginaw, MI","percentile_20":27712.81292,"percentile_50":59032.7028,"percentile_80":112583.3025},{"metro":"St. George, UT","percentile_20":37481.57948,"percentile_50":69628.44246,"percentile_80":113901.273},{"metro":"St. Joseph, MO-KS","percentile_20":27700,"percentile_50":56460.73857,"percentile_80":99000},{"metro":"St. Louis, MO-IL","percentile_20":36742.34614,"percentile_50":79163.7796,"percentile_80":139865.8643},{"metro":"Salinas, CA","percentile_20":38105.11777,"percentile_50":82267.92814,"percentile_80":154000},{"metro":"Salisbury, MD-DE","percentile_20":33601.78567,"percentile_50":73612.15932,"percentile_80":133000},{"metro":"Salt Lake City, UT","percentile_20":44080.69305,"percentile_50":86000,"percentile_80":142287.9738},{"metro":"San Angelo, TX","percentile_20":33948.19583,"percentile_50":63981.68488,"percentile_80":113622.533},{"metro":"San Antonio-New Braunfels, TX","percentile_20":32420,"percentile_50":71600,"percentile_80":128843.1605},{"metro":"San Diego-Carlsbad, CA","percentile_20":41151.42768,"percentile_50":93080.61023,"percentile_80":178403.0409},{"metro":"San Francisco-Oakland-Hayward, CA","percentile_20":51961.52423,"percentile_50":130000,"percentile_80":258900},{"metro":"San Jose-Sunnyvale-Santa Clara, CA","percentile_20":61543.42979,"percentile_50":143760.217,"percentile_80":282916.0653},{"metro":"San Luis Obispo-Paso Robles-Arroyo Grande, CA","percentile_20":41569.21938,"percentile_50":87681.24087,"percentile_80":160214.6997},{"metro":"Santa Cruz-Watsonville, CA","percentile_20":42253.69806,"percentile_50":101898.7733,"percentile_80":198000},{"metro":"Santa Fe, NM","percentile_20":31003.70946,"percentile_50":71000,"percentile_80":147224.3186},{"metro":"Santa Maria-Santa Barbara, CA","percentile_20":37065.88728,"percentile_50":86602.54038,"percentile_80":183711.7307},{"metro":"Santa Rosa, CA","percentile_20":50000,"percentile_50":102878.5692,"percentile_80":183711.7307},{"metro":"Scranton--Wilkes-Barre--Hazleton, PA","percentile_20":28800,"percentile_50":64911.47818,"percentile_80":115126.0179},{"metro":"Seattle-Tacoma-Bellevue, WA","percentile_20":51800,"percentile_50":107777.5487,"percentile_80":195959.1794},{"metro":"Sebastian-Vero Beach, FL","percentile_20":32908.96534,"percentile_50":72011.90378,"percentile_80":130829.3774},{"metro":"Sheboygan, WI","percentile_20":39837.16857,"percentile_50":71770.04946,"percentile_80":120062.4837},{"metro":"Shreveport-Bossier City, LA","percentile_20":21188.08628,"percentile_50":55100,"percentile_80":111200},{"metro":"Spartanburg, SC","percentile_20":31200,"percentile_50":62353.82907,"percentile_80":110227.0384},{"metro":"Spokane-Spokane Valley, WA","percentile_20":32210.79012,"percentile_50":65817.93069,"percentile_80":121500},{"metro":"Springfield, IL","percentile_20":34856.85012,"percentile_50":77942.28634,"percentile_80":131905.0226},{"metro":"Springfield, MA","percentile_20":30100,"percentile_50":77036.45241,"percentile_80":135334.3083},{"metro":"Springfield, MO","percentile_20":27801.70858,"percentile_50":60000,"percentile_80":106867.5348},{"metro":"Springfield, OH","percentile_20":29000,"percentile_50":56460.73857,"percentile_80":103490.9416},{"metro":"State College, PA","percentile_20":32908.96534,"percentile_50":71525.10049,"percentile_80":134721.9359},{"metro":"Stockton-Lodi, CA","percentile_20":34641.01615,"percentile_50":73600,"percentile_80":137171.4256},{"metro":"Syracuse, NY","percentile_20":32908.96534,"percentile_50":75566.75856,"percentile_80":130000},{"metro":"Tampa-St. Petersburg-Clearwater, FL","percentile_20":33774.99075,"percentile_50":71100,"percentile_80":129903.8106},{"metro":"Toledo, OH","percentile_20":29393.87691,"percentile_50":63319.30985,"percentile_80":123576.7575},{"metro":"Topeka, KS","percentile_20":34170.38191,"percentile_50":66305.47489,"percentile_80":112676.5282},{"metro":"Trenton, NJ","percentile_20":34641.01615,"percentile_50":92590.71228,"percentile_80":181865.3348},{"metro":"Tucson, AZ","percentile_20":31176.91454,"percentile_50":67360.96793,"percentile_80":123110},{"metro":"Tuscaloosa, AL","percentile_20":27019.9926,"percentile_50":60000,"percentile_80":121494.6912},{"metro":"Tyler, TX","percentile_20":30986.04525,"percentile_50":63800,"percentile_80":118000},{"metro":"Urban Honolulu, HI","percentile_20":47275.15204,"percentile_50":100000,"percentile_80":169500},{"metro":"Utica-Rome, NY","percentile_20":34600,"percentile_50":71706.90343,"percentile_80":127305.7344},{"metro":"Vallejo-Fairfield, CA","percentile_20":46765.3718,"percentile_50":97857.11522,"percentile_80":162119.9556},{"metro":"Virginia Beach-Norfolk-Newport News, VA-NC","percentile_20":38451.52793,"percentile_50":80343.26356,"percentile_80":139620.9153},{"metro":"Visalia-Porterville, CA","percentile_20":26332.01473,"percentile_50":58000,"percentile_80":114419.2763},{"metro":"Waco, TX","percentile_20":24984.79538,"percentile_50":58196.90713,"percentile_80":117428.8551},{"metro":"Washington-Arlington-Alexandria, DC-VA-MD-WV","percentile_20":55725.89165,"percentile_50":123935.4671,"percentile_80":225166.605},{"metro":"Wausau, WI","percentile_20":40269.61137,"percentile_50":71014.08311,"percentile_80":117453.0332},{"metro":"Wenatchee, WA","percentile_20":37412.29744,"percentile_50":68164.50689,"percentile_80":127305.7344},{"metro":"Wichita, KS","percentile_20":34701.93078,"percentile_50":68000,"percentile_80":122474.4871},{"metro":"Wichita Falls, TX","percentile_20":29444.86373,"percentile_50":60621.77826,"percentile_80":107363.202},{"metro":"Wilmington, NC","percentile_20":31353.46871,"percentile_50":70700,"percentile_80":134844.4103},{"metro":"Winston-Salem, NC","percentile_20":28737.53643,"percentile_50":64085.87988,"percentile_80":116000},{"metro":"Worcester, MA-CT","percentile_20":39681.73383,"percentile_50":89373.82167,"percentile_80":155538.1625},{"metro":"Yakima, WA","percentile_20":30572.32642,"percentile_50":58000,"percentile_80":110227.0384},{"metro":"York-Hanover, PA","percentile_20":40000,"percentile_50":79400,"percentile_80":135965.9884},{"metro":"Youngstown-Warren-Boardman, OH-PA","percentile_20":26846.78752,"percentile_50":59755.75286,"percentile_80":107387.1501},{"metro":"Yuba City, CA","percentile_20":31869.73486,"percentile_50":68000,"percentile_80":124707.6581},{"metro":"Yuma, AZ","percentile_20":23025.20358,"percentile_50":51439.2846,"percentile_80":95285.15099}]
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