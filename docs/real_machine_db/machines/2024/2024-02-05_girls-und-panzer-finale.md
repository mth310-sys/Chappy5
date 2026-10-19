# Lパチスロ ガールズ&パンツァー 最終章

recordNo: 1622
machineName: Lパチスロ ガールズ&パンツァー 最終章
aliases: スマスロ ガールズ&パンツァー 最終章 / ガルパン最終章 / Lガルパン最終章
manufacturer: 平和
formalModel: Lガールズ＆パンツァー最終章H1
inspectionCode: 3S1400
releaseDate: 2024-02-05
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由・疑似ボーナスループ型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_AT_SETTING2_CONFLICT

## releaseDateEvidence
- 平和の製品発表を扱う遊技日本/P-WORLDで2024-02-05導入予定を確認。
- HAZUSE、パチビー、主要解析でも2024-02-05導入で一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLDの平和発表記事で型式名 `Lガールズ＆パンツァー最終章H1` を確認。
- HAZUSE機種DBで型式名 `Lガールズ＆パンツァー最終章H1`、検定番号 `3S1400` を確認。
confidence: INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- 1: 98.1%
- 2: 98.8%
- 3: 100.7%
- 4: 105.8%
- 5: 107.9%
- 6: 112.1%
initialHitBySetting:
- setting1: CZ 1/133.9 / AT 1/408.6
- setting2: CZ 1/133.0 / AT 1/401.1 canonical; 必勝本基本スペックのみ 1/404.1 のCONFLICTあり
- setting3: CZ 1/130.8 / AT 1/382.6
- setting4: CZ 1/123.1 / AT 1/341.7
- setting5: CZ 1/121.1 / AT 1/322.4
- setting6: CZ 1/118.9 / AT 1/303.0
baseGamesPer50: 約30.3G/50枚
netIncrease:
- AT攻防パート: 現状維持程度
- 疑似ボーナス: 約4.7枚/G
basicPayout:
- エピソードBONUS: 初期100枚+α / 消化後AT「戦車道」
- AT「戦車道」: 攻防パートと疑似ボーナスを平均約76%でループ
- AT中報酬: B=100枚 / A=150枚以上 / S=200枚以上 / SS=あんこう無双
- 上位AT「戦車道 無限軌道」: 攻防パートと疑似ボーナスを約88%でループ
- 設定1平均獲得枚数: 約637枚（業界発表）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役・ベルカウンターからCZを目指し、CZ成功でエピソードBONUSを経由してAT「戦車道」へ突入。
- AT間ゲーム数天井は最大1111G+α。到達時は成功確定CZに当選。
- 500G+αの短縮天井も存在し、設定変更時は選択率が大幅に優遇される。
- CZ間は100G消化ごとの内部状態昇格抽選により最大300G付近で超高確へ到達する実質CZ間天井が存在。
- CZスルー天井は通常最大7スルー後の8回目CZが成功確定。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_ANALYSIS_SINGLE_POWER_CYCLE_AND_UNVERIFIED_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- AT間天井進行RESET後、500G+α / 1111G+αの天井振り分けを再抽選。
- 内部状態RESET。
- ボコポイントを再抽選。
- CZスルー天井を再抽選。
- 初回CZ種別振り分けが設定変更専用に優遇。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- AT間天井進行CARRY_OVER。
- 内部状態CARRY_OVER。
- ボコポイントCARRY_OVER。
- 画面開始ステージは設定変更時・据え置き時とも「冬の通学路」で同じ。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみでは有利区間CARRY_OVER。
- 天井進行CARRY_OVER。
- 内部モード/状態CARRY_OVERとする機種固有比較資料を確認。
- ボコポイント・CZスルー天井について、純電断単独時まで項目別に直接明記した高信頼資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。通常の据え置き挙動から推測転記はしない。
confidence: ANALYSIS_SINGLE_FOR_EXPLICIT_POWER_CYCLE_TABLE / UNVERIFIED_FOR_BOKO_AND_CZ_SKIP_DETAIL

