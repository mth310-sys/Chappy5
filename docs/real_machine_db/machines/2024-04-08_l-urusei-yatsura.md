# Lパチスロうる星やつら

recordNo: 1641
machineName: Lパチスロうる星やつら
aliases: Lうる星やつら / スマスロうる星やつら / Lパチスロうる星やつらEV
manufacturer: EXCITE製造 / ニューギン販売
formalModel: Lパチスロうる星やつらEV
inspectionCode: 3S0160
releaseDate: 2024-04-08
generation: 6.5号機 / スマスロ
systemType: BONUS+AT / 擬似ボーナス経由型AT
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- ニューギン発表を伝える遊技日本/P-WORLD・グリーンべるとは全国導入を2024-04-08としている。
- HAZUSE機種DBも導入開始日2024-04-08で一致。
- 2024-04-08群の業界新台スケジュールでも同日候補として既確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- ニューギン発表を伝える遊技日本/P-WORLDは製造元EXCITE、型式名 `Lうる星やつらEV` と報道。
- HAZUSEは正式型式 `Lパチスロうる星やつらEV`、検定番号 `3S0160` と掲載。
- 表記差は市場略記/DB表記の差として保持し、同一機種と判断。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- settingL: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- setting1: 97.6%
- setting2: 98.9%
- setting4: 103.2%
- setting5: 106.2%
- setting6: 110.1%
initialHitBySetting:
- settingL: ボーナス / ATともPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- setting1: ボーナス 1/266.5 / AT 1/535.4
- setting2: ボーナス 1/256.3 / AT 1/509.0
- setting4: ボーナス 1/232.9 / AT 1/429.3
- setting5: ボーナス 1/216.4 / AT 1/383.2
- setting6: ボーナス 1/196.7 / AT 1/329.9
baseGamesPer50: 約33.7G/50枚
netIncrease:
- 擬似BONUS: 約2.6枚/G
- AT「コズミックRUSH」: 約2.6枚/G
basicPayout:
- 電撃BONUS: 約100枚
- ラムBONUS: 約50枚
- AT「コズミックRUSH」: ゲーム数管理型 / 初期G数は(超)ガールハントタイムで決定 / GHT平均上乗せ約100G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数、レア役/CZ等から擬似BONUSを目指し、BONUS後の「あたる逃走中」がAT当選の主経路。
- ボーナス間ゲーム数天井は通常A/B/C 555G+α、通常D 333G+α、天国111G+α。
- あたる逃走中を5回連続スルーすると、6回目のBONUS後にAT当選濃厚。
- 1LINE成立のスルー天井も存在するが、完全再現用の詳細抽選ではないため最小限の存在記録に留める。
- AT「コズミックRUSH」は純増約2.6枚/Gのゲーム数上乗せ型。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井、あたる逃走中スルー回数、内部モード、内部状態、内部ゲーム数をRESETして再抽選。
- 設定変更時のモード再抽選は天国モードが約46.9%で選択される。
- 液晶ゲーム数は0へリセット。
- 通常ゲーム数天井そのものの最大値短縮は確認されず、モード優遇が主要朝一恩恵。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、あたる逃走中スルー回数、内部モード、内部状態、内部ゲーム数をCARRY_OVER。
- 液晶ゲーム数は見た目上0へ戻るため、表示0Gだけでは据え置き/変更を判別できない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井、あたる逃走中スルー回数、内部モード、内部状態、有利区間をCARRY_OVER。
- 液晶ゲーム数は見た目上リセット。
- 通常時の開始ステージはラムステージ。通常時以外で電断した場合の状態/ステージは引継ぎ資料あり。
confidence: ANALYSIS_SINGLE + MULTI_SOURCE_SUPPORT

### gameCounterReset
- 設定変更: 内部ゲーム数RESET / 液晶ゲーム数RESET。
- 据え置き: 内部ゲーム数CARRY_OVER / 液晶ゲーム数は見た目上RESET。
- 電源OFF→ON: 内部天井進行CARRY_OVER / 液晶ゲーム数は見た目上RESET。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更後も基本の最大ゲーム数天井は555G+αで、固定的な最大天井短縮は確認されない。
- ただしモード再抽選で約46.9%が天国となり、その場合は111G+α以内のBONUS濃厚。
- 通常Dなら333G+α、通常A/B/Cなら555G+α。
- あたる逃走中スルー天井は設定変更でRESETされ、朝一専用の短縮振り分けは十分な再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE_CEILINGS / ANALYSIS_SINGLE_FOR_NO_CONFIRMED_SKIP_SHORTENING

### modeAfterReset
- 設定変更時にモード再抽選。
- 設定変更時の天国モード選択率は全設定共通約46.9%。
- 天国以外（通常A/B/C/D）の設定変更時個別振り分けは、必勝本・なな徹・HAZUSE・P-WORLD・後年攻略整理を横断しても固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き/純電断は内部モードCARRY_OVER。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更時の低確/高確/超高確等の具体的初期振り分けは公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_UNPUBLISHED_INITIAL_DISTRIBUTION

