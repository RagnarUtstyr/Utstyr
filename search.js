// Item list - assuming this comes from alleq.html or hardcoded here
const items = [
    { name: "RED Epic Dragon 6K" , keywords: "kamera red epic dragon 6k cinema camera high resolution" , url: "html/red-epic-dragon.html" },
    { name: "Canon 5D MK2" , keywords: "kamera canon5dmk2 canon 5d mk2 mk2 canon 5d cenon" , url: "html/Canon-5D-MK2.html" },
    { name: "Sachtler FSB 10" , keywords: "sachtler tripod stativ kamera fsb 10 fsb sechtler sachtlar sachtlerfsb10 10 sachtler" , url: "html/fsb10.html" },
    { name: "100mm High hat" , keywords: "100mm tripod high hat 100mm high hat 100mmhighhat" , url: "html/100mmhh.html" },
    { name: "Easyrig MinMax" , keywords: "minmax aasyrig easyrigminmax easyrig minmax minmex easyrig eesyrig" , url: "html/minmax.html" },
    { name: "Tilta MB T-12" , keywords: "tilta matteboks mb t-12 t-12 tilte tiltambt-12 tilta mb" , url: "html/mbt12.html" },
    { name: "Shoot35 CINEbox 4x4 Matte Box" , keywords: "s35 shoot35 matteboks mb 4x4 4 x 4 cinebox cine box mb" , url: "html/cinebox.html" },
    { name: "100mm Danadolly" , keywords: "100mm slider danadolly denedolly 100mm danadolly 100mmdanadolly" , url: "html/100mm-danadolly.html" },
    { name: "150mm Danadolly" , keywords: "150mm slider danadolly denedolly 150mmdanadolly 150mm danadolly" , url: "html/150mm-danadolly.html" },
    { name: "Mitchell mnt. Danadolly" , keywords: "mnt. slider mitchellmnt.danadolly danadolly mitchell mnt. danadolly mitchall denedolly mitchell" , url: "html/mitchell-danadolly.html" },
    { name: "DZOfilm Catta ACE 35-80" , keywords: "cette linse dzofilmcattaace35-80 35-80 dzofilm catta ace 35-80 ace dzofilm catta cette dzofilmcattaace35-80 35-80 dzofilm catta ace 35-80 ace dzofilm catta" , url: "html/Catta-ACE-35.html" },
    { name: "DZOfilm Catta ACE 70-135" , keywords: "dzofilm linse catta ace 70-135 cette dzofilmcattaace70-135 70-135 ace dzofilm catta dzofilm catta ace 70-135 cette dzofilmcattaace70-135 70-135 ace dzofilm catta" , url: "html/Catta-ACE-70.html" },
    { name: "Canon EF 24-70mm F/2.8" , keywords: "canon ef 24-70mm linse canonef24-70mm canon ef cenon 24-70mm canon ef 24-70mm canonef24-70mm canon ef cenon 24-70mm" , url: "html/usm.html" },
    { name: "Atomos Ninja V 5" , keywords: "ninja atomosninjav5 monitor 5 atomos ninja v 5 atomos v ninje etomos ninja atomosninjav5 5 atomos ninja v 5 atomos v ninje etomos" , url: "html/Atomos.html" },
    { name: "SmallHD 702 Ultra bright" , keywords: "smellhd 702 ultre monitor smallhd bright smallhd 702 ultra bright smallhd702ultrabright ultra smellhd 702 ultre smallhd bright smallhd 702 ultra bright smallhd702ultrabright ultra" , url: "html/702UB.html" },
    { name: "SmallHD 702 Ultra Dir Monitor" , keywords: "smallhd702ultrabrightdirectorsmonitor monitor smallhd 702 ultra bright directors monitor smellhd 702 ultre smallhd monitor diractors bright directors ultra smallhd702ultrabrightdirectorsmonitor smallhd 702 ultra bright directors monitor smellhd 702 ultre smallhd monitor diractors bright directors ultra" , url: "html/702DIR.html" },
    { name: "SmallHD 703 Ultra" , keywords: "703 smellhd smallhd703ultrabright ultre smallhd bright monitor ultra smallhd 703 ultra bright 703 smellhd smallhd703ultrabright ultre smallhd bright ultra smallhd 703 ultra bright" , url: "html/703.html" },
    { name: "SmallHD 1703 P3X" , keywords: "smallhd1703p3x p3x smallhd 1703 p3x smellhd smallhd 1703 monitor smallhd1703p3x p3x smallhd 1703 p3x smellhd smallhd 1703" , url: "html/1703.html" },
    { name: "Lilliput BM280-4KS – 28 4K" , keywords: "lilliput 28 lilliput28 lilliput 28 lilliput 28 monitor lilliput28 lilliput 28" , url: "html/Lili28.html" },
    { name: "Teradek Bolt 500" , keywords: "500 bolt wiralass wireless teradek bolt 500 wireless teredek trådløs taradak teradekbolt500wireless teradek 500 bolt wiralass wireless teradek bolt 500 wireless teredek taradak teradekbolt500wireless teradek" , url: "html/teradek-bolt-500.html" },
    { name: "Accsoon Cineeye" , keywords: "cineeye eccsoon wiralass wireless accsoon cineeye wireless trådløs accsooncineeyewireless cinaaya accsoon cineeye eccsoon wiralass wireless accsoon cineeye wireless accsooncineeyewireless cinaaya accsoon" , url: "html/accsoon-cineeye.html" },
    { name: "Accsoon Cineeye 2s" , keywords: "cineeye accsoon cineeye 2s wireless eccsoon wiralass trådløs accsooncineeye2swireless wireless 2s cinaaya accsoon cineeye accsoon cineeye 2s wireless eccsoon wiralass accsooncineeye2swireless wireless 2s cinaaya accsoon" , url: "html/accsoon-cineeye-2s.html" },
    { name: "Tilta Nucleus-m FIZ" , keywords: "nucleus-m nuclaus-m tilte tilta tiltanucleus-m følge tilta fokus nucleus-m nucleus-m nuclaus-m tilte tilta tiltanucleus-m tilta nucleus-m follow focus followfocus fiz" , url: "html/tilta-nucleus-m.html" },
    { name: "Tilta Nucleus Nano" , keywords: "nucleus-n nuclaus-n tilte tilta tiltanucleus-n mano namo nano mamo følge tilta fokus nucleus-m nucleus-n nuclaus-n tilte tilta tiltanucleus-n tilta nucleus-n follow focus followfocus fiz" , url: "html/nano.html" },
    { name: "Arri FF-4" , keywords: "ff-4 arri arri ff-4 arriff-4 follow focus følge fokus followfocus" , url: "html/arri-ff-4.html" },
    { name: "Shoot35 Cinefocus Pro Follow Focus" , keywords: "cinefocus shoot cine focus 15mm 19mm swingaway swing away follow focus følge fokus followfocus" , url: "html/cinefocus.html" },
    { name: "IDX iMicro98 V-mount battery" , keywords: "v-mount battary battery bettery batteri imicro98 idx idx vmount imicro98 v-mount battery idximicro98v-mountbattery" , url: "html/idx-imicro98.html" },
    { name: "IDX Duo C198 V-mount battery" , keywords: "c198 idxduoc198v-mountbattery idx duo c198 batteri v-mount vmount battery v-mount battary duo battery bettery idx" , url: "html/idx-duo-c198.html" },
    { name: "IDX DUO 300 V-mount battery" , keywords: "300 v-mount idxduo300v-mountbattery batteri battary duo battery vmount bettery idx duo 300 v-mount battery idx" , url: "html/idx-duo-300.html" },
    { name: "LP-E6 Canon battery" , keywords: "lp-e6 canon battery canon lp-e6canonbattery battery battary bettery cenon lp-e6 lp-a6" , url: "html/lp-e6-canon.html" },
    { name: "Deity S-95 Smart Battery" , keywords: "deitys-95smartbattery daity deity battary smart batteri battery s-95 bettery deity s-95 smart battery smert" , url: "html/deity-s95-smart.html" },
    { name: "IDX Quad V-Mount Charger" , keywords: "vl-4s idx vl-4s quad v-mount charger quad charger chargar v-mount cherger idxvl-4squadv-mountcharger idx" , url: "html/vl4s.html" },
    { name: "Hähnel Procube2" , keywords: "hähnelprocube2 hähnel procube2 procuba2 hähnal hähnel procube2" , url: "html/procube.html" },
    { name: "Astera Titan 8x LED Set" , keywords: "asteratitan8x astera 8x astara titan astera titan 8x titen estere asteratitan8x astera 8x astara titan astera titan 8x titen estere" , url: "html/astera-titan-8x-set.html" },
    { name: "Astera Titan Single" , keywords: "singla astera astara astera titan single asteratitansingle titan titen estere single" , url: "html/astera-titan-single.html" },
    { name: "Aputure MC" , keywords: "aputure mc aputura mc aputure aputuremc eputure" , url: "html/aputure-mc.html" },
    { name: "Aputure B7c Accent" , keywords: "aputura accant accent b7c aputure eccent aputureb7caccent aputure b7c accent eputure" , url: "html/aputure-b7c-accent.html" },
    { name: "Nanlite Pavotube II 6c" , keywords: "nanlite pavotube ii 6c nenlite nanlitepavotubeii6c pevotube 6c pavotube ii nanlita nanlite pavotuba" , url: "html/nanlite-pavotube-ii-6c.html" },
    { name: "Amaran COB 60d" , keywords: "cob 60d amaran amarancob60d amaran cob 60d emeren" , url: "html/amaran-cob-60d.html" },
    { name: "Aputure LS 300X" , keywords: "aputurels300x aputura ls 300x aputure ls 300x aputure eputure" , url: "html/aputure-ls-300x.html" },
    { name: "Aputure LS 600D PRO" , keywords: "aputura pro aputure ls 600d pro ls aputurels600dpro aputure 600d eputure" , url: "html/aputure-ls-600d-pro.html" },
    { name: "Godox FL150S" , keywords: "fl150s godox godoxfl150s godox fl150s" , url: "html/godox-fl150s.html" },
    { name: "E27 60W Matt" , keywords: "e27 matt e27 60w matt e2760wmatt 60w" , url: "html/e27-60w-matt.html" },
    { name: "E27 25W Matt" , keywords: "25w e27 e2725wmatt e27 25w matt matt" , url: "html/e27-25w-matt.html" },
    { name: "Godox QR-P90 Softbox" , keywords: "softbox qr-p90 godox qr-p90 softbox godoxqr-p90softbox godox" , url: "html/godox-qr-p90-softbox.html" },
    { name: "Godox CS-65D Lantern" , keywords: "godoxcs-65dlantern lentern godox cs-65d lantern lantarn godox lantern cs-65d" , url: "html/65lant.html" },
    { name: "Godox CS-85D Lantern" , keywords: "godoxcs-85dlantern lentern godox cs-85d lantern lantarn godox lantern cs-85d" , url: "html/85lant.html" },
    { name: "Aputure F10 Fresnel" , keywords: "fresnel aputura f10 aputure f10 fresnel frasnal aputure eputure aputuref10fresnel" , url: "html/aputure-f10-fresnel.html" },
    { name: "Flagkit Pro 60x90 cm" , keywords: "pro flagkit flagkit pro 60x90 cm flegkit cm flagkitpro60x90cm 60x90" , url: "html/flagkit-pro-60x90.html" },
    { name: "Floppy Flag 4x8" , keywords: "floppy flopy flag floppyflag flagg folpy flpy 4x8 4x4" , url: "html/floppy.html"},
    { name: "6x6 Frame" , keywords: "6x6 frame freme frama 6x6frame 6x6 frame" , url: "html/6x6-frame.html" },
    { name: "6x6 Silk" , keywords: "6x6 silk 6x6 6x6silk silk" , url: "html/6x6-silk.html" },
    { name: "6x6 Grid" , keywords: "6x6grid 6x6 6x6 grid grid" , url: "html/6x6-grid.html" },
    { name: "12x12 Silk" , keywords: "12x12 silk 12x12 12x12silk silk" , url: "html/12x12-silk.html" },
    { name: "12x12 Black" , keywords: "12x12 Black 12x12black neg negative negativefill negfill fill" , url: "html/12x12-black.html" },
    { name: "20x20 Silk" , keywords: "20x20 20x20black black neg negative negativefill negfill fill" , url: "html/20x20-black.html" },
    { name: "Astera Box Controller" , keywords: "controllar controller astera astara box asteraboxcontroller astera box controller estere" , url: "html/astera-box-controller.html" },
    { name: "Gaffer Controll" , keywords: "geffer gaffar gaffercontroll gaffer controll gaffer controll" , url: "html/Gaffer-Controll.html" },
    { name: "C-stand 40" , keywords: "c-stand40 c-stand c-stand 40 40 c-stend c-stand40 cstand cstnad catnd ctsatn ctnad ctnad c-stand c-stand 40 40 c-stend" , url: "html/c-stand-40.html" },
    { name: "C-stand 20" , keywords: "c-stand 20 c-stand c-stand20 20 c-stend c-stand 20 cstand catnd cstnad ctsatn ctnad ctnad c-stand c-stand20 20 c-stend" , url: "html/c-stand-20.html" },
    { name: "Avenger tripple riser combo stand" , keywords: "evenger combo riser avangar avenger tripple riser combo avengertripplerisercombo trippla risar avenger tripple evenger combo riser avangar avenger tripple riser combo avengertripplerisercombo trippla risar avenger tripple" , url: "html/avenger-tripple-riser-combo-stand.html" },
    { name: "Avenger Lowboy stand" , keywords: "evenger avenger lowboy stand stend lowboy avangar avengerlowboystand stand avenger" , url: "html/avenger-lowboy-stand.html" },
    { name: "Avenger Roller 12 Folding Base" , keywords: "avengerroller12foldingbase evenger rollar base avangar roller folding 12 avenger avenger roller 12 folding base" , url: "html/avenger-roller-12-folding-base.html" },
    { name: "Manfrotto Autopole 1,5m - 2,7m" , keywords: "manfrottoautopoleshort autopola menfrotto short manfrotto autopole short manfrotto eutopole autopole manfrottoautopoleshort autopola menfrotto short manfrotto autopole short manfrotto eutopole autopole" , url: "html/manfrotto-autopole-076b-black.html" },
    { name: "Gravity LS Vari-Pole 2,1m - 3.7m" , keywords: "gravity gravitylsvari-polelong grevity ls gravity ls vari-pole long vari-pola veri-pole vari-pole long gravity gravitylsvari-polelong grevity ls gravity ls vari-pole long vari-pola veri-pole vari-pole long" , url: "html/gravity-ls-vari-pole.html" },
    { name: "Magicarm" , keywords: "megicerm magicarm" , url: "html/magicarm.html" },
    { name: "Superclamp" , keywords: "superclamp suparclamp superclemp" , url: "html/superclamp.html" },
    { name: "Cardellini End-Jaw Clamp" , keywords: "cardellini cardellini end-jaw clamp end-jew clamp cardallini clemp cardelliniend-jawclamp end-jaw and-jaw cerdellini" , url: "html/cardellini-end-jaw-clamp.html" },
    { name: "Grip Head" , keywords: "grip head griphead grip-head gobo head gobo grip gobo clamp c stand grip arm head grip gear grip equipment film grip head lighting grip head photo grip head photography grip clamp grip knuckle grip knuckle head c-stand head c stand knuckle light stand grip light stand clamp c stand accessories cine grip head cinema grip head studio grip head heavy duty grip head aluminum grip head steel grip head gobo arm connector gobo arm joint gobo arm clamp film set clamp lighting knuckle movie grip gear lighting rig grip gear studio gobo head cinematography grip head photo studio clamp filming grip hardware grib head grp head gripp head gripphead gribhead gripe head" , url: "html/head.html" },
    { name: "Grip Arm" , keywords: "grip arm griparm grip-arm gobo arm gobo extension arm c stand arm cstand arm c-stand grip arm extension grip arm light stand arm boom arm boom grip arm grip boom arm photography arm lighting arm studio grip arm steel grip arm aluminum grip arm adjustable grip arm heavy duty grip arm film grip arm cinema grip arm photo grip arm gobo extension photo studio arm rigging arm cine arm cine grip arm movie grip gear c stand extension arm c stand boom arm light boom arm lighting boom pole lighting extension arm articulating grip arm stand arm extender stand boom grip extension arm grib arm grp arm gripp arm gribarm gripe arm gripparm grib arm extension" , url: "html/arm.html"},
    { name: "Avenger Jumbo Grip Head " , keywords: "evenger head avengerjumbogriphead avenger jumbo grip head jumbo avangar grip avenger evenger head avengerjumbogriphead avenger jumbo grip head jumbo avangar grip avenger" , url: "html/avenger-d400b-jumbo-grip-head.html" },
    { name: "Avenger F1100 Suction cups" , keywords: "f1100 evenger avenger f1100 suction cups avangar cups suction avengerf1100suctioncups avenger" , url: "html/avenger-f1100-suction-cups.html" },
    { name: "Manfrotto C461 Tube Clamp" , keywords: "clamp manfrotto c461 tube clamp menfrotto tube c461 manfrotto clemp manfrottoc461tubeclamp" , url: "html/c461.html" },
    { name: "Avenger Baby Plate" , keywords: "evenger f800 16mm plete avenger f800 plate with 16mm spigot with avangar spigot plate plata avenger avengerf800platewith16mmspigot evenger f800 16mm plete avenger f800 plate with 16mm spigot with avangar spigot plate plata avenger avengerf800platewith16mmspigot" , url: "html/avenger-f800-baby-plate.html" },
    { name: "Kupo Junior Wall Plate" , keywords: "junior kupo wall plate with junior receiver plete with wall kupowallplatewithjuniorreceiver plate racaivar plata receiver kupo junior kupo wall plate with junior receiver plete with wall kupowallplatewithjuniorreceiver plate racaivar plata receiver kupo" , url: "html/kupo-junior-wall-plate.html" },
    { name: "Avenger Drop Ceiling scissor clamp" , keywords: "evenger avengerdropceilingscissorclamp avenger drop ceiling scissor clamp drop clamp cailing avangar clemp ceiling avenger scissor" , url: "html/avenger-drop-ceiling-scissor-clamp.html" },
    { name: "Eplekasse Familie" , keywords: "familie eplekassefamilie aplakassa familia eplekasse familie femilie eplekasse eplekesse" , url: "html/eplekasse-familie.html" },
    { name: "SoundDevices 664" , keywords: "664 sounddavicas sounddevices sounddevices 664 sounddevices664" , url: "html/sounddevices-664.html" },
    { name: "SoundDevices 302" , keywords: "sounddevices 302 302 sounddavicas sounddevices sounddevices302" , url: "html/sounddevices-302.html" },
    { name: "Sennheiser MKH50" , keywords: "sennheiser mkh50 mkh50 sennheisermkh50 sennheiser sannhaisar" , url: "html/sennheiser-mkh50.html" },
    { name: "Sennheiser MKE600" , keywords: "sennheisermke600 sennheiser mke600 mka600 sannhaisar sennheiser mke600 sennheisermke600 sennheiser mke600 mka600 sannhaisar sennheiser mke600" , url: "html/sennheiser-mke600-shotgun-mic.html" },
    { name: "Sennheiser ME66" , keywords: "me66 sennheiserme66 sennheiser sennheiser me66 sannhaisar me66 sennheiserme66 sennheiser sennheiser me66 sannhaisar" , url: "html/me66.html" },
    { name: "Sennheiser G2 IEM" , keywords: "iem g2 sennheiser sennheiser g2 iem sannhaisar sennheiserg2iem iem g2 sennheiser sennheiser g2 iem sannhaisar sennheiserg2iem" , url: "html/sennheiser-g2-iem-1tx2rx.html" },
    { name: "Sennheiser G4" , keywords: "sennheiser g4 sennheiser g4 sennheiserg4 sannhaisar sennheiser g4 sennheiser g4 sennheiserg4 sannhaisar" , url: "html/sennheiser-g4-txrx-wireless-mic.html" },
    { name: "Sennheiser G4 Monitor" , keywords: "sennheiser g4 monitor monitor sennheiser g4 sennheiserg4monitor sannhaisar sennheiser g4 monitor monitor sennheiser g4 sennheiserg4monitor sannhaisar" , url: "html/sennheiser-g4-monitor-1tx2rx.html" },
    { name: "Deity Theos 2TX1RX Kit" , keywords: "daity thaos deity 2tx1rx theos deity theos 2tx1rx deitytheos2tx1rx daity thaos deity 2tx1rx theos deity theos 2tx1rx deitytheos2tx1rx" , url: "html/deity-theos-2tx1rx-kit.html" },
    { name: "Deity SPD-1" , keywords: "daity deity powar power deityspd-1powerdistribution spd-1 distribution deity spd-1 power distribution" , url: "html/deity-spd1-power-distribution.html" },
    { name: "Deity SRD-Mini" , keywords: "daity srd-mini deity deitysrd-minirfdistribution deity srd-mini rf distribution rf distribution" , url: "html/srd.html" },
    { name: "Deity BF-1 Butterfly Antenna" , keywords: "daity deity bf-1 butterfly antenna deity deitybf-1butterflyantenna entenne butterfly antenna buttarfly antanna bf-1" , url: "html/deity-bf1-butterfly-antenna.html" },
    { name: "K-Tek Graphite Boom" , keywords: "grephite k-tek k-tekgraphiteboom k-tek graphite boom graphita k-tak boom graphite" , url: "html/ktek-graphite-boom.html" },
    { name: "Rycote Blimp" , keywords: "blimp rycote blimp rycota rycote rycoteblimp" , url: "html/rycote-blimp.html" },
    { name: "Boom Holder" , keywords: "boom holder holdar holder boom boomholder" , url: "html/buddy.html" },
    { name: "Behringer P2 Monitorforsterker" , keywords: "bahringar behringerp2hpamp behringer p2 hp amp hp p2 behringer amp bahringar behringerp2hpamp behringer p2 hp amp hp p2 behringer amp" , url: "html/behringer-p2-in-ear-monitor.html" },
    { name: "Behringer HA400 Headphone amp" , keywords: "bahringar behringerha400hpamp behringer ha400 hp amp he400 hp ha400 behringer amp bahringar behringerha400hpamp behringer ha400 hp amp he400 hp ha400 behringer amp" , url: "html/ha400.html" },
    { name: "Røde Mic Go" , keywords: "røde mic røde mic go rødemicgo go" , url: "html/rode-mic-go.html" },
    { name: "Orca-34 Sound Bag" , keywords: "orca or-34 soundbag orca or-34 soundbag soundbeg orcaor-34soundbag orca or-34 soundbag orca or-34 soundbag soundbeg orcaor-34soundbag" , url: "html/orca-34.html" },
    { name: "K-tek KSHRN3 Harness" , keywords: "k-tek harness harnes sound strap bagstrap kshrn3 ktek ktec ktech sele støtte lydsele belte" , url: "html/harness.html" },
    { name: "Deity TC-1" , keywords: "daity deitytc-1 timecode tc time code deity tc-1 deity tc-1" , url: "html/tc.html" },
    { name: "Beyerdynamic DT 770 Pro" , keywords: "dt pro beyerdynamic dt 770 pro bayardynamic beyerdynamicdt770pro 770 beyerdynemic beyerdynamic" , url: "html/dt770.html" },
    { name: "NiSi 1/8 Allure Mist Black" , keywords: "bleck 4x5,65 cinafiltar cinefilter ellure nisicinefilter4x5,651/8alluremistblack nisi cinefilter 4x5,65 1/8 allure mist black nisi black 1/8 mist allure allura" , url: "html/nisi-cinefilter-1-8-allure-mist-black.html" },
    { name: "NiSi 1/4 Allure Mist Black" , keywords: "1/4 bleck mist 4x5,65 cinafiltar nisi cinefilter 4x5,65 1/4 allure mist black cinefilter black nisi ellure nisicinefilter4x5,651/4alluremistblack allure allura" , url: "html/nisi-cinefilter-1-4-allure-mist-black.html" },
    { name: "Nisi IRND 0.3 4x5.65" , keywords: "0.3 nisi irnd 0.3 4x5.65 nisiirnd0.34x5.65 4x5.65 nisi irnd" , url: "html/nisi-irnd-0-3.html" },
    { name: "Nisi IRND 0.6 4x5.65" , keywords: "nisiirnd0.64x5.65 4x5.65 0.6 nisi nisi irnd 0.6 4x5.65 irnd" , url: "html/nisi-irnd-0-6.html" },
    { name: "Nisi IRND 0.9 4x5.65" , keywords: "4x5.65 0.9 irnd nisi nisi irnd 0.9 4x5.65 nisiirnd0.94x5.65" , url: "html/nisi-irnd-0-9.html" },
    { name: "Nisi IRND 1.2 4x5.65" , keywords: "4x5.65 1.2 nisiirnd1.24x5.65 nisi irnd nisi irnd 1.2 4x5.65" , url: "html/nisi-irnd-1-2.html" },
    { name: "Nisi IRND SE 0.3 4x5.65" , keywords: "nisiirndse0.34x5.65 0.3 4x5.65 nisi irnd se 0.3 4x5.65 nisi irnd se" , url: "html/nisi-irnd-se-0-3.html" },
    { name: "Nisi IRND SE 0.6 4x5.65" , keywords: "nisiirndse0.64x5.65 nisi irnd se 0.6 4x5.65 4x5.65 0.6 nisi irnd se" , url: "html/nisi-irnd-se-0-6.html" },
    { name: "Nisi IRND SE 0.9 4x5.65" , keywords: "se 4x5.65 nisiirndse0.94x5.65 nisi irnd 0.9 nisi irnd se 0.9 4x5.65" , url: "html/nisi-irnd-se-0-9.html" },
    { name: "Nisi Pola 4x5.65" , keywords: "pola nisi pola 4x5.65 4x5.65 nisi nisipola4x5.65" , url: "html/nisi-pola-4x5-65.html" },
    { name: "NISI CINE ROTATING POLA 4x5.65" , keywords: "nisi cine filter rotating cpl true color 4x5.65 rotating color filtar cpl filter 4x5.65 cine roteting nisi nisicinefilterrotatingcpltruecolor4x5.65 true nisi cine filter rotating cpl true color 4x5.65 rotating color filtar cpl filter 4x5.65 cine roteting nisi nisicinefilterrotatingcpltruecolor4x5.65 true" , url: "html/nisi-cpl-true-color.html" },
    { name: "NISI Cine Variable ND 1-5 Stops" , keywords: "variabla stops nd verieble cine nisi variable 1-5 nisi cine variable nd 1-5 stops nisicinevariablend1-5stops" , url: "html/nisi-true-color-variable-nd.html" },
    { name: "ShittyCarts Soundcart" , keywords: "soundcert shittycarts shittycartssoundcart shittycarts soundcart shittycerts soundcart" , url: "html/shittycarts-soundcart.html" },
    { name: "Magliner Sr" , keywords: "megliner magliner sr maglinar magliner sr maglinersr" , url: "html/magliner-sr.html" },
    { name: "3Kw Bensin Aggregat" , keywords: "eggreget 3kwbensinaggregat aggragat 3kw bensin aggregat bensin bansin aggregat 3kw" , url: "html/3kw-bensin-aggregat.html" },
    { name: "3 Fase Power Distro" , keywords: "power 3 distro 3fasepowerdistro 3 fase power distro fase powar" , url: "html/rub3.html" },
    { name: "1 Fase Power Distro" , keywords: "1 fase power distro 1 power 1fasepowerdistro distro fase powar" , url: "html/rub1.html" },
    { name: "3 Fase Power Lead" , keywords: "3 fase power lead power lead 3 3fasepowerlead fase powar" , url: "html/3fas.html" },
    { name: "1 Fase Power Lead" , keywords: "1 power lead 1 fase power lead fase powar 1fasepowerlead" , url: "html/1fas.html" },
    { name: "Schuko Drum" , keywords: "schuko drum schuko drum schukodrum" , url: "html/drum.html" },
    { name: "Schuko Power Lead" , keywords: "schuko power lead schukopowerlead schuko power lead powar" , url: "html/pwrlead.html" },
    { name: "3 pin Fisher >- 7 pin LEMO R/S 6K" , keywords: "fisher 3pinfisher->7pinlemor/s pin 3 pin fisher -> 7 pin lemo r/s -> 3 7 fishar lemo r/s fisher 3pinfisher->7pinlemor/s pin 3 pin fisher -> 7 pin lemo r/s -> 3 7 fishar lemo r/s" , url: "html/fishrs.html" },
    { name: "4 pin LEMO -> 7 pin LEMO R/S" , keywords: "pin 4pinlemo<-7pinlemor/s 4 pin lemo <- 7 pin lemo r/s 4 7 <- lemo r/s pin 4pinlemo<-7pinlemor/s 4 pin lemo <- 7 pin lemo r/s 4 7 <- lemo r/s" , url: "html/4pinrs.html" },
    { name: "7 pin LEMO -> 7 pin LEMO R/S" , keywords: "pin -> 7 7pinlemo->7pinlemor/s 7 pin lemo -> 7 pin lemo r/s lemo r/s" , url: "html/7pinrs.html" },
    { name: "5 pin Lemo to 4 pin Lemo TC" , keywords: "pin 5 -> tc 5pinlemo->4pin REDtc RED nano nanolickit tc 5 pin lemo -> trs tc lemo trs" , url: "html/5pin4pin.html" },
    { name: "5 pin LEMO -> TRS TC" , keywords: "pin 5 -> tc 5pinlemo->trstc 5 pin lemo -> trs tc lemo trs" , url: "html/5pintrs.html" },
    { name: "TRS -> 5 pin LEMO TC" , keywords: "pin 5 trs->5pinlemotc -> tc trs lemo trs -> 5 pin lemo tc" , url: "html/trs5pin.html" },
    { name: "TRS -> BNC TC" , keywords: "trs->bnctc trs -> bnc tc -> bnc tc trs" , url: "html/trsbnc.html" },
    { name: "TRS -> MULTI TC" , keywords: "trs -> multi tc -> tc trs->multitc multi trs" , url: "html/trsmulti.html" },
    { name: "TRS -> TRS TC" , keywords: "trs -> trs tc -> trs->trstc tc trs" , url: "html/trstrs.html" },
    { name: "DC 24V2A Power Brick" , keywords: "dc24v2apowerbrick 24v2a power brick dc dc 24v2a power brick powar 24v2e" , url: "html/dc24v.html" },
    { name: "DC Male -> DC Female 10m" , keywords: "male dc male -> dc female 10m -> femele female dc 10m famala dcmale->dcfemale10m" , url: "html/dc10m.html" },
    { name: "DC Female -> LP Dummy" , keywords: "dc female -> lp dummy -> femele dummy female dc lp famala dcfemale->lpdummy" , url: "html/dcfemale_lp.html" },
    { name: "Dtap -> 2 pin LEMO" , keywords: "dtap->2pinlemo pin -> dtap -> 2 pin lemo 2 lemo dtap" , url: "html/dtap2pin.html" },
    { name: "Dtap -> 7 pin LEMO short" , keywords: "pin -> short dtap->7pinlemoshort dtap -> 7 pin lemo short 7 lemo dtap" , url: "html/dtap7pinshort.html" },
    { name: "Dtap -> 4 pin Hirose" , keywords: "hirosa pin dtap->4pinhirose -> dtap -> 4 pin hirose 4 hirose dtap" , url: "html/dtap4hiro.html" },
    { name: "Dtap -> SF6" , keywords: "sf6 -> dtap->sf6 dtap -> sf6 dtap" , url: "html/dtapsf6.html" },
    { name: "Dtap -> DC" , keywords: "-> dc dtap->dc dtap -> dc dtap" , url: "html/dtapdc.html" },
    { name: "Dtap -> LP Dummy" , keywords: "-> dtap->lpdummy dummy dtap -> lp dummy lp dtap" , url: "html/dtap_lp.html" },
    { name: "Dtap Splitter: Dtap plug" , keywords: "splitter: dtap splitter: dtap plug dtapsplitter:dtapplug plug splittar: dtap" , url: "html/dtap_splitter.html" },
    { name: "Dtap Splitter: 2 pin LEMO" , keywords: "pin splitter: dtapsplitter:2pinlemo splittar: 2 lemo dtap splitter: 2 pin lemo dtap" , url: "html/dtap_split_2pin.html" },
    { name: "Dtap Splitter: 3x USB" , keywords: "splitter dtapsplitter->3xusb dtap splitter -> 3x usb -> 3x splittar usb dtap splitter dtapsplitter->3xusb dtap splitter -> 3x usb -> 3x splittar usb dtap" , url: "html/dtap_3usb.html" },
    { name: "Dtap -> USB-C 100W" , keywords: "dtap->usb-c100w 100w -> dtap -> usb-c 100w usb-c dtap" , url: "html/dtap_usbc.html" },
    { name: "BNC -> BNC Short" , keywords: "bnc->bncshort bnc -> bnc short -> bnc short" , url: "html/bnc_short.html" },
    { name: "BNC Drum" , keywords: "bncdrum bnc bnc drum drum" , url: "html/bnc_drum.html" },
    { name: "HDMI Angled Coil 30CM" , keywords: "hdmi angled coil 30cm angled engled hdmi coil 30cm hdmiangledcoil30cm anglad" , url: "html/hdmi_coil.html" },
    { name: "XLR -> XLR" , keywords: "xlr -> xlr xlr->xlr -> xlr" , url: "html/xlr_xlr.html" },
    { name: "XLR Female -> XLR Male 5 pin" , keywords: "male 5 xlrfemale->xlrmale5pin pin -> femele female xlr famala xlr female -> xlr male 5 pin" , url: "html/xlr_fm_5pin.html" },
    { name: "TRS Male ST -> TRS Female Mono 3.5" , keywords: "trs male st -> trs female mono 3.5 male -> femele female trsmalest->trsfemalemono3.5 mono famala trs 3.5 st" , url: "html/trs_st_mono.html" },
    { name: "TRS Male -> TRS Female Y-split 3.5mm" , keywords: "male trs male -> trs female y-split 3.5mm -> femele 3.5mm female y-split famala trs trsmale->trsfemaley-split3.5mm" , url: "html/trs_ysplit_3_5.html" },
    { name: "TRS Male -> TRS Female Y-split 6.3mm" , keywords: "male trs male -> trs female y-split 6.3mm -> femele female y-split famala trs trsmale->trsfemaley-split6.3mm 6.3mm" , url: "html/trs_ysplit_6_3.html" },
    { name: "TRS Male -> XLR Male Short 3.5mm" , keywords: "male -> 3.5mm short trs male -> xlr male short 3.5mm xlr trs trsmale->xlrmaleshort3.5mm" , url: "html/trs_xlr_3_5.html" },
    { name: "TRS Male -> XLR Male Short 6.3mm" , keywords: "trsmale->xlrmaleshort6.3mm male -> short xlr trs 6.3mm trs male -> xlr male short 6.3mm" , url: "html/trs_xlr_6_3.html" },
    { name: "TA 3 Female -> XLR Female" , keywords: "ta -> femele female 3 ta3female->xlrfemale famala xlr ta 3 female -> xlr female" , url: "html/ta3_xlr_f.html" },
    { name: "TA 3 Female -> XLR Male" , keywords: "ta 3 female -> xlr male male ta -> femele female 3 famala xlr ta3female->xlrmale" , url: "html/ta3_xlr_m.html" },
    { name: "TA 3 Female -> TRS" , keywords: "ta3female->trs ta -> femele female 3 ta 3 female -> trs famala trs" , url: "html/ta3_trs.html" },
    { name: "GoPro Hero 6" , keywords: "Kamera camera gopro goprohero heor hero6 hero7 black goprohero6 action actioncamera" , url: "html/gopro.html" },
    { name: "Samsung Gear 360" , keywords: "360 Kamera Camera samsung" , url: "html/Gear360.html" },
    { name: "Sekonic L-858D Lightmeter" , keywords: "Light Meter lightmeter sekonic l858 l858d seconic lys lysmåler sekonik" , url: "html/lightmeter.html" },
    { name: "Directors Headset" , keywords: "Headset headphones director listen lytting hodetelefoner" , url: "html/dirhead.html" },
    { name: "Vocas Leather Hand Grip Kit" , keywords: "handle grip håndtak hand handgrip vocas rosette rosett" , url: "html/vocashand.html" },
    { name: "V-Mount Sharkfin Plate" , keywords: "vmount v-mount shark fin sharkfinplate hotswap " , url: "html/sharkfin.html" },
    { name: "DC -> 2 pin LEMO" , keywords: "dc cable 2pin lemo 2-pin dtap powr cble power adapter", url: "html/dc-lemo.html" },
    { name: "HDMI Coil 50CM" , keywords: "hdmi cable coil 50cm flexible hdmy  short hdmi coilcable", url: "html/hdmistraight.html" },
    { name: "HDMI to HDMI Mini" , keywords: "hdmi mini cable minihdmi adapter converter hdmimini ing", url: "html/hdmi-mini.html" },
    { name: "HDMI Angle Adapter" , keywords: "hdmi angle angled adaptor corner convert hdmy ing", url: "html/hdmiadapt.html" },
    { name: "3.5 to 6.3 adapter" , keywords: "3.5mm 6.3mm audio adapter stereo converter headphone jack phone plug", url: "html/3.5-6.3adap.html" },
    { name: "Røde NTG3B" , keywords: "rode mic rod ntg3 ntg3b shotgun roede microphone ing", url: "html/ntg3.html" },
    { name: "Lavalier Belt" , keywords: "lav belt laavalier mic waist strap microphone holder bodypack", url: "html/lavbelt.html" },
    { name: "Baby Pin Spigot with 5/8\" Hex Stud" , keywords: "baby pin spiggott 5/8 spigot hex styd mount lighting bracket ing", url: "html/hexspig.html" },
    { name: "Baby Pin Double-Ended Spigot" , keywords: "baby pin double ended spigot spiggott 5/8 clamp lighting adapter", url: "html/spigot.html" },
    { name: "Junior 1-1/8\" Stud to Baby 5/8\" Stud" , keywords: "junior stud 1 1/8 baby 5/8 adapter spigot junnior reduce pin", url: "html/spigadapter.html" },
    { name: "Manbily MFL-06 Bi-Color LED" , keywords: "manbily mfl06 bicolor led panel light manbil bi color miniled portable", url: "html/manbily.html" },
    { name: "Elastic Safety Rope With Quickrelease Buckle" , keywords: "elastic safety rope quickrelease quck lease rigging cable bungie bungee", url: "html/quicksafe.html" },
    { name: "Safety Wire" , keywords: "safety wire saftey wir security cable rigging steel ing", url: "html/safetywire.html" },
    { name: "Cinefoil" , keywords: "cine foil blackwrap sinfoil cinafoil light block shape wrap cinifoil", url: "html/cinefoil.html" },
    { name: "Bobbinet" , keywords: "bobbinet bobbin net bobbi net scrim netting light diffuser mesh", url: "html/bobbi.html" },
    { name: "Foldable Reflector" , keywords: "foldable reflector collapsible reflect bouncer relector reflecter portable", url: "html/reflect.html" },
    { name: "Godox VL300" , keywords: "godox vl300 led video light v300 godocks godex bowens mount 300w", url: "html/vl300.html" },
    { name: "Dedo 150" , keywords: "dedo dedolight deddolight 150w tungsten spot small fixture focus", url: "html/dedo.html" },
    { name: "Eyebolt 1/4 Thread" , keywords: "eye bolt 1 4 thread rigging anchor eyelet eey bolt  hardware", url: "html/eye1.4.html" },
    { name: "Eyebolt 3/8 Thread" , keywords: "eye bolt 3 8 thread rigging anchor eyelet eey bolt misl hardware", url: "html/eye3.8.html" },
    { name: "Wedge Set" , keywords: "wedge set wood plastic leveling doorstop shims widg wedge ", url: "html/wedge.html" },
    { name: "Zhiyun Smooth X" , keywords: "zhiyun zhyun phone gimbal smooth x smootx stabilizer zhijin ", url: "html/cellgimbal.html" },
    { name: "15mm Rods" , keywords: "15mm rods rod rails cinema rig pipeline fifteem  rod set", url: "html/15mmrod.html" },
    { name: "19mm Rods" , keywords: "19mm rods rod rails cinema rig pipeline ninteen  rod set", url: "html/19mmrod.html" },
    { name: "15mm Lens Support" , keywords: "15mm lens support follow focus rods suppor lense supprot ", url: "html/support15.html" },
    { name: "19mm Lens Support" , keywords: "19mm lens support follow focus rods suppor lense supprot ", url: "html/support19.html" },
    { name: "Paganini Set" , keywords: "paganini set pangini paanini metal bracket mounting rig rigg ", url: "html/paganini.html" },
    { name: "Articulating Arm" , keywords: "articulating noga smallrig cameraarm kameraarm monitorarm monitor kamera", url: "html/articulating.html" },
    { name: "Dji Mavic mini" , keywords: "dji mavic drone", url: "html/djimini.html" },
    { name: "SWIT PC-U130S" , keywords: "swit vmount v-mount v-lock vlock charger lader mount ", url: "html/switpc.html" },
    { name: "Rode VideoMic" , keywords: "Rode VideoMic Camera-Mount Shotgun Microphone mic aux video", url: "html/vidmic.html" },
    { name: "Rapidadapter 1/4-20" , keywords: "Rapidadapter 1/4-20 babypin thread receptical teradek mount reciever", url: "html/rapid.html" },
    { name: "Macbook Pro M1", keywords: "macbook pro M1 mac apple laptop notebook editing macbookpro ", url: "html/mac.html" },
    { name: "DIT Case Computer", keywords: "dit case computer data wrangling location workstation post-production ", url: "html/dit.html" },
    { name: "Atem Mini Pro", keywords: "atem mini pro blackmagic design switcher live streaming mixer ", url: "html/atempro.html" },
    { name: "Atem Mini Case", keywords: "atem mini case blackmagic design switcher travel bag flight-case ", url: "html/atemcase.html" },
    { name: "Atem Mini Extreme", keywords: "atem mini extreme blackmagic design switcher pro mixer streaming ", url: "html/atemex.html" },
    { name: "Lexar C-Fast Card Reader", keywords: "lexar cfast card reader c-fast memory media usb data ", url: "html/cfast.html" },
    { name: "Lexar Multi Card Reader", keywords: "lexar multi card reader memory sd micro cfast usb data ", url: "html/multi.html" },
    { name: "SDI to HDMI Converter", keywords: "sdi hdmi converter blackmagic design converter box camera feed production", url: "html/sdihdmi.html" },
    { name: "HDMI to SDI Converter", keywords: "hdmi sdi converter blackmagic design converter box camera feed production", url: "html/hdmisdi.html" },
    { name: "USB-A to USB-C Adapter", keywords: "usb-a usb-c adapter cable connection pc mac usb type-a c", url: "html/a2c.html" },
    { name: "USB-C to USB-A Adapter", keywords: "usb-c usb-a adapter cable connection pc mac usb type-c a", url: "html/c2a.html" },
    { name: "USB-C to 4x USB-A Adapter", keywords: "usb-c 4x usb-a adapter hub multi-port cable connection pc mac usb type-c", url: "html/c24a.html" },
    { name: "Antari HZ350 Hazer", keywords: "Antari HZ350 Antari HZ-350 HZ350 Hazer HZ-350 Hazer Antari Hazer HZ350 HZ350 Antari Antary HZ350 Antari HZ 350 Antari HZ-530 Antari HZ35 Antari HZ-35 Antari Hazer Antari Hazer 350 Anteri HZ350 Antari Hazor Antari Hazzer Antary Hazer haze machine DMX hazer professional hazer water-based hazer quiet hazer event hazer stage hazer theatrical hazer touring hazer Antari fog machine DJ hazer pro haze machine Antari machine HZ 350 fog hazer for stage Antari smoke machine low noise hazer Antari haze Antari event gear buy Antari HZ350 Antari HZ-350 rental Antari hazer price Antari haze machine for sale best stage hazer pro hazer for DJ event haze machine Antari hazer review touring hazer system club haze machine", url: "html/haze.html" },
    { name: "Micro Fogger", keywords: "Micro Fogger MicroFogger Micro-Fogger Micro Fogger 2 Micro Fogger 3 Microfogger 2 Microfogger 3 Micro fog machine portable fogger portable smoke machine wearable fogger handheld fogger mini fogger mini smoke machine tiny fog machine compact fog machine fogger for cosplay small fogger smoke FX device FX fogger special effects fogger wearable smoke machine battery fog machine battery operated fogger electronic fogger prop fogger on-the-go fog machine cosplay fogger cosplay smoke machine wireless fogger wireless smoke machine smoke emitter smoke device micro smoke machine microfog smoke fx gadget handheld smoke emitter micro smoker micro smoke fogg machine micro foger microforgger microforger micorfogger microfoger microfoggr micr0 fogger", url: "html/microfog.html" },
       // Add more items here...
    ];
    
