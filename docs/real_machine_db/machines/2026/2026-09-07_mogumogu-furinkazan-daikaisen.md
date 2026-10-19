# No.1821 モグモグ風林火山 大海戦の巻

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: モグモグ風林火山 大海戦の巻
manufacturer: オーゼキ製造 / ネット
formalModel: Lモグモグ風林火山 大海戦の巻ZB
approvalNumber: 531225
releaseDate: 2026-09-07
generation: 6.5号機 / スマスロ
systemType: AT（周期・レア役→CZ→差枚数管理AT）
settings: 1 / 2 / 3 / 4 / 5 / 6
payoutRateBySetting: 97.5% / 98.8% / 100.3% / 103.7% / 107.3% / 111.5%
initialHitBySetting:
- CZ合算: 1/324 / 1/317 / 1/310 / 1/299 / 1/292 / 1/287
- AT初当り: 1/431 / 1/414 / 1/399 / 1/378 / 1/364 / 1/358
baseGamesPer50: 約32.0G/50枚
netIncrease: 通常AT 約3.1枚/G / 上位AT 約7.4枚/G
basicPayout:
- AT「提督決戦RUSH」は差枚数管理型、初期150枚+α。
- AT突入時は約34%で上乗せ特化ゾーン「モグモグ大海戦」へ。
- CZ「モグモグ大戦」は10G+α、AT期待度約53%。
- 上位AT「超提督決戦RUSH」は純増約7.4枚/G。

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 設定変更時は有利区間・CZ間天井・内部モード・内部状態をRESET/再抽選とする機種固有比較資料あり。
- CZ間ゲーム数天井は通常699G+αから299G+αへ短縮。
- CZスルー天井は通常7スルー後8回目AT濃厚から、3スルー後4回目へ短縮。
- 周期モードは通常B以上が濃厚となり、最大周期天井は6周期から3周期へ短縮。
carryOverBehavior:
- 据え置きは設定変更を伴わない運用として天井・モード・状態を引き継ぐ方向。ただし据え置き単独の高優先三者比較表は十分な再探索後も固定できず、SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED。
powerCycleBehavior:
- 電源OFF→ONのみ: 有利区間・天井・内部モード・内部状態を引き継ぐとする機種固有比較あり。
- 周期ポイントおよびCZスルー回数の純電断個別直接欄は再探索後もUNVERIFIED_AFTER_RESEARCH。
gameCounterReset:
- 設定変更: CZ間天井をRESETし299G+αへ短縮。
- 純電断: CZ間天井引継ぎ。
- 据え置き: 引継ぎ方向だが直接三者比較強度はSECONDARY_SUPPORTED。
ceilingAfterReset:
- 通常CZ間ゲーム数天井: 699G+αでCZ当選。
- 設定変更後: 299G+αでCZ当選。
- 通常周期天井: 最大6周期。設定変更後は最大3周期。
- 通常CZスルー天井: 7スルー後8回目のCZでAT濃厚。設定変更後は3スルー後4回目へ短縮。
modeAfterReset:
- 設定変更時は通常Aを選択せず通常B以上濃厚。
- 公開振り分け: 通常B 66.4% / 天国 33.6%。
- 周期天井は通常A=6周期、通常B=3周期、天国=1周期。
stateAfterReset:
- 内部状態は設定変更RESET / 電源OFF→ON CARRY_OVERとする機種固有比較あり。
- 内部状態の具体振り分け率はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset:
- 設定変更: RESET。
- 電源OFF→ON: CARRY_OVERとする機種固有比較あり。
- 据え置き単独の独立直接欄は未固定。
resetBenefits:
- CZ間天井699G+α→299G+α。
- CZスルー天井8回目→4回目。
- 周期天井最大6周期→最大3周期。
- 通常B以上濃厚、天国33.6%。
resetPenalties:
- 設定変更固有の主要不利要素は多語再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
resetDetection:
- 299G+α短縮、最大3周期、4回目CZでのAT濃厚は事後的な設定変更推測材料。
- ただし短期挙動だけで単独確定判別とはしない。
- 本機固有ガックン条件/発生率、即時固定ランプ、開始ステージ三者比較は再探索後もUNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 設定変更時モード: 通常B 66.4% / 天国 33.6%。
- CZ間天井: 通常699G+α / 設定変更299G+α。
- 周期天井: 通常最大6周期 / 設定変更最大3周期。
- CZスルー天井: 通常7スルー後8回目 / 設定変更3スルー後4回目。
- イチカツ独自期待値計算: 設定変更0Gから機械割110.4%、時給2742円（設定1・5.6枚交換等の独自条件。メーカー公表値ではないため分離保持）。