### advantageousSectionReset
- 設定変更時に有利区間RESET。
- 据え置き/純電断では有利区間CARRY_OVER。
- 通常遊技中はAT終了時の一部、エンディング終了時にも有利区間RESETが発生。
- 設定変更時以外の有利区間RESET後は「あたる激走中」へ移行し、AT引き戻し期待度約66%とされるが、設定変更時は対象外。朝一リセット恩恵には混入しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定変更時は約46.9%で天国モードへ移行し、天国選択時は111G+α以内のBONUS濃厚。
- 固定的な555G→短縮天井ではなく、モード優遇型の朝一恩恵。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時の主要な定量的不利要素は、メーカー/業界/主要解析/後年整理を横断して再探索した範囲では確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常遊技中の有利区間RESETで得られる「あたる激走中」約66%引き戻しは、設定変更時には付与されないため恩恵の誤認防止事項として保持。

### resetDetection
- なな徹の機種専用朝一資料はリセット判別を「現在調査中」としている。
- 後年整理では、朝一に「あたるナンパステージ」へ移行すれば設定変更濃厚とされる。
- 前日最終ゲーム数+当日内部進行で555Gを超える挙動、また前日のあたる逃走中スルー回数を合算した天井挙動は据え置き推測材料になる。
- 通常時の設定変更/純電断ともラムステージ開始が基本であり、単純な開始ステージだけでは判別困難。
- 本機固有のリールガックン条件/発生率は機種名・型式・メーカー名と「ガックン」「リール」「設定変更」「朝一」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる本機固有の確定判別情報も主要資料から固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIORAL_CLUES / UNVERIFIED_FOR_GAKKUN_AND_LAMP

### numericResetData
- 設定変更時天国モード選択率: 約46.9%（全設定共通）
- 天国モード天井: 111G+α
- 通常D天井: 333G+α
- 通常A/B/C天井: 555G+α
- 設定変更時の通常A/B/C/D個別振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時スルー天井短縮率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / SHORTENING_NOT_CONFIRMED
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- リセット後の天国モード選択率は約46.9%。
- 天国選択時は111G+α以内のBONUS濃厚。
- 最大天井そのものを555Gから固定短縮する公開契約は確認されない。

## conflicts
- performanceConflict: NONE_CONFIRMED
- resetConflict: NONE_CONFIRMED
- 表記上、業界発表は型式を `Lうる星やつらEV`、HAZUSEは `Lパチスロうる星やつらEV` とするが、検定番号・メーカー・導入日・性能が一致するため同一型式の表記差として扱う。

## sources
取得日: 2026-09-14

### official / industry
- ニューギン公式製品ページ: https://www.newgin.co.jp/pub/machine/s_urusei_yatsura/
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/26867/nippon
- グリーンべると 新台発表: https://web-greenbelt.jp/post-80511/
- グリーンべると / P-WORLD 直営先行導入・全国4/8: https://news.p-world.co.jp/articles/27184/greenbelt

### machine DB / analysis
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/3S0160/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10007
- なな徹 機種解析まとめ: https://nana-press.com/kaiseki/machine/727/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/727/19476/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/727/20615/
- なな徹 モード: https://nana-press.com/kaiseki/machine/727/20623/
- 必勝本 モード: https://hisshobon.com/machineinfo/83104/
- 必勝本 コイン持ち: https://hisshobon.com/machineinfo/83068/
- 必勝本 BONUS: https://hisshobon.com/machineinfo/83101/
- 必勝本 AT: https://hisshobon.com/machineinfo/83080/
- Altema 朝一/電源ON-OFF: https://altema.jp/pachimo/luruseiyatura
- ぽこすろっと 朝一/電源ON-OFF/有利区間: https://www.nankaikoya.jp/uruseiyatsura-kitaichi/
- 回胴に散る リセット検討: https://kaidou.repop.jp/archives/590

## missingFields
- settingLの機械割・ボーナス/AT初当り固定値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の通常A/B/C/D個別モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- リールガックンの機種固有条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプによる機種固有の確定判別: UNVERIFIED_AFTER_RESEARCH

## researchNotes
- 欠損探索では `Lうる星やつら` / `Lパチスロうる星やつら` / `Lうる星やつらEV` / `3S0160` / `EXCITE` / `ニューギン` を使用。
- reset系は「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「電断」「天井」「スルー天井」「モード」「内部状態」「有利区間」「ガックン」を組み替え、メーカー/業界/必勝本/なな徹/HAZUSE/P-WORLD/後年攻略整理まで横断。
- リセット後の天国46.9%は複数解析で一致。通常A/B/C/Dの個別朝一振り分けは公開固定値を確認できず推定していない。
- 有利区間RESET時の「あたる激走中」約66%は設定変更時以外の契約であるため、朝一恩恵として扱っていない。
