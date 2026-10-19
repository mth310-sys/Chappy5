# スマスロキン肉マン～7人の悪魔超人編～

recordNo: 1582
machineName: スマスロキン肉マン～7人の悪魔超人編～
manufacturer: セブンリーグ製造 / 山佐ネクスト販売
formalModel: Lパチスロキンニクマン4SLDC
inspectionCode: 3S0295
releaseDate: 2023-08-07
generation: 6.5号機 / スマスロ
systemType: AT / 規定ポイント・セット継続型AT
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定L: 非公開
- 設定1: 97.9%
- 設定2: 99.1%
- 設定4: 106.0%
- 設定5: 110.6%
- 設定6: 114.9%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT初当たり
- 設定L: 非公開
- 設定1: 1/404.1
- 設定2: 1/400.6
- 設定4: 1/362.1
- 設定5: 1/350.7
- 設定6: 1/336.5

### 正義超人チャレンジ
- 設定L: 非公開
- 設定1: 1/99.8
- 設定2: 1/98.6
- 設定4: 1/96.3
- 設定5: 1/94.2
- 設定6: 1/91.7
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約30.9G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「7人の悪魔超人」: 約6.1枚/G
- 上位AT「魔界ループ」内の各AT区間も約6.1枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「7人の悪魔超人」: 1セット26G（前半11G＋後半15G）、セット数管理型。
- 7戦突破で上位「魔界ループ」へ。
- 「悪魔大行進」: 1セット100枚+αの獲得枚数加算型ST、突入時の期待枚数約1000枚。
- 魔界ループは「悪魔将軍バトル」「悪魔大行進」「魔界の荒野」で構成し、ループ率約65～99%。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は1Gごとに1万パワー以上を獲得し、規定「超人パワー」到達でATへ。
- モード別天井（設定1の平均実G目安）: 通常A 1000万パワー（約583G） / 通常B 900万パワー（約529G） / チャンス 300万パワー（約176G）。
- 最大天井は1000万パワー到達でAT。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / 天井 / 内部モード / 超人パワーをリセット**。
- 内部状態は再抽選され、**約25%で高確移行**。
- モード移行抽選は **約25%でチャンスモード**。
- 通常A/Bが選ばれた場合も規定超人パワーの平均値が通常条件より浅くなる。
- SPモード発動に関わる初期ポイントも優遇。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / 天井 / 内部状態 / モード / 超人パワーを引き継ぐ**。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **有利区間 / 天井 / 内部モード / 内部状態を引き継ぐ**ことを機種固有比較表で直接確認。
- 超人パワーについては据え置き表では引継ぎが明記される一方、純電断比較表で独立項目化されていないため、電断のみの直接契約としては推測転記せず `PARTIAL_DIRECT_DISCLOSURE`。
信頼度: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井・規定超人パワー進行をリセット。
- 据え置き: 天井・超人パワーを引き継ぐ。
- 純電源OFF→ON: 天井を引き継ぐ。

### ceilingAfterReset
- 通常最大: **1000万パワー**（通常A）。
- 設定変更で固定の単一短縮天井になる仕様ではない。
- ただし設定変更時はチャンスモード約25%（300万パワー天井）かつ通常A/Bでも平均規定パワーが優遇される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードを再抽選。
- **チャンスモード移行率：約25%**。
- 通常A/B選択時も規定ポイントが朝一専用に優遇。
- 据え置き: モード引き継ぎ。
- 純電源OFF→ON: 内部モード引き継ぎ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態を再抽選し **約25%で高確**。
- 据え置き: 内部状態引き継ぎ。
- 純電源OFF→ON: 内部状態引き継ぎ。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 純電源OFF→ON: 有利区間引き継ぎ（パチマガスロマガ機種固有比較表で直接確認）。
- 設定変更以外では悪魔将軍バトル敗北後の一部、悪魔大行進終了後の一部、エンディング後にも有利区間リセット契機があり、その際は「魔界の荒野」へ。
信頼度: ANALYSIS_HIGH

### resetBenefits
- 約25%でチャンスモードへ移行し、300万パワー天井。
- 約25%で高確スタート。
- 通常Aの平均規定パワーは通常743万→設定変更後683万、通常Bは611万→598万へ優遇。
- チャンスモードは平均121万パワー、約81%が150万パワー前後までにAT当選とする解析あり。
- SPモードの初期ポイントが優遇される。