### gameCounterReset
- 通常AT間最大天井: 1111G+α。
- 設定変更時はAT間ゲーム数をRESETし、短縮天井500G+αまたは通常天井1111G+αを再抽選。
- 据え置き / 純電源OFF→ONではAT間天井進行CARRY_OVER。
- CZ当選のみではAT間ゲーム数天井はリセットされない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更時の設定1: 500G+α 65.2% / 1111G+α 34.8%。
- 設定2〜6にも天井振り分け設定差があるとされるが、具体値は主要解析でも調査中のため `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更後500G以内のAT当選率は設定1でも約90%。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 本機は一般的なA/B等の朝一専用モード表より、天井振り分け・CZスルー天井・初回CZ種別でリセット優遇が公開されている。
- 設定変更時はCZスルー天井を再抽選。
- 設定変更時のCZスルー天井振り分け: 0スルーは全設定0.4%。1スルーは設定1〜6で9.8 / 10.5 / 12.5 / 18.4 / 21.5 / 24.6%。残りは7スルー（89.8 / 89.1 / 87.1 / 81.3 / 78.1 / 75.0%）。
- 設定変更後初回CZ種別: ガルパンチャンス 69.9 / 65.6 / 61.3 / 55.9 / 52.7 / 49.6%、ガルパンレース 29.7 / 34.0 / 38.3 / 43.8 / 46.9 / 50.0%、あんこう無双チャレンジ 全設定0.4%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時は内部状態RESET。
- 据え置き時は内部状態CARRY_OVER。
- 設定変更後初回のベル7回成立時は連続演出発展率70.3%（通常30.1%）へ優遇。
- 設定変更専用の通常/高確A/高確B/超高確の初期振り分け率そのものは再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER（機種固有比較資料）。
- 通常営業中はエンディング終了後にも有利区間RESET。設定変更以外の有利区間RESET時は大あんこう祭り+上位AT「無限軌道」へ移行するが、設定変更時の朝一恩恵とは別契約。
confidence: ANALYSIS_HIGH / ANALYSIS_SINGLE_FOR_POWER_CYCLE_EXPLICITNESS

### resetBenefits
- 設定1では65.2%でAT間天井が500G+αへ短縮。
- 設定変更後500G以内のAT当選率は設定1でも約90%、設定変更台をAT当選まで打った場合の機械割は100%超と解析公開。
- 初回ベル7回成立時の連続演出発展率70.3%へ優遇。
- 設定変更時は約40%でボコポイント75pt以上から開始。
- 初回CZは上位CZ「ガルパンレース」選択率が優遇され、設定1でも29.7%、設定6で50.0%。
- CZスルー天井も高設定ほど1スルー選択が優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日AT間ハマリ・内部状態・ボコポイント等の持越し価値は設定変更で失われる。
- 設定変更専用の固定的な不利益率・マイナス期待値数値は公開確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_ITEMS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 設定変更 / 据え置きとも液晶開始ステージは「冬の通学路」で同一のためステージだけでは判別不可。
- 設定変更後は短縮500G天井選択率が高く、500G付近のAT当選はリセット期待度を上げる材料。ただし500G天井はAT終了後にも一部選択されるため単独確定判別ではない。
- 設定変更後のベルカウンター背景が火山スタートとする解析資料あり。ただしAT終了後も火山背景スタートが存在するため、履歴を伴わない単独確定判別には使用しない。
- 有利区間ランプ単独による設定変更判別の有効な機種固有契約は確認できず。
- 本機固有リールガックン条件・発生率は「Lガールズ&パンツァー最終章 / Lガールズ＆パンツァー最終章H1 / 平和 / ガルパン最終章」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール」で再探索したが、信頼できる固有条件を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STAGE_AND_500G / ANALYSIS_SINGLE_FOR_FIRE_BACKGROUND / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定1 天井振り分け: 500G+α 65.2% / 1111G+α 34.8%。
- 設定変更後500G以内AT当選率: 設定1 約90%。
- 設定変更後初回ベル7回時 連続演出発展率: 70.3%（通常30.1%）。
- 設定変更時 ボコポイント75pt以上スタート: 約40%。
- 初回CZ ガルパンレース: 設定1〜6 29.7 / 34.0 / 38.3 / 43.8 / 46.9 / 50.0%。
- 初回CZ あんこう無双チャレンジ: 全設定0.4%。
- CZスルー天井1スルー選択率: 設定1〜6 9.8 / 10.5 / 12.5 / 18.4 / 21.5 / 24.6%。
- 設定2〜6の500G/1111G天井振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 設定1の500G+α短縮天井選択率: 65.2%。
- 設定1の朝一500G以内AT当選率: 約90%。
- 初回ベル7回成立時の連続演出発展率: 70.3%。
- ボコポイント75pt以上スタート: 約40%。
- 初回ガルパンレース選択率: 設定1 29.7% → 設定6 50.0%。

## conflicts
- AT初当たり設定2のみ数値競合あり。平和発表を扱う遊技日本/P-WORLD、なな徹、一撃、必勝本システム解説は `1/401.1`。一方、必勝本の「基本スペック」単独ページだけ `1/404.1`。多数一致かつ業界発表値の `1/401.1` をcanonicalに採用し、`1/404.1` をCONFLICTとして保持。
- ベルカウンター火山背景は設定変更後開始とする解析と、AT終了後も火山開始とする解析が存在。両者は排他的ではないため数値CONFLICTとはしないが、リセット確定判別としては扱わない。

## sources
取得日: 2026-09-13
1. 遊技日本 / P-WORLD — 平和発表、型式、設定別CZ/AT、AT構造、100枚最低保証、約4.7枚/G、平均ループ約76%、上位約88%、導入日
   - https://news.p-world.co.jp/articles/26215/nippon
   - reliability: INDUSTRY
2. 遊技日本 / P-WORLD — 平和製品情報公開、型式、2024年2月導入予定
   - https://news.p-world.co.jp/articles/26117/nippon
   - reliability: INDUSTRY
3. HAZUSE — 型式 `Lガールズ＆パンツァー最終章H1`、検定番号3S1400、導入日、純増
   - https://hazuse.com/machine/pachislot/3S1400/
   - reliability: ANALYSIS_HIGH / MACHINE_DATABASE
4. 一撃 — 設定別CZ/AT/出玉率、30.3G/50枚、AT間1111G+α、設定変更時500G短縮65.2%、初回ベル7回70.3%
   - https://1geki.jp/slot/l_girlpan_finale/
   - https://1geki.jp/slot/l_girlpan_finale/3/
   - reliability: ANALYSIS_HIGH
5. なな徹 — 朝一設定変更/据え置き比較、天井振り分け、初回CZ設定別振り分け、CZスルー天井、ボコポイント、500G以内AT約90%、有利区間
   - https://nana-press.com/kaiseki/machine/678/19214/
   - https://nana-press.com/kaiseki/machine/678/19212/
   - reliability: ANALYSIS_HIGH
6. パチ&スロ必勝本 — 機械割、AT構造、報酬枚数。基本スペックページの設定2 AT 1/404.1をCONFLICTとして保持
   - https://p.hisshobon.jp/vpage/2587/2
   - https://p.hisshobon.jp/vpage/2587/4
   - reliability: ANALYSIS_HIGH
7. パチ&スロ必勝本 — 設定変更後初回CZ振り分け
   - https://hisshobon.com/machineinfo/82527/
   - reliability: ANALYSIS_HIGH
8. スロぱちクエスト — 設定変更/電源OFF ON比較（有利区間・天井・内部モード）、火山背景、ボコポイント約40%
   - https://www.slopachi-quest.com/article/girls-und-panzer-saishusho-tenjou/
   - reliability: ANALYSIS_SINGLE
9. パチビー — 2024-02-05導入、純増約4.7枚/G、EP BONUS 100枚、CZ設定1 1/133.9
   - https://www.pachibee.jp/machines/index/224010001
   - reliability: ANALYSIS_HIGH

## missingFields
- 設定2〜6の500G/1111G天井振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態初期振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON単独時のボコポイント/CZスルー天井項目別直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