## QA notes
- 型式名は遊技通信/P-WORLD、情報島+、HAZUSEで一致。検定番号531225はHAZUSEで確認。
- 設定別機械割、CZ、AT初当りはジャグラーズネット、スロベース、6確系整理資料等で一致。
- ベース約32.0G/50枚、通常AT3.1枚/G、上位AT7.4枚/Gも複数資料で一致。
- resetBehaviorはちょんぼりすたの設定変更/電源OFF→ON比較、スロベース、ジャグラーズネット、イチカツ、6確系を横断。三種天井短縮と設定変更時モードB66.4%/天国33.6%は複数一致。
- イチカツの0G機械割110.4%は独自理論計算であり実機の設定別公表機械割とは別定義。性能コアへ混入しない。
- 完全再現用の周期別全抽選・AT中詳細抽選はスコープ外。

## sources
- ネット公式発表転載（DreamNews）: https://www.dreamnews.jp/press/0000352464
- ネット全国導入告知（DreamNews）: https://www.dreamnews.jp/press/0000359251
- 遊技通信/P-WORLD（型式・基本AT）: https://news.p-world.co.jp/articles/33926/yugitsushin
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-34398/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0134/
- 必勝本 AT: https://hisshobon.com/machineinfo/142785/
- 必勝本 CZ: https://hisshobon.com/machineinfo/142779/
- 1geki 周期モード: https://1geki.jp/slot/l_mogdai/43/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/263515/
- スロベース: https://slobase.jp/machines/mogumogu-furinkazan
- スロベース reset: https://slobase.jp/articles/mogumogu-furinkazan-reset
- ジャグラーズネット: https://jugglersnet.com/chumoku/mogumogu-hurinkazan
- イチカツ: https://ichikatsu.com/mogdai/
- 6確系解析: https://www.kaku6.jp/slot/mogdai/

confidence:
- core: ANALYSIS_HIGH_MULTI_SOURCE
- formalModel: INDUSTRY_MULTI_SOURCE
- approvalNumber: ANALYSIS_HIGH
- payout: ANALYSIS_HIGH_MULTI_SOURCE
- resetCeilings: ANALYSIS_HIGH_MULTI_SOURCE
- resetModeNumeric: ANALYSIS_HIGH_MULTI_SOURCE
- powerCycle: ANALYSIS_HIGH_MACHINE_SPECIFIC_COMPARISON
- advantageousSection: ANALYSIS_HIGH_MACHINE_SPECIFIC_COMPARISON
- carryOverStandalone: SECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED
- resetDetectionImmediate: UNVERIFIED
- resetExpectedValue: ANALYSIS_SINGLE_NON_OFFICIAL

missingFields:
- 据え置き単独の高優先三者比較表
- 周期ポイント/CZスルー回数の純電断個別直接比較
- 設定変更時の内部状態具体振り分け
- 本機固有ガックン条件/発生率、即時固定ランプ判別
- 設定変更/据え置き/純電断の開始ステージ三者確定情報

conflicts:
- NONE_CONFIRMED_AFTER_MULTI_SOURCE_RESEARCH