### resetPenalties
- 前日の有利区間・天井・内部状態・モード・超人パワー進行を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一メニュー画面キャラはAT初当たりまで「キン肉マン」で固定されるため、見た目から変更の有無は判断困難。
- チャンスモード由来の浅い当たりはリセット推測材料だが、確定判別ではない。
- 設定Lはデモ画面中に下パネル消灯。ただしこれは現在設定Lであることの判別で、設定変更されたかどうかの判別とは別。
- 本機固有のリールガックン条件・発生率は `スマスロキン肉マン / Lパチスロキンニクマン4SLDC / セブンリーグ / 山佐ネクスト` と `ガックン / 設定変更 / リセット / 朝一 / 据え置き` を組み替えて再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時チャンスモード移行率: **約25%**。
- 設定変更時高確移行率: **約25%**。
- モード別平均規定超人パワー（設定変更後 / その他）:
  - 通常A: **683万 / 743万**
  - 通常B: **598万 / 611万**
  - チャンス: **121万**
- チャンスモード天井: **300万パワー**。
- チャンスモード滞在時AT期待度: 1～100万 25.0% / 101～200万 75.0% / 201～300万 100%。

### publicMorningNumbers
- 設定変更時チャンスモード: **約25%**。
- 設定変更時高確: **約25%**。
- 通常A平均規定パワー: 743万→**683万**。
- 通常B平均規定パワー: 611万→**598万**。
- チャンス平均規定パワー: **121万**。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スマスロキン肉マン～7人の悪魔超人編～ / キン肉マン7人の悪魔超人 / Lパチスロキンニクマン4SLDC / セブンリーグ / 山佐ネクスト` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 超人パワー / モード / 高確 / ガックン / 有利区間` を組み替えて探索。
- 遊技日本、P-WORLD、なな徹、一撃、パチマガスロマガ、ちょんぼりすた等を横断。
- ガックンのみ十分な再探索後も本機固有契約を固定できず推測補完していない。

## sources
取得日: 2026-09-13

1. 遊技日本 / P-WORLD — 山佐ネクスト発表
   - https://news.p-world.co.jp/articles/24100/nippon
   - 製造元セブンリーグ、純増約6.1枚/G、基本ゲーム性。
   - confidence: INDUSTRY

2. 遊技日本 / P-WORLD — セブンリーグ販売発表
   - https://news.p-world.co.jp/articles/24159/nippon
   - 型式Lパチスロキンニクマン4SLDC、設定別AT初当たり・出玉率、上位AT概要。
   - confidence: INDUSTRY

3. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/9849
   - 製造メーカー、型式、検定番号3S0295、導入2023-08-07、純増・機械割レンジ。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ — 基本スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/04/at03-1.php
   - 設定別AT/正義超人チャレンジ、出玉率、天井、設定構成。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ — 朝イチ/設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/04/tj08-2.php
   - 設定変更/電源OFF→ONの有利区間・天井・モード・状態、約25%高確/チャンス、平均規定パワー、表示判別。
   - confidence: ANALYSIS_HIGH

6. なな徹 — 朝一/設定変更
   - https://nana-press.com/kaiseki/machine/583/16190/
   - 設定変更/据え置きの有利区間・天井・状態・モード・超人パワー、朝一数値、有利区間リセット契機。
   - confidence: ANALYSIS_HIGH

7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/l_niku7devil/3/
   - モード別天井、設定変更時平均規定パワー、チャンスモード約25%、SPモード優遇。
   - confidence: ANALYSIS_HIGH

8. なな徹 — 機種総合
   - https://nana-press.com/kaiseki/machine/583/
   - 約30.9G/50枚、AT1セット26G、魔界ループ/悪魔大行進、天井・平均G数。
   - confidence: ANALYSIS_HIGH

## missingFields
- 本機固有リールガックンの直接契約: UNVERIFIED_AFTER_RESEARCH
- 純電断時の超人パワーを独立項目で明記した資料: PARTIAL_DIRECT_DISCLOSURE（据え置きでは引継ぎ確認）

## conflicts
- メーカー表記は一般媒体で「山佐ネクスト」とされる例があるが、販売発表・型式資料は製造元セブンリーグ、山佐ネクスト販売/ブランドの関係を示す。本DBでは `セブンリーグ製造 / 山佐ネクスト販売` をcanonical。

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