// Function to get the correct URL path based on the current location
function getCorrectUrl(url) {
    const currentPath = window.location.pathname;
    let base = currentPath.includes('html/') ? '../' : ''; // Adjust based on whether we are already in a subfolder
    return base + url;
}

document.addEventListener("DOMContentLoaded", function () {
    const globalSearchField = document.getElementById("global-search-field");
    const searchField = document.getElementById("search-field");
    const dropdown = document.getElementById("dropdown-results");

    // Attach dropdown search functionality for other pages
    if (globalSearchField) {
        globalSearchField.addEventListener("keyup", showDropdownResults);
        globalSearchField.addEventListener("focus", showDropdownResults);
    }

    // Attach dynamic search functionality for alleq.html
    if (window.location.pathname.includes('alleq.html') && searchField) {
        searchField.addEventListener("keyup", filterItems);
    }

    // Hide dropdown if clicking outside of it or search field
    document.addEventListener("click", function (event) {
        if (dropdown && !dropdown.contains(event.target) && !globalSearchField.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Ensure the basket icon count is updated when the page loads
    updateBasketIcon();
});

// Function to filter items specifically for alleq.html
function filterItems() {
    // Get the search input value and split it into individual words
    let searchValue = document.getElementById("search-field").value.toLowerCase().trim();
    let searchWords = searchValue.split(/\s+/); // Split by whitespace

    // Get all equipment cards
    let equipmentCards = document.querySelectorAll(".content-grid .nav-card");

    // Loop through all cards and hide those that don't match all search words
    equipmentCards.forEach(function (card) {
        let itemName = card.querySelector("h2").textContent.toLowerCase();
        let keywords = card.getAttribute("data-keywords");
        keywords = keywords ? keywords.toLowerCase() : ""; // Default to empty string if null

        // Combine the item name and keywords for the search
        let searchableText = itemName + " " + keywords;

        // Check if every word in the search matches part of the combined text
        let matches = searchWords.every(function (word) {
            return searchableText.includes(word);
        });

        if (matches) {
            card.style.display = "flex"; // Show matching items (using 'flex' to match existing styling)
        } else {
            card.style.display = "none"; // Hide non-matching items
        }
    });
}

// Function to show dropdown results for other pages
function showDropdownResults() {
    const searchValue = document.getElementById("global-search-field").value.toLowerCase().trim();
    const dropdown = document.getElementById("dropdown-results");

    // Clear previous results
    dropdown.innerHTML = '';
    dropdown.style.display = 'none';

    if (searchValue === '') {
        return;
    }

    // Filter items based on the search value
    const matchedItems = items.filter(item => {
        const searchableText = (item.name + " " + item.keywords).toLowerCase();
        return searchValue.split(/\s+/).every(word => searchableText.includes(word));
    });

    // Display the matched items in the dropdown
    matchedItems.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'dropdown-item';

        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = item.name;

        const addToBasketButton = document.createElement('button');
        addToBasketButton.className = 'basket-button';

        // Add image to the button instead of text
        const basketImage = document.createElement('img');
        basketImage.src = 'images/basket-icon.png';
        basketImage.alt = 'Add to Basket';
        basketImage.className = 'basket-icon'; // Adding a class to control the size via CSS
        addToBasketButton.appendChild(basketImage);

        addToBasketButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the redirect if the button itself is clicked
            addToBasket(item.name, 10); // Pass item name and maxQuantity (set to 10 for this example)
        });

        resultDiv.appendChild(itemNameSpan);
        resultDiv.appendChild(addToBasketButton);

        // Adjust the URL using the getCorrectUrl function
        resultDiv.onclick = function (event) {
            if (event.target.tagName.toLowerCase() !== 'button') {
                window.location.href = getCorrectUrl(item.url);
            }
        };

        dropdown.appendChild(resultDiv);
    });

    if (matchedItems.length > 0) {
        dropdown.style.display = 'block';
    }
}
